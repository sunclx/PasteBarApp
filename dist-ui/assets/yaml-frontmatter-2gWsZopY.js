import{g,r as v}from"./index-D1o0vJsP.js";import{a as b}from"./yaml-BhOaZqtx.js";function k(u,f){for(var n=0;n<f.length;n++){const a=f[n];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in u)){const o=Object.getOwnPropertyDescriptor(a,r);o&&Object.defineProperty(u,r,o.get?o:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var S={exports:{}};(function(u,f){(function(n){n(v(),b)})(function(n){var a=0,r=1,o=2;n.defineMode("yaml-frontmatter",function(s,d){var l=n.getMode(s,"yaml"),m=n.getMode(s,d&&d.base||"gfm");function y(e){return e.state==r?{mode:l,state:e.yaml}:{mode:m,state:e.inner}}return{startState:function(){return{state:a,yaml:null,inner:n.startState(m)}},copyState:function(e){return{state:e.state,yaml:e.yaml&&n.copyState(l,e.yaml),inner:n.copyState(m,e.inner)}},token:function(e,t){if(t.state==a)return e.match("---",!1)?(t.state=r,t.yaml=n.startState(l),l.token(e,t.yaml)):(t.state=o,m.token(e,t.inner));if(t.state==r){var c=e.sol()&&e.match(/(---|\.\.\.)/,!1),i=l.token(e,t.yaml);return c&&(t.state=o,t.yaml=null),i}else return m.token(e,t.inner)},innerMode:y,indent:function(e,t,c){var i=y(e);return i.mode.indent?i.mode.indent(i.state,t,c):n.Pass},blankLine:function(e){var t=y(e);if(t.mode.blankLine)return t.mode.blankLine(t.state)}}})})})();var p=S.exports;const x=g(p),T=k({__proto__:null,default:x},[p]);export{T as y};
