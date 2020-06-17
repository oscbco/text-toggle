!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.TextToggle=t(require("react")):e.TextToggle=t(e.React)}(window,function(r){return l={},o.m=n=[function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;var n,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e){var l;Object.prototype.hasOwnProperty.call(e,o)&&((l=n?Object.getOwnPropertyDescriptor(e,o):null)&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o])}r.default=e,t&&t.set(e,r);return r}(r(2)),f=(n=r(3))&&n.__esModule?n:{default:n},a="/home/darkcode/Projects/libraries/text-toggle/source/TextToggle/TextToggle.js";function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function s(o){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?c(Object(l),!0).forEach(function(e){var t,r,n;t=o,n=l[r=e],r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(l,e))})}return o}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,l=void 0;try{for(var u,f=e[Symbol.iterator]();!(n=(u=f.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,l=e}finally{try{n||null==f.return||f.return()}finally{if(o)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(t){function e(e){return e.label||e.value}var r=m((0,l.useState)(t.defaultItem===t.rightItem.value||!1),2),n=r[0],o=r[1];return l.default.createElement("div",{className:f.default.textToggle,style:s({},t.style),onClick:function(){o(function(e){return t.onChange(e?t.leftItem.value:t.rightItem.value),!e})},__source:{fileName:a,lineNumber:17,columnNumber:5}},l.default.createElement("div",{className:f.default.toggle+" "+f.default.leftToggle,style:s({left:n?"-100%":"0%"},t.leftItem.style),__source:{fileName:a,lineNumber:18,columnNumber:7}},e(t.leftItem)),l.default.createElement("div",{className:f.default.toggle+" "+f.default.rightToggle,style:s({left:n?"0%":"100%"},t.rightItem.style),__source:{fileName:a,lineNumber:19,columnNumber:7}},e(t.rightItem)),l.default.createElement("div",{className:f.default.toggleGroup,__source:{fileName:a,lineNumber:20,columnNumber:7}},l.default.createElement("div",{className:f.default.extra,style:s({},t.leftItem.style),__source:{fileName:a,lineNumber:21,columnNumber:9}},e(t.leftItem)),l.default.createElement("div",{className:f.default.extra,style:s({},t.rightItem.style),__source:{fileName:a,lineNumber:22,columnNumber:9}},e(t.rightItem))))}b.defaultProps={defaultItem:!1,rightItem:{},leftItem:{},onChange:function(){}}},function(e,t){e.exports=r},function(e,t,r){e.exports={"text-toggle":"_229OTCga1b56bPPFe6-teO",textToggle:"_229OTCga1b56bPPFe6-teO",toggle:"_9OZ_D4AUaoXZlTjq_4oQf","left-toggle":"_2698xCKK4sbe0fCD6QSyjg",leftToggle:"_2698xCKK4sbe0fCD6QSyjg","right-toggle":"J906fV3PfZMzFZo6fGJQE",rightToggle:"J906fV3PfZMzFZo6fGJQE",extra:"bsf734T1slk-dcKwRXrDD","toggle-group":"WHBDNx5JOP-c9kKJTzbLO",toggleGroup:"WHBDNx5JOP-c9kKJTzbLO"}}],o.c=l,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./",o(o.s=0);function o(e){if(l[e])return l[e].exports;var t=l[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,l});