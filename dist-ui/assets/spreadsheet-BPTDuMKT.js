import{g as o,c as a}from"./index-D07HYTsL.js";function f(c,i){for(var r=0;r<i.length;r++){const e=i[r];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in c)){const n=Object.getOwnPropertyDescriptor(e,t);n&&Object.defineProperty(c,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}};(function(c,i){(function(r){r(a)})(function(r){r.defineMode("spreadsheet",function(){return{startState:function(){return{stringType:null,stack:[]}},token:function(e,t){if(e){switch(t.stack.length===0&&(e.peek()=='"'||e.peek()=="'")&&(t.stringType=e.peek(),e.next(),t.stack.unshift("string")),t.stack[0]){case"string":for(;t.stack[0]==="string"&&!e.eol();)e.peek()===t.stringType?(e.next(),t.stack.shift()):e.peek()==="\\"?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return"string";case"characterClass":for(;t.stack[0]==="characterClass"&&!e.eol();)e.match(/^[^\]\\]+/)||e.match(/^\\./)||t.stack.shift();return"operator"}var n=e.peek();switch(n){case"[":return e.next(),t.stack.unshift("characterClass"),"bracket";case":":return e.next(),"operator";case"\\":return e.match(/\\[a-z]+/)?"string-2":(e.next(),"atom");case".":case",":case";":case"*":case"-":case"+":case"^":case"<":case"/":case"=":return e.next(),"atom";case"$":return e.next(),"builtin"}return e.match(/\d+/)?e.match(/^\w+/)?"error":"number":e.match(/^[a-zA-Z_]\w*/)?e.match(/(?=[\(.])/,!1)?"keyword":"variable-2":["[","]","(",")","{","}"].indexOf(n)!=-1?(e.next(),"bracket"):(e.eatSpace()||e.next(),null)}}}}),r.defineMIME("text/x-spreadsheet","spreadsheet")})})();var s=u.exports;const p=o(s),h=f({__proto__:null,default:p},[s]);export{h as s};
