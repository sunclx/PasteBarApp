import{g as U,c as F}from"./index-BlJuq_SW.js";function Z(p,d){for(var c=0;c<d.length;c++){const u=d[c];if(typeof u!="string"&&!Array.isArray(u)){for(const f in u)if(f!=="default"&&!(f in p)){const l=Object.getOwnPropertyDescriptor(u,f);l&&Object.defineProperty(p,f,l.get?l:{enumerable:!0,get:()=>u[f]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var j={exports:{}};(function(p,d){(function(c){c(F)})(function(c){function u(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}var f=u(["_","var","let","actor","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","open","public","internal","fileprivate","private","deinit","init","new","override","self","subscript","super","convenience","dynamic","final","indirect","lazy","required","static","unowned","unowned(safe)","unowned(unsafe)","weak","as","is","break","case","continue","default","else","fallthrough","for","guard","if","in","repeat","switch","where","while","defer","return","inout","mutating","nonmutating","isolated","nonisolated","catch","do","rethrows","throw","throws","async","await","try","didSet","get","set","willSet","assignment","associativity","infix","left","none","operator","postfix","precedence","precedencegroup","prefix","right","Any","AnyObject","Type","dynamicType","Self","Protocol","__COLUMN__","__FILE__","__FUNCTION__","__LINE__"]),l=u(["var","let","actor","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","for"]),x=u(["true","false","nil","self","super","_"]),_=u(["Array","Bool","Character","Dictionary","Double","Float","Int","Int8","Int16","Int32","Int64","Never","Optional","Set","String","UInt8","UInt16","UInt32","UInt64","Void"]),g="+-/*%=|&<>~^?!",y=":;,.(){}[]",w=/^\-?0b[01][01_]*/,k=/^\-?0o[0-7][0-7_]*/,b=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,z=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,m=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,A=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,O=/^\#[A-Za-z]+/,I=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;function s(e,t,n){if(e.sol()&&(t.indented=e.indentation()),e.eatSpace())return null;var r=e.peek();if(r=="/"){if(e.match("//"))return e.skipToEnd(),"comment";if(e.match("/*"))return t.tokenize.push(v),v(e,t)}if(e.match(O))return"builtin";if(e.match(I))return"attribute";if(e.match(w)||e.match(k)||e.match(b)||e.match(z))return"number";if(e.match(A))return"property";if(g.indexOf(r)>-1)return e.next(),"operator";if(y.indexOf(r)>-1)return e.next(),e.match(".."),"punctuation";var i;if(i=e.match(/("""|"|')/)){var o=C.bind(null,i[0]);return t.tokenize.push(o),o(e,t)}if(e.match(m)){var a=e.current();return _.hasOwnProperty(a)?"variable-2":x.hasOwnProperty(a)?"atom":f.hasOwnProperty(a)?(l.hasOwnProperty(a)&&(t.prev="define"),"keyword"):n=="define"?"def":"variable"}return e.next(),null}function S(){var e=0;return function(t,n,r){var i=s(t,n,r);if(i=="punctuation"){if(t.current()=="(")++e;else if(t.current()==")"){if(e==0)return t.backUp(1),n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n);--e}}return i}}function C(e,t,n){for(var r=e.length==1,i,o=!1;i=t.peek();)if(o){if(t.next(),i=="(")return n.tokenize.push(S()),"string";o=!1}else{if(t.match(e))return n.tokenize.pop(),"string";t.next(),o=i=="\\"}return r&&n.tokenize.pop(),"string"}function v(e,t){for(var n;n=e.next();)if(n==="/"&&e.eat("*"))t.tokenize.push(v);else if(n==="*"&&e.eat("/")){t.tokenize.pop();break}return"comment"}function P(e,t,n){this.prev=e,this.align=t,this.indented=n}function $(e,t){var n=t.match(/^\s*($|\/[\/\*])/,!1)?null:t.column()+1;e.context=new P(e.context,n,e.indented)}function E(e){e.context&&(e.indented=e.context.indented,e.context=e.context.prev)}c.defineMode("swift",function(e){return{startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(t,n){var r=n.prev;n.prev=null;var i=n.tokenize[n.tokenize.length-1]||s,o=i(t,n,r);if(!o||o=="comment"?n.prev=r:n.prev||(n.prev=o),o=="punctuation"){var a=/[\(\[\{]|([\]\)\}])/.exec(t.current());a&&(a[1]?E:$)(n,t)}return o},indent:function(t,n){var r=t.context;if(!r)return 0;var i=/^[\]\}\)]/.test(n);return r.align!=null?r.align-(i?1:0):r.indented+(i?0:e.indentUnit)},electricInput:/^\s*[\)\}\]]$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace",closeBrackets:"()[]{}''\"\"``"}}),c.defineMIME("text/x-swift","swift")})})();var h=j.exports;const N=U(h),T=Z({__proto__:null,default:N},[h]);export{T as s};
