'use strict';

const STORE_KEY = 'wardwords_progress_v1';
const ICON_PATHS = {
  home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  layers:'<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  headphones:'<path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M3 13h3v7H4a1 1 0 0 1-1-1v-6ZM21 13h-3v7h2a1 1 0 0 0 1-1v-6Z"/>',
  book:'<path d="M12 7a10 10 0 0 0-9-2v15a10 10 0 0 1 9 2 10 10 0 0 1 9-2V5a10 10 0 0 0-9 2Z"/><path d="M12 7v15"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .32 1.78l.06.06-1.8 1.8-.08-.05a1.6 1.6 0 0 0-1.75-.3 1.6 1.6 0 0 0-.95 1.45V20h-2.5v-.13a1.6 1.6 0 0 0-1-1.45 1.6 1.6 0 0 0-1.72.3l-.08.05-1.8-1.8.06-.06a1.6 1.6 0 0 0 .32-1.78 1.6 1.6 0 0 0-1.47-1H5v-2.5h.1a1.6 1.6 0 0 0 1.47-1 1.6 1.6 0 0 0-.32-1.77l-.06-.07L8 7l.07.07a1.6 1.6 0 0 0 1.77.32 1.6 1.6 0 0 0 1-1.47V5h2.5v.1a1.6 1.6 0 0 0 1 1.47 1.6 1.6 0 0 0 1.77-.32l.07-.06 1.8 1.8-.06.07a1.6 1.6 0 0 0-.32 1.77 1.6 1.6 0 0 0 1.47 1H20v2.5h-.1a1.6 1.6 0 0 0-1.5 1Z"/>',
  arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
  arrowleft:'<path d="M19 12H5m6-6-6 6 6 6"/>',
  sound:'<path d="M11 5 6 9H3v6h3l5 4V5ZM15 9a5 5 0 0 1 0 6M18 6a9 9 0 0 1 0 12"/>',
  play:'<path d="m8 5 11 7-11 7V5Z"/>',
  star:'<path d="m12 2 3.1 6.3 7 1-5 4.9 1.2 6.9-6.3-3.3-6.3 3.3 1.2-6.9-5-4.9 7-1L12 2Z"/>',
  pulse:'<path d="M2 12h4l2.5-6 4 12 3-7H22"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  hospital:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h6m-3-3v6M8 21v-5h8v5"/>',
  house:'<path d="m3 11 9-8 9 8v9H3v-9Z"/><path d="M9 20v-7h6v7"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6m1 4a5 5 0 0 1 3 5"/>',
  shield:'<path d="m12 2 8 4v6c0 5-4 8-8 10-4-2-8-5-8-10V6l8-4Z"/><path d="m9 12 2 2 4-4"/>',
  hash:'<path d="M5 9h14M4 15h14M11 3l-2 18M17 3l-2 18"/>',
  bolt:'<path d="m13 2-9 12h7l-1 8 10-12h-7l1-8Z"/>',
  chart:'<path d="M4 19V5M4 19h17M9 15v-4M14 15V7M19 15V9"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',
  x:'<path d="M5 5l14 14M19 5 5 19"/>',
  refresh:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.7 9A7 7 0 0 1 18 6l2 1M4 17l2 1a7 7 0 0 0 12.3-3"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M4 18v3h16v-3"/>',
  upload:'<path d="M12 17V5m-5 5 5-5 5 5M4 19v2h16v-2"/>',
  plus:'<path d="M12 4v16M4 12h16"/>',
  trophy:'<path d="M7 4h10v6a5 5 0 0 1-10 0V4ZM7 6H4v3a4 4 0 0 0 4 4m9-7h3v3a4 4 0 0 1-4 4M12 15v5m-5 1h10"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v5m0-8h.01"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  menu:'<path d="M3 7h18M3 12h18M3 17h18"/>'
};
const icon = (name,size=19)=>`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name]||ICON_PATHS.book}</svg>`;
const escapeHTML = value => String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const minute = 60*1000, day = 24*60*minute;
const navEntries = [
  {id:'home',label:'学习概览',icon:'home'},
  {id:'study',label:'词卡学习',icon:'layers'},
  {id:'review',label:'到期复习',icon:'clock'},
  {id:'quiz',label:'四选一测验',icon:'check'},
  {id:'listening',label:'临床听力',icon:'headphones'},
  {id:'library',label:'我的词库',icon:'book'},
  {id:'settings',label:'设置与备份',icon:'settings'}
];

