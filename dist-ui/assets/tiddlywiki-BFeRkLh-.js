import{g as A,c as O}from"./index-BpwibWGg.js";function B(d,k){for(var o=0;o<k.length;o++){const c=k[o];if(typeof c!="string"&&!Array.isArray(c)){for(const f in c)if(f!=="default"&&!(f in d)){const l=Object.getOwnPropertyDescriptor(c,f);l&&Object.defineProperty(d,f,l.get?l:{enumerable:!0,get:()=>c[f]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var M={exports:{}};(function(d,k){(function(o){o(O)})(function(o){o.defineMode("tiddlywiki",function(){var c={},f={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},l=/[\w_\-]/i,p=/^\-\-\-\-+$/,w=/^\/\*\*\*$/,b=/^\*\*\*\/$/,y=/^<<<$/,g=/^\/\/\{\{\{$/,v=/^\/\/\}\}\}$/,x=/^<!--\{\{\{-->$/,m=/^<!--\}\}\}-->$/,S=/^\{\{\{$/,$=/^\}\}\}$/,_=/.*?\}\}\}/;function u(e,n,r){return n.tokenize=r,r(e,n)}function i(e,n){var r=e.sol(),t=e.peek();if(n.block=!1,r&&/[<\/\*{}\-]/.test(t)){if(e.match(S))return n.block=!0,u(e,n,h);if(e.match(y))return"quote";if(e.match(w)||e.match(b)||e.match(g)||e.match(v)||e.match(x)||e.match(m))return"comment";if(e.match(p))return"hr"}if(e.next(),r&&/[\/\*!#;:>|]/.test(t)){if(t=="!")return e.skipToEnd(),"header";if(t=="*")return e.eatWhile("*"),"comment";if(t=="#")return e.eatWhile("#"),"comment";if(t==";")return e.eatWhile(";"),"comment";if(t==":")return e.eatWhile(":"),"comment";if(t==">")return e.eatWhile(">"),"quote";if(t=="|")return"header"}if(t=="{"&&e.match("{{"))return u(e,n,h);if(/[hf]/i.test(t)&&/[ti]/i.test(e.peek())&&e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if(t=='"')return"string";if(t=="~"||/[\[\]]/.test(t)&&e.match(t))return"brace";if(t=="@")return e.eatWhile(l),"link";if(/\d/.test(t))return e.eatWhile(/\d/),"number";if(t=="/"){if(e.eat("%"))return u(e,n,z);if(e.eat("/"))return u(e,n,C)}if(t=="_"&&e.eat("_"))return u(e,n,T);if(t=="-"&&e.eat("-")){if(e.peek()!=" ")return u(e,n,W);if(e.peek()==" ")return"brace"}return t=="'"&&e.eat("'")?u(e,n,E):t=="<"&&e.eat("<")?u(e,n,j):(e.eatWhile(/[\w\$_]/),c.propertyIsEnumerable(e.current())?"keyword":null)}function z(e,n){for(var r=!1,t;t=e.next();){if(t=="/"&&r){n.tokenize=i;break}r=t=="%"}return"comment"}function E(e,n){for(var r=!1,t;t=e.next();){if(t=="'"&&r){n.tokenize=i;break}r=t=="'"}return"strong"}function h(e,n){var r=n.block;return r&&e.current()?"comment":!r&&e.match(_)||r&&e.sol()&&e.match($)?(n.tokenize=i,"comment"):(e.next(),"comment")}function C(e,n){for(var r=!1,t;t=e.next();){if(t=="/"&&r){n.tokenize=i;break}r=t=="/"}return"em"}function T(e,n){for(var r=!1,t;t=e.next();){if(t=="_"&&r){n.tokenize=i;break}r=t=="_"}return"underlined"}function W(e,n){for(var r=!1,t;t=e.next();){if(t=="-"&&r){n.tokenize=i;break}r=t=="-"}return"strikethrough"}function j(e,n){if(e.current()=="<<")return"macro";var r=e.next();return r?r==">"&&e.peek()==">"?(e.next(),n.tokenize=i,"macro"):(e.eatWhile(/[\w\$_]/),f.propertyIsEnumerable(e.current())?"keyword":null):(n.tokenize=i,null)}return{startState:function(){return{tokenize:i}},token:function(e,n){if(e.eatSpace())return null;var r=n.tokenize(e,n);return r}}}),o.defineMIME("text/x-tiddlywiki","tiddlywiki")})})();var a=M.exports;const I=A(a),P=B({__proto__:null,default:I},[a]);export{P as t};
