import{g as L,c as q}from"./index-J0ARDW2i.js";function U(v,y){for(var f=0;f<y.length;f++){const l=y[f];if(typeof l!="string"&&!Array.isArray(l)){for(const i in l)if(i!=="default"&&!(i in v)){const c=Object.getOwnPropertyDescriptor(l,i);c&&Object.defineProperty(v,i,c.get?c:{enumerable:!0,get:()=>l[i]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var B={exports:{}};(function(v,y){(function(f){f(q)})(function(f){f.defineMode("crystal",function(l){function i(n,e){return new RegExp((e?"":"^")+"(?:"+n.join("|")+")"+(e?"$":"\\b"))}function c(n,e,r){return r.tokenize.push(n),n(e,r)}var _=/^(?:[-+/%|&^]|\*\*?|[<>]{2})/,z=/^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/,x=/^(?:\[\][?=]?)/,O=/^(?:\.(?:\.{2})?|->|[?:])/,h=/^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,F=/^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,T=i(["abstract","alias","as","asm","begin","break","case","class","def","do","else","elsif","end","ensure","enum","extend","for","fun","if","include","instance_sizeof","lib","macro","module","next","of","out","pointerof","private","protected","rescue","return","require","select","sizeof","struct","super","then","type","typeof","uninitialized","union","unless","until","when","while","with","yield","__DIR__","__END_LINE__","__FILE__","__LINE__"]),j=i(["true","false","nil","self"]),P=["def","fun","macro","class","module","struct","lib","enum","union","do","for"],D=i(P),K=["if","unless","case","while","until","begin","then"],M=i(K),b=["end","else","elsif","rescue","ensure"],N=i(b),I=["\\)","\\}","\\]"],Z=new RegExp("^(?:"+I.join("|")+")$"),E={def:S,fun:S,macro:$,class:p,module:p,struct:p,lib:p,enum:p,union:p},s={"[":"]","{":"}","(":")","<":">"};function g(n,e){if(n.eatSpace())return null;if(e.lastToken!="\\"&&n.match("{%",!1))return c(a("%","%"),n,e);if(e.lastToken!="\\"&&n.match("{{",!1))return c(a("{","}"),n,e);if(n.peek()=="#")return n.skipToEnd(),"comment";var r;if(n.match(h))return n.eat(/[?!]/),r=n.current(),n.eat(":")?"atom":e.lastToken=="."?"property":T.test(r)?(D.test(r)?!(r=="fun"&&e.blocks.indexOf("lib")>=0)&&!(r=="def"&&e.lastToken=="abstract")&&(e.blocks.push(r),e.currentIndent+=1):(e.lastStyle=="operator"||!e.lastStyle)&&M.test(r)?(e.blocks.push(r),e.currentIndent+=1):r=="end"&&(e.blocks.pop(),e.currentIndent-=1),E.hasOwnProperty(r)&&e.tokenize.push(E[r]),"keyword"):j.test(r)?"atom":"variable";if(n.eat("@"))return n.peek()=="["?c(d("[","]","meta"),n,e):(n.eat("@"),n.match(h)||n.match(F),"variable-2");if(n.match(F))return"tag";if(n.eat(":"))return n.eat('"')?c(w('"',"atom",!1),n,e):n.match(h)||n.match(F)||n.match(_)||n.match(z)||n.match(x)?"atom":(n.eat(":"),"operator");if(n.eat('"'))return c(w('"',"string",!0),n,e);if(n.peek()=="%"){var u="string",t=!0,o;if(n.match("%r"))u="string-2",o=n.next();else if(n.match("%w"))t=!1,o=n.next();else if(n.match("%q"))t=!1,o=n.next();else if(o=n.match(/^%([^\w\s=])/))o=o[1];else{if(n.match(/^%[a-zA-Z_\u009F-\uFFFF][\w\u009F-\uFFFF]*/))return"meta";if(n.eat("%"))return"operator"}return s.hasOwnProperty(o)&&(o=s[o]),c(w(o,u,t),n,e)}return(r=n.match(/^<<-('?)([A-Z]\w*)\1/))?c(R(r[2],!r[1]),n,e):n.eat("'")?(n.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/),n.eat("'"),"atom"):n.eat("0")?(n.eat("x")?n.match(/^[0-9a-fA-F_]+/):n.eat("o")?n.match(/^[0-7_]+/):n.eat("b")&&n.match(/^[01_]+/),"number"):n.eat(/^\d/)?(n.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+-]?\d+)?/),"number"):n.match(_)?(n.eat("="),"operator"):n.match(z)||n.match(O)?"operator":(r=n.match(/[({[]/,!1))?(r=r[0],c(d(r,s[r],null),n,e)):n.eat("\\")?(n.next(),"meta"):(n.next(),null)}function d(n,e,r,u){return function(t,o){if(!u&&t.match(n))return o.tokenize[o.tokenize.length-1]=d(n,e,r,!0),o.currentIndent+=1,r;var k=g(t,o);return t.current()===e&&(o.tokenize.pop(),o.currentIndent-=1,k=r),k}}function a(n,e,r){return function(u,t){return!r&&u.match("{"+n)?(t.currentIndent+=1,t.tokenize[t.tokenize.length-1]=a(n,e,!0),"meta"):u.match(e+"}")?(t.currentIndent-=1,t.tokenize.pop(),"meta"):g(u,t)}}function $(n,e){if(n.eatSpace())return null;var r;if(r=n.match(h)){if(r=="def")return"keyword";n.eat(/[?!]/)}return e.tokenize.pop(),"def"}function S(n,e){return n.eatSpace()?null:(n.match(h)?n.eat(/[!?]/):n.match(_)||n.match(z)||n.match(x),e.tokenize.pop(),"def")}function p(n,e){return n.eatSpace()?null:(n.match(F),e.tokenize.pop(),"def")}function w(n,e,r){return function(u,t){for(var o=!1;u.peek();)if(o)u.next(),o=!1;else{if(u.match("{%",!1))return t.tokenize.push(a("%","%")),e;if(u.match("{{",!1))return t.tokenize.push(a("{","}")),e;if(r&&u.match("#{",!1))return t.tokenize.push(d("#{","}","meta")),e;var k=u.next();if(k==n)return t.tokenize.pop(),e;o=r&&k=="\\"}return e}}function R(n,e){return function(r,u){if(r.sol()&&(r.eatSpace(),r.match(n)))return u.tokenize.pop(),"string";for(var t=!1;r.peek();)if(t)r.next(),t=!1;else{if(r.match("{%",!1))return u.tokenize.push(a("%","%")),"string";if(r.match("{{",!1))return u.tokenize.push(a("{","}")),"string";if(e&&r.match("#{",!1))return u.tokenize.push(d("#{","}","meta")),"string";t=e&&r.next()=="\\"}return"string"}}return{startState:function(){return{tokenize:[g],currentIndent:0,lastToken:null,lastStyle:null,blocks:[]}},token:function(n,e){var r=e.tokenize[e.tokenize.length-1](n,e),u=n.current();return r&&r!="comment"&&(e.lastToken=u,e.lastStyle=r),r},indent:function(n,e){return e=e.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g,""),N.test(e)||Z.test(e)?l.indentUnit*(n.currentIndent-1):l.indentUnit*n.currentIndent},fold:"indent",electricInput:i(I.concat(b),!0),lineComment:"#"}}),f.defineMIME("text/x-crystal","crystal")})})();var A=B.exports;const C=L(A),Q=U({__proto__:null,default:C},[A]);export{Q as c};