function loadState(){
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
    if(saved && typeof saved==='object') return {
      progress: saved.progress && typeof saved.progress==='object'?saved.progress:{},
      logs: Array.isArray(saved.logs)?saved.logs:[],
      quizRecords: Array.isArray(saved.quizRecords)?saved.quizRecords:[],
      favourites: Array.isArray(saved.favourites)?saved.favourites:[],
      customWords: Array.isArray(saved.customWords)?saved.customWords:[],
      settings: {goal:15,speed:.88,...(saved.settings||{})}
    };
  } catch(e){console.warn('Unable to load saved progress:',e)}
  return {progress:{},logs:[],quizRecords:[],favourites:[],customWords:[],settings:{goal:15,speed:.88}};
}
let state=loadState();
let app={route:'home',deck:'all',session:null,quiz:null,listen:null,lib:{query:'',deck:'all',filter:'all',limit:24},studyLength:10};
function allWords(){return [...WORDS,...state.customWords.filter(x=>x && typeof x==='object' && x.id && x.term && x.zh && x.example && x.translation)];}
function getWord(id){return allWords().find(w=>w.id===id)}
function getCat(id){return CATEGORIES.find(c=>c.id===id)||CATEGORIES[0]}
function wordsInDeck(deck){const words=allWords();return deck==='all'?words:words.filter(w=>w.category===deck)}
function save(){try{localStorage.setItem(STORE_KEY,JSON.stringify(state))}catch(e){toast('浏览器无法保存进度，请尝试使用正常浏览模式或导出备份。')}}
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function dateKey(timestamp=Date.now()){const d=new Date(timestamp);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function getSummary(){
  const progress=Object.entries(state.progress).filter(([id,p])=>getWord(id)&&p&&p.seen>0);
  const learned=progress.length;
  const mastered=progress.filter(([,p])=>p.mastered).length;
  const due=progress.filter(([,p])=>p.due<=Date.now()).length;
  const today=state.logs.filter(x=>dateKey(x.ts)===dateKey()).length;
  const quizToday=state.quizRecords.filter(x=>dateKey(x.ts)===dateKey()).length;
  let streak=0, cursor=new Date();
  if(!state.logs.some(x=>dateKey(x.ts)===dateKey())) cursor.setDate(cursor.getDate()-1);
  const days=new Set(state.logs.map(x=>dateKey(x.ts)));
  for(let i=0;i<500;i++){if(!days.has(dateKey(cursor.getTime())))break;streak++;cursor.setDate(cursor.getDate()-1)}
  return {total:allWords().length,learned,mastered,due,today,quizToday,streak};
}
function getDeckStats(deck){const words=wordsInDeck(deck);const learned=words.filter(w=>state.progress[w.id]?.seen>0).length;return {count:words.length,learned,pct:words.length?Math.round(100*learned/words.length):0};}
const THEME_KEY='wardwords-theme';
function themePref(){try{return localStorage.getItem(THEME_KEY)||'auto'}catch(e){return 'auto'}}
function syncTheme(){const pref=themePref();const dark=pref==='dark'||(pref!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=dark?'dark':'light';const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute('content',dark?'#12142a':'#f6f7fb');const tt=document.querySelector('#theme-toggle');if(tt)tt.innerHTML=icon(dark?'sun':'moon',18)}
function setThemePref(pref){try{localStorage.setItem(THEME_KEY,pref)}catch(e){}syncTheme()}
function toggleTheme(){const dark=document.documentElement.dataset.theme==='dark';setThemePref(dark?'light':'dark');toast(dark?'已切换到日间模式':'已切换到夜间模式')}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change',()=>{if(themePref()==='auto')syncTheme()});
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('show');clearTimeout(window._toastTimer);window._toastTimer=setTimeout(()=>el.classList.remove('show'),3400)}
function header(title,desc,eyebrow='WARDWORDS / LEARN',action=''){return `<div class="page-head"><div><div class="eyebrow">${eyebrow}</div><h1 class="page-title">${title}</h1>${desc?`<p class="page-lede">${desc}</p>`:''}</div>${action}</div>`}
function navigation(){
  const s=getSummary();
  document.querySelector('#desktop-nav').innerHTML=navEntries.map(n=>`<button class="nav-item ${app.route===n.id?'active':''}" data-route="${n.id}">${icon(n.icon)}<span>${n.label}</span>${n.id==='review'&&s.due?`<span class="nav-counter">${s.due}</span>`:''}</button>`).join('');
  const mobile=['home','study','review','listening','library'];
  document.querySelector('#mobile-nav').innerHTML=mobile.map(id=>{const n=navEntries.find(x=>x.id===id);return `<button class="${app.route===id?'active':''}" data-route="${id}">${icon(n.icon)}<span>${id==='review'?'复习':id==='listening'?'听力':id==='library'?'词库':id==='study'?'词卡':'首页'}</span></button>`}).join('');
  document.querySelector('#breadcrumb').textContent=navEntries.find(n=>n.id===app.route)?.label||'学习概览';
  document.querySelector('#top-today').textContent=`今日已练 ${s.today} / ${state.settings.goal}`;
  document.querySelector('#open-settings').innerHTML=icon('settings',18);
  syncTheme();
}
function goto(route){app.route=navEntries.some(n=>n.id===route)?route:'home';app.session=null;app.quiz=null;window.location.hash=app.route;render();window.scrollTo({top:0,behavior:'instant'})}
function render(){navigation();const root=document.querySelector('#view');switch(app.route){case 'home':root.innerHTML=renderHome();break;case 'study':root.innerHTML=app.session?renderStudyCard():renderStudyStart();break;case 'review':root.innerHTML=app.session?renderStudyCard():renderReview();break;case 'quiz':root.innerHTML=app.quiz?renderQuizQuestion():renderQuizStart();break;case 'listening':root.innerHTML=renderListening();break;case 'library':root.innerHTML=renderLibrary();break;case 'settings':root.innerHTML=renderSettings();break;default:root.innerHTML=renderHome()}}
function categoryMark(cat){return `<span class="category-tag">${escapeHTML(getCat(cat).label)}</span>`}
function dashboardDeck(cat){const s=getDeckStats(cat.id);return `<button class="deck" data-action="deck-study" data-deck="${cat.id}"><div class="deck-top"><span class="deck-icon" style="background:${cat.color}15;color:${cat.color}">${icon(cat.icon,19)}</span><span class="deck-percent">${s.learned} / ${s.count}</span></div><div><h4>${cat.label}</h4><p>${cat.subtitle}</p><div class="track"><span style="width:${s.pct}%;background:${cat.color}"></span></div></div></button>`}
function renderHome(){
  const s=getSummary();const now=new Date();const weekdays=['日','一','二','三','四','五','六'];
  const week=Array.from({length:7},(_,i)=>{const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()-(6-i));const k=dateKey(d.getTime());return {day:'日一二三四五六'[d.getDay()],count:state.logs.filter(v=>dateKey(v.ts)===k).length,today:i===6}});
  const max=Math.max(...week.map(x=>x.count),state.settings.goal,1);
  return `<div class="page-head"><div><div class="eyebrow">YOUR CLINICAL ENGLISH WORKSPACE</div><h1 class="page-title">今天也向临床现场靠近一点。</h1><p class="page-lede">${now.getMonth()+1}月${now.getDate()}日 · 星期${weekdays[now.getDay()]} · 把单词放回真实的医院场景里。</p></div></div>
    <section class="hero"><div><span class="hero-kicker">YOUR RAH PLACEMENT PREP</span><h2>听得懂交班，<br><em>才更有底气开口。</em></h2><p>从 Psychosocial Assessment 到 Discharge Planning。每天一小组，按记忆情况自动安排复习。</p><div class="hero-actions"><button class="btn btn-white" data-action="quick-study">${icon('play',15)}开始今天的学习 ${icon('arrow',15)}</button><button class="btn btn-outline" data-route="listening">${icon('headphones',15)}试试听力</button></div></div><div class="hero-art"><div class="hero-card"><small>WORD OF THE DAY</small><strong>Discharge</strong><span>出院 · 医院高频词</span></div><div class="hero-card"><small>IN CONTEXT</small><strong>Patient advocacy</strong><span>患者权益倡导</span></div><div class="hero-spark">✳</div></div></section>
    <div class="stats-grid">
      ${metric('layers','purple',s.learned,'已学词汇')}
      ${metric('clock','gold',s.due,'现在待复习')}
      ${metric('trophy','green',s.mastered,'已熟练掌握')}
      ${metric('bolt','blue',s.streak,'连续学习天数')}
    </div>
    <div class="section-heading"><div><h3>从场景开始，而不是字母表</h3><p>选择与你实习最相关的词组</p></div><button data-route="library" class="link-button">查看全部 ${icon('arrow',13)}</button></div>
    <div class="deck-grid">${CATEGORIES.slice(1).map(dashboardDeck).join('')}</div>
    <div class="section-heading"><div><h3>继续保持节奏</h3><p>一边复习，一边练习真实表达</p></div></div>
    <div class="secondary-grid"><section class="panel"><div style="display:flex;justify-content:space-between;align-items:center"><h3>过去7天练习量</h3><span style="font-size:11px;color:#a4adbf">每日目标 ${state.settings.goal} 次</span></div><div class="daily-chart">${week.map(d=>`<div class="chart-col" title="${d.count}次"><div class="chart-bar ${d.today?'today':''}" style="height:${Math.max(5,d.count/max*76)}px"></div><span class="chart-day">${d.today?'今':d.day}</span></div>`).join('')}</div></section>
    <section class="panel"><h3>下一步练什么？</h3><p class="helper">${s.due?`有 ${s.due} 个词已到复习时间，先巩固它们。`:'目前没有到期复习词。可以学习新词或尝试听辨交班。'}</p><div class="study-choice"><button class="btn btn-primary btn-sm" data-route="${s.due?'review':'study'}">${icon(s.due?'refresh':'layers',15)}${s.due?'开始到期复习':'学习新词'}</button><button class="btn btn-light btn-sm" data-route="quiz">${icon('check',15)}测验</button></div><p class="about-note">学习记录只存放在当前浏览器。建议偶尔到设置中导出备份。</p></section></div>`
}
function metric(ic,color,value,label){return `<div class="metric"><span class="metric-icon ${color}">${icon(ic,18)}</span><div class="metric-num">${value}</div><div class="metric-label">${label}</div></div>`}
function renderStudyStart(){const s=getSummary();return `${header('用语境记住每一个词','看英文句子，自己回忆含义，再翻卡确认。根据记忆程度安排下一次复习。','CONTEXT / FLASHCARDS')}
  <section class="panel" style="margin-bottom:20px"><h3>选择今天的学习范围</h3><p class="helper">已学 ${s.learned} / ${s.total} · 待复习 ${s.due} · 今日目标 ${state.settings.goal} 次</p><div class="study-choice"><div class="tabs" id="deck-tabs">${CATEGORIES.map(c=>`<button class="tab ${app.deck===c.id?'active':''}" data-action="set-deck" data-deck="${c.id}">${c.label}</button>`).join('')}</div></div><div class="setting-row"><div class="study-choice" style="margin:0"><span class="list-inline">每组词量：</span><div class="tabs">${[5,10,15,20].map(n=>`<button class="tab ${app.studyLength===n?'active':''}" data-action="length" data-count="${n}">${n} 个</button>`).join('')}</div></div><button class="btn btn-primary" data-action="start-study">开始学习 ${icon('arrow')}</button></div></section>
  <div class="section-heading"><div><h3>按场景选择</h3><p>点击任一分类直接开始</p></div></div><div class="deck-grid">${CATEGORIES.slice(1).map(dashboardDeck).join('')}</div>`}
