function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const u=document.querySelector('[name="delay"]'),l=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');function a(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o&&n({position:e,delay:t}),r({position:e,delay:t})}),t)}))}function s(t,o){e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,{timeout:1e3})}function c(t,o){e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{timeout:1e3})}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=Number(u.value),o=Number(l.value),n=Number(d.value);let r=t;for(let e=1;e<=n;e++)a(e,r).then((({position:e,delay:t})=>{s(e,t)})).catch((({position:e,delay:t})=>{c(e,t)})),r+=o}));
//# sourceMappingURL=03-promises.c160feb4.js.map
