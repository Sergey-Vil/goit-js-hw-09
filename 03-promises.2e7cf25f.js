function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=l);var r=l("eWCmQ");function i(e,o){const t=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{t?n({position:e,delay:o}):l({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();const t=Number(o.target.elements.delay.value),n=Number(o.target.elements.step.value),l=Number(o.target.elements.amount.value);console.log(t),console.log(n),console.log(l);for(let o=0;o<l;o++)console.log(o),i(o,t+n*o).then((({position:o,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${o+1} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${o+1} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.2e7cf25f.js.map