function dueWords(deck){return wordsInDeck(deck).filter(w=>state.progress[w.id]?.seen>0 && state.progress[w.id].due<=Date.now())}
function renderReview(){const due=dueWords('all');return `${header('现在该复习的词','用间隔复习把短期记忆变成长期记忆。','SPACED REPETITION')}${due.length?`<div class="panel" style="max-width:720px"><h3>你有 ${due.length} 个到期词汇</h3><p class="helper">系统优先安排较早到期的词，每次最多练习20个。</p><div class="study-choice"><button class="btn btn-primary" data-action="start-review">${icon('refresh')}开始复习 ${Math.min(due.length,20)} 个</button><button class="btn btn-outline" data-route="study">继续学习新词</button></div><div class="mini-grid">${due.slice(0,6).map(w=>`<button class="mini-row" data-action="open-word" data-id="${w.id}"><strong>${escapeHTML(w.term)}</strong><span>${icon('arrow',13)}</span></button>`).join('')}</div></div>`:`<div class="finish-card"><div class="finish-symbol">${icon('check',31)}</div><h2>目前没有到期复习</h2><p>刚学过的词会根据记忆表现，在1分钟、10分钟或数天后重新出现。现在可以学一组新词。</p><button class="btn btn-primary" data-route="study">开始学习新词 ${icon('arrow',16)}</button></div>`}`}
function startStudy(deck=app.deck, length=app.studyLength, reviewOnly=false){
  app.deck=deck;const arr=wordsInDeck(deck);const due=shuffle(arr.filter(w=>state.progress[w.id]?.seen>0 && state.progress[w.id].due<=Date.now()));
  const fresh=shuffle(arr.filter(w=>!state.progress[w.id] || !state.progress[w.id].seen));
  const queue=(reviewOnly?due:[...due,...fresh]).slice(0,reviewOnly?20:length);
  if(!queue.length){toast(reviewOnly?'当前没有到期复习词':'这个分类已全部学过，等待下一次复习吧。');return}
  app.session={queue:queue.map(w=>w.id),index:0,flipped:false,grades:[],reviewOnly};app.route=reviewOnly?'review':'study';render();window.scrollTo({top:0,behavior:'instant'});
}
function highlight(text,term){const txt=escapeHTML(text),key=escapeHTML(term);return txt.replace(new RegExp(`(${key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`,'ig'),'<mark>$1</mark>')}
function renderStudyCard(){const sess=app.session;if(sess.index>=sess.queue.length)return renderStudyFinished();const w=getWord(sess.queue[sess.index]);if(!w)return renderStudyFinished();const progress=Math.round(100*sess.index/sess.queue.length);const fave=state.favourites.includes(w.id);return `<div class="study-progress"><div class="study-progress-row"><span>${sess.reviewOnly?'到期复习':'情境词卡'} · ${getCat(w.category).label}</span><span>${sess.index+1} / ${sess.queue.length}</span></div><div class="track"><span style="width:${progress}%"></span></div></div>
  <div class="study-card"><div class="card-meta">${categoryMark(w.category)}<div class="small-actions"><button data-action="star" data-id="${w.id}" class="${fave?'starred':''}" title="${fave?'取消收藏':'收藏'}" aria-label="收藏单词">${icon('star',18)}</button><button data-action="speak-word" data-id="${w.id}" title="播放单词" aria-label="播放单词">${icon('sound',18)}</button></div></div><div class="card-body"><span class="card-overline">WORD IN CONTEXT</span><div class="target-term">${escapeHTML(w.term)}</div><p class="example-text">${highlight(w.example,w.term)}</p><button class="btn btn-ghost btn-sm" data-action="speak-example" data-id="${w.id}">${icon('sound',16)}听例句</button><div class="hint" style="margin-top:21px">先回忆意思，再点击下方按钮查看答案</div></div>${sess.flipped?`<div class="answer-area"><div class="answer-main">${escapeHTML(w.zh)}</div><div class="answer-explain">${escapeHTML(w.translation)}</div></div>`:''}</div>
  <div class="study-footer">${sess.flipped?`<div class="rating-grid"><button class="rating-btn again" data-action="grade" data-grade="again">没记住<small>1分钟后</small></button><button class="rating-btn" data-action="grade" data-grade="hard">有点难<small>10分钟后</small></button><button class="rating-btn good" data-action="grade" data-grade="good">记住了<small>约1天后</small></button><button class="rating-btn easy" data-action="grade" data-grade="easy">很熟悉<small>约4天后</small></button></div><div class="study-hint">键盘快捷键 <span class="keyboard">1</span> <span class="keyboard">2</span> <span class="keyboard">3</span> <span class="keyboard">4</span></div>`:`<button style="width:100%" class="btn btn-primary" data-action="flip">查看中文释义 ${icon('arrow')}</button><div class="study-hint">也可以按 <span class="keyboard">Space</span> 翻卡</div>`}</div>`}
