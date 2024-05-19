import{g as d,r as p}from"./index-F_HtE7BP.js";function m(_,U){for(var C=0;C<U.length;C++){const r=U[C];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in _)){const E=Object.getOwnPropertyDescriptor(r,o);E&&Object.defineProperty(_,o,E.get?E:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}var g={exports:{}};(function(_,U){(function(C){C(p())})(function(C){C.defineMode("ttcn-cfg",function(o,E){var u=o.indentUnit,l=E.keywords||{},P=E.fileNCtrlMaskOptions||{},L=E.externalCommands||{},a=E.multiLineStrings,s=E.indentStatements!==!1,R=/[\|]/,i;function M(e,n){var t=e.next();if(t=='"'||t=="'")return n.tokenize=D(t),n.tokenize(e,n);if(/[:=]/.test(t))return i=t,"punctuation";if(t=="#")return e.skipToEnd(),"comment";if(/\d/.test(t))return e.eatWhile(/[\w\.]/),"number";if(R.test(t))return e.eatWhile(R),"operator";if(t=="[")return e.eatWhile(/[\w_\]]/),"number sectionTitle";e.eatWhile(/[\w\$_]/);var T=e.current();return l.propertyIsEnumerable(T)?"keyword":P.propertyIsEnumerable(T)?"negative fileNCtrlMaskOptions":L.propertyIsEnumerable(T)?"negative externalCommands":"variable"}function D(e){return function(n,t){for(var T=!1,O,f=!1;(O=n.next())!=null;){if(O==e&&!T){var N=n.peek();N&&(N=N.toLowerCase(),(N=="b"||N=="h"||N=="o")&&n.next()),f=!0;break}T=!T&&O=="\\"}return(f||!(T||a))&&(t.tokenize=null),"string"}}function c(e,n,t,T,O){this.indented=e,this.column=n,this.type=t,this.align=T,this.prev=O}function A(e,n,t){var T=e.indented;return e.context&&e.context.type=="statement"&&(T=e.context.indented),e.context=new c(T,n,t,null,e.context)}function I(e){var n=e.context.type;return(n==")"||n=="]"||n=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new c((e||0)-u,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,n){var t=n.context;if(e.sol()&&(t.align==null&&(t.align=!1),n.indented=e.indentation(),n.startOfLine=!0),e.eatSpace())return null;i=null;var T=(n.tokenize||M)(e,n);if(T=="comment")return T;if(t.align==null&&(t.align=!0),(i==";"||i==":"||i==",")&&t.type=="statement")I(n);else if(i=="{")A(n,e.column(),"}");else if(i=="[")A(n,e.column(),"]");else if(i=="(")A(n,e.column(),")");else if(i=="}"){for(;t.type=="statement";)t=I(n);for(t.type=="}"&&(t=I(n));t.type=="statement";)t=I(n)}else i==t.type?I(n):s&&((t.type=="}"||t.type=="top")&&i!=";"||t.type=="statement"&&i=="newstatement")&&A(n,e.column(),"statement");return n.startOfLine=!1,T},electricChars:"{}",lineComment:"#",fold:"brace"}});function r(o){for(var E={},u=o.split(" "),l=0;l<u.length;++l)E[u[l]]=!0;return E}C.defineMIME("text/x-ttcn-cfg",{name:"ttcn-cfg",keywords:r("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),fileNCtrlMaskOptions:r("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),externalCommands:r("BeginControlPart EndControlPart BeginTestCase EndTestCase"),multiLineStrings:!0})})})();var S=g.exports;const F=d(S),y=m({__proto__:null,default:F},[S]);export{y as t};
