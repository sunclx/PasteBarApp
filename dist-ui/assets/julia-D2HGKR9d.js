import{g as H,r as J}from"./index-C9u_jP60.js";function K(p,s){for(var u=0;u<s.length;u++){const f=s[u];if(typeof f!="string"&&!Array.isArray(f)){for(const t in f)if(t!=="default"&&!(t in p)){const o=Object.getOwnPropertyDescriptor(f,t);o&&Object.defineProperty(p,t,o.get?o:{enumerable:!0,get:()=>f[t]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var Q={exports:{}};(function(p,s){(function(u){u(J())})(function(u){u.defineMode("julia",function(f,t){function o(n,e,i){return typeof i=="undefined"&&(i=""),typeof e=="undefined"&&(e="\\b"),new RegExp("^"+i+"(("+n.join(")|(")+"))"+e)}var b="\\\\[0-7]{1,3}",m="\\\\x[A-Fa-f0-9]{1,2}",y="\\\\[abefnrtv0%?'\"\\\\]",x="([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])",h=["[<>]:","[<>=]=","<<=?",">>>?=?","=>","--?>","<--[->]?","\\/\\/","\\.{2,3}","[\\.\\\\%*+\\-<>!\\/^|&]=?","\\?","\\$","~",":"],z=t.operators||o(["[<>]:","[<>=]=","[!=]==","<<=?",">>>?=?","=>?","--?>","<--[->]?","\\/\\/","[\\\\%*+\\-<>!\\/^|&\\u00F7\\u22BB]=?","\\?","\\$","~",":","\\u00D7","\\u2208","\\u2209","\\u220B","\\u220C","\\u2218","\\u221A","\\u221B","\\u2229","\\u222A","\\u2260","\\u2264","\\u2265","\\u2286","\\u2288","\\u228A","\\u22C5","\\b(in|isa)\\b(?!.?\\()"],""),E=t.delimiters||/^[;,()[\]{}]/,_=t.identifiers||/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,A=o([b,m,y,x],"'"),C=["begin","function","type","struct","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"],j=["end","else","elseif","catch","finally"],d=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","where","macro","module","baremodule","struct","type","mutable","immutable","quote","typealias","abstract","primitive","bitstype"],v=["true","false","nothing","NaN","Inf"];u.registerHelper("hintWords","julia",d.concat(v));var w=o(C),D=o(j),P=o(d),T=o(v),O=/^@[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,S=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,B=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/,$=o(h,"","@"),G=o(h,"",":");function k(n){return n.nestedArrays>0}function I(n){return n.nestedGenerators>0}function F(n,e){return typeof e=="undefined"&&(e=0),n.scopes.length<=e?null:n.scopes[n.scopes.length-(e+1)]}function a(n,e){if(n.match("#=",!1))return e.tokenize=q,e.tokenize(n,e);var i=e.leavingExpr;if(n.sol()&&(i=!1),e.leavingExpr=!1,i&&n.match(/^'+/))return"operator";if(n.match(/\.{4,}/))return"error";if(n.match(/\.{1,3}/))return"operator";if(n.eatSpace())return null;var r=n.peek();if(r==="#")return n.skipToEnd(),"comment";if(r==="["&&(e.scopes.push("["),e.nestedArrays++),r==="("&&(e.scopes.push("("),e.nestedGenerators++),k(e)&&r==="]"){for(;e.scopes.length&&F(e)!=="[";)e.scopes.pop();e.scopes.pop(),e.nestedArrays--,e.leavingExpr=!0}if(I(e)&&r===")"){for(;e.scopes.length&&F(e)!=="(";)e.scopes.pop();e.scopes.pop(),e.nestedGenerators--,e.leavingExpr=!0}if(k(e)){if(e.lastToken=="end"&&n.match(":"))return"operator";if(n.match("end"))return"number"}var c;if((c=n.match(w,!1))&&e.scopes.push(c[0]),n.match(D,!1)&&e.scopes.pop(),n.match(/^::(?![:\$])/))return e.tokenize=Z,e.tokenize(n,e);if(!i&&(n.match(S)||n.match(G)))return"builtin";if(n.match(z))return"operator";if(n.match(/^\.?\d/,!1)){var U=RegExp(/^im\b/),l=!1;if(n.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(l=!0),n.match(/^0x[0-9a-f_]+/i)&&(l=!0),n.match(/^0b[01_]+/i)&&(l=!0),n.match(/^0o[0-7_]+/i)&&(l=!0),n.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(l=!0),n.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(l=!0),l)return n.match(U),e.leavingExpr=!0,"number"}if(n.match("'"))return e.tokenize=N,e.tokenize(n,e);if(n.match(B))return e.tokenize=R(n.current()),e.tokenize(n,e);if(n.match(O)||n.match($))return"meta";if(n.match(E))return null;if(n.match(P))return"keyword";if(n.match(T))return"builtin";var W=e.isDefinition||e.lastToken=="function"||e.lastToken=="macro"||e.lastToken=="type"||e.lastToken=="struct"||e.lastToken=="immutable";return n.match(_)?W?n.peek()==="."?(e.isDefinition=!0,"variable"):(e.isDefinition=!1,"def"):(e.leavingExpr=!0,"variable"):(n.next(),"error")}function Z(n,e){return n.match(/.*?(?=[,;{}()=\s]|$)/),n.match("{")?e.nestedParameters++:n.match("}")&&e.nestedParameters>0&&e.nestedParameters--,e.nestedParameters>0?n.match(/.*?(?={|})/)||n.next():e.nestedParameters==0&&(e.tokenize=a),"builtin"}function q(n,e){return n.match("#=")&&e.nestedComments++,n.match(/.*?(?=(#=|=#))/)||n.skipToEnd(),n.match("=#")&&(e.nestedComments--,e.nestedComments==0&&(e.tokenize=a)),"comment"}function N(n,e){var i=!1,r;if(n.match(A))i=!0;else if(r=n.match(/\\u([a-f0-9]{1,4})(?=')/i)){var c=parseInt(r[1],16);(c<=55295||c>=57344)&&(i=!0,n.next())}else if(r=n.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){var c=parseInt(r[1],16);c<=1114111&&(i=!0,n.next())}return i?(e.leavingExpr=!0,e.tokenize=a,"string"):(n.match(/^[^']+(?=')/)||n.skipToEnd(),n.match("'")&&(e.tokenize=a),"error")}function R(n){n.substr(-3)==='"""'?n='"""':n.substr(-1)==='"'&&(n='"');function e(i,r){if(i.eat("\\"))i.next();else{if(i.match(n))return r.tokenize=a,r.leavingExpr=!0,"string";i.eat(/[`"]/)}return i.eatWhile(/[^\\`"]/),"string"}return e}var M={startState:function(){return{tokenize:a,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,firstParenPos:-1}},token:function(n,e){var i=e.tokenize(n,e),r=n.current();return r&&i&&(e.lastToken=r),i},indent:function(n,e){var i=0;return(e==="]"||e===")"||/^end\b/.test(e)||/^else/.test(e)||/^catch\b/.test(e)||/^elseif\b/.test(e)||/^finally/.test(e))&&(i=-1),(n.scopes.length+i)*f.indentUnit},electricInput:/\b(end|else|catch|finally)\b/,blockCommentStart:"#=",blockCommentEnd:"=#",lineComment:"#",closeBrackets:'()[]{}""',fold:"indent"};return M}),u.defineMIME("text/x-julia","julia")})})();var g=Q.exports;const V=H(g),Y=K({__proto__:null,default:V},[g]);export{Y as j};