function gradeCurrent(grade){const sess=app.session;if(!sess||!sess.flipped)return;const id=sess.queue[sess.index];let p={reps:0,ease:2.5,interval:0,due:0,lapses:0,mastered:false,...(state.progress[id]||{})};
  if(grade==='again'){p.lapses++;p.reps=0;p.interval=0;p.ease=Math.max(1.3,p.ease-.18);p.due=Date.now()+minute}
  else if(grade==='hard'){p.reps=Math.max(1,p.reps);p.interval=p.interval>0?Math.max(10*minute/day,p.interval*1.2):10*minute/day;p.ease=Math.max(1.3,p.ease-.1);p.due=Date.now()+p.interval*day}
  else if(grade==='good'){p.reps++;p.interval=p.reps===1?1:p.reps===2?3:Math.max(1,p.interval*p.ease);p.due=Date.now()+p.interval*day}
  else if(grade==='easy'){p.reps++;p.ease=Math.min(3,p.ease+.15);p.interval=p.reps===1?4:Math.max(4,p.interval*p.ease*1.3);p.due=Date.now()+p.interval*day}
  p.mastered=p.reps>=3&&p.interval>=7;p.last=Date.now();p.seen=(p.seen||0)+1;state.progress[id]=p;state.logs.push({ts:Date.now(),id,grade});state.logs=state.logs.slice(-5000);save();sess.grades.push(grade);sess.index++;sess.flipped=false;render();}
function renderStudyFinished(){const sess=app.session, good=sess.grades.filter(x=>x==='good'||x==='easy').length;return `<div class="finish-card"><div class="finish-symbol">${icon('trophy',31)}</div><div class="eyebrow">SESSION COMPLETE</div><h2>这一组，完成了。</h2><p>今天练了 ${sess.grades.length} 个词，其中 ${good} 个记得比较稳。系统已经根据你的选择安排了后续复习。</p><div class="finish-actions"><button class="btn btn-primary" data-action="finish-study">返回学习 ${icon('arrow',16)}</button><button class="btn btn-outline" data-route="quiz">做个小测验</button></div></div>`}
function renderQuizStart(){return `${header('来检验是否真正记住','四选一练习，测试词义识别。测验成绩与单词记忆排程分别记录。','ACTIVE RECALL / QUIZ')}
  <section class="panel" style="max-width:740px"><h3>选择练习方向</h3><p class="helper">每轮10题，从已学词和新词中随机抽题。答错后会显示正确解释。</p><div class="study-choice"><div class="tabs"><button class="tab ${quizDirection==='en-zh'?'active':''}" data-action="quiz-direction" data-value="en-zh">英文 → 中文</button><button class="tab ${quizDirection==='zh-en'?'active':''}" data-action="quiz-direction" data-value="zh-en">中文 → 英文</button></div></div><div class="study-choice"><span class="list-inline">词汇范围：</span><select id="quiz-deck" class="select">${CATEGORIES.map(c=>`<option value="${c.id}">${c.label}</option>`).join('')}</select></div><button class="btn btn-primary" data-action="start-quiz">开始10题测验 ${icon('arrow')}</button></section>`}
