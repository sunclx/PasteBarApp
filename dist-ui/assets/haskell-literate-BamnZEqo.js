import{g as f,c as u}from"./index-J0ARDW2i.js";import{a as c}from"./haskell-D2uIFN2V.js";function d(a,l){for(var e=0;e<l.length;e++){const r=l[e];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in a)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(a,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var p={exports:{}};(function(a,l){(function(e){e(u,c)})(function(e){e.defineMode("haskell-literate",function(r,t){var n=e.getMode(r,t&&t.base||"haskell");return{startState:function(){return{inCode:!1,baseState:e.startState(n)}},token:function(o,s){return o.sol()&&(s.inCode=o.eat(">"))?"meta":s.inCode?n.token(o,s.baseState):(o.skipToEnd(),"comment")},innerMode:function(o){return o.inCode?{state:o.baseState,mode:n}:null}}},"haskell"),e.defineMIME("text/x-literate-haskell","haskell-literate")})})();var i=p.exports;const k=f(i),m=d({__proto__:null,default:k},[i]);export{m as h};
