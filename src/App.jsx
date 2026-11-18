import React, { useEffect, useMemo, useState } from 'react';

const SUBJECT = 'Still thinking about the blemishes and marks on your face?';
const PREHEADER = "Here's what to know before making it part of your routine.";
const DESTINATION = 'https://47-skin-product-page-wm55.vercel.app/';
const LETTER = [
  "Getting rid of breakouts can feel like progress, until the marks they leave behind become another part of your skincare concerns. When you're choosing what to try next, you want to know there's something behind the promises on those packaging, especially when you're hoping to address both concerns.",
  "If 47 Skin's Anti-Blemish & Scar Repair Serum has caught your attention, we've brought together a few things worth knowing before you decide.",
  'Powered by our unique Silver Chitoderm® formula, the serum is formulated to address blemishes and the marks they leave behind. You can also explore the clinical findings, check the full ingredients list and see exactly how to use it.',
  'One important thing to note: the formula contains Chitosan derived from shellfish, so if you have a known shellfish allergy, we advise against using our products.',
  'Ready to take a closer look?',
  "Find everything you need to know about the serum on our product page and decide whether it's the right addition to your skincare routine."
];
const messages = [
  {id: 'design', sender:'Studio Notes', subject:'The November reading list', preview:'A few things we have bookmarked for the week.', time:'11:42 AM', unread:false, initials:'SN', color:'#dce7ea'},
  {id: '47skin', sender:'47 Skin', subject:SUBJECT, preview:PREHEADER, time:'10:18 AM', unread:true, initials:'47', color:'#d7e5e7'},
  {id: 'weekend', sender:'Sunday Edit', subject:'A little inspiration for your weekend', preview:'Our latest collection of things to explore.', time:'Yesterday', unread:false, initials:'SE', color:'#f4e4d8'},
  {id: 'courier', sender:'Parcel Updates', subject:'Your parcel status summary', preview:'A recent delivery update is available.', time:'Tue', unread:false, initials:'PU', color:'#e3e3ed'},
  {id: 'reading', sender:'The Reading Room', subject:'Your weekly reading round-up', preview:'A fresh selection of articles and notes.', time:'Mon', unread:false, initials:'RR', color:'#f3e8cc'},
  {id: 'planner', sender:'Calendar Digest', subject:'Your upcoming week', preview:'Here is a summary of the week ahead.', time:'Sun', unread:false, initials:'CD', color:'#e3e9dc'},
  {id: 'journal', sender:'Everyday Journal', subject:'Five notes for a slower morning', preview:'Our editorial selection for the week.', time:'Fri', unread:false, initials:'EJ', color:'#f0e0e5'}
];
const icons = {
  menu:<path d="M4 6h16M4 12h16M4 18h16"/>,
  search:<><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  inbox:<><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 13h5l2 3h4l2-3h5"/></>,
  star:<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>,
  clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  sent:<><path d="m21 3-8 18-3-7-7-3 18-8Z"/><path d="M10 14 21 3"/></>,
  draft:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></>,
  arrow:<path d="m15 18-6-6 6-6"/>,
  chevron:<path d="m9 6 6 6-6 6"/>,
  refresh:<><path d="M20 11a8 8 0 1 1-2.3-5.7"/><path d="M20 4v7h-7"/></>,
  more:<><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
  close:<path d="M5 5 19 19M19 5 5 19"/>,
  arrowUp:<path d="M5 12h14m-6-6 6 6-6 6"/>,
  check:<path d="m5 12 4 4L19 6"/>
};
function Icon({name, size=20, fill='none'}) {return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" stroke="currentColor" fill={fill} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{icons[name]}</svg>}
const folders = [{key:'inbox',label:'Inbox',icon:'inbox'},{key:'starred',label:'Starred',icon:'star'},{key:'snoozed',label:'Snoozed',icon:'clock'},{key:'sent',label:'Sent',icon:'sent'},{key:'drafts',label:'Drafts',icon:'draft'}];

function CampaignEmail() {
  return <div className="email-body">
    <div className="email-topline"><span className="wordmark">47 <span>SKIN</span></span><span className="topline-side">A CAMPAIGN STUDY</span></div>
    <div className="hero-editorial">
      <div className="hero-copy"><span className="eyebrow">FOR BREAKOUTS AND THE MARKS THEY LEAVE BEHIND.</span><h2>For Breakouts and the Marks They Leave Behind.</h2><div className="short-rule"/></div>
      <img src="/assets/editorial-real-skin-mirror.png" alt="Editorial concept image of a woman looking at her skin in a mirror; not a 47 Skin customer testimonial" />
    </div>
    <div className="letter"><div className="letter-label">A CLOSER LOOK</div><p className="greeting">Hello,</p><p>{LETTER[0]}</p><p>{LETTER[1]}</p><p>{LETTER[2]}</p>
      <div className="product-panel"><img src="/assets/authentic-47-skin-serum-reference.png" alt="Reference photograph of the authentic 47 Skin Anti-Blemish & Scar Repair Serum bottles with amber glass, black pumps and white labels" /><div className="product-panel-note"><span className="micro">THE FORMULA</span><span>Silver Chitoderm®</span><span className="product-rule"/><span className="product-caption">Anti-Blemish &amp; Scar Repair Serum</span></div></div>
      <p>{LETTER[3]}</p><p className="emphasis-line">{LETTER[4]}</p><p>{LETTER[5]}</p>
      <div className="cta-wrap"><a className="primary-cta" href={DESTINATION} target="_blank" rel="noopener noreferrer">EXPLORE THE SERUM <Icon name="arrowUp" size={20}/></a></div>
      <p className="signoff">Warmly,<span>The 47 Skin team</span></p>
    </div>
    <div className="email-footer"><span className="footer-brand">47 SKIN</span><span>Speculative email concept · Not sent or approved by 47 Skin.</span></div>
  </div>
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState('inbox');
  const [query, setQuery] = useState('');
  const [starred, setStarred] = useState({});
  const [read, setRead] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const [refreshCount, setRefreshCount] = useState(0);
  const [selected, setSelected] = useState(false);
  const show = (id)=>{if(id !== '47skin') return;setOpen(true);setRead(true);setNavOpen(false);window.scrollTo({top:0,behavior:'smooth'});};
  const back = ()=>{setOpen(false);window.scrollTo({top:0,behavior:'smooth'});};
  const choose = (key)=>{setFolder(key);setOpen(false);setNavOpen(false);};
  const visible = useMemo(()=>messages.filter(m=>(folder==='inbox'||(folder==='starred'&&starred[m.id]))&&`${m.sender} ${m.subject} ${m.preview}`.toLowerCase().includes(query.toLowerCase())),[folder,query,starred,refreshCount]);
  useEffect(()=>{const handler=e=>{if(e.key==='Escape'){back();setNavOpen(false);}};window.addEventListener('keydown',handler);return ()=>window.removeEventListener('keydown',handler)},[]);
  return <div className="app-shell">
    <header className="topbar"><button className="icon-button nav-toggle" aria-label="Toggle folder menu" onClick={()=>setNavOpen(v=>!v)}><Icon name="menu"/></button><div className="app-brand"><span className="brand-envelope">✉</span><span>Gmail</span><small>concept</small></div><label className="searchbar"><Icon name="search" size={22}/><input aria-label="Search messages" placeholder="Search mail" value={query} onChange={e=>{setQuery(e.target.value);if(open)setOpen(false)}}/>{query&&<button className="icon-button" aria-label="Clear search" onClick={()=>setQuery('')}><Icon name="close" size={18}/></button>}</label><div className="top-avatar" aria-label="Fictional demonstration account">D</div></header>
    <div className="workspace"><aside className={`sidebar ${navOpen?'sidebar-open':''}`}><div className="sidebar-label">DEMO MAILBOX</div><nav aria-label="Mail folders">{folders.map(f=><button key={f.key} className={`folder ${folder===f.key?'active':''}`} aria-current={folder===f.key?'page':undefined} onClick={()=>choose(f.key)}><Icon name={f.icon} size={19}/>{f.label}{f.key==='inbox'&&<b>{read?'0':'1'}</b>}</button>)}</nav><div className="sidebar-note">An interactive portfolio simulation.<br/>Not connected to Gmail.</div></aside><main className="mail-main">
    {open?<><div className="list-tools message-tools"><button className="icon-button" title="Back to inbox" aria-label="Back to inbox" onClick={back}><Icon name="arrow"/></button><span className="separator"/><span className="tool-caption">Message</span><button className={`star-button message-star ${starred['47skin']?'is-starred':''}`} aria-label={starred['47skin']?'Remove star':'Star campaign email'} onClick={()=>setStarred(s=>({...s,'47skin':!s['47skin']}))}><Icon name="star" fill={starred['47skin']?'currentColor':'none'}/></button></div><div className="message-page"><h1>{SUBJECT}</h1><div className="message-meta"><span className="sender-avatar">47</span><div className="sender-lines"><strong>47 Skin <span className="concept-tag">campaign concept</span></strong><small>to: demo recipient · illustrative message, not delivered</small></div><span className="mail-time">Preview only</span></div><div className="message-preheader"><strong>Preheader:</strong> {PREHEADER}</div><CampaignEmail/></div></>:
    <><div className="list-tools"><div className="tools-left"><button className={`select-box ${selected?'checked':''}`} role="checkbox" aria-checked={selected} aria-label="Select displayed messages" onClick={()=>setSelected(v=>!v)}>{selected?<Icon name="check" size={14}/>:null}</button><button className="icon-button" title="Refresh inbox" aria-label="Refresh inbox" onClick={()=>{setRefreshCount(x=>x+1);setNotice('Inbox is up to date.')}}><Icon name="refresh" size={18}/></button></div><div className="tool-caption">{visible.length} messages · demo inbox</div></div><div className="category-tabs"><div className="tab-active">Primary</div><div className="category-hint">Inbox preview</div></div>{visible.length?<div className="message-list">{visible.map(m=><div key={m.id} className={`message-row ${m.id==='47skin'?'can-open':''} ${(m.unread&&!read)?'unread':''} ${selected?'selected':''}`}><button className={`star-button ${starred[m.id]?'is-starred':''}`} aria-label={`${starred[m.id]?'Unstar':'Star'} ${m.sender}`} onClick={()=>setStarred(s=>({...s,[m.id]:!s[m.id]}))}><Icon name="star" size={19} fill={starred[m.id]?'currentColor':'none'}/></button>{m.id==='47skin'?<button className="row-content" onClick={()=>show(m.id)} aria-label={`Open email: ${m.subject}`}><span className="row-sender">{m.sender}</span><span className="row-text"><strong>{m.subject}</strong><span> — {m.preview}</span></span><span className="row-time">{m.time}</span></button>:<div className="row-content static-row"><span className="row-sender">{m.sender}</span><span className="row-text"><strong>{m.subject}</strong><span> — {m.preview}</span></span><span className="row-time">{m.time}</span></div>}</div>)}</div>:<div className="empty-state"><Icon name="inbox" size={40}/><h2>No messages here</h2><p>{query?'Try another search term.':'This demo folder has no messages.'}</p><button onClick={()=>{setQuery('');choose('inbox')}}>Back to Inbox</button></div>}<div className="list-disclosure">Portfolio simulation. Other inbox rows are fictional and intentionally cannot be opened.</div></>}
    </main></div>{navOpen&&<button className="mobile-scrim" aria-label="Close navigation" onClick={()=>setNavOpen(false)}/ >}{notice&&<div className="toast" role="status">{notice}<button onClick={()=>setNotice('')}>Dismiss</button></div>}</div>
}