let quizDirection='en-zh';
function startQuiz(){const deck=document.querySelector('#quiz-deck')?.value||'all';const source=shuffle(wordsInDeck(deck));if(source.length<4){toast('至少需要4个词才能开始测验');return}app.quiz={items:source.slice(0,10),pool:wordsInDeck(deck),index:0,answered:null,score:0,direction:quizDirection,results:[]};render()}
function quizChoices(q){const w=q.items[q.index];let pool=shuffle(q.pool.filter(x=>x.id!==w.id && (q.direction==='en-zh'?x.zh!==w.zh:x.term!==w.term)));
  if(pool.length<3)pool=shuffle(allWords().filter(x=>x.id!==w.id));const distractors=pool.slice(0,3);const choices=shuffle([w,...distractors]);return choices.map(w=>w.id)}
function renderQuizQuestion(){const q=app.quiz;if(q.index>=q.items.length)return renderQuizFinished();const w=q.items[q.index];if(!q.choices||q.choiceFor!==w.id){q.choices=quizChoices(q);q.choiceFor=w.id}const val=x=>q.direction==='en-zh'?x.zh:x.term;const prompt=q.direction==='en-zh'?w.term:w.zh;
  return `<div class="quiz-layout"><div class="study-progress"><div class="study-progress-row"><span>QUICK QUIZ · ${q.direction==='en-zh'?'英文选中文':'中文选英文'}</span><span>${q.index+1} / ${q.items.length} · 正确 ${q.score}</span></div><div class="track"><span style="width:${Math.round(100*q.index/q.items.length)}%"></span></div></div><div class="quiz-card"><div class="question-icon">${icon('target',19)}</div><div class="quiz-question">${escapeHTML(prompt)}</div><div class="quiz-choices">${q.choices.map((id,i)=>{const option=getWord(id),chosen=q.answered===id,correct=q.answered!==null && id===w.id,wrong=q.answered!==null && chosen && id!==w.id;return `<button class="answer-option ${correct?'correct':wrong?'wrong':''}" data-action="answer-quiz" data-id="${id}" ${q.answered!==null?'disabled':''}><span class="choice-key">${'ABCD'[i]}</span><span>${escapeHTML(val(option))}</span></button>`}).join('')}</div>${q.answered!==null?`<div class="explain-box"><b>${q.answered===w.id?'回答正确！':'正确答案：'+escapeHTML(val(w))}</b><div style="margin-top:8px">${escapeHTML(w.example)}<br/>${escapeHTML(w.translation)}</div></div>`:''}<div class="quiz-bottom"><span class="quiz-mini">${q.answered===null?'选择你认为最合适的答案':'这一题已记录'}</span>${q.answered!==null?`<button class="btn btn-primary btn-sm" data-action="quiz-next">${q.index===q.items.length-1?'查看结果':'下一题'} ${icon('arrow',15)}</button>`:`<button class="btn btn-ghost btn-sm" data-action="speak-word" data-id="${w.id}">${icon('sound',15)}发音</button>`}</div></div></div>`}
function renderQuizFinished(){const q=app.quiz;const pct=Math.round(100*q.score/q.items.length);return `<div class="finish-card"><div class="finish-symbol">${icon('trophy',30)}</div><div class="eyebrow">QUIZ COMPLETE</div><h2>${pct}% 正确率</h2><p>你答对了 ${q.score} / ${q.items.length} 题。错题可以在词库中查看原例句，再通过词卡安排记忆复习。</p><div class="finish-actions"><button class="btn btn-primary" data-action="quiz-again">再来10题</button><button class="btn btn-outline" data-route="study">返回词卡</button></div></div>`}
function answerQuiz(id){const q=app.quiz;if(!q||q.answered!==null)return;q.answered=id;const w=q.items[q.index];const correct=w.id===id;if(correct)q.score++;q.results.push({id:w.id,correct});state.quizRecords.push({ts:Date.now(),id:w.id,correct});state.quizRecords=state.quizRecords.slice(-3000);save();render()}
function renderListening(){const ls=app.listen||{caseIndex:0,answered:null,revealed:false};app.listen=ls;const handover=HANDOVERS[ls.caseIndex];return `${header('听懂临床交班，比只会拼单词重要','原创医院情境音频脚本，用设备英文语音朗读，练习抓住社工真正需要的信息。','LISTEN / HANDOVER')}
  <div class="quiz-layout"><div class="listen-top"><small>${escapeHTML(handover.label.toUpperCase())} · ${handover.level}</small><h3>${escapeHTML(handover.title)}</h3><button class="audio-button" data-action="speak-handover" aria-label="播放模拟交班录音">${icon('play',28)}</button><p class="audio-info">点击播放英文交班 · 可重复收听</p></div><div class="listen-case-card"><div class="eyebrow" style="margin-bottom:8px">LISTEN & ANSWER</div><h4>${escapeHTML(handover.question)}</h4><p>先听音频再答题，必要时可以查看文字原稿。</p><div class="quiz-choices" style="margin-top:19px">${handover.answers.map((answer,i)=>`<button class="answer-option ${ls.answered!==null?(i===handover.correct?'correct':i===ls.answered?'wrong':''):''}" data-action="listen-answer" data-index="${i}" ${ls.answered!==null?'disabled':''}><span class="choice-key">${'ABCD'[i]}</span>${escapeHTML(answer)}</button>`).join('')}</div>${ls.answered!==null?`<div class="explain-box"><b>${ls.answered===handover.correct?'听懂了！':'答案解析'}</b><div style="margin-top:5px">${escapeHTML(handover.explain)}</div></div>`:''}<div class="listen-action-row"><button class="btn btn-outline btn-sm" data-action="show-transcript">${icon('eye',16)}${ls.revealed?'隐藏':'查看'}英文原文</button><button class="btn btn-light btn-sm" data-action="repeat-handover">${icon('sound',16)}再听一次</button>${ls.answered!==null?`<button class="btn btn-primary btn-sm" data-action="next-handover">下一段交班 ${icon('arrow',15)}</button>`:''}</div>${ls.revealed?`<div class="transcript">${escapeHTML(handover.text)}</div>`:''}</div><div class="section-heading"><div><h3>选择交班场景</h3><p>共 ${HANDOVERS.length} 段原创情境练习</p></div></div><div class="listen-case-menu">${HANDOVERS.map((s,i)=>`<button class="case-tile ${ls.caseIndex===i?'active':''}" data-action="select-handover" data-index="${i}"><strong>${escapeHTML(s.title)}</strong><small>${escapeHTML(s.level)} · 第${i+1}段</small></button>`).join('')}</div></div>`}
