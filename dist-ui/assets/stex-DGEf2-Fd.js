import{r as S}from"./index-BxW_fXwe.js";var p={exports:{}},s;function A(){return s||(s=1,function(v,w){(function(l){l(S())})(function(l){l.defineMode("stex",function(B,b){function d(t,e){t.cmdState.push(e)}function g(t){return t.cmdState.length>0?t.cmdState[t.cmdState.length-1]:null}function x(t){var e=t.cmdState.pop();e&&e.closeBracket()}function y(t){for(var e=t.cmdState,n=e.length-1;n>=0;n--){var i=e[n];if(i.name!="DEFAULT")return i}return{styleIdentifier:function(){return null}}}function a(t,e,n){return function(){this.name=t,this.bracketNo=0,this.style=e,this.styles=n,this.argument=null,this.styleIdentifier=function(){return this.styles[this.bracketNo-1]||null},this.openBracket=function(){return this.bracketNo++,"bracket"},this.closeBracket=function(){}}}var r={};r.importmodule=a("importmodule","tag",["string","builtin"]),r.documentclass=a("documentclass","tag",["","atom"]),r.usepackage=a("usepackage","tag",["atom"]),r.begin=a("begin","tag",["atom"]),r.end=a("end","tag",["atom"]),r.label=a("label","tag",["atom"]),r.ref=a("ref","tag",["atom"]),r.eqref=a("eqref","tag",["atom"]),r.cite=a("cite","tag",["atom"]),r.bibitem=a("bibitem","tag",["atom"]),r.Bibitem=a("Bibitem","tag",["atom"]),r.RBibitem=a("RBibitem","tag",["atom"]),r.DEFAULT=function(){this.name="DEFAULT",this.style="tag",this.styleIdentifier=this.openBracket=this.closeBracket=function(){}};function u(t,e){t.f=e}function o(t,e){var n;if(t.match(/^\\[a-zA-Z@]+/)){var i=t.current().slice(1);return n=r.hasOwnProperty(i)?r[i]:r.DEFAULT,n=new n,d(e,n),u(e,k),n.style}if(t.match(/^\\[$&%#{}_]/)||t.match(/^\\[,;!\/\\]/))return"tag";if(t.match("\\["))return u(e,function(m,c){return h(m,c,"\\]")}),"keyword";if(t.match("\\("))return u(e,function(m,c){return h(m,c,"\\)")}),"keyword";if(t.match("$$"))return u(e,function(m,c){return h(m,c,"$$")}),"keyword";if(t.match("$"))return u(e,function(m,c){return h(m,c,"$")}),"keyword";var f=t.next();if(f=="%")return t.skipToEnd(),"comment";if(f=="}"||f=="]"){if(n=g(e),n)n.closeBracket(f),u(e,k);else return"error";return"bracket"}else return f=="{"||f=="["?(n=r.DEFAULT,n=new n,d(e,n),"bracket"):/\d/.test(f)?(t.eatWhile(/[\w.%]/),"atom"):(t.eatWhile(/[\w\-_]/),n=y(e),n.name=="begin"&&(n.argument=t.current()),n.styleIdentifier())}function h(t,e,n){if(t.eatSpace())return null;if(n&&t.match(n))return u(e,o),"keyword";if(t.match(/^\\[a-zA-Z@]+/))return"tag";if(t.match(/^[a-zA-Z]+/))return"variable-2";if(t.match(/^\\[$&%#{}_]/)||t.match(/^\\[,;!\/]/)||t.match(/^[\^_&]/))return"tag";if(t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))return null;if(t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))return"number";var i=t.next();return i=="{"||i=="}"||i=="["||i=="]"||i=="("||i==")"?"bracket":i=="%"?(t.skipToEnd(),"comment"):"error"}function k(t,e){var n=t.peek(),i;return n=="{"||n=="["?(i=g(e),i.openBracket(n),t.eat(n),u(e,o),"bracket"):/[ \t\r]/.test(n)?(t.eat(n),null):(u(e,o),x(e),o(t,e))}return{startState:function(){var t=b.inMathMode?function(e,n){return h(e,n)}:o;return{cmdState:[],f:t}},copyState:function(t){return{cmdState:t.cmdState.slice(),f:t.f}},token:function(t,e){return e.f(t,e)},blankLine:function(t){t.f=o,t.cmdState.length=0},lineComment:"%"}}),l.defineMIME("text/x-stex","stex"),l.defineMIME("text/x-latex","stex")})}()),p.exports}export{A as r};
