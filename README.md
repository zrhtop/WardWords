# WardWords (iOS)

iOS shell for the WardWords clinical social work vocabulary trainer.
The learning content is a self-contained web app (HTML/CSS/JS, no external
resources) bundled under `WardWords/Web/` and shown in a WKWebView.

- Bundle ID: `jp.zrh.wardwords`
- Version: 1.0 (build 1), minimum iOS 16.0
- Study progress lives in the web view's local storage on device.
- JSON backup export is bridged to the iOS share sheet; import uses the
  system file picker.

Build: GitHub Actions (`.github/workflows/build.yml`) generates the Xcode
project with XcodeGen, builds an unsigned IPA, and attaches it to a release
when a `v*` tag is pushed.
