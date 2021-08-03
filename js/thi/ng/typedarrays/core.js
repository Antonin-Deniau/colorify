// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('thi.ng.typedarrays.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Returns true if JS runtime supports typed arrays
 */
thi.ng.typedarrays.core.typed_arrays_supported_QMARK_ = (function thi$ng$typedarrays$core$typed_arrays_supported_QMARK_(){
return (!(((window["ArrayBuffer"]) == null)));
});
thi.ng.typedarrays.core.array_types = cljs.core.PersistentHashMap.fromArrays(["Float64Array","Uint8Array","Int8Array","Uint8ClampedArray","Uint16Array","Int16Array","Uint32Array","Float32Array","Int32Array"],[cljs.core.cst$kw$float64,cljs.core.cst$kw$uint8,cljs.core.cst$kw$int8,cljs.core.cst$kw$uint8_DASH_clamped,cljs.core.cst$kw$uint16,cljs.core.cst$kw$int16,cljs.core.cst$kw$uint32,cljs.core.cst$kw$float32,cljs.core.cst$kw$int32]);
/**
 * Returns truthy value if the given arg is a typed array instance
 */
thi.ng.typedarrays.core.typed_array_QMARK_ = (function thi$ng$typedarrays$core$typed_array_QMARK_(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("object",goog.typeOf(x))){
if(typeof x.BYTES_PER_ELEMENT === 'number'){
return x.buffer;
} else {
return null;
}
} else {
return null;
}
});
thi.ng.typedarrays.core.array_type = (function thi$ng$typedarrays$core$array_type(x){
if(cljs.core.array_QMARK_(x)){
return cljs.core.cst$kw$array;
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(x))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(thi.ng.typedarrays.core.array_types,cljs.core.first(cljs.core.re_find(/((Uint|Int|Float)\d+(Clamped)?Array)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.constructor))));
} else {
return null;
}
}
});
/**
 * Creates a native Int8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int8 = (function thi$ng$typedarrays$core$int8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Int8Array(len));
var i_31896 = (0);
var coll_31897 = size_or_coll;
while(true){
if((i_31896 < len)){
(buf[i_31896] = cljs.core.first(coll_31897));

var G__31898 = (i_31896 + (1));
var G__31899 = cljs.core.next(coll_31897);
i_31896 = G__31898;
coll_31897 = G__31899;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint8Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8 = (function thi$ng$typedarrays$core$uint8(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint8Array(len));
var i_31900 = (0);
var coll_31901 = size_or_coll;
while(true){
if((i_31900 < len)){
(buf[i_31900] = cljs.core.first(coll_31901));

var G__31902 = (i_31900 + (1));
var G__31903 = cljs.core.next(coll_31901);
i_31900 = G__31902;
coll_31901 = G__31903;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint8ClampedArray of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint8_clamped = (function thi$ng$typedarrays$core$uint8_clamped(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint8ClampedArray(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint8ClampedArray(len));
var i_31904 = (0);
var coll_31905 = size_or_coll;
while(true){
if((i_31904 < len)){
(buf[i_31904] = cljs.core.first(coll_31905));

var G__31906 = (i_31904 + (1));
var G__31907 = cljs.core.next(coll_31905);
i_31904 = G__31906;
coll_31905 = G__31907;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Int16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int16 = (function thi$ng$typedarrays$core$int16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Int16Array(len));
var i_31908 = (0);
var coll_31909 = size_or_coll;
while(true){
if((i_31908 < len)){
(buf[i_31908] = cljs.core.first(coll_31909));

var G__31910 = (i_31908 + (1));
var G__31911 = cljs.core.next(coll_31909);
i_31908 = G__31910;
coll_31909 = G__31911;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint16Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint16 = (function thi$ng$typedarrays$core$uint16(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint16Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint16Array(len));
var i_31912 = (0);
var coll_31913 = size_or_coll;
while(true){
if((i_31912 < len)){
(buf[i_31912] = cljs.core.first(coll_31913));

var G__31914 = (i_31912 + (1));
var G__31915 = cljs.core.next(coll_31913);
i_31912 = G__31914;
coll_31913 = G__31915;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Int32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.int32 = (function thi$ng$typedarrays$core$int32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Int32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Int32Array(len));
var i_31916 = (0);
var coll_31917 = size_or_coll;
while(true){
if((i_31916 < len)){
(buf[i_31916] = cljs.core.first(coll_31917));

var G__31918 = (i_31916 + (1));
var G__31919 = cljs.core.next(coll_31917);
i_31916 = G__31918;
coll_31917 = G__31919;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Uint32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.uint32 = (function thi$ng$typedarrays$core$uint32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Uint32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Uint32Array(len));
var i_31920 = (0);
var coll_31921 = size_or_coll;
while(true){
if((i_31920 < len)){
(buf[i_31920] = cljs.core.first(coll_31921));

var G__31922 = (i_31920 + (1));
var G__31923 = cljs.core.next(coll_31921);
i_31920 = G__31922;
coll_31921 = G__31923;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Float32Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float32 = (function thi$ng$typedarrays$core$float32(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float32Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Float32Array(len));
var i_31924 = (0);
var coll_31925 = size_or_coll;
while(true){
if((i_31924 < len)){
(buf[i_31924] = cljs.core.first(coll_31925));

var G__31926 = (i_31924 + (1));
var G__31927 = cljs.core.next(coll_31925);
i_31924 = G__31926;
coll_31925 = G__31927;
continue;
} else {
}
break;
}

return buf;

}
}
});
/**
 * Creates a native Float64Array of the given size or from `coll`.
 */
thi.ng.typedarrays.core.float64 = (function thi$ng$typedarrays$core$float64(size_or_coll){
if(typeof size_or_coll === 'number'){
return (new Float64Array(size_or_coll));
} else {
if(cljs.core.truth_(thi.ng.typedarrays.core.typed_array_QMARK_(size_or_coll))){
return size_or_coll;
} else {
var len = cljs.core.count(size_or_coll);
var buf = (new Float64Array(len));
var i_31928 = (0);
var coll_31929 = size_or_coll;
while(true){
if((i_31928 < len)){
(buf[i_31928] = cljs.core.first(coll_31929));

var G__31930 = (i_31928 + (1));
var G__31931 = cljs.core.next(coll_31929);
i_31928 = G__31930;
coll_31929 = G__31931;
continue;
} else {
}
break;
}

return buf;

}
}
});
