import{g as c,c as d}from"./index-Dg_fN1r6.js";function s(f,i){for(var t=0;t<i.length;t++){const n=i[t];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in f)){const o=Object.getOwnPropertyDescriptor(n,r);o&&Object.defineProperty(f,r,o.get?o:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var l={exports:{}};(function(f,i){(function(t){t(d)})(function(t){function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var r=["package","message","import","syntax","required","optional","repeated","reserved","default","extensions","packed","bool","bytes","double","enum","float","string","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","option","service","rpc","returns"],o=n(r);t.registerHelper("hintWords","protobuf",r);var a=new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");function p(e){return e.eatSpace()?null:e.match("//")?(e.skipToEnd(),"comment"):e.match(/^[0-9\.+-]/,!1)&&(e.match(/^[+-]?0x[0-9a-fA-F]+/)||e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/)||e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))?"number":e.match(/^"([^"]|(""))*"/)||e.match(/^'([^']|(''))*'/)?"string":e.match(o)?"keyword":e.match(a)?"variable":(e.next(),null)}t.defineMode("protobuf",function(){return{token:p,fold:"brace"}}),t.defineMIME("text/x-protobuf","protobuf")})})();var u=l.exports;const b=c(u),g=s({__proto__:null,default:b},[u]);export{g as p};
