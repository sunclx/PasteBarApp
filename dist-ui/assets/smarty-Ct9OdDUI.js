import{g as D,c as O}from"./index-BpwibWGg.js";function _(v,k){for(var o=0;o<k.length;o++){const a=k[o];if(typeof a!="string"&&!Array.isArray(a)){for(const u in a)if(u!=="default"&&!(u in v)){const d=Object.getOwnPropertyDescriptor(a,u);d&&Object.defineProperty(v,u,d.get?d:{enumerable:!0,get:()=>a[u]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var j={exports:{}};(function(v,k){(function(o){o(O)})(function(o){o.defineMode("smarty",function(a,u){var d=u.rightDelimiter||"}",c=u.leftDelimiter||"{",b=u.version||2,p=o.getMode(a,u.baseMode||"null"),y=["debug","extends","function","include","literal"],f={operatorChars:/[+\-*&%=<>!?]/,validIdentifier:/[a-zA-Z0-9_]/,stringChar:/['"]/},h;function n(e,t){return h=t,e}function I(e,t,r){return t.tokenize=r,r(e,t)}function w(e,t){return t==null&&(t=e.pos),b===3&&c=="{"&&(t==e.string.length||/\s/.test(e.string.charAt(t)))}function s(e,t){for(var r=e.string,l=e.pos;;){var i=r.indexOf(c,l);if(l=i+c.length,i==-1||!w(e,i+c.length))break}if(i==e.pos)return e.match(c),e.eat("*")?I(e,t,S("comment","*"+d)):(t.depth++,t.tokenize=z,h="startTag","tag");i>-1&&(e.string=r.slice(0,i));var g=p.token(e,t.base);return i>-1&&(e.string=r),g}function z(e,t){if(e.match(d,!0))return b===3?(t.depth--,t.depth<=0&&(t.tokenize=s)):t.tokenize=s,n("tag",null);if(e.match(c,!0))return t.depth++,n("tag","startTag");var r=e.next();if(r=="$")return e.eatWhile(f.validIdentifier),n("variable-2","variable");if(r=="|")return n("operator","pipe");if(r==".")return n("operator","property");if(f.stringChar.test(r))return t.tokenize=x(r),n("string","string");if(f.operatorChars.test(r))return e.eatWhile(f.operatorChars),n("operator","operator");if(r=="["||r=="]")return n("bracket","bracket");if(r=="("||r==")")return n("bracket","operator");if(/\d/.test(r))return e.eatWhile(/\d/),n("number","number");if(t.last=="variable"){if(r=="@")return e.eatWhile(f.validIdentifier),n("property","property");if(r=="|")return e.eatWhile(f.validIdentifier),n("qualifier","modifier")}else{if(t.last=="pipe")return e.eatWhile(f.validIdentifier),n("qualifier","modifier");if(t.last=="whitespace")return e.eatWhile(f.validIdentifier),n("attribute","modifier")}if(t.last=="property")return e.eatWhile(f.validIdentifier),n("property",null);if(/\s/.test(r))return h="whitespace",null;var l="";r!="/"&&(l+=r);for(var i=null;i=e.eat(f.validIdentifier);)l+=i;for(var g=0,W=y.length;g<W;g++)if(y[g]==l)return n("keyword","keyword");return/\s/.test(r)?null:n("tag","tag")}function x(e){return function(t,r){for(var l=null,i=null;!t.eol();){if(i=t.peek(),t.next()==e&&l!=="\\"){r.tokenize=z;break}l=i}return"string"}}function S(e,t){return function(r,l){for(;!r.eol();){if(r.match(t)){l.tokenize=s;break}r.next()}return e}}return{startState:function(){return{base:o.startState(p),tokenize:s,last:null,depth:0}},copyState:function(e){return{base:o.copyState(p,e.base),tokenize:e.tokenize,last:e.last,depth:e.depth}},innerMode:function(e){if(e.tokenize==s)return{mode:p,state:e.base}},token:function(e,t){var r=t.tokenize(e,t);return t.last=h,r},indent:function(e,t,r){return e.tokenize==s&&p.indent?p.indent(e.base,t,r):o.Pass},blockCommentStart:c+"*",blockCommentEnd:"*"+d}}),o.defineMIME("text/x-smarty","smarty")})})();var m=j.exports;const A=D(m),P=_({__proto__:null,default:A},[m]);export{P as s};
