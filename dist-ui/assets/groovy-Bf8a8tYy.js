import{g as j,c as S}from"./index-BlJuq_SW.js";function $(a,k){for(var l=0;l<k.length;l++){const f=k[l];if(typeof f!="string"&&!Array.isArray(f)){for(const o in f)if(o!=="default"&&!(o in a)){const p=Object.getOwnPropertyDescriptor(f,o);p&&Object.defineProperty(a,o,p.get?p:{enumerable:!0,get:()=>f[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var I={exports:{}};(function(a,k){(function(l){l(S)})(function(l){l.defineMode("groovy",function(f){function o(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0;return n}var p=o("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"),C=o("catch class def do else enum finally for if interface switch trait try while"),O=o("return break continue"),T=o("null true false this"),i;function v(e,n){var t=e.next();if(t=='"'||t=="'")return x(t,e,n);if(/[\[\]{}\(\),;\:\.]/.test(t))return i=t,null;if(/\d/.test(t))return e.eatWhile(/[\w\.]/),e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number";if(t=="/"){if(e.eat("*"))return n.tokenize.push(w),w(e,n);if(e.eat("/"))return e.skipToEnd(),"comment";if(g(n.lastToken,!1))return x(t,e,n)}if(t=="-"&&e.eat(">"))return i="->",null;if(/[+\-*&%=<>!?|\/~]/.test(t))return e.eatWhile(/[+\-*&%=<>|~]/),"operator";if(e.eatWhile(/[\w\$_]/),t=="@")return e.eatWhile(/[\w\$_\.]/),"meta";if(n.lastToken==".")return"property";if(e.eat(":"))return i="proplabel","property";var r=e.current();return T.propertyIsEnumerable(r)?"atom":p.propertyIsEnumerable(r)?(C.propertyIsEnumerable(r)?i="newstatement":O.propertyIsEnumerable(r)&&(i="standalone"),"keyword"):"variable"}v.isBase=!0;function x(e,n,t){var r=!1;if(e!="/"&&n.eat(e))if(n.eat(e))r=!0;else return"string";function c(s,b){for(var y=!1,h,z=!r;(h=s.next())!=null;){if(h==e&&!y){if(!r)break;if(s.match(e+e)){z=!0;break}}if(e=='"'&&h=="$"&&!y){if(s.eat("{"))return b.tokenize.push(_()),"string";if(s.match(/^\w/,!1))return b.tokenize.push(B),"string"}y=!y&&h=="\\"}return z&&b.tokenize.pop(),"string"}return t.tokenize.push(c),c(n,t)}function _(){var e=1;function n(t,r){if(t.peek()=="}"){if(e--,e==0)return r.tokenize.pop(),r.tokenize[r.tokenize.length-1](t,r)}else t.peek()=="{"&&e++;return v(t,r)}return n.isBase=!0,n}function B(e,n){var t=e.match(/^(\.|[\w\$_]+)/);return t?t[0]=="."?null:"variable":(n.tokenize.pop(),n.tokenize[n.tokenize.length-1](e,n))}function w(e,n){for(var t=!1,r;r=e.next();){if(r=="/"&&t){n.tokenize.pop();break}t=r=="*"}return"comment"}function g(e,n){return!e||e=="operator"||e=="->"||/[\.\[\{\(,;:]/.test(e)||e=="newstatement"||e=="keyword"||e=="proplabel"||e=="standalone"&&!n}function m(e,n,t,r,c){this.indented=e,this.column=n,this.type=t,this.align=r,this.prev=c}function d(e,n,t){return e.context=new m(e.indented,n,t,null,e.context)}function u(e){var n=e.context.type;return(n==")"||n=="]"||n=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:[v],context:new m((e||0)-f.indentUnit,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(e,n){var t=n.context;if(e.sol()&&(t.align==null&&(t.align=!1),n.indented=e.indentation(),n.startOfLine=!0,t.type=="statement"&&!g(n.lastToken,!0)&&(u(n),t=n.context)),e.eatSpace())return null;i=null;var r=n.tokenize[n.tokenize.length-1](e,n);if(r=="comment")return r;if(t.align==null&&(t.align=!0),(i==";"||i==":")&&t.type=="statement")u(n);else if(i=="->"&&t.type=="statement"&&t.prev.type=="}")u(n),n.context.align=!1;else if(i=="{")d(n,e.column(),"}");else if(i=="[")d(n,e.column(),"]");else if(i=="(")d(n,e.column(),")");else if(i=="}"){for(;t.type=="statement";)t=u(n);for(t.type=="}"&&(t=u(n));t.type=="statement";)t=u(n)}else i==t.type?u(n):(t.type=="}"||t.type=="top"||t.type=="statement"&&i=="newstatement")&&d(n,e.column(),"statement");return n.startOfLine=!1,n.lastToken=i||r,r},indent:function(e,n){if(!e.tokenize[e.tokenize.length-1].isBase)return l.Pass;var t=n&&n.charAt(0),r=e.context;r.type=="statement"&&!g(e.lastToken,!0)&&(r=r.prev);var c=t==r.type;return r.type=="statement"?r.indented+(t=="{"?0:f.indentUnit):r.align?r.column+(c?0:1):r.indented+(c?0:f.indentUnit)},electricChars:"{}",closeBrackets:{triples:"'\""},fold:"brace",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),l.defineMIME("text/x-groovy","groovy")})})();var E=I.exports;const P=j(E),U=$({__proto__:null,default:P},[E]);export{U as g};
