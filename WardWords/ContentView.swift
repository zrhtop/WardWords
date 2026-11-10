import SwiftUI
import WebKit

struct ContentView: View {
    var body: some View {
        WebView()
            .ignoresSafeArea()
    }
}

struct WebView: UIViewRepresentable {
    func makeCoordinator() -> Coordinator {
        Coordinator()
    }

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        // Persistent store so localStorage progress survives relaunches.
        config.websiteDataStore = .default()
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []

        // Bridge blob: downloads (JSON backup export) to native code:
        // fetch the blob, base64 it, and hand it to the message handler,
        // which writes the file and presents a share sheet.
        let bridge = WKUserScript(
            source: """
            document.addEventListener('click', function(e) {
              var a = e.target && e.target.closest ? e.target.closest('a[download]') : null;
              if (!a || !a.href || a.href.indexOf('blob:') !== 0) return;
              e.preventDefault();
              fetch(a.href).then(function(r){ return r.blob(); }).then(function(b){
                var fr = new FileReader();
                fr.onload = function(){
                  var parts = String(fr.result).split(',', 2);
                  window.webkit.messageHandlers.wardExport.postMessage({name: a.download || 'wardwords-export.json', data: parts.length > 1 ? parts[1] : ''});
                };
                fr.readAsDataURL(b);
              }).catch(function(){});
            }, true);
            """,
            injectionTime: .atDocumentStart,
            forMainFrameOnly: false
        )
        config.userContentController.addUserScript(bridge)

        let webView = WKWebView(frame: .zero, configuration: config)
        config.userContentController.add(context.coordinator, name: "wardExport")
        webView.navigationDelegate = context.coordinator
        context.coordinator.webView = webView

        let bg = UIColor(red: 0.965, green: 0.969, blue: 0.984, alpha: 1.0) // #f6f7fb
        webView.backgroundColor = bg
        webView.scrollView.backgroundColor = bg
        webView.isOpaque = false

        if let webDir = Bundle.main.url(forResource: "Web", withExtension: nil) {
            let index = webDir.appendingPathComponent("index.html")
            webView.loadFileURL(index, allowingReadAccessTo: webDir)
        }
        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {}
}

final class Coordinator: NSObject, WKNavigationDelegate, WKScriptMessageHandler {
    weak var webView: WKWebView?

    // MARK: - Export bridge

    func userContentController(_ userContentController: WKUserContentController,
                               didReceive message: WKScriptMessage) {
        guard message.name == "wardExport",
              let body = message.body as? [String: Any],
              let name = body["name"] as? String,
              let b64 = body["data"] as? String,
              let data = Data(base64Encoded: b64) else { return }
        let safeName = name.isEmpty ? "wardwords-export.json" : name
        let url = FileManager.default.temporaryDirectory.appendingPathComponent(safeName)
        do {
            try data.write(to: url, options: .atomic)
            presentShareSheet(for: url)
        } catch {
            // Export failure is non-fatal; the web app keeps its local copy.
        }
    }

    private func presentShareSheet(for url: URL) {
        DispatchQueue.main.async {
            guard let scene = UIApplication.shared.connectedScenes
                    .compactMap({ $0 as? UIWindowScene }).first,
                  var top = scene.windows.first(where: { $0.isKeyWindow })?.rootViewController
            else { return }
            while let presented = top.presentedViewController { top = presented }
            let sheet = UIActivityViewController(activityItems: [url], applicationActivities: nil)
            if let pop = sheet.popoverPresentationController {
                pop.sourceView = top.view
                pop.sourceRect = CGRect(x: top.view.bounds.midX, y: top.view.bounds.midY, width: 0, height: 0)
                pop.permittedArrowDirections = []
            }
            top.present(sheet, animated: true)
        }
    }

    // MARK: - Navigation

    func webView(_ webView: WKWebView,
                 decidePolicyFor navigationAction: WKNavigationAction,
                 decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        guard let url = navigationAction.request.url else {
            decisionHandler(.allow)
            return
        }
        if url.isFileURL {
            decisionHandler(.allow)
            return
        }
        if url.scheme == "http" || url.scheme == "https" {
            // The bundled app has no external links; open any in Safari.
            UIApplication.shared.open(url)
            decisionHandler(.cancel)
            return
        }
        decisionHandler(.allow)
    }
}
