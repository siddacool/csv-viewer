if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const l=e=>n(e,r),t={module:{uri:r},exports:o,require:l};i[r]=Promise.all(s.map((e=>t[e]||l(e)))).then((e=>(c(...e),o)))}}define(["./workbox-65baee44"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.ac92cb17.js",revision:null},{url:"assets/index.b4ca6f36.css",revision:null},{url:"assets/vendor.99c71ca2.js",revision:null},{url:"google573023f379f7259c.html",revision:"9aa04358bda9e51f756f1627aa9fa869"},{url:"index.html",revision:"dbf4948b1dad326f2cc4dc66729500c8"},{url:"favicon.ico",revision:"611c2d6c0cee16fc5ee53c6b059d214f"},{url:"apple-touch-icon.png",revision:"854279ef45be8df360d1c5b40d1f90ab"},{url:"android-chrome-192x192.png",revision:"cf1a392e54529ba591b74cf14a808745"},{url:"android-chrome-512x512.png",revision:"161cd98907d628c35f300409acca9465"},{url:"manifest.webmanifest",revision:"3ba355b2a69c3a2be9af4c767eb3afc2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
