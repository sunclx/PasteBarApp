import{g as D,r as O}from"./index-f7F5Jf2R.js";function _(v,k){for(var o=0;o<k.length;o++){const a=k[o];if(typeof a!="string"&&!Array.isArray(a)){for(const u in a)if(u!=="default"&&!(u in v)){const d=Object.getOwnPropertyDescriptor(a,u);d&&Object.defineProperty(v,u,d.get?d:{enumerable:!0,get:()=>a[u]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var j={exports:{}};(function(v,k){(function(o){o(O())})(function(o){o.defineMode("smarty",function(a,u){var d=u.rightDelimiter||"}",c=u.leftDelimiter||"{",b=u.version||2,p=o.getMode(a,u.baseMode||"null"),y=["debug","extends","function","include","literal"],f={operatorChars:/[+\-*&%=<>!?]/,validIdentifier:/[a-zA-Z0-9_]/,stringChar:/['"]/},h;function n(e,r){return h=r,e}function I(e,r,t){return r.tokenize=t,t(e,r)}function w(e,r){return r==null&&(r=e.pos),b===3&&c=="{"&&(r==e.string.length||/\s/.test(e.string.charAt(r)))}function s(e,r){for(var t=e.string,l=e.pos;;){var i=t.indexOf(c,l);if(l=i+c.length,i==-1||!w(e,i+c.length))break}if(i==e.pos)return e.match(c),e.eat("*")?I(e,r,W("comment","*"+d)):(r.depth++,r.tokenize=z,h="startTag","tag");i>-1&&(e.string=t.slice(0,i));var g=p.token(e,r.base);return i>-1&&(e.string=t),g}function z(e,r){if(e.match(d,!0))return b===3?(r.depth--,r.depth<=0&&(r.tokenize=s)):r.tokenize=s,n("tag",null);if(e.match(c,!0))return r.depth++,n("tag","startTag");var t=e.next();if(t=="$")return e.eatWhile(f.validIdentifier),n("variable-2","variable");if(t=="|")return n("operator","pipe");if(t==".")return n("operator","property");if(f.stringChar.test(t))return r.tokenize=S(t),n("string","string");if(f.operatorChars.test(t))return e.eatWhile(f.operatorChars),n("operator","operator");if(t=="["||t=="]")return n("bracket","bracket");if(t=="("||t==")")return n("bracket","operator");if(/\d/.test(t))return e.eatWhile(/\d/),n("number","number");if(r.last=="variable"){if(t=="@")return e.eatWhile(f.validIdentifier),n("property","property");if(t=="|")return e.eatWhile(f.validIdentifier),n("qualifier","modifier")}else{if(r.last=="pipe")return e.eatWhile(f.validIdentifier),n("qualifier","modifier");if(r.last=="whitespace")return e.eatWhile(f.validIdentifier),n("attribute","modifier")}if(r.last=="property")return e.eatWhile(f.validIdentifier),n("property",null);if(/\s/.test(t))return h="whitespace",null;var l="";t!="/"&&(l+=t);for(var i=null;i=e.eat(f.validIdentifier);)l+=i;for(var g=0,x=y.length;g<x;g++)if(y[g]==l)return n("keyword","keyword");return/\s/.test(t)?null:n("tag","tag")}function S(e){return function(r,t){for(var l=null,i=null;!r.eol();){if(i=r.peek(),r.next()==e&&l!=="\\"){t.tokenize=z;break}l=i}return"string"}}function W(e,r){return function(t,l){for(;!t.eol();){if(t.match(r)){l.tokenize=s;break}t.next()}return e}}return{startState:function(){return{base:o.startState(p),tokenize:s,last:null,depth:0}},copyState:function(e){return{base:o.copyState(p,e.base),tokenize:e.tokenize,last:e.last,depth:e.depth}},innerMode:function(e){if(e.tokenize==s)return{mode:p,state:e.base}},token:function(e,r){var t=r.tokenize(e,r);return r.last=h,t},indent:function(e,r,t){return e.tokenize==s&&p.indent?p.indent(e.base,r,t):o.Pass},blockCommentStart:c+"*",blockCommentEnd:"*"+d}}),o.defineMIME("text/x-smarty","smarty")})})();var m=j.exports;const A=D(m),E=_({__proto__:null,default:A},[m]);export{E as s};