function speak(text,rate=state.settings.speed){if(!('speechSynthesis' in window)){toast('当前浏览器不支持语音朗读，可使用Chrome或Safari。');return}try{window.speechSynthesis.cancel();const utter=new SpeechSynthesisUtterance(text);utter.lang='en-AU';utter.rate=Math.min(1.3,Math.max(.65,Number(rate)||.88));utter.pitch=1;const voices=window.speechSynthesis.getVoices();const voice=voices.find(v=>v.lang.toLowerCase()==='en-au')||voices.find(v=>v.lang.toLowerCase().startsWith('en-'));if(voice)utter.voice=voice;window.speechSynthesis.speak(utter)}catch(e){toast('音频朗读失败，请检查设备音量和语音功能。')}}
function renderLibrary(){return `${header(`${allWords().length} 个词，不靠死记硬背`,'每个词都来自医院社工可能遇到的真实工作场景。支持搜索、收藏与自定义。','VOCABULARY / LIBRARY',`<button class="btn btn-outline btn-sm" data-route="settings">${icon('plus',14)} 添加词汇</button>`)}
    <div class="filter-bar"><label class="search-wrap">${icon('search',16)}<input id="library-query" type="search" placeholder="搜索英文、中文或例句…" value="${escapeHTML(app.lib.query)}" autocomplete="off" /></label><select class="select" id="library-deck">${CATEGORIES.map(c=>`<option value="${c.id}" ${app.lib.deck===c.id?'selected':''}>${c.label}</option>`).join('')}<option value="custom" ${app.lib.deck==='custom'?'selected':''}>自定义词汇</option></select><select class="select" id="library-state"><option value="all" ${app.lib.filter==='all'?'selected':''}>全部状态</option><option value="new" ${app.lib.filter==='new'?'selected':''}>未学过</option><option value="learning" ${app.lib.filter==='learning'?'selected':''}>学习中</option><option value="mastered" ${app.lib.filter==='mastered'?'selected':''}>已掌握</option><option value="favourite" ${app.lib.filter==='favourite'?'selected':''}>我的收藏</option></select></div>
    <div id="library-results">${renderLibraryResults()}</div>`}
