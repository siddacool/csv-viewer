import{s as F,c as j,a as N,i,b as l,F as C,d,t as s,e as v,f as m,S as T,g as x,o as E,h as O,r as z}from"./vendor.6af091ea.js";const P=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}};P();const A=(e="",t=",",o=!1)=>e.slice(o?e.indexOf(`
`)+1:0).split(`
`).map(a=>a.split(t)),y=async e=>{if((e.ctrlKey||e.metaKey)&&e.keyCode==86)try{const t=await navigator.clipboard.readText();w(t)}catch(t){console.log(t)}};F("csv-viewer-1");const H=j("dark-theme",!1),[q,D]=N({data:[]}),B=q,w=(e="")=>{const t=A(e);D("data",()=>t)},V=()=>{D("data",()=>[])},[b,K]=N({active:H.get()}),g=document.querySelector("body"),I=b,L=()=>{const e=!b.active;H.set(()=>e),K("active",()=>e),e?g?.classList.add("dark"):g?.classList.remove("dark")},R=()=>{b.active&&g?.classList.add("dark")},G="_CSVTable_1ccs9_1";var J={CSVTable:G};const Q=s("<div><table><tbody></tbody></table></div>"),W=s("<tr></tr>"),X=s("<td></td>"),Y=()=>(()=>{const e=Q.cloneNode(!0),t=e.firstChild,o=t.firstChild;return i(o,l(C,{get each(){return B.data},children:a=>(()=>{const n=W.cloneNode(!0);return i(n,l(C,{each:a,children:r=>(()=>{const c=X.cloneNode(!0);return i(c,r),c})()})),n})()})),d(()=>e.className=J.CSVTable),e})(),Z="_MenuHolder_ijt3n_1",ee="_Menu_ijt3n_1",te="_MenuItem_ijt3n_23",ne="_screen_ijt3n_33";var h={MenuHolder:Z,Menu:ee,MenuItem:te,screen:ne};const oe=s("<div><div></div><ul></ul></div>"),re=e=>l(T,{get when(){return e.show},get children(){const t=oe.cloneNode(!0),o=t.firstChild,a=o.nextSibling;return m(o,"click",e.onClose?e.onClose:()=>{},!0),i(a,()=>e.children),d(n=>{const r=`${h.MenuHolder} ${e.class}`,c=h.screen,u=h.Menu;return r!==n._v$&&(t.className=n._v$=r),c!==n._v$2&&(o.className=n._v$2=c),u!==n._v$3&&(a.className=n._v$3=u),n},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t}});v(["click"]);const le=s("<li></li>"),se=e=>(()=>{const t=le.cloneNode(!0);return m(t,"click",e.onClick?e.onClick:()=>{},!0),i(t,()=>e.children),d(()=>t.className=h.MenuItem),t})();v(["click"]);const U=re,p=se,ae="_HamburgerSettings_1femw_1",ce="_HamburgerMenu_1femw_14",ie="_HamburgerButton_1femw_26";var $={HamburgerSettings:ae,HamburgerMenu:ce,HamburgerButton:ie};const de=s('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>'),ue=s('<input type="checkbox" id="dark-theme-mob">'),_e=s('<label for="dark-theme-mob">Dark Theme</label>'),ve=s('<div><button><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></button></div>'),me=()=>{const[e,t]=x(!1),o=()=>{t(!0)},a=()=>{t(!1)};return(()=>{const n=ve.cloneNode(!0),r=n.firstChild;return r.$$click=o,i(n,l(U,{get show(){return e()},get class(){return $.HamburgerMenu},onClose:a,get children(){return[l(p,{onClick:V,get children(){return[de.cloneNode(!0),"Open"]}}),l(p,{get children(){return[(()=>{const c=ue.cloneNode(!0);return m(c,"change",L),d(()=>c.checked=I.active),c})(),_e.cloneNode(!0)]}})]}}),null),d(c=>{const u=$.HamburgerSettings,k=$.HamburgerButton;return u!==c._v$&&(n.className=c._v$=u),k!==c._v$2&&(r.className=c._v$2=k),c},{_v$:void 0,_v$2:void 0}),n})()};v(["click"]);const he="_ToolbarDesktop_163v2_1",$e="_ToolbarItem_163v2_14",ge="_SettingsMenu_163v2_41";var f={ToolbarDesktop:he,ToolbarItem:$e,SettingsMenu:ge};const pe=s("<button><section></section></button>"),M=e=>(()=>{const t=pe.cloneNode(!0),o=t.firstChild;return m(t,"click",e.onClick,!0),i(o,()=>e.icon,null),i(o,()=>e.children,null),d(()=>t.className=f.ToolbarItem),t})();v(["click"]);const fe=s('<input type="checkbox" id="dark-theme">'),we=s('<label for="dark-theme">Dark Theme</label>'),be=s("<div></div>"),ke=s('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>'),Ce=s('<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'),ye=()=>{const[e,t]=x(!1),o=()=>{t(!0)},a=()=>{t(!1)};return(()=>{const n=be.cloneNode(!0);return i(n,l(M,{onClick:V,get icon(){return ke.cloneNode(!0)},children:"Open"}),null),i(n,l(M,{onClick:o,get icon(){return Ce.cloneNode(!0)},children:"Settings"}),null),i(n,l(U,{get class(){return f.SettingsMenu},get show(){return e()},onClose:a,get children(){return l(p,{get children(){return[(()=>{const r=fe.cloneNode(!0);return m(r,"change",L),d(()=>r.checked=I.active),r})(),we.cloneNode(!0)]}})}}),null),d(()=>n.className=f.ToolbarDesktop),n})()},Me="_CsvView_11q48_1";var Se={CsvView:Me};const Ne=s("<div></div>"),Te=()=>(()=>{const e=Ne.cloneNode(!0);return i(e,l(ye,{}),null),i(e,l(Y,{}),null),i(e,l(me,{}),null),d(()=>e.className=Se.CsvView),e})(),xe="_UploadScreen_1bnxw_1",He="_FileUpload_1bnxw_11",De="_CopyData_1bnxw_33",Be="_CopyMsg_1bnxw_41",Ve="_PasteBtn_1bnxw_51";var _={UploadScreen:xe,FileUpload:He,CopyData:De,CopyMsg:Be,PasteBtn:Ve};const Ie=s('<a href="#">Click here to paste data</a>'),Le=()=>{const e=async t=>{t.preventDefault();try{const o=await navigator.clipboard.readText();w(o)}catch(o){console.log(o)}};return(()=>{const t=Ie.cloneNode(!0);return t.$$click=e,d(()=>t.className=_.PasteBtn),t})()};v(["click"]);const Ue=s("<h2><span>Ctrl + v (paste data)</span></h2>"),Fe=()=>(()=>{const e=Ue.cloneNode(!0),t=e.firstChild;return i(e,l(Le,{}),null),d(o=>{const a=_.CopyData,n=_.CopyMsg;return a!==o._v$&&(e.className=o._v$=a),n!==o._v$2&&(t.className=o._v$2=n),o},{_v$:void 0,_v$2:void 0}),e})(),je=s('<div><input type="file" accept=".csv, text/plain" id="csv-upload"><label for="csv-upload">Upload</label></div>'),Ee=()=>{const e=async t=>{const o=t.target.files[0],a=new FileReader;a.onload=function(){w(a.result)},a.readAsBinaryString(o)};return(()=>{const t=je.cloneNode(!0);return t.firstChild.addEventListener("change",e),d(()=>t.className=_.FileUpload),t})()},Oe=s("<div><h3>or</h3></div>"),ze=()=>(()=>{const e=Oe.cloneNode(!0),t=e.firstChild;return i(e,l(Fe,{}),t),i(e,l(Ee,{}),null),d(()=>e.className=_.UploadScreen),e})(),Pe="_view_1l3kr_1";var Ae={view:Pe};const qe=s("<div></div>"),Ke=()=>(()=>{const e=qe.cloneNode(!0);return i(e,l(ze,{})),d(()=>e.className=Ae.view),e})(),S=document.querySelector("body"),Re=()=>(E(()=>{S?.addEventListener("keydown",y),R()}),O(()=>{S?.removeEventListener("keydown",y)}),l(T,{get when(){return B.data.length},get fallback(){return l(Ke,{})},get children(){return l(Te,{})}}));z(()=>l(Re,{}),document.getElementById("root"));