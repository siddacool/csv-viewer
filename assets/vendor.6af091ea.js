const D={},Ae=(e,t)=>e===t,$=Symbol("solid-proxy"),R={equals:Ae};let re=ge;const C={},x=1,U=2,le={owned:null,cleanups:null,context:null,owner:null};var d=null;let I=null,g=null,_=null,b=null,A=null,Z=0;function B(e,t){const n=g,s=d,i=e.length===0?le:{owned:null,cleanups:null,context:null,owner:t||s};d=i,g=null;try{return te(()=>e(()=>ne(i)),!0)}finally{g=n,d=s}}function fe(e,t){t=t?Object.assign({},R,t):R;const n={value:e,observers:null,observerSlots:null,pending:C,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==C?n.pending:n.value)),z(n,i));return[ae.bind(n),s]}function V(e,t,n){const s=ee(e,t,!1,x);L(s)}function Ne(e,t,n){re=$e;const s=ee(e,t,!1,x);s.user=!0,A?A.push(s):queueMicrotask(()=>L(s))}function X(e,t,n){n=n?Object.assign({},R,n):R;const s=ee(e,t,!0,0);return s.pending=C,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,L(s),ae.bind(s)}function ue(e){if(_)return e();let t;const n=_=[];try{t=e()}finally{_=null}return te(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==C){const o=i.pending;i.pending=C,z(i,o)}}},!1),t}function j(e){let t,n=g;return g=null,t=e(),g=n,t}function Ue(e){Ne(()=>j(e))}function xe(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function ce(){return g}function ae(){const e=I;if(this.sources&&(this.state||e)){const t=b;b=null,this.state===x||e?L(this):F(this),b=t}if(g){const t=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(t)):(g.sources=[this],g.sourceSlots=[t]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function z(e,t,n){if(e.comparator&&e.comparator(e.value,t))return t;if(_)return e.pending===C&&_.push(e),e.pending=t,t;let s=!1;return e.value=t,e.observers&&e.observers.length&&te(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];s&&I.disposed.has(o),(s&&!o.tState||!s&&!o.state)&&(o.pure?b.push(o):A.push(o),o.observers&&he(o)),s||(o.state=x)}if(b.length>1e6)throw b=[],new Error},!1),t}function L(e){if(!e.fn)return;ne(e);const t=d,n=g,s=Z;g=d=e,Ee(e,e.value,s),g=n,d=t}function Ee(e,t,n){let s;try{s=e.fn(t)}catch(i){de(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?z(e,s):e.value=s,e.updatedAt=n)}function ee(e,t,n,s=x,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==le&&(d.owned?d.owned.push(o):d.owned=[o]),o}function m(e){const t=I;if(e.state===0||t)return;if(e.state===U||t)return F(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Z);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===x||t)L(e);else if(e.state===U||t){const i=b;b=null,F(e,n[0]),b=i}}function te(e,t){if(b)return e();let n=!1;t||(b=[]),A?n=!0:A=[],Z++;try{return e()}catch(s){de(s)}finally{Oe(n)}}function Oe(e){b&&(ge(b),b=null),!e&&(A.length?ue(()=>{re(A),A=null}):A=null)}function ge(e){for(let t=0;t<e.length;t++)m(e[t])}function $e(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:m(i)}const s=e.length;for(t=0;t<n;t++)m(e[t]);for(t=s;t<e.length;t++)m(e[t])}function F(e,t){const n=I;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===x||n?i!==t&&m(i):(i.state===U||n)&&F(i,t))}}function he(e){const t=I;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=U,s.pure?b.push(s):A.push(s),s.observers&&he(s))}}function ne(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),r=n.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)ne(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function de(e){throw e}const Ce=Symbol("fallback");function se(e){for(let t=0;t<e.length;t++)e[t]()}function Te(e,t,n={}){let s=[],i=[],o=[],r=0,l=t.length>1?[]:null;return xe(()=>se(o)),()=>{let u=e()||[],a,f;return j(()=>{let c=u.length,h,y,T,k,v,w,S,N,E;if(c===0)r!==0&&(se(o),o=[],s=[],i=[],r=0,l&&(l=[])),n.fallback&&(s=[Ce],i[0]=B(Se=>(o[0]=Se,n.fallback())),r=1);else if(r===0){for(i=new Array(c),f=0;f<c;f++)s[f]=u[f],i[f]=B(p);r=c}else{for(T=new Array(c),k=new Array(c),l&&(v=new Array(c)),w=0,S=Math.min(r,c);w<S&&s[w]===u[w];w++);for(S=r-1,N=c-1;S>=w&&N>=w&&s[S]===u[N];S--,N--)T[N]=i[S],k[N]=o[S],l&&(v[N]=l[S]);for(h=new Map,y=new Array(N+1),f=N;f>=w;f--)E=u[f],a=h.get(E),y[f]=a===void 0?-1:a,h.set(E,f);for(a=w;a<=S;a++)E=s[a],f=h.get(E),f!==void 0&&f!==-1?(T[f]=i[a],k[f]=o[a],l&&(v[f]=l[a]),f=y[f],h.set(E,f)):o[a]();for(f=w;f<c;f++)f in T?(i[f]=T[f],o[f]=k[f],l&&(l[f]=v[f],l[f](f))):i[f]=B(p);i=i.slice(0,r=c),s=u.slice(0)}return i});function p(c){if(o[f]=c,l){const[h,y]=fe(f);return l[f]=y,t(u[f],h)}return t(u[f])}}}function Fe(e,t){return j(()=>e(t))}function Ke(e){const t="fallback"in e&&{fallback:()=>e.fallback};return X(Te(()=>e.each,e.children,t||void 0))}function qe(e){let t=!1;const n=X(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return X(()=>{const s=n();if(s){const i=e.children;return(t=typeof i=="function"&&i.length>0)?j(()=>i(s)):i}return e.fallback})}function De(e,t,n){let s=n.length,i=t.length,o=s,r=0,l=0,u=t[i-1].nextSibling,a=null;for(;r<i||l<o;){if(t[r]===n[l]){r++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===r){const f=o<s?l?n[l-1].nextSibling:n[o-l]:u;for(;l<o;)e.insertBefore(n[l++],f)}else if(o===l)for(;r<i;)(!a||!a.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[l]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--o],f),t[i]=n[o]}else{if(!a){a=new Map;let p=l;for(;p<o;)a.set(n[p],p++)}const f=a.get(t[r]);if(f!=null)if(l<f&&f<o){let p=r,c=1,h;for(;++p<i&&p<o&&!((h=a.get(t[p]))==null||h!==f+c);)c++;if(c>f-l){const y=t[r];for(;l<f;)e.insertBefore(n[l++],y)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}const ie="_$DX_DELEGATE";function Ge(e,t,n){let s;return B(i=>{s=i,t===document?e():Pe(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function We(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function He(e,t=window.document){const n=t[ie]||(t[ie]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,_e))}}function Je(e,t,n,s){s?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,i=>n[0](n[1],i)):e.addEventListener(t,n)}function Pe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return K(e,t,s,n);V(i=>K(e,t(),i,n),s)}function _e(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s(i,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function K(e,t,n,s,i){for(D.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(D.context)return n;if(o==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=O(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(D.context)return n;n=O(e,n,s)}else{if(o==="function")return V(()=>{let l=t();for(;typeof l=="function";)l=l();n=K(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[];if(Q(l,t,i))return V(()=>n=K(e,l,n,s,!0)),()=>n;if(D.context){for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=O(e,n,s),r)return n}else Array.isArray(n)?n.length===0?oe(e,l,s):De(e,n,l):(n&&O(e),oe(e,l));n=l}else if(t instanceof Node){if(D.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=O(e,n,s,t);O(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Q(e,t,n){let s=!1;for(let i=0,o=t.length;i<o;i++){let r=t[i],l;if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))s=Q(e,r)||s;else if((l=typeof r)=="string")e.push(document.createTextNode(r));else if(l==="function")if(n){for(;typeof r=="function";)r=r();s=Q(e,Array.isArray(r)?r:[r])||s}else e.push(r),s=!0;else e.push(document.createTextNode(r.toString()))}return s}function oe(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function O(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const u=l.parentNode===e;!o&&!r?u?e.replaceChild(i,l):e.insertBefore(i,n):u&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}const pe=Symbol("store-raw"),q=Symbol("store-node"),me=Symbol("store-name");function be(e,t){let n=e[$];if(!n){Object.defineProperty(e,$,{value:n=new Proxy(e,Le)});const s=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let o=0,r=s.length;o<r;o++){const l=s[o];if(i[l].get){const u=i[l].get.bind(n);Object.defineProperty(e,l,{get:u})}}}return n}function G(e){return e!=null&&typeof e=="object"&&(e[$]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function W(e,t=new Set){let n,s,i,o;if(n=e!=null&&e[pe])return n;if(!G(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,l=e.length;r<l;r++)i=e[r],(s=W(i,t))!==i&&(e[r]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let u=0,a=r.length;u<a;u++)o=r[u],!l[o].get&&(i=e[o],(s=W(i,t))!==i&&(e[o]=s))}return e}function H(e){let t=e[q];return t||Object.defineProperty(e,q,{value:t={}}),t}function Ie(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===$||t===q||t===me||(delete n.value,delete n.writable,n.get=()=>e[$][t]),n}function je(e){if(ce()){const t=H(e);(t._||(t._=Y()))()}return Reflect.ownKeys(e)}function Y(){const[e,t]=fe(void 0,{equals:!1,internal:!0});return e.$=t,e}const Le={get(e,t,n){if(t===pe)return e;if(t===$)return n;const s=e[t];if(t===q||t==="__proto__")return s;const i=G(s);if(ce()&&(typeof s!="function"||e.hasOwnProperty(t))){let o,r;i&&(o=H(s))&&(r=o._||(o._=Y()),r()),o=H(e),r=o[t]||(o[t]=Y()),r()}return i?be(s):s},set(){return!0},deleteProperty(){return!0},ownKeys:je,getOwnPropertyDescriptor:Ie};function ye(e,t,n){if(e[t]===n)return;const s=Array.isArray(e),i=e.length,o=n===void 0,r=s||o===t in e;o?delete e[t]:e[t]=n;let l=H(e),u;(u=l[t])&&u.$(),s&&e.length!==i&&(u=l.length)&&u.$(),r&&(u=l._)&&u.$()}function ke(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const i=n[s];ye(e,i,t[i])}}function P(e,t,n=[]){let s,i=e;if(t.length>1){s=t.shift();const r=typeof s,l=Array.isArray(e);if(Array.isArray(s)){for(let u=0;u<s.length;u++)P(e,[s[u]].concat(t),n);return}else if(l&&r==="function"){for(let u=0;u<e.length;u++)s(e[u],u)&&P(e,[u].concat(t),n);return}else if(l&&r==="object"){const{from:u=0,to:a=e.length-1,by:f=1}=s;for(let p=u;p<=a;p+=f)P(e,[p].concat(t),n);return}else if(t.length>1){P(e[s],t,[s].concat(n));return}i=e[s],n=[s].concat(n)}let o=t[0];typeof o=="function"&&(o=o(i,n),o===i)||s===void 0&&o==null||(o=W(o),s===void 0||G(i)&&G(o)&&!Array.isArray(o)?ke(i,o):ye(e,s,o))}function Ve(e,t){const n=W(e||{}),s=be(n);function i(...o){ue(()=>P(n,o))}return[s,i]}const we={storageName:"satha-store-001"},ve={storageType:"",storageName:""},Xe=e=>{if(!e||e&&typeof e!="string"){console.error('setDefaultStorageName: name is a "string" value');return}we.storageName=e},Be=()=>we.storageName,Qe=(e,t,n=ve)=>{if(typeof localStorage>"u")return{get(){return""},set(){},reset(){},subscribe(){return"randomId"},unsubscribe(){}};if(!e||e&&typeof e!="string")return console.error('createStore: name is a "string" value'),{get(){return""},set(){},reset(){},subscribe(){return"randomId"},unsubscribe(){}};const s=n.storageType?n.storageType:"local",i=n.storageName?n.storageName:Be(),o=M(s,i);o[e]||(o[e]=t,J(s,i,o));const r=Re();return{get:()=>Me(s,i,e),set:c=>{const h=M(s,i),y=c(h[e]);h[e]=y,J(s,i,h),r.publish(y)},reset:()=>{const c=M(s,i);c[e]=t,J(s,i,c),r.publish(t)},subscribe:c=>{if(!c)return"";const h=`${Date.now()}`;return r.subscribe(h,c),h},unsubscribe:c=>{!c||r.unsubscribe(c)}}},M=(e,t)=>{const n=e==="session"?sessionStorage.getItem(t):localStorage.getItem(t);return JSON.parse(n||"{}")},Me=(e,t,n)=>M(e,t)[n],J=(e,t,n={})=>{const s=JSON.stringify(n);e==="session"?sessionStorage.setItem(t,s):localStorage.setItem(t,s)},Re=()=>{let e=[];function t(i){e.forEach(({id:o,callback:r})=>{o&&r&&r(i)})}function n(i,o){e.push({id:i,callback:o})}function s(i){e=e.filter(o=>o?.id!==i)}return{publish:t,subscribe:n,unsubscribe:s}};export{Ke as F,qe as S,Ve as a,Fe as b,Qe as c,V as d,He as e,Je as f,fe as g,xe as h,Pe as i,Ue as o,Ge as r,Xe as s,We as t};
