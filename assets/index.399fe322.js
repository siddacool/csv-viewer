import{c as y,i as l,a as s,F as d,b as p,t as c,o as h,d as v,S as b,r as _}from"./vendor.a6591884.js";const g=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}};g();const $=(e="",o=",",a=!1)=>e.slice(a?e.indexOf(`
`)+1:0).split(`
`).map(n=>n.split(o)),u=async e=>{if((e.ctrlKey||e.metaKey)&&e.keyCode==86)try{const o=await navigator.clipboard.readText();C(o)}catch(o){console.log(o)}},[w,S]=y({data:[]}),m=w,C=(e="")=>{const o=$(e);S("data",()=>o)},N="_CSVTable_9hof8_1";var V={CSVTable:N};const L=c("<table><tbody></tbody></table>"),O=c("<tr></tr>"),T=c("<td></td>"),k=()=>(()=>{const e=L.cloneNode(!0),o=e.firstChild;return l(o,s(d,{get each(){return m.data},children:a=>(()=>{const n=O.cloneNode(!0);return l(n,s(d,{each:a,children:t=>(()=>{const r=T.cloneNode(!0);return l(r,t),r})()})),n})()})),p(()=>e.className=V.CSVTable),e})(),D=c("<div></div>"),E=()=>(()=>{const e=D.cloneNode(!0);return l(e,s(k,{})),e})(),x="_view_1l3kr_1";var A={view:x};const F=c("<div>open</div>"),K=()=>(()=>{const e=F.cloneNode(!0);return p(()=>e.className=A.view),e})(),f=document.querySelector("body"),M=()=>(h(()=>{f?.addEventListener("keydown",u)}),v(()=>{f?.removeEventListener("keydown",u)}),s(b,{get when(){return m.data.length},get fallback(){return s(K,{})},get children(){return s(E,{})}}));_(()=>s(M,{}),document.getElementById("root"));
