import{v as O,n as z,s as F,c as A,a as D,b as W,i,d as a,e as d,I as q,f as K,g as G,t as c,V as J,h,j as m,S as I,k as j,o as Q,l as X,r as Y}from"./vendor.99c71ca2.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}};Z();function ee(e={}){const{immediate:t=!1,onNeedRefresh:o,onOfflineReady:r,onRegistered:n,onRegisterError:l}=e;let s,u;const g=async(v=!0)=>{v&&s?.addEventListener("controlling",U=>{U.isUpdate&&window.location.reload()}),u&&u.waiting&&await z(u.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){s=new O("/csv-viewer/sw.js",{scope:"/csv-viewer/",type:"classic"}),s.addEventListener("activated",v=>{v.isUpdate||r?.()});{const v=()=>{o?.()};s.addEventListener("waiting",v),s.addEventListener("externalwaiting",v)}s.register({immediate:t}).then(v=>{u=v,n?.(v)}).catch(v=>{l?.(v)})}return g}const te=(e="",t=",",o=!1)=>e.slice(o?e.indexOf(`
`)+1:0).split(`
`).map(r=>r.split(t)),T=async e=>{if((e.ctrlKey||e.metaKey)&&e.keyCode==86)try{const t=await navigator.clipboard.readText();N(t)}catch(t){console.log(t)}},ne=(e=0,t)=>{const{extraPad:o=0,minLength:r=3}=t||{};let n=e+o;return n<r&&(n=r),n};F("csv-viewer-1");const L=A("dark-theme",!1),k=document.querySelector('meta[name="theme-color"]'),[oe,V]=D({data:[]}),f=oe,N=(e="")=>{const t=te(e);V("data",()=>t)},E=()=>{V("data",()=>[])},w=W(()=>{if(!f.data.length)return[];const e=[];return f.data.forEach(t=>{t.forEach((o="",r)=>{e[r]?o.length>e[r]&&(e[r]=o.length):e[r]=o.length})}),e}),[S,re]=D({active:L.get()}),y=document.querySelector("body"),B=S,P=()=>{const e=!S.active;L.set(()=>e),re("active",()=>e),e?(y?.classList.add("dark"),k.content="#2a2a2a"):(y?.classList.remove("dark"),k.content="#e5e5e5")},le=()=>{S.active&&(y?.classList.add("dark"),k.content="#2a2a2a")},se="_CSVTable_1jx35_1",ae="_VirtualContainerHolder_1jx35_6",ce="_Row_1jx35_18",ie="_Td_1jx35_23";var C={CSVTable:se,VirtualContainerHolder:ae,Row:ce,Td:ie};const de=c('<div role="listitem"></div>'),ue=c("<div></div>"),ve=(e=[])=>{let t=e.reduce((o,r)=>o+(r+8),0);return t<3&&(t=3),`${t}ch`},_e=e=>(()=>{const t=de.cloneNode(!0);return i(t,a(q,{get each(){return e.item},children:(o,r)=>(()=>{const n=ue.cloneNode(!0);return i(n,o),d(l=>{const s=C.Td,u=w()[r]?`${ne(w()[r],{extraPad:8})}ch`:"3ch";return s!==l._v$4&&(n.className=l._v$4=s),u!==l._v$5&&n.style.setProperty("width",l._v$5=u),l},{_v$4:void 0,_v$5:void 0}),n})()})),d(o=>{const r={...e.style,"min-width":`${ve(w())}`},n=e.tabIndex,l=C.Row;return o._v$=K(t,r,o._v$),n!==o._v$2&&G(t,"tabindex",o._v$2=n),l!==o._v$3&&(t.className=o._v$3=l),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})(),he=c("<div></div>"),me=()=>{let e;return(()=>{const t=he.cloneNode(!0),o=e;return typeof o=="function"?o(t):e=t,t.style.setProperty("overflow","auto"),i(t,a(J,{get items(){return f.data},scrollTarget:e,itemSize:{height:28},children:_e})),d(()=>t.className=C.VirtualContainerHolder),t})()},ge="_MenuHolder_ijt3n_1",$e="_Menu_ijt3n_1",fe="_MenuItem_ijt3n_23",we="_screen_ijt3n_33";var $={MenuHolder:ge,Menu:$e,MenuItem:fe,screen:we};const pe=c("<div><div></div><ul></ul></div>"),ke=e=>a(I,{get when(){return e.show},get children(){const t=pe.cloneNode(!0),o=t.firstChild,r=o.nextSibling;return m(o,"click",e.onClose?e.onClose:()=>{},!0),i(r,()=>e.children),d(n=>{const l=`${$.MenuHolder} ${e.class}`,s=$.screen,u=$.Menu;return l!==n._v$&&(t.className=n._v$=l),s!==n._v$2&&(o.className=n._v$2=s),u!==n._v$3&&(r.className=n._v$3=u),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t}});h(["click"]);const ye=c("<li></li>"),Ce=e=>(()=>{const t=ye.cloneNode(!0);return m(t,"click",e.onClick?e.onClick:()=>{},!0),i(t,()=>e.children),d(()=>t.className=$.MenuItem),t})();h(["click"]);const R=ke,b=Ce,be="_HamburgerSettings_1femw_1",Me="_HamburgerMenu_1femw_14",Ne="_HamburgerButton_1femw_26";var p={HamburgerSettings:be,HamburgerMenu:Me,HamburgerButton:Ne};const Se=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>'),Te=c('<input type="checkbox" id="dark-theme-mob">'),xe=c('<label for="dark-theme-mob">Dark Theme</label>'),He=c('<div><button><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button></div>'),De=()=>{const[e,t]=j(!1),o=()=>{t(!0)},r=()=>{t(!1)};return(()=>{const n=He.cloneNode(!0),l=n.firstChild;return l.$$click=o,i(n,a(R,{get show(){return e()},get class(){return p.HamburgerMenu},onClose:r,get children(){return[a(b,{onClick:E,get children(){return[Se.cloneNode(!0),"Open"]}}),a(b,{get children(){return[(()=>{const s=Te.cloneNode(!0);return m(s,"change",P),d(()=>s.checked=B.active),s})(),xe.cloneNode(!0)]}})]}}),null),d(s=>{const u=p.HamburgerSettings,g=p.HamburgerButton;return u!==s._v$&&(n.className=s._v$=u),g!==s._v$2&&(l.className=s._v$2=g),s},{_v$:void 0,_v$2:void 0}),n})()};h(["click"]);const Ie="_ToolbarDesktop_163v2_1",je="_ToolbarItem_163v2_14",Le="_SettingsMenu_163v2_41";var M={ToolbarDesktop:Ie,ToolbarItem:je,SettingsMenu:Le};const Ve=c("<button><section></section></button>"),x=e=>(()=>{const t=Ve.cloneNode(!0),o=t.firstChild;return m(t,"click",e.onClick,!0),i(o,()=>e.icon,null),i(o,()=>e.children,null),d(()=>t.className=M.ToolbarItem),t})();h(["click"]);const Ee=c('<input type="checkbox" id="dark-theme">'),Be=c('<label for="dark-theme">Dark Theme</label>'),Pe=c("<div></div>"),Re=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>'),Ue=c('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'),Oe=()=>{const[e,t]=j(!1),o=()=>{t(!0)},r=()=>{t(!1)};return(()=>{const n=Pe.cloneNode(!0);return i(n,a(x,{onClick:E,get icon(){return Re.cloneNode(!0)},children:"Open"}),null),i(n,a(x,{onClick:o,get icon(){return Ue.cloneNode(!0)},children:"Settings"}),null),i(n,a(R,{get class(){return M.SettingsMenu},get show(){return e()},onClose:r,get children(){return a(b,{get children(){return[(()=>{const l=Ee.cloneNode(!0);return m(l,"change",P),d(()=>l.checked=B.active),l})(),Be.cloneNode(!0)]}})}}),null),d(()=>n.className=M.ToolbarDesktop),n})()},ze="_CsvView_11q48_1";var Fe={CsvView:ze};const Ae=c("<div></div>"),We=()=>(()=>{const e=Ae.cloneNode(!0);return i(e,a(Oe,{}),null),i(e,a(me,{}),null),i(e,a(De,{}),null),d(()=>e.className=Fe.CsvView),e})(),qe="_UploadScreen_1ce1j_1",Ke="_FileUpload_1ce1j_19",Ge="_CopyData_1ce1j_41",Je="_CopyMsg_1ce1j_49",Qe="_PasteBtn_1ce1j_59";var _={UploadScreen:qe,FileUpload:Ke,CopyData:Ge,CopyMsg:Je,PasteBtn:Qe};const Xe=c('<a href="#">Click here to paste data</a>'),Ye=()=>{const e=async t=>{t.preventDefault();try{const o=await navigator.clipboard.readText();N(o)}catch(o){console.log(o)}};return(()=>{const t=Xe.cloneNode(!0);return t.$$click=e,d(()=>t.className=_.PasteBtn),t})()};h(["click"]);const Ze=c("<h2><span>Ctrl + v (paste data)</span></h2>"),et=()=>(()=>{const e=Ze.cloneNode(!0),t=e.firstChild;return i(e,a(Ye,{}),null),d(o=>{const r=_.CopyData,n=_.CopyMsg;return r!==o._v$&&(e.className=o._v$=r),n!==o._v$2&&(t.className=o._v$2=n),o},{_v$:void 0,_v$2:void 0}),e})(),tt=c('<div><input type="file" accept=".csv, text/plain" id="csv-upload"><label for="csv-upload">Upload</label></div>'),nt=()=>{const e=async t=>{const o=t.target.files[0],r=new FileReader;r.onload=function(){N(r.result)},r.readAsBinaryString(o)};return(()=>{const t=tt.cloneNode(!0);return t.firstChild.addEventListener("change",e),d(()=>t.className=_.FileUpload),t})()},ot=c("<div><h3>or</h3></div>"),rt=()=>(()=>{const e=ot.cloneNode(!0),t=e.firstChild;return i(e,a(et,{}),t),i(e,a(nt,{}),null),d(()=>e.className=_.UploadScreen),e})(),lt="_view_1l3kr_1";var st={view:lt};const at=c("<div></div>"),ct=()=>(()=>{const e=at.cloneNode(!0);return i(e,a(rt,{})),d(()=>e.className=st.view),e})(),H=document.querySelector("body"),it=()=>(Q(()=>{H?.addEventListener("keydown",T),le()}),X(()=>{H?.removeEventListener("keydown",T)}),a(I,{get when(){return f.data.length},get fallback(){return a(ct,{})},get children(){return a(We,{})}}));"serviceWorker"in navigator&&ee({onNeedRefresh(){},onOfflineReady(){}});Y(()=>a(it,{}),document.getElementById("root"));
