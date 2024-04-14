import{g as L,r as S}from"./index-f7F5Jf2R.js";function P(d,v){for(var c=0;c<v.length;c++){const s=v[c];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in d)){const f=Object.getOwnPropertyDescriptor(s,a);f&&Object.defineProperty(d,a,f.get?f:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var M={exports:{}};(function(d,v){(function(c){c(S())})(function(c){c.defineMode("ecl",function(s){function a(n){for(var t={},e=n.split(" "),r=0;r<e.length;++r)t[e[r]]=!0;return t}function f(n,t){return t.startOfLine?(n.skipToEnd(),"meta"):!1}var y=s.indentUnit,I=a("abs acos allnodes ascii asin asstring atan atan2 ave case choose choosen choosesets clustersize combine correlation cos cosh count covariance cron dataset dedup define denormalize distribute distributed distribution ebcdic enth error evaluate event eventextra eventname exists exp failcode failmessage fetch fromunicode getisvalid global graph group hash hash32 hash64 hashcrc hashmd5 having if index intformat isvalid iterate join keyunicode length library limit ln local log loop map matched matchlength matchposition matchtext matchunicode max merge mergejoin min nolocal nonempty normalize parse pipe power preload process project pull random range rank ranked realformat recordof regexfind regexreplace regroup rejected rollup round roundup row rowdiff sample set sin sinh sizeof soapcall sort sorted sqrt stepped stored sum table tan tanh thisnode topn tounicode transfer trim truncate typeof ungroup unicodeorder variance which workunit xmldecode xmlencode xmltext xmlunicode"),_=a("apply assert build buildindex evaluate fail keydiff keypatch loadxml nothor notify output parallel sequential soapcall wait"),j=a("__compressed__ all and any as atmost before beginc++ best between case const counter csv descend encrypt end endc++ endmacro except exclusive expire export extend false few first flat from full function group header heading hole ifblock import in interface joined keep keyed last left limit load local locale lookup macro many maxcount maxlength min skew module named nocase noroot noscan nosort not of only opt or outer overwrite packed partition penalty physicallength pipe quote record relationship repeat return right scan self separator service shared skew skip sql store terminator thor threshold token transform trim true type unicodeorder unsorted validate virtual whole wild within xml xpath"),b=a("ascii big_endian boolean data decimal ebcdic integer pattern qstring real record rule set of string token udecimal unicode unsigned varstring varunicode"),O=a("checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when"),u=a("catch class do else finally for if switch try while"),C=a("true false null"),g={"#":f},x=/[+\-*&%=<>!?|\/]/,i;function m(n,t){var e=n.next();if(g[e]){var r=g[e](n,t);if(r!==!1)return r}if(e=='"'||e=="'")return t.tokenize=q(e),t.tokenize(n,t);if(/[\[\]{}\(\),;\:\.]/.test(e))return i=e,null;if(/\d/.test(e))return n.eatWhile(/[\w\.]/),"number";if(e=="/"){if(n.eat("*"))return t.tokenize=w,w(n,t);if(n.eat("/"))return n.skipToEnd(),"comment"}if(x.test(e))return n.eatWhile(x),"operator";n.eatWhile(/[\w\$_]/);var o=n.current().toLowerCase();if(I.propertyIsEnumerable(o))return u.propertyIsEnumerable(o)&&(i="newstatement"),"keyword";if(_.propertyIsEnumerable(o))return u.propertyIsEnumerable(o)&&(i="newstatement"),"variable";if(j.propertyIsEnumerable(o))return u.propertyIsEnumerable(o)&&(i="newstatement"),"variable-2";if(b.propertyIsEnumerable(o))return u.propertyIsEnumerable(o)&&(i="newstatement"),"variable-3";if(O.propertyIsEnumerable(o))return u.propertyIsEnumerable(o)&&(i="newstatement"),"builtin";for(var l=o.length-1;l>=0&&(!isNaN(o[l])||o[l]=="_");)--l;if(l>0){var E=o.substr(0,l+1);if(b.propertyIsEnumerable(E))return u.propertyIsEnumerable(E)&&(i="newstatement"),"variable-3"}return C.propertyIsEnumerable(o)?"atom":null}function q(n){return function(t,e){for(var r=!1,o,l=!1;(o=t.next())!=null;){if(o==n&&!r){l=!0;break}r=!r&&o=="\\"}return(l||!r)&&(e.tokenize=m),"string"}}function w(n,t){for(var e=!1,r;r=n.next();){if(r=="/"&&e){t.tokenize=m;break}e=r=="*"}return"comment"}function k(n,t,e,r,o){this.indented=n,this.column=t,this.type=e,this.align=r,this.prev=o}function h(n,t,e){return n.context=new k(n.indented,t,e,null,n.context)}function p(n){var t=n.context.type;return(t==")"||t=="]"||t=="}")&&(n.indented=n.context.indented),n.context=n.context.prev}return{startState:function(n){return{tokenize:null,context:new k((n||0)-y,0,"top",!1),indented:0,startOfLine:!0}},token:function(n,t){var e=t.context;if(n.sol()&&(e.align==null&&(e.align=!1),t.indented=n.indentation(),t.startOfLine=!0),n.eatSpace())return null;i=null;var r=(t.tokenize||m)(n,t);if(r=="comment"||r=="meta")return r;if(e.align==null&&(e.align=!0),(i==";"||i==":")&&e.type=="statement")p(t);else if(i=="{")h(t,n.column(),"}");else if(i=="[")h(t,n.column(),"]");else if(i=="(")h(t,n.column(),")");else if(i=="}"){for(;e.type=="statement";)e=p(t);for(e.type=="}"&&(e=p(t));e.type=="statement";)e=p(t)}else i==e.type?p(t):(e.type=="}"||e.type=="top"||e.type=="statement"&&i=="newstatement")&&h(t,n.column(),"statement");return t.startOfLine=!1,r},indent:function(n,t){if(n.tokenize!=m&&n.tokenize!=null)return 0;var e=n.context,r=t&&t.charAt(0);e.type=="statement"&&r=="}"&&(e=e.prev);var o=r==e.type;return e.type=="statement"?e.indented+(r=="{"?0:y):e.align?e.column+(o?0:1):e.indented+(o?0:y)},electricChars:"{}"}}),c.defineMIME("text/x-ecl","ecl")})})();var z=M.exports;const N=L(z),W=P({__proto__:null,default:N},[z]);export{W as e};
