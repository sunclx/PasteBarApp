import{g as _,c as O}from"./index-BlJuq_SW.js";function j(p,h){for(var a=0;a<h.length;a++){const r=h[a];if(typeof r!="string"&&!Array.isArray(r)){for(const f in r)if(f!=="default"&&!(f in p)){const o=Object.getOwnPropertyDescriptor(r,f);o&&Object.defineProperty(p,f,o.get?o:{enumerable:!0,get:()=>r[f]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var A={exports:{}};(function(p,h){(function(a){a(O)})(function(a){a.defineMode("elm",function(){function r(t,n,e){return n(e),e(t,n)}var f=/[a-z]/,o=/[A-Z]/,u=/[a-zA-Z0-9_]/,m=/[0-9]/,d=/[0-9A-Fa-f]/,g=/[-&*+.\\/<>=?^|:]/,w=/[(),[\]{}]/,E=/[ \v\f]/;function i(){return function(t,n){if(t.eatWhile(E))return null;var e=t.next();if(w.test(e))return e==="{"&&t.eat("-")?r(t,n,v(1)):e==="["&&t.match("glsl|")?r(t,n,W):"builtin";if(e==="'")return r(t,n,k);if(e==='"')return t.eat('"')?t.eat('"')?r(t,n,y):"string":r(t,n,b);if(o.test(e))return t.eatWhile(u),"variable-2";if(f.test(e)){var l=t.pos===1;return t.eatWhile(u),l?"def":"variable"}if(m.test(e)){if(e==="0"){if(t.eat(/[xX]/))return t.eatWhile(d),"number"}else t.eatWhile(m);return t.eat(".")&&t.eatWhile(m),t.eat(/[eE]/)&&(t.eat(/[-+]/),t.eatWhile(m)),"number"}return g.test(e)?e==="-"&&t.eat("-")?(t.skipToEnd(),"comment"):(t.eatWhile(g),"keyword"):e==="_"?"keyword":"error"}}function v(t){return t==0?i():function(n,e){for(;!n.eol();){var l=n.next();if(l=="{"&&n.eat("-"))++t;else if(l=="-"&&n.eat("}")&&(--t,t===0))return e(i()),"comment"}return e(v(t)),"comment"}}function y(t,n){for(;!t.eol();){var e=t.next();if(e==='"'&&t.eat('"')&&t.eat('"'))return n(i()),"string"}return"string"}function b(t,n){for(;t.skipTo('\\"');)t.next(),t.next();return t.skipTo('"')?(t.next(),n(i()),"string"):(t.skipToEnd(),n(i()),"error")}function k(t,n){for(;t.skipTo("\\'");)t.next(),t.next();return t.skipTo("'")?(t.next(),n(i()),"string"):(t.skipToEnd(),n(i()),"error")}function W(t,n){for(;!t.eol();){var e=t.next();if(e==="|"&&t.eat("]"))return n(i()),"string"}return"string"}var R={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};return{startState:function(){return{f:i()}},copyState:function(t){return{f:t.f}},lineComment:"--",token:function(t,n){var e=n.f(t,function(T){n.f=T}),l=t.current();return R.hasOwnProperty(l)?"keyword":e}}}),a.defineMIME("text/x-elm","elm")})})();var x=A.exports;const M=_(x),P=j({__proto__:null,default:M},[x]);export{P as e};
