import{r as y}from"./index-BxW_fXwe.js";var g={exports:{}},v;function z(){return v||(v=1,function(W,I){(function(o){o(y())})(function(o){o.defineMode("haskell",function(q,w){function f(e,r,t){return r(t),t(e,r)}var x=/[a-z_]/,E=/[A-Z]/,u=/\d/,R=/[0-9A-Fa-f]/,F=/[0-7]/,m=/[a-z_A-Z0-9'\xa1-\uffff]/,d=/[-!#$%&*+.\/<=>?@\\^|~:]/,b=/[(),;[\]`{}]/,s=/[ \t\v\f]/;function a(e,r){if(e.eatWhile(s))return null;var t=e.next();if(b.test(t)){if(t=="{"&&e.eat("-")){var n="comment";return e.eat("#")&&(n="meta"),f(e,r,h(n,1))}return null}if(t=="'")return e.eat("\\"),e.next(),e.eat("'")?"string":"string error";if(t=='"')return f(e,r,p);if(E.test(t))return e.eatWhile(m),e.eat(".")?"qualifier":"variable-2";if(x.test(t))return e.eatWhile(m),"variable";if(u.test(t)){if(t=="0"){if(e.eat(/[xX]/))return e.eatWhile(R),"integer";if(e.eat(/[oO]/))return e.eatWhile(F),"number"}e.eatWhile(u);var n="number";return e.match(/^\.\d+/)&&(n="number"),e.eat(/[eE]/)&&(n="number",e.eat(/[-+]/),e.eatWhile(u)),n}if(t=="."&&e.eat("."))return"keyword";if(d.test(t)){if(t=="-"&&e.eat(/-/)&&(e.eatWhile(/-/),!e.eat(d)))return e.skipToEnd(),"comment";var n="variable";return t==":"&&(n="variable-2"),e.eatWhile(d),n}return"error"}function h(e,r){return r==0?a:function(t,n){for(var i=r;!t.eol();){var l=t.next();if(l=="{"&&t.eat("-"))++i;else if(l=="-"&&t.eat("}")&&(--i,i==0))return n(a),e}return n(h(e,i)),e}}function p(e,r){for(;!e.eol();){var t=e.next();if(t=='"')return r(a),"string";if(t=="\\"){if(e.eol()||e.eat(s))return r(k),"string";e.eat("&")||e.next()}}return r(a),"string error"}function k(e,r){return e.eat("\\")?f(e,r,p):(e.next(),r(a),"error")}var c=function(){var e={};function r(i){return function(){for(var l=0;l<arguments.length;l++)e[arguments[l]]=i}}r("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_"),r("keyword")("..",":","::","=","\\","<-","->","@","~","=>"),r("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<*","<=","<$>","<*>","=<<","==",">",">=",">>",">>=","^","^^","||","*","*>","**"),r("builtin")("Applicative","Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True"),r("builtin")("abs","acos","acosh","all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational","fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","pure","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn","readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError","words","writeFile","zip","zip3","zipWith","zipWith3");var t=w.overrideKeywords;if(t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}();return{startState:function(){return{f:a}},copyState:function(e){return{f:e.f}},token:function(e,r){var t=r.f(e,function(i){r.f=i}),n=e.current();return c.hasOwnProperty(n)?c[n]:t},blockCommentStart:"{-",blockCommentEnd:"-}",lineComment:"--"}}),o.defineMIME("text/x-haskell","haskell")})}()),g.exports}export{z as r};
