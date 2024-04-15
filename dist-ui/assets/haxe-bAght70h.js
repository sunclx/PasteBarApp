import{g as ve,r as me}from"./index-BxW_fXwe.js";function ke(E,j){for(var m=0;m<j.length;m++){const u=j[m];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in E)){const v=Object.getOwnPropertyDescriptor(u,c);v&&Object.defineProperty(E,c,v.get?v:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}))}var ge={exports:{}};(function(E,j){(function(m){m(me())})(function(m){m.defineMode("haxe",function(u,c){var v=u.indentUnit;function a(e){return{type:e,style:"keyword"}}var y=a("keyword a"),P=a("keyword b"),A=a("keyword c"),ee=a("operator"),D={type:"atom",style:"atom"},O={type:"attribute",style:"attribute"},s=a("typedef"),$={if:y,while:y,else:P,do:P,try:P,return:A,break:A,continue:A,new:A,throw:A,var:a("var"),inline:O,static:O,using:a("import"),public:O,private:O,cast:a("cast"),import:a("import"),macro:a("macro"),function:a("function"),catch:a("catch"),untyped:a("untyped"),callback:a("cb"),for:a("for"),switch:a("switch"),case:a("case"),default:a("default"),in:ee,never:a("property_access"),trace:a("trace"),class:s,abstract:s,enum:s,interface:s,typedef:s,extends:s,implements:s,dynamic:s,true:D,false:D,null:D},Z=/[+\-*&%=<>!?|]/;function F(e,r,t){return r.tokenize=t,t(e,r)}function H(e,r){for(var t=!1,i;(i=e.next())!=null;){if(i==r&&!t)return!0;t=!t&&i=="\\"}}var s,L;function p(e,r,t){return s=e,L=t,r}function T(e,r){var t=e.next();if(t=='"'||t=="'")return F(e,r,re(t));if(/[\[\]{}\(\),;\:\.]/.test(t))return p(t);if(t=="0"&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),p("number","number");if(/\d/.test(t)||t=="-"&&e.eat(/\d/))return e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),p("number","number");if(r.reAllowed&&t=="~"&&e.eat(/\//))return H(e,"/"),e.eatWhile(/[gimsu]/),p("regexp","string-2");if(t=="/")return e.eat("*")?F(e,r,te):e.eat("/")?(e.skipToEnd(),p("comment","comment")):(e.eatWhile(Z),p("operator",null,e.current()));if(t=="#")return e.skipToEnd(),p("conditional","meta");if(t=="@")return e.eat(/:/),e.eatWhile(/[\w_]/),p("metadata","meta");if(Z.test(t))return e.eatWhile(Z),p("operator",null,e.current());var i;if(/[A-Z]/.test(t))return e.eatWhile(/[\w_<>]/),i=e.current(),p("type","variable-3",i);e.eatWhile(/[\w_]/);var i=e.current(),x=$.propertyIsEnumerable(i)&&$[i];return x&&r.kwAllowed?p(x.type,x.style,i):p("variable","variable",i)}function re(e){return function(r,t){return H(r,e)&&(t.tokenize=T),p("string","string")}}function te(e,r){for(var t=!1,i;i=e.next();){if(i=="/"&&t){r.tokenize=T;break}t=i=="*"}return p("comment","comment")}var q={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function N(e,r,t,i,x,h){this.indented=e,this.column=r,this.type=t,this.prev=x,this.info=h,i!=null&&(this.align=i)}function ne(e,r){for(var t=e.localVars;t;t=t.next)if(t.name==r)return!0}function ie(e,r,t,i,x){var h=e.cc;for(o.state=e,o.stream=x,o.marked=null,o.cc=h,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;){var be=h.length?h.pop():w;if(be(t,i)){for(;h.length&&h[h.length-1].lex;)h.pop()();return o.marked?o.marked:t=="variable"&&ne(e,i)?"variable-2":t=="variable"&&ue(e,i)?"variable-3":r}}}function ue(e,r){if(/[a-z]/.test(r.charAt(0)))return!1;for(var t=e.importedtypes.length,i=0;i<t;i++)if(e.importedtypes[i]==r)return!0}function G(e){for(var r=o.state,t=r.importedtypes;t;t=t.next)if(t.name==e)return;r.importedtypes={name:e,next:r.importedtypes}}var o={state:null,column:null,marked:null,cc:null};function g(){for(var e=arguments.length-1;e>=0;e--)o.cc.push(arguments[e])}function n(){return g.apply(null,arguments),!0}function J(e,r){for(var t=r;t;t=t.next)if(t.name==e)return!0;return!1}function _(e){var r=o.state;if(r.context){if(o.marked="def",J(e,r.localVars))return;r.localVars={name:e,next:r.localVars}}else if(r.globalVars){if(J(e,r.globalVars))return;r.globalVars={name:e,next:r.globalVars}}}var ae={name:"this",next:null};function I(){o.state.context||(o.state.localVars=ae),o.state.context={prev:o.state.context,vars:o.state.localVars}}function z(){o.state.localVars=o.state.context.vars,o.state.context=o.state.context.prev}z.lex=!0;function l(e,r){var t=function(){var i=o.state;i.lexical=new N(i.indented,o.stream.column(),e,null,i.lexical,r)};return t.lex=!0,t}function f(){var e=o.state;e.lexical.prev&&(e.lexical.type==")"&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}f.lex=!0;function d(e){function r(t){return t==e?n():e==";"?g():n(r)}return r}function w(e){return e=="@"?n(B):e=="var"?n(l("vardef"),U,d(";"),f):e=="keyword a"?n(l("form"),b,w,f):e=="keyword b"?n(l("form"),w,f):e=="{"?n(l("}"),I,C,f,z):e==";"?n():e=="attribute"?n(K):e=="function"?n(S):e=="for"?n(l("form"),d("("),l(")"),de,d(")"),f,w,f):e=="variable"?n(l("stat"),le):e=="switch"?n(l("form"),b,l("}","switch"),d("{"),C,f,f):e=="case"?n(b,d(":")):e=="default"?n(d(":")):e=="catch"?n(l("form"),I,d("("),X,d(")"),w,f,z):e=="import"?n(Q,d(";")):e=="typedef"?n(fe):g(l("stat"),b,d(";"),f)}function b(e){return q.hasOwnProperty(e)||e=="type"?n(k):e=="function"?n(S):e=="keyword c"?n(M):e=="("?n(l(")"),M,d(")"),f,k):e=="operator"?n(b):e=="["?n(l("]"),V(M,"]"),f,k):e=="{"?n(l("}"),V(se,"}"),f,k):n()}function M(e){return e.match(/[;\}\)\],]/)?g():g(b)}function k(e,r){if(e=="operator"&&/\+\+|--/.test(r))return n(k);if(e=="operator"||e==":")return n(b);if(e!=";"){if(e=="(")return n(l(")"),V(b,")"),f,k);if(e==".")return n(ce,k);if(e=="[")return n(l("]"),b,d("]"),f,k)}}function K(e){if(e=="attribute")return n(K);if(e=="function")return n(S);if(e=="var")return n(U)}function B(e){if(e==":"||e=="variable")return n(B);if(e=="(")return n(l(")"),V(oe,")"),f,w)}function oe(e){if(e=="variable")return n()}function Q(e,r){if(e=="variable"&&/[A-Z]/.test(r.charAt(0)))return G(r),n();if(e=="variable"||e=="property"||e=="."||r=="*")return n(Q)}function fe(e,r){if(e=="variable"&&/[A-Z]/.test(r.charAt(0)))return G(r),n();if(e=="type"&&/[A-Z]/.test(r.charAt(0)))return n()}function le(e){return e==":"?n(f,w):g(k,d(";"),f)}function ce(e){if(e=="variable")return o.marked="property",n()}function se(e){if(e=="variable"&&(o.marked="property"),q.hasOwnProperty(e))return n(d(":"),b)}function V(e,r){function t(i){return i==","?n(e,t):i==r?n():n(d(r))}return function(i){return i==r?n():g(e,t)}}function C(e){return e=="}"?n():g(w,C)}function U(e,r){return e=="variable"?(_(r),n(W,R)):n()}function R(e,r){if(r=="=")return n(b,R);if(e==",")return n(U)}function de(e,r){return e=="variable"?(_(r),n(pe,b)):g()}function pe(e,r){if(r=="in")return n()}function S(e,r){if(e=="variable"||e=="type")return _(r),n(S);if(r=="new")return n(S);if(e=="(")return n(l(")"),I,V(X,")"),f,W,w,z)}function W(e){if(e==":")return n(xe)}function xe(e){if(e=="type"||e=="variable")return n();if(e=="{")return n(l("}"),V(he,"}"),f)}function he(e){if(e=="variable")return n(W)}function X(e,r){if(e=="variable")return _(r),n(W)}return{startState:function(e){var r=["Int","Float","String","Void","Std","Bool","Dynamic","Array"],t={tokenize:T,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new N((e||0)-v,0,"block",!1),localVars:c.localVars,importedtypes:r,context:c.localVars&&{vars:c.localVars},indented:0};return c.globalVars&&typeof c.globalVars=="object"&&(t.globalVars=c.globalVars),t},token:function(e,r){if(e.sol()&&(r.lexical.hasOwnProperty("align")||(r.lexical.align=!1),r.indented=e.indentation()),e.eatSpace())return null;var t=r.tokenize(e,r);return s=="comment"?t:(r.reAllowed=!!(s=="operator"||s=="keyword c"||s.match(/^[\[{}\(,;:]$/)),r.kwAllowed=s!=".",ie(r,t,s,L,e))},indent:function(e,r){if(e.tokenize!=T)return 0;var t=r&&r.charAt(0),i=e.lexical;i.type=="stat"&&t=="}"&&(i=i.prev);var x=i.type,h=t==x;return x=="vardef"?i.indented+4:x=="form"&&t=="{"?i.indented:x=="stat"||x=="form"?i.indented+v:i.info=="switch"&&!h?i.indented+(/^(?:case|default)\b/.test(r)?v:2*v):i.align?i.column+(h?0:1):i.indented+(h?0:v)},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),m.defineMIME("text/x-haxe","haxe"),m.defineMode("hxml",function(){return{startState:function(){return{define:!1,inString:!1}},token:function(u,c){var y=u.peek(),v=u.sol();if(y=="#")return u.skipToEnd(),"comment";if(v&&y=="-"){var a="variable-2";return u.eat(/-/),u.peek()=="-"&&(u.eat(/-/),a="keyword a"),u.peek()=="D"&&(u.eat(/[D]/),a="keyword c",c.define=!0),u.eatWhile(/[A-Z]/i),a}var y=u.peek();return c.inString==!1&&y=="'"&&(c.inString=!0,u.next()),c.inString==!0?(u.skipTo("'")||u.skipToEnd(),u.peek()=="'"&&(u.next(),c.inString=!1),"string"):(u.next(),null)},lineComment:"#"}}),m.defineMIME("text/x-hxml","hxml")})})();var Y=ge.exports;const we=ve(Y),Ve=ke({__proto__:null,default:we},[Y]);export{Ve as h};
