if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const a=e=>s(e,o),l={module:{uri:o},exports:c,require:a};i[o]=Promise.all(n.map((e=>l[e]||a(e)))).then((e=>(r(...e),c)))}}define(["./workbox-65baee44"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.7ea42d8c.css",revision:null},{url:"assets/index.91337349.js",revision:null},{url:"assets/vendor.6af091ea.js",revision:null},{url:"google573023f379f7259c.html",revision:"9aa04358bda9e51f756f1627aa9fa869"},{url:"index.html",revision:"8bc29a757901ca670be73e07f70a4053"},{url:"registerSW.js",revision:"c0387e32bad5f3626ca0ebd32c3bf359"},{url:"favicon.ico",revision:"611c2d6c0cee16fc5ee53c6b059d214f"},{url:"apple-touch-icon.png",revision:"854279ef45be8df360d1c5b40d1f90ab"},{url:"android-chrome-192x192.png",revision:"cf1a392e54529ba591b74cf14a808745"},{url:"android-chrome-512x512.png",revision:"161cd98907d628c35f300409acca9465"},{url:"manifest.webmanifest",revision:"3ba355b2a69c3a2be9af4c767eb3afc2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
