import{g as u,r as l}from"./index-D1o0vJsP.js";function a(f,i){for(var t=0;t<i.length;t++){const o=i[t];if(typeof o!="string"&&!Array.isArray(o)){for(const e in o)if(e!=="default"&&!(e in f)){const r=Object.getOwnPropertyDescriptor(o,e);r&&Object.defineProperty(f,e,r.get?r:{enumerable:!0,get:()=>o[e]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var m={exports:{}};(function(f,i){(function(t){t(l())})(function(t){var o="><+-.,[]".split("");t.defineMode("brainfuck",function(){return{startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(e,r){if(e.eatSpace())return null;e.sol()&&(r.commentLine=!1);var n=e.next().toString();if(o.indexOf(n)!==-1){if(r.commentLine===!0)return e.eol()&&(r.commentLine=!1),"comment";if(n==="]"||n==="[")return n==="["?r.left++:r.right++,"bracket";if(n==="+"||n==="-")return"keyword";if(n==="<"||n===">")return"atom";if(n==="."||n===",")return"def"}else return r.commentLine=!0,e.eol()&&(r.commentLine=!1),"comment";e.eol()&&(r.commentLine=!1)}}}),t.defineMIME("text/x-brainfuck","brainfuck")})})();var c=m.exports;const s=u(c),b=a({__proto__:null,default:s},[c]);export{b};