function filteredLibrary(){const q=app.lib.query.trim().toLowerCase();let result=allWords().filter(w=>(app.lib.deck==='all'||w.category===app.lib.deck||(app.lib.deck==='custom'&&w.custom))&&(!q||[w.term,w.zh,w.example,w.translation].some(y=>y.toLowerCase().includes(q))));const f=app.lib.filter;if(f==='new')result=result.filter(w=>!state.progress[w.id]||!state.progress[w.id].seen);if(f==='learning')result=result.filter(w=>state.progress[w.id]?.seen>0&&!state.progress[w.id]?.mastered);if(f==='mastered')result=result.filter(w=>state.progress[w.id]?.mastered);if(f==='favourite')result=result.filter(w=>state.favourites.includes(w.id));return result}
function renderLibraryResults(){const r=filteredLibrary(),visible=r.slice(0,app.lib.limit);return `<div class="section-heading" style="margin-top:0"><div><h3>${r.length} 个匹配词汇</h3><p>点击单词查看例句、发音或加入复习</p></div></div>${visible.length?`<div class="word-table">${visible.map(w=>{const p=state.progress[w.id];return `<button class="word-item" data-action="open-word" data-id="${w.id}"><span class="word-index">${icon('book',15)}</span><span class="word-identity"><strong>${escapeHTML(w.term)}</strong><span>${escapeHTML(w.zh)}</span></span><span class="word-state ${p?.mastered?'mastered':''}">${p?.mastered?'已掌握':p?.reps?'学习中':'未学习'}</span></button>`}).join('')}</div>${r.length>app.lib.limit?`<button class="btn btn-outline load-more" data-action="library-more">再加载 ${Math.min(24,r.length-app.lib.limit)} 个 ${icon('arrow',15)}</button>`:''}`:`<div class="empty-state">没有找到匹配词汇。试试其他关键词或筛选条件。</div>`}`}
function openWord(id){const w=getWord(id);if(!w)return;const fav=state.favourites.includes(id), p=state.progress[id];const modal=document.querySelector('#word-modal');document.querySelector('#modal-content').innerHTML=`<div class="modal-wrap"><div class="modal-top">${categoryMark(w.category)}<button class="icon-button" data-action="close-modal" aria-label="关闭">${icon('x',17)}</button></div><div class="modal-word">${escapeHTML(w.term)}</div><div class="modal-zh">${escapeHTML(w.zh)}</div><div class="modal-actions"><button class="btn btn-light btn-sm" data-action="speak-word" data-id="${id}">${icon('sound',15)}播放单词</button><button class="btn btn-outline btn-sm" data-action="star" data-id="${id}">${icon('star',15)}${fav?'取消收藏':'收藏'}</button></div><div class="modal-example">${highlight(w.example,w.term)}<small>${escapeHTML(w.translation)}</small><button class="btn btn-ghost btn-sm" style="margin-top:13px" data-action="speak-example" data-id="${id}">${icon('sound',15)}听例句</button></div><p class="about-note">${p?.reps?`学习记录：复习 ${p.seen||0} 次 · ${p.mastered?'已熟练掌握':'正在学习中'}`:'这个词还没有开始学习。'}</p><div class="modal-actions"><button class="btn btn-primary" data-action="review-this" data-id="${id}">${icon('layers',16)}练习这个词</button>${w.custom?`<button class="btn btn-ghost" data-action="delete-custom" data-id="${id}">删除自定义词</button>`:''}</div></div>`;modal.showModal()}
function renderSettings(){return `${header('按自己的节奏学习','自定义目标、语音速度，或将你的学习记录导出备份。','PREFERENCES / SETTINGS')}
    <div style="max-width:770px"><section class="setting-block"><h3>学习偏好</h3><p>更改后立即生效，只影响今后的学习。</p><div class="setting-row"><label class="field">每日练习目标<select class="form-select" id="goal-select">${[5,10,15,20,30,50].map(n=>`<option value="${n}" ${state.settings.goal===n?'selected':''}>${n} 次 / 天</option>`).join('')}</select></label><label class="field">英文朗读速度<select class="form-select" id="speed-select"><option value="0.75" ${state.settings.speed===.75?'selected':''}>慢速 · 0.75×</option><option value="0.88" ${state.settings.speed===.88?'selected':''}>适中 · 0.88×</option><option value="1" ${state.settings.speed===1?'selected':''}>正常 · 1.0×</option><option value="1.15" ${state.settings.speed===1.15?'selected':''}>稍快 · 1.15×</option></select></label></div><div class="setting-row" style="margin-top:14px"><label class="field">外观模式<select class="form-select" id="theme-select"><option value="auto" ${themePref()==='auto'?'selected':''}>跟随系统</option><option value="light" ${themePref()==='light'?'selected':''}>日间模式</option><option value="dark" ${themePref()==='dark'?'selected':''}>夜间模式</option></select></label></div><div class="setting-action"><button class="btn btn-outline btn-sm" data-action="test-voice">${icon('sound',15)}测试澳洲英语朗读</button></div></section>
    <section class="setting-block"><h3>添加你在病房听到的新词</h3><p>自行添加词汇和原创例句，加入本机词库。请勿输入患者可识别的个人信息。</p><form id="custom-word-form" class="form-grid"><label class="field">英文单词 / 短语<input class="form-input" name="term" placeholder="e.g. step-down care" required maxlength="100" /></label><label class="field">中文意思<input class="form-input" name="zh" placeholder="e.g. 降级照护 / 过渡照护" required maxlength="120" /></label><label class="field span-2">英文情境例句<textarea class="form-textarea" name="example" placeholder="Write an original example sentence from an imaginary situation." required maxlength="450"></textarea></label><label class="field span-2">例句中文翻译<textarea class="form-textarea" name="translation" placeholder="填写中文翻译…" required maxlength="450"></textarea></label><div class="field span-2"><button class="btn btn-primary" type="submit" style="align-self:flex-start">${icon('plus',16)}添加到词库</button></div></form></section>
    <section class="setting-block"><h3>数据备份与恢复</h3><p>进度只保存在你当前设备的浏览器中。换设备、清理浏览器数据可能导致记录丢失。导出JSON备份后，可在另一台设备上导入。</p><div class="setting-action"><button class="btn btn-primary btn-sm" data-action="export">${icon('download',16)}导出学习记录</button><label class="btn btn-outline btn-sm" style="cursor:pointer">${icon('upload',16)}导入学习记录<input id="import-file" type="file" accept="application/json,.json" hidden /></label><button class="btn btn-ghost btn-sm" data-action="reset">${icon('refresh',16)}清除全部记录</button></div></section>
    <div class="notice">${icon('info',16)} 本网站是独立的学习工具，不代表 RAH、CALHN、SA Health 或 Flinders 的官方教材。医疗术语、出院政策和职责范围应以医院与专业督导的最新要求为准。</div></div>`}
