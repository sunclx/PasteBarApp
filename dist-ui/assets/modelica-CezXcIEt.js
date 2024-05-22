import{g as _,c as P}from"./index-CQwUtl0p.js";function W(h,g){for(var r=0;r<g.length;r++){const l=g[r];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in h)){const d=Object.getOwnPropertyDescriptor(l,c);d&&Object.defineProperty(h,c,d.get?d:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var j={exports:{}};(function(h,g){(function(r){r(P)})(function(r){r.defineMode("modelica",function(o,t){var u=o.indentUnit,a=t.keywords||{},p=t.builtin||{},k=t.atoms||{},v=/[;=\(:\),{}.*<>+\-\/^\[\]]/,w=/(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/,s=/[0-9]/,b=/[_a-zA-Z]/;function x(n,e){return n.skipToEnd(),e.tokenize=null,"comment"}function E(n,e){for(var i=!1,f;f=n.next();){if(i&&f=="/"){e.tokenize=null;break}i=f=="*"}return"comment"}function S(n,e){for(var i=!1,f;(f=n.next())!=null;){if(f=='"'&&!i){e.tokenize=null,e.sol=!1;break}i=!i&&f=="\\"}return"string"}function I(n,e){for(n.eatWhile(s);n.eat(s)||n.eat(b););var i=n.current();return e.sol&&(i=="package"||i=="model"||i=="when"||i=="connector")?e.level++:e.sol&&i=="end"&&e.level>0&&e.level--,e.tokenize=null,e.sol=!1,a.propertyIsEnumerable(i)?"keyword":p.propertyIsEnumerable(i)?"builtin":k.propertyIsEnumerable(i)?"atom":"variable"}function O(n,e){for(;n.eat(/[^']/););return e.tokenize=null,e.sol=!1,n.eat("'")?"variable":"error"}function D(n,e){return n.eatWhile(s),n.eat(".")&&n.eatWhile(s),(n.eat("e")||n.eat("E"))&&(n.eat("-")||n.eat("+"),n.eatWhile(s)),e.tokenize=null,e.sol=!1,"number"}return{startState:function(){return{tokenize:null,level:0,sol:!0}},token:function(n,e){if(e.tokenize!=null)return e.tokenize(n,e);if(n.sol()&&(e.sol=!0),n.eatSpace())return e.tokenize=null,null;var i=n.next();if(i=="/"&&n.eat("/"))e.tokenize=x;else if(i=="/"&&n.eat("*"))e.tokenize=E;else{if(w.test(i+n.peek()))return n.next(),e.tokenize=null,"operator";if(v.test(i))return e.tokenize=null,"operator";if(b.test(i))e.tokenize=I;else if(i=="'"&&n.peek()&&n.peek()!="'")e.tokenize=O;else if(i=='"')e.tokenize=S;else if(s.test(i))e.tokenize=D;else return e.tokenize=null,"error"}return e.tokenize(n,e)},indent:function(n,e){if(n.tokenize!=null)return r.Pass;var i=n.level;return/(algorithm)/.test(e)&&i--,/(equation)/.test(e)&&i--,/(initial algorithm)/.test(e)&&i--,/(initial equation)/.test(e)&&i--,/(end)/.test(e)&&i--,i>0?u*i:0},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}});function l(o){for(var t={},u=o.split(" "),a=0;a<u.length;++a)t[u[a]]=!0;return t}var c="algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within",d="abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh",y="Real Boolean Integer String";function z(o,t){typeof o=="string"&&(o=[o]);var u=[];function a(k){if(k)for(var v in k)k.hasOwnProperty(v)&&u.push(v)}a(t.keywords),a(t.builtin),a(t.atoms),u.length&&(t.helperType=o[0],r.registerHelper("hintWords",o[0],u));for(var p=0;p<o.length;++p)r.defineMIME(o[p],t)}z(["text/x-modelica"],{name:"modelica",keywords:l(c),builtin:l(d),atoms:l(y)})})})();var m=j.exports;const q=_(m),B=W({__proto__:null,default:q},[m]);export{B as m};
