function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var u=r("7Y9D8");const l={form:document.querySelector(".form"),delay:document.querySelector('.form input[name="delay"]'),step:document.querySelector('.form input[name="step"]'),amount:document.querySelector('.form input[name="amount"]')};function a(o,t){new Promise(((e,n)=>{setTimeout((()=>{Math.random()>.3?e({position:o,delay:t}):n({position:o,delay:t})}),t)})).then((({position:o,delay:t})=>{e(u).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(u).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}l.form.addEventListener("submit",(function(e){for(e.preventDefault(),i=1;i<=l.amount.value;i+=1)if(1===i)a(i,Number(l.delay.value));else{let e=Number(l.delay.value)+Number(l.step.value);a(i,e)}}));
//# sourceMappingURL=03-promises.f64bb16a.js.map
