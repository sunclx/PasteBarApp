import{g as w,c as j}from"./index-CQwUtl0p.js";function z(f,s){for(var c=0;c<s.length;c++){const l=s[c];if(typeof l!="string"&&!Array.isArray(l)){for(const u in l)if(u!=="default"&&!(u in f)){const i=Object.getOwnPropertyDescriptor(l,u);i&&Object.defineProperty(f,u,i.get?i:{enumerable:!0,get:()=>l[u]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var E={exports:{}};(function(f,s){(function(c){c(j)})(function(c){c.defineMode("q",function(l){var u=l.indentUnit,i,a=g(["abs","acos","aj","aj0","all","and","any","asc","asin","asof","atan","attr","avg","avgs","bin","by","ceiling","cols","cor","cos","count","cov","cross","csv","cut","delete","deltas","desc","dev","differ","distinct","div","do","each","ej","enlist","eval","except","exec","exit","exp","fby","fills","first","fkeys","flip","floor","from","get","getenv","group","gtime","hclose","hcount","hdel","hopen","hsym","iasc","idesc","if","ij","in","insert","inter","inv","key","keys","last","like","list","lj","load","log","lower","lsq","ltime","ltrim","mavg","max","maxs","mcount","md5","mdev","med","meta","min","mins","mmax","mmin","mmu","mod","msum","neg","next","not","null","or","over","parse","peach","pj","plist","prd","prds","prev","prior","rand","rank","ratios","raze","read0","read1","reciprocal","reverse","rload","rotate","rsave","rtrim","save","scan","select","set","setenv","show","signum","sin","sqrt","ss","ssr","string","sublist","sum","sums","sv","system","tables","tan","til","trim","txf","type","uj","ungroup","union","update","upper","upsert","value","var","view","views","vs","wavg","where","where","while","within","wj","wj1","wsum","xasc","xbar","xcol","xcols","xdesc","xexp","xgroup","xkey","xlog","xprev","xrank"]),k=/[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;function g(e){return new RegExp("^("+e.join("|")+")$")}function d(e,n){var o=e.sol(),t=e.next();if(i=null,o){if(t=="/")return(n.tokenize=m)(e,n);if(t=="\\")return e.eol()||/\s/.test(e.peek())?(e.skipToEnd(),/^\\\s*$/.test(e.current())?(n.tokenize=y)(e):n.tokenize=d,"comment"):(n.tokenize=d,"builtin")}if(/\s/.test(t))return e.peek()=="/"?(e.skipToEnd(),"comment"):"whitespace";if(t=='"')return(n.tokenize=b)(e,n);if(t=="`")return e.eatWhile(/[A-Za-z\d_:\/.]/),"symbol";if(t=="."&&/\d/.test(e.peek())||/\d/.test(t)){var r=null;return e.backUp(1),e.match(/^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/)||e.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/)||e.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/)||e.match(/^\d+[ptuv]{1}/)?r="temporal":(e.match(/^0[NwW]{1}/)||e.match(/^0x[\da-fA-F]*/)||e.match(/^[01]+[b]{1}/)||e.match(/^\d+[chijn]{1}/)||e.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/))&&(r="number"),r&&(!(t=e.peek())||k.test(t))?r:(e.next(),"error")}return/[A-Za-z]|\./.test(t)?(e.eatWhile(/[A-Za-z._\d]/),a.test(e.current())?"keyword":"variable"):/[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(t)||/[{}\(\[\]\)]/.test(t)?null:"error"}function m(e,n){return e.skipToEnd(),/\/\s*$/.test(e.current())?(n.tokenize=h)(e,n):n.tokenize=d,"comment"}function h(e,n){var o=e.sol()&&e.peek()=="\\";return e.skipToEnd(),o&&/^\\\s*$/.test(e.current())&&(n.tokenize=d),"comment"}function y(e){return e.skipToEnd(),"comment"}function b(e,n){for(var o=!1,t,r=!1;t=e.next();){if(t=='"'&&!o){r=!0;break}o=!o&&t=="\\"}return r&&(n.tokenize=d),"string"}function p(e,n,o){e.context={prev:e.context,indent:e.indent,col:o,type:n}}function x(e){e.indent=e.context.indent,e.context=e.context.prev}return{startState:function(){return{tokenize:d,context:null,indent:0,col:0}},token:function(e,n){e.sol()&&(n.context&&n.context.align==null&&(n.context.align=!1),n.indent=e.indentation());var o=n.tokenize(e,n);if(o!="comment"&&n.context&&n.context.align==null&&n.context.type!="pattern"&&(n.context.align=!0),i=="(")p(n,")",e.column());else if(i=="[")p(n,"]",e.column());else if(i=="{")p(n,"}",e.column());else if(/[\]\}\)]/.test(i)){for(;n.context&&n.context.type=="pattern";)x(n);n.context&&i==n.context.type&&x(n)}else i=="."&&n.context&&n.context.type=="pattern"?x(n):/atom|string|variable/.test(o)&&n.context&&(/[\}\]]/.test(n.context.type)?p(n,"pattern",e.column()):n.context.type=="pattern"&&!n.context.align&&(n.context.align=!0,n.context.col=e.column()));return o},indent:function(e,n){var o=n&&n.charAt(0),t=e.context;if(/[\]\}]/.test(o))for(;t&&t.type=="pattern";)t=t.prev;var r=t&&o==t.type;return t?t.type=="pattern"?t.col:t.align?t.col+(r?0:1):t.indent+(r?0:u):0}}}),c.defineMIME("text/x-q","q")})})();var v=E.exports;const q=w(v),T=z({__proto__:null,default:q},[v]);export{T as q};
