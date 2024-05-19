import{g as h,c as x}from"./index-D07HYTsL.js";function y(s,l){for(var i=0;i<l.length;i++){const r=l[i];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const c=Object.getOwnPropertyDescriptor(r,o);c&&Object.defineProperty(s,o,c.get?c:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var v={exports:{}};(function(s,l){(function(i){i(x)})(function(i){i.defineMode("fortran",function(){function r(t){for(var n={},e=0;e<t.length;++e)n[t[e]]=!0;return n}var o=r(["abstract","accept","allocatable","allocate","array","assign","asynchronous","backspace","bind","block","byte","call","case","class","close","common","contains","continue","cycle","data","deallocate","decode","deferred","dimension","do","elemental","else","encode","end","endif","entry","enumerator","equivalence","exit","external","extrinsic","final","forall","format","function","generic","go","goto","if","implicit","import","include","inquire","intent","interface","intrinsic","module","namelist","non_intrinsic","non_overridable","none","nopass","nullify","open","optional","options","parameter","pass","pause","pointer","print","private","program","protected","public","pure","read","recursive","result","return","rewind","save","select","sequence","stop","subroutine","target","then","to","type","use","value","volatile","where","while","write"]),c=r(["abort","abs","access","achar","acos","adjustl","adjustr","aimag","aint","alarm","all","allocated","alog","amax","amin","amod","and","anint","any","asin","associated","atan","besj","besjn","besy","besyn","bit_size","btest","cabs","ccos","ceiling","cexp","char","chdir","chmod","clog","cmplx","command_argument_count","complex","conjg","cos","cosh","count","cpu_time","cshift","csin","csqrt","ctime","c_funloc","c_loc","c_associated","c_null_ptr","c_null_funptr","c_f_pointer","c_null_char","c_alert","c_backspace","c_form_feed","c_new_line","c_carriage_return","c_horizontal_tab","c_vertical_tab","dabs","dacos","dasin","datan","date_and_time","dbesj","dbesj","dbesjn","dbesy","dbesy","dbesyn","dble","dcos","dcosh","ddim","derf","derfc","dexp","digits","dim","dint","dlog","dlog","dmax","dmin","dmod","dnint","dot_product","dprod","dsign","dsinh","dsin","dsqrt","dtanh","dtan","dtime","eoshift","epsilon","erf","erfc","etime","exit","exp","exponent","extends_type_of","fdate","fget","fgetc","float","floor","flush","fnum","fputc","fput","fraction","fseek","fstat","ftell","gerror","getarg","get_command","get_command_argument","get_environment_variable","getcwd","getenv","getgid","getlog","getpid","getuid","gmtime","hostnm","huge","iabs","iachar","iand","iargc","ibclr","ibits","ibset","ichar","idate","idim","idint","idnint","ieor","ierrno","ifix","imag","imagpart","index","int","ior","irand","isatty","ishft","ishftc","isign","iso_c_binding","is_iostat_end","is_iostat_eor","itime","kill","kind","lbound","len","len_trim","lge","lgt","link","lle","llt","lnblnk","loc","log","logical","long","lshift","lstat","ltime","matmul","max","maxexponent","maxloc","maxval","mclock","merge","move_alloc","min","minexponent","minloc","minval","mod","modulo","mvbits","nearest","new_line","nint","not","or","pack","perror","precision","present","product","radix","rand","random_number","random_seed","range","real","realpart","rename","repeat","reshape","rrspacing","rshift","same_type_as","scale","scan","second","selected_int_kind","selected_real_kind","set_exponent","shape","short","sign","signal","sinh","sin","sleep","sngl","spacing","spread","sqrt","srand","stat","sum","symlnk","system","system_clock","tan","tanh","time","tiny","transfer","transpose","trim","ttynam","ubound","umask","unlink","unpack","verify","xor","zabs","zcos","zexp","zlog","zsin","zsqrt"]),p=r(["c_bool","c_char","c_double","c_double_complex","c_float","c_float_complex","c_funptr","c_int","c_int16_t","c_int32_t","c_int64_t","c_int8_t","c_int_fast16_t","c_int_fast32_t","c_int_fast64_t","c_int_fast8_t","c_int_least16_t","c_int_least32_t","c_int_least64_t","c_int_least8_t","c_intmax_t","c_intptr_t","c_long","c_long_double","c_long_double_complex","c_long_long","c_ptr","c_short","c_signed_char","c_size_t","character","complex","double","integer","logical","real"]),_=/[+\-*&=<>\/\:]/,m=/^\.(and|or|eq|lt|le|gt|ge|ne|not|eqv|neqv)\./i;function g(t,n){if(t.match(m))return"operator";var e=t.next();if(e=="!")return t.skipToEnd(),"comment";if(e=='"'||e=="'")return n.tokenize=b(e),n.tokenize(t,n);if(/[\[\]\(\),]/.test(e))return null;if(/\d/.test(e))return t.eatWhile(/[\w\.]/),"number";if(_.test(e))return t.eatWhile(_),"operator";t.eatWhile(/[\w\$_]/);var a=t.current().toLowerCase();return o.hasOwnProperty(a)?"keyword":c.hasOwnProperty(a)||p.hasOwnProperty(a)?"builtin":"variable"}function b(t){return function(n,e){for(var a=!1,d,u=!1;(d=n.next())!=null;){if(d==t&&!a){u=!0;break}a=!a&&d=="\\"}return(u||!a)&&(e.tokenize=null),"string"}}return{startState:function(){return{tokenize:null}},token:function(t,n){if(t.eatSpace())return null;var e=(n.tokenize||g)(t,n);return e=="comment"||e=="meta",e}}}),i.defineMIME("text/x-fortran","fortran")})})();var f=v.exports;const k=h(f),z=y({__proto__:null,default:k},[f]);export{z as f};