function toggleFavourite(id){state.favourites=state.favourites.includes(id)?state.favourites.filter(v=>v!==id):[...state.favourites,id];save();const modal=document.querySelector('#word-modal');if(modal.open)openWordRefresh(id);else render();toast(state.favourites.includes(id)?'已加入收藏':'已取消收藏')}
function openWordRefresh(id){const modal=document.querySelector('#word-modal');modal.close();openWord(id)}
function handleAction(act,button){const id=button.dataset.id;
  if(act==='quick-study'){app.deck='all';startStudy('all',app.studyLength);return}
  if(act==='deck-study'){startStudy(button.dataset.deck,app.studyLength);return}
  if(act==='set-deck'){app.deck=button.dataset.deck;render();return}
  if(act==='length'){app.studyLength=Number(button.dataset.count);render();return}
  if(act==='start-study'){startStudy();return}
  if(act==='start-review'){startStudy('all',20,true);return}
  if(act==='flip'){if(app.session){app.session.flipped=true;render()}return}
  if(act==='grade'){gradeCurrent(button.dataset.grade);return}
  if(act==='finish-study'){app.session=null;render();return}
  if(act==='speak-word'){const w=getWord(id);if(w)speak(w.term);return}
  if(act==='speak-example'){const w=getWord(id);if(w)speak(w.example);return}
  if(act==='star'){toggleFavourite(id);return}
  if(act==='quiz-direction'){quizDirection=button.dataset.value;document.querySelectorAll('[data-action="quiz-direction"]').forEach(e=>e.classList.toggle('active',e.dataset.value===quizDirection));return}
  if(act==='start-quiz'){startQuiz();return}
  if(act==='answer-quiz'){answerQuiz(id);return}
  if(act==='quiz-next'){if(app.quiz){app.quiz.index++;app.quiz.answered=null;app.quiz.choices=null;render()}return}
  if(act==='quiz-again'){app.quiz=null;render();return}
  if(act==='speak-handover'||act==='repeat-handover'){const s=HANDOVERS[app.listen?.caseIndex||0];speak(s.text,Math.max(.72,state.settings.speed-.05));return}
  if(act==='select-handover'){app.listen={caseIndex:Number(button.dataset.index),answered:null,revealed:false};render();return}
  if(act==='listen-answer'){if(app.listen.answered!==null)return;app.listen.answered=Number(button.dataset.index);render();return}
  if(act==='show-transcript'){app.listen.revealed=!app.listen.revealed;render();return}
  if(act==='next-handover'){app.listen={caseIndex:((app.listen?.caseIndex||0)+1)%HANDOVERS.length,answered:null,revealed:false};render();return}
  if(act==='open-word'){openWord(id);return}
  if(act==='close-modal'){document.querySelector('#word-modal').close();return}
  if(act==='toggle-theme'){toggleTheme();return}
  if(act==='review-this'){const modal=document.querySelector('#word-modal');if(modal.open)modal.close();app.session={queue:[id],index:0,flipped:false,grades:[],reviewOnly:false};app.route='study';render();return}
  if(act==='library-more'){app.lib.limit+=24;document.querySelector('#library-results').innerHTML=renderLibraryResults();return}
  if(act==='delete-custom'){if(confirm('确认删除这个自定义词吗？')){state.customWords=state.customWords.filter(w=>w.id!==id);delete state.progress[id];state.favourites=state.favourites.filter(x=>x!==id);save();document.querySelector('#word-modal').close();render();toast('已删除词汇')}return}
  if(act==='test-voice'){speak('Good morning. Social work has been asked to review the discharge plan.');return}
  if(act==='export'){const content=JSON.stringify({app:'WardWords',version:1,exported:new Date().toISOString(),state},null,2);const blob=new Blob([content],{type:'application/json'});const url=URL.createObjectURL(blob);const anchor=document.createElement('a');anchor.href=url;anchor.download=`wardwords-backup-${dateKey()}.json`;document.body.appendChild(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);toast('学习记录已导出');return}
  if(act==='reset'){if(confirm('确定删除本设备上所有学习进度、自定义词和收藏吗？此操作无法撤销。')){state={progress:{},logs:[],quizRecords:[],favourites:[],customWords:[],settings:{goal:15,speed:.88}};save();render();toast('已重置学习记录')}return}
}
function handleImport(file){if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);if(data.app!=='WardWords'||!data.state||typeof data.state!=='object'||!Array.isArray(data.state.logs)||!Array.isArray(data.state.customWords))throw Error('文件格式无效');if(!confirm('导入将覆盖本设备上的学习记录，是否继续？'))return;state={progress:data.state.progress||{},logs:data.state.logs||[],quizRecords:data.state.quizRecords||[],favourites:data.state.favourites||[],customWords:data.state.customWords||[],settings:{goal:15,speed:.88,...data.state.settings}};save();render();toast('已导入学习进度')}catch(e){toast('无法导入：不是有效的 WardWords 备份文件')}};reader.readAsText(file)}
function handleAddWord(form){const f=new FormData(form);const term=String(f.get('term')||'').trim(),zh=String(f.get('zh')||'').trim(),example=String(f.get('example')||'').trim(),translation=String(f.get('translation')||'').trim();if(!term||!zh||!example||!translation){toast('请填写所有字段');return}if(allWords().some(w=>w.term.toLowerCase()===term.toLowerCase())){toast('词库中已存在相同英文词汇');return}state.customWords.push({id:`c${Date.now()}_${Math.random().toString(36).slice(2,7)}`,term,zh,example,translation,category:'ward',custom:true});save();form.reset();toast('新词已添加，可以到词库中查看')}
function handleChange(event){const el=event.target;
  if(el.id==='goal-select'){state.settings.goal=Number(el.value);save();render();toast('每日目标已更新')}
  if(el.id==='speed-select'){state.settings.speed=Number(el.value);save();toast('朗读速度已更新')}
  if(el.id==='theme-select'){setThemePref(el.value);toast(el.value==='auto'?'外观已设为跟随系统':el.value==='dark'?'已切换到夜间模式':'已切换到日间模式')}
  if(el.id==='library-deck'){app.lib.deck=el.value;app.lib.limit=24;document.querySelector('#library-results').innerHTML=renderLibraryResults()}
  if(el.id==='library-state'){app.lib.filter=el.value;app.lib.limit=24;document.querySelector('#library-results').innerHTML=renderLibraryResults()}
  if(el.id==='import-file')handleImport(el.files[0]);
}
function handleKey(event){if(event.altKey||event.metaKey||event.ctrlKey)return;if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)||document.querySelector('#word-modal').open)return;
  if((app.route==='study'||app.route==='review')&&app.session&&app.session.index<app.session.queue.length){if(event.code==='Space'&&!app.session.flipped){event.preventDefault();app.session.flipped=true;render();return}if(app.session.flipped&&'1234'.includes(event.key)&&event.key.length===1){event.preventDefault();gradeCurrent({1:'again',2:'hard',3:'good',4:'easy'}[event.key]);return}}
  if(app.route==='quiz'&&app.quiz){if(app.quiz.answered===null&&'1234'.includes(event.key)&&event.key.length===1){const id=app.quiz.choices[Number(event.key)-1];if(id)answerQuiz(id)}else if(app.quiz.answered!==null&&event.key==='Enter'){app.quiz.index++;app.quiz.answered=null;app.quiz.choices=null;render()}}
}
function boot(){
  window.addEventListener('hashchange',()=>{const route=window.location.hash.replace('#','');if(route&&route!==app.route&&navEntries.some(x=>x.id===route)){app.route=route;app.session=null;app.quiz=null;render()}});
  document.addEventListener('click',e=>{const b=e.target.closest('[data-action],[data-route]');if(!b)return;if(b.dataset.route){goto(b.dataset.route);return}if(b.dataset.action)handleAction(b.dataset.action,b)});
  document.addEventListener('input',e=>{if(e.target.id==='library-query'){app.lib.query=e.target.value;app.lib.limit=24;document.querySelector('#library-results').innerHTML=renderLibraryResults()}});
  document.addEventListener('change',handleChange);
  document.addEventListener('submit',e=>{if(e.target.id==='custom-word-form'){e.preventDefault();handleAddWord(e.target)}});
  document.addEventListener('keydown',handleKey);
  const dialog=document.querySelector('#word-modal');dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  app.route=navEntries.some(n=>n.id===location.hash.slice(1))?location.hash.slice(1):'home';render();
}
boot();
