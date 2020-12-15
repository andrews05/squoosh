
var wp2_node_dec = (function() {
  var _scriptDir = import.meta.url;
  
  return (
function(wp2_node_dec) {
  wp2_node_dec = wp2_node_dec || {};


var e;e||(e=typeof wp2_node_dec !== 'undefined' ? wp2_node_dec : {});var aa,ba;e.ready=new Promise(function(a,b){aa=a;ba=b});var r={},t;for(t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);var ca="",da,ea,fa,ha;ca=__dirname+"/";da=function(a){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,null)};ea=function(a){a=da(a);a.buffer||(a=new Uint8Array(a));a.buffer||u("Assertion failed: undefined");return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");
process.argv.slice(2);process.on("uncaughtException",function(a){throw a;});process.on("unhandledRejection",u);e.inspect=function(){return"[Emscripten Module object]"};var ia=e.print||console.log.bind(console),v=e.printErr||console.warn.bind(console);for(t in r)r.hasOwnProperty(t)&&(e[t]=r[t]);r=null;var w;e.wasmBinary&&(w=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&u("no native wasm support detected");var y,ja=!1,ka=new TextDecoder("utf8");
function la(a,b,c){var d=z;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var ma=new TextDecoder("utf-16le");
function na(a,b){var c=a>>1;for(b=c+b/2;!(c>=b)&&A[c];)++c;return ma.decode(z.subarray(a,c<<1))}function oa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)C[b>>1]=a.charCodeAt(f),b+=2;C[b>>1]=0;return b-d}function pa(a){return 2*a.length}function qa(a,b){for(var c=0,d="";!(c>=b/4);){var f=D[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}
function ra(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var l=a.charCodeAt(++f);g=65536+((g&1023)<<10)|l&1023}D[b>>2]=g;b+=4;if(b+4>c)break}D[b>>2]=0;return b-d}function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var E,F,z,C,A,D,G,ta,ua;
function va(a){E=a;e.HEAP8=F=new Int8Array(a);e.HEAP16=C=new Int16Array(a);e.HEAP32=D=new Int32Array(a);e.HEAPU8=z=new Uint8Array(a);e.HEAPU16=A=new Uint16Array(a);e.HEAPU32=G=new Uint32Array(a);e.HEAPF32=ta=new Float32Array(a);e.HEAPF64=ua=new Float64Array(a)}var wa=e.INITIAL_MEMORY||16777216;e.wasmMemory?y=e.wasmMemory:y=new WebAssembly.Memory({initial:wa/65536,maximum:32768});y&&(E=y.buffer);wa=E.byteLength;va(E);var I,xa=[],ya=[],za=[],Aa=[];
function Ba(){var a=e.preRun.shift();xa.unshift(a)}var J=0,Ca=null,K=null;e.preloadedImages={};e.preloadedAudios={};function u(a){if(e.onAbort)e.onAbort(a);v(a);ja=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a;}function Da(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="wp2_node_dec.wasm";
if(!Da()){var Ea=M;M=e.locateFile?e.locateFile(Ea,ca):ca+Ea}function Fa(){try{if(w)return new Uint8Array(w);if(ea)return ea(M);throw"both async and sync fetching of the wasm failed";}catch(a){u(a)}}function N(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.L;"number"===typeof c?void 0===b.H?I.get(c)():I.get(c)(b.H):c(void 0===b.H?null:b.H)}}}
function Ga(a){this.G=a-16;this.T=function(b){D[this.G+8>>2]=b};this.P=function(b){D[this.G+0>>2]=b};this.R=function(){D[this.G+4>>2]=0};this.O=function(){F[this.G+12>>0]=0};this.S=function(){F[this.G+13>>0]=0};this.N=function(b,c){this.T(b);this.P(c);this.R();this.O();this.S()}}function O(){return 0<O.J}function Ha(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ia=void 0;
function P(a){for(var b="";z[a];)b+=Ia[z[a++]];return b}var Q={},R={},S={};function Ja(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ka(a,b){a=Ja(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function La(a){var b=Error,c=Ka(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Ma=void 0;function T(a){throw new Ma(a);}var Na=void 0;
function Qa(a,b){function c(h){h=b(h);if(h.length!==d.length)throw new Na("Mismatched type converter count");for(var k=0;k<d.length;++k)U(d[k],h[k])}var d=[];d.forEach(function(h){S[h]=a});var f=Array(a.length),g=[],l=0;a.forEach(function(h,k){R.hasOwnProperty(h)?f[k]=R[h]:(g.push(h),Q.hasOwnProperty(h)||(Q[h]=[]),Q[h].push(function(){f[k]=R[h];++l;l===g.length&&c(f)}))});0===g.length&&c(f)}
function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||T('type "'+d+'" must have a positive integer typeid pointer');if(R.hasOwnProperty(a)){if(c.M)return;T("Cannot register type '"+d+"' twice")}R[a]=b;delete S[a];Q.hasOwnProperty(a)&&(b=Q[a],delete Q[a],b.forEach(function(f){f()}))}var Ra=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Sa(a){4<a&&0===--V[a].I&&(V[a]=void 0,Ra.push(a))}function W(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Ra.length?Ra.pop():V.length;V[b]={I:1,value:a};return b}}function Ta(a){return this.fromWireType(G[a>>2])}function Ua(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Va(a,b){switch(b){case 2:return function(c){return this.fromWireType(ta[c>>2])};case 3:return function(c){return this.fromWireType(ua[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Wa(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ka(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Xa(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function Ya(a,b){var c=e;if(void 0===c[a].D){var d=c[a];c[a]=function(){c[a].D.hasOwnProperty(arguments.length)||T("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].D+")!");return c[a].D[arguments.length].apply(this,arguments)};c[a].D=[];c[a].D[d.K]=d}}
function Za(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].D&&void 0!==e[a].D[c])&&T("Cannot register public name '"+a+"' twice"),Ya(a,a),e.hasOwnProperty(c)&&T("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].D[c]=b):(e[a]=b,void 0!==c&&(e[a].V=c))}function $a(a,b){for(var c=[],d=0;d<a;d++)c.push(D[(b>>2)+d]);return c}
function ab(a,b){0<=a.indexOf("j")||u("Assertion failed: getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var f;-1!=a.indexOf("j")?f=c&&c.length?e["dynCall_"+a].apply(null,[b].concat(c)):e["dynCall_"+a].call(null,b):f=I.get(b).apply(null,c);return f}}
function bb(a,b){a=P(a);var c=-1!=a.indexOf("j")?ab(a,b):I.get(b);"function"!==typeof c&&T("unknown function pointer with signature "+a+": "+b);return c}var cb=void 0;function db(a){a=eb(a);var b=P(a);X(a);return b}function fb(a,b){function c(g){f[g]||R[g]||(S[g]?S[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new cb(a+": "+d.map(db).join([", "]));}
function gb(a,b,c){switch(b){case 0:return c?function(d){return F[d]}:function(d){return z[d]};case 1:return c?function(d){return C[d>>1]}:function(d){return A[d>>1]};case 2:return c?function(d){return D[d>>2]}:function(d){return G[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var hb={};function ib(){return"object"===typeof globalThis?globalThis:Function("return this")()}function jb(a,b){var c=R[a];void 0===c&&T(b+" has unknown type "+db(a));return c}
for(var kb={},lb=[null,[],[]],mb=Array(256),Y=0;256>Y;++Y)mb[Y]=String.fromCharCode(Y);Ia=mb;Ma=e.BindingError=La("BindingError");Na=e.InternalError=La("InternalError");e.count_emval_handles=function(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null};cb=e.UnboundTypeError=La("UnboundTypeError");ya.push({L:function(){nb()}});
var ob={r:function(a){return Z(a+16)+16},g:function(){},q:function(a,b,c){(new Ga(a)).N(b,c);"uncaught_exception"in O?O.J++:O.J=1;throw a;},o:function(a,b,c,d,f){var g=Ha(c);b=P(b);U(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,h){return h?d:f},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var h=F;else if(2===c)h=C;else if(4===c)h=D;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(h[l>>g])},F:null})},v:function(a,b){b=P(b);U(a,
{name:b,fromWireType:function(c){var d=V[c].value;Sa(c);return d},toWireType:function(c,d){return W(d)},argPackAdvance:8,readValueFromPointer:Ta,F:null})},m:function(a,b,c){c=Ha(c);b=P(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+Ua(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Va(b,c),F:null})},s:function(a,b,c,d,f,g){var l=$a(b,c);a=P(a);f=bb(d,f);Za(a,function(){fb("Cannot call "+
a+" due to unbound types",l)},b-1);Qa(l,function(h){var k=[h[0],null].concat(h.slice(1)),m=h=a,n=f,p=k.length;2>p&&T("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==k[1]&&!1,B=!1,q=1;q<k.length;++q)if(null!==k[q]&&void 0===k[q].F){B=!0;break}var Oa="void"!==k[0].name,H="",L="";for(q=0;q<p-2;++q)H+=(0!==q?", ":"")+"arg"+q,L+=(0!==q?", ":"")+"arg"+q+"Wired";m="return function "+Ja(m)+"("+H+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+
m+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n";B&&(m+="var destructors = [];\n");var Pa=B?"destructors":"null";H="throwBindingError invoker fn runDestructors retType classParam".split(" ");n=[T,n,g,Xa,k[0],k[1]];x&&(m+="var thisWired = classParam.toWireType("+Pa+", this);\n");for(q=0;q<p-2;++q)m+="var arg"+q+"Wired = argType"+q+".toWireType("+Pa+", arg"+q+"); // "+k[q+2].name+"\n",H.push("argType"+q),n.push(k[q+2]);x&&(L="thisWired"+(0<L.length?", ":"")+L);m+=
(Oa?"var rv = ":"")+"invoker(fn"+(0<L.length?", ":"")+L+");\n";if(B)m+="runDestructors(destructors);\n";else for(q=x?1:2;q<k.length;++q)p=1===q?"thisWired":"arg"+(q-2)+"Wired",null!==k[q].F&&(m+=p+"_dtor("+p+"); // "+k[q].name+"\n",H.push(p+"_dtor"),n.push(k[q].F));Oa&&(m+="var ret = retType.fromWireType(rv);\nreturn ret;\n");H.push(m+"}\n");k=Wa(H).apply(null,n);q=b-1;if(!e.hasOwnProperty(h))throw new Na("Replacing nonexistant public symbol");void 0!==e[h].D&&void 0!==q?e[h].D[q]=k:(e[h]=k,e[h].K=
q);return[]})},c:function(a,b,c,d,f){function g(m){return m}b=P(b);-1===f&&(f=4294967295);var l=Ha(c);if(0===d){var h=32-8*c;g=function(m){return m<<h>>>h}}var k=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError('Cannot convert "'+Ua(n)+'" to '+this.name);if(n<d||n>f)throw new TypeError('Passing a number "'+Ua(n)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+
d+", "+f+"]!");return k?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:gb(b,l,0!==d),F:null})},b:function(a,b,c){function d(g){g>>=2;var l=G;return new f(E,l[g+1],l[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=P(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{M:!0})},n:function(a,b){b=P(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var f=G[d>>2];if(c)for(var g=d+4,l=0;l<=f;++l){var h=d+4+l;
if(l==f||0==z[h]){if(g){for(var k=g+(h-g),m=g;!(m>=k)&&z[m];)++m;g=ka.decode(z.subarray(g,m))}else g="";if(void 0===n)var n=g;else n+=String.fromCharCode(0),n+=g;g=h+1}}else{n=Array(f);for(l=0;l<f;++l)n[l]=String.fromCharCode(z[d+4+l]);n=n.join("")}X(d);return n},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||T("Cannot pass non-string to std::string");var l=(c&&g?
function(){for(var m=0,n=0;n<f.length;++n){var p=f.charCodeAt(n);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|f.charCodeAt(++n)&1023);127>=p?++m:m=2047>=p?m+2:65535>=p?m+3:m+4}return m}:function(){return f.length})(),h=Z(4+l+1);G[h>>2]=l;if(c&&g)la(f,h+4,l+1);else if(g)for(g=0;g<l;++g){var k=f.charCodeAt(g);255<k&&(X(h),T("String has UTF-16 code units that do not fit in 8 bits"));z[h+4+g]=k}else for(g=0;g<l;++g)z[h+4+g]=f[g];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:Ta,
F:function(d){X(d)}})},h:function(a,b,c){c=P(c);if(2===b){var d=na;var f=oa;var g=pa;var l=function(){return A};var h=1}else 4===b&&(d=qa,f=ra,g=sa,l=function(){return G},h=2);U(a,{name:c,fromWireType:function(k){for(var m=G[k>>2],n=l(),p,x=k+4,B=0;B<=m;++B){var q=k+4+B*b;if(B==m||0==n[q>>h])x=d(x,q-x),void 0===p?p=x:(p+=String.fromCharCode(0),p+=x),x=q+b}X(k);return p},toWireType:function(k,m){"string"!==typeof m&&T("Cannot pass non-string to C++ string type "+c);var n=g(m),p=Z(4+n+b);G[p>>2]=n>>
h;f(m,p+4,n+b);null!==k&&k.push(X,p);return p},argPackAdvance:8,readValueFromPointer:Ta,F:function(k){X(k)}})},p:function(a,b){b=P(b);U(a,{U:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},e:Sa,f:function(a){if(0===a)return W(ib());var b=hb[a];a=void 0===b?P(a):b;return W(ib()[a])},i:function(a){4<a&&(V[a].I+=1)},j:function(a,b,c,d){a||T("Cannot use deleted val. handle = "+a);a=V[a].value;var f=kb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var l=
"return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+'], "parameter '+g+'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=(new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n")))(jb,e,W);kb[b]=f}return f(a,c,d)},k:function(){u()},u:function(a,
b,c){z.copyWithin(a,b,b+c)},d:function(a){a>>>=0;var b=z.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{y.grow(Math.min(2147483648,d)-E.byteLength+65535>>>16);va(y.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},l:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var l=D[b+8*g>>2],h=D[b+(8*g+4)>>2],k=0;k<h;k++){var m=z[l+k],n=lb[a];if(0===m||10===m){m=1===a?ia:v;var p;for(p=
0;n[p]&&!(NaN<=p);)++p;p=ka.decode(n.subarray?n.subarray(0,p):new Uint8Array(n.slice(0,p)));m(p);n.length=0}else n.push(m)}f+=h}D[d>>2]=f;return 0},a:y,t:function(){}};
(function(){function a(f){e.asm=f.exports;I=e.asm.w;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ca&&(clearInterval(Ca),Ca=null),K&&(f=K,K=null,f()))}function b(f){a(f.instance)}function c(f){return Promise.resolve().then(Fa).then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){v("failed to asynchronously prepare wasm: "+g);u(g)})}var d={a:ob};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return v("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return w||"function"!==typeof WebAssembly.instantiateStreaming||Da()||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){v("wasm streaming compile failed: "+g);v("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();
var nb=e.___wasm_call_ctors=function(){return(nb=e.___wasm_call_ctors=e.asm.x).apply(null,arguments)},Z=e._malloc=function(){return(Z=e._malloc=e.asm.y).apply(null,arguments)},X=e._free=function(){return(X=e._free=e.asm.z).apply(null,arguments)},eb=e.___getTypeName=function(){return(eb=e.___getTypeName=e.asm.A).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.B).apply(null,arguments)};
e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.C).apply(null,arguments)};var pb;K=function qb(){pb||rb();pb||(K=qb)};
function rb(){function a(){if(!pb&&(pb=!0,e.calledRun=!0,!ja)){N(ya);N(za);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Aa.unshift(b)}N(Aa)}}if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ba();N(xa);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}
e.run=rb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();noExitRuntime=!0;rb();


  return wp2_node_dec.ready
}
);
})();
export default wp2_node_dec;