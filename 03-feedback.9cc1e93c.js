function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function g(t,e,n){var o,r,i,u,a,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,i=r;return o=r=void 0,c=e,u=t.apply(i,n)}function j(t){return c=t,a=setTimeout(S,e),l?y(t):u}function x(t){var n=t-f;return void 0===f||n>=e||n<0||s&&t-c>=i}function S(){var t=p();if(x(t))return T(t);a=setTimeout(S,function(t){var n=e-(t-f);return s?m(n,i-(t-c)):n}(t))}function T(t){return a=void 0,g&&o?y(t):(o=r=void 0,u)}function h(){var t=p(),n=x(t);if(o=arguments,r=this,f=t,n){if(void 0===a)return j(f);if(s)return a=setTimeout(S,e),y(f)}return void 0===a&&(a=setTimeout(S,e)),u}return e=b(e)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},h.flush=function(){return void 0===a?u:T(p())},h}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||u.test(t)?a(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};const y={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector("input"),textarea:document.querySelector("textarea"),submitButton:document.querySelector("button")};y.form.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),console.log("Отправляем форму")})),y.textarea.addEventListener("input",t(e)((function(t){const e=t.target.value;localStorage.setItem("feedback-form-state",e)}),1e3)),y.form.addEventListener("input",(function(t){const e={};e[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e)),console.log(e)}));!function(){const t=localStorage.getItem("feedback-form-state");t&&console.log(t)}();
//# sourceMappingURL=03-feedback.9cc1e93c.js.map