function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");let u=0;const l={form:document.querySelector(".form"),delay:document.querySelector('.form input[name="delay"]'),step:document.querySelector('.form input[name="step"]'),amount:document.querySelector('.form input[name="amount"]')};function a(o,t){new Promise(((e,n)=>{setTimeout((()=>{Math.random()>.3?e({position:o,delay:t}):n({position:o,delay:t})}),t)})).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}l.form.addEventListener("submit",(function(e){e.preventDefault();for(let e=1;e<=l.amount.value;e+=1)1===e?(u=Number(l.delay.value),a(e,u)):(u+=Number(l.step.value),a(e,u))}));
//# sourceMappingURL=03-promises.29c50cf0.js.map
