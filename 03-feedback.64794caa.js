!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),g=Object.prototype.toString,m=Math.max,v=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,i,a,u,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(h,t),s?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?v(n,a-(e-c)):n}(e))}function w(e){return f=void 0,g&&o?y(e):(o=i=void 0,u)}function T(){var e=p(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),O=document.querySelector("input"),h=document.querySelector("textarea");j.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(x))}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),console.log("email:",e.target.email.value),console.log("message:",e.target.message.value),e.target.reset(),localStorage.removeItem(T)}));var w,T="feedback-form-state",x=JSON.parse(localStorage.getItem(T))||{};(w=localStorage.getItem(T))&&(w=JSON.parse(w),console.log(w),console.log("email:",w.email),console.log("message:",w.message),O.value=w.email||"",h.value=w.message||"")}();
//# sourceMappingURL=03-feedback.64794caa.js.map
