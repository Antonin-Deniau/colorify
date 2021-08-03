// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('thi.ng.strf.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
thi.ng.strf.core.parse_int = (function thi$ng$strf$core$parse_int(var_args){
var args__4835__auto__ = [];
var len__4829__auto___31941 = arguments.length;
var i__4830__auto___31942 = (0);
while(true){
if((i__4830__auto___31942 < len__4829__auto___31941)){
args__4835__auto__.push((arguments[i__4830__auto___31942]));

var G__31943 = (i__4830__auto___31942 + (1));
i__4830__auto___31942 = G__31943;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__31937){
var vec__31938 = p__31937;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31938,(0),null);
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
}));

(thi.ng.strf.core.parse_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.strf.core.parse_int.cljs$lang$applyTo = (function (seq31934){
var G__31935 = cljs.core.first(seq31934);
var seq31934__$1 = cljs.core.next(seq31934);
var G__31936 = cljs.core.first(seq31934__$1);
var seq31934__$2 = cljs.core.next(seq31934__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31935,G__31936,seq31934__$2);
}));

thi.ng.strf.core.parse_long = (function thi$ng$strf$core$parse_long(var_args){
var args__4835__auto__ = [];
var len__4829__auto___31951 = arguments.length;
var i__4830__auto___31952 = (0);
while(true){
if((i__4830__auto___31952 < len__4829__auto___31951)){
args__4835__auto__.push((arguments[i__4830__auto___31952]));

var G__31953 = (i__4830__auto___31952 + (1));
i__4830__auto___31952 = G__31953;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__31947){
var vec__31948 = p__31947;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31948,(0),null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(x,radix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}));

(thi.ng.strf.core.parse_long.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.strf.core.parse_long.cljs$lang$applyTo = (function (seq31944){
var G__31945 = cljs.core.first(seq31944);
var seq31944__$1 = cljs.core.next(seq31944);
var G__31946 = cljs.core.first(seq31944__$1);
var seq31944__$2 = cljs.core.next(seq31944__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31945,G__31946,seq31944__$2);
}));

thi.ng.strf.core.parse_float = (function thi$ng$strf$core$parse_float(var_args){
var args__4835__auto__ = [];
var len__4829__auto___31960 = arguments.length;
var i__4830__auto___31961 = (0);
while(true){
if((i__4830__auto___31961 < len__4829__auto___31960)){
args__4835__auto__.push((arguments[i__4830__auto___31961]));

var G__31962 = (i__4830__auto___31961 + (1));
i__4830__auto___31961 = G__31962;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__31956){
var vec__31957 = p__31956;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31957,(0),null);
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
}));

(thi.ng.strf.core.parse_float.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.parse_float.cljs$lang$applyTo = (function (seq31954){
var G__31955 = cljs.core.first(seq31954);
var seq31954__$1 = cljs.core.next(seq31954);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31955,seq31954__$1);
}));

thi.ng.strf.core.parse_double = (function thi$ng$strf$core$parse_double(var_args){
var args__4835__auto__ = [];
var len__4829__auto___31969 = arguments.length;
var i__4830__auto___31970 = (0);
while(true){
if((i__4830__auto___31970 < len__4829__auto___31969)){
args__4835__auto__.push((arguments[i__4830__auto___31970]));

var G__31971 = (i__4830__auto___31970 + (1));
i__4830__auto___31970 = G__31971;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__31965){
var vec__31966 = p__31965;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31966,(0),null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}));

(thi.ng.strf.core.parse_double.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.parse_double.cljs$lang$applyTo = (function (seq31963){
var G__31964 = cljs.core.first(seq31963);
var seq31963__$1 = cljs.core.next(seq31963);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31964,seq31963__$1);
}));

thi.ng.strf.core.parse_boolean = (function thi$ng$strf$core$parse_boolean(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",clojure.string.lower_case(x));
});
thi.ng.strf.core.int$ = cljs.core.int$;
thi.ng.strf.core.long$ = thi.ng.strf.core.int$;
thi.ng.strf.core.float$ = cljs.core.memoize((function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.double$ = cljs.core.memoize((function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.pad_left = cljs.core.memoize((function (len,fill){
var fill__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,fill));
return (function (x){
var l = cljs.core.count(x);
if((l < len)){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fill__$1,(0),(len - l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return x;
}
});
}));
thi.ng.strf.core.pad_right = cljs.core.memoize((function (len,fill){
var fill__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,fill));
return (function (x){
var l = cljs.core.count(x);
if((l < len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fill__$1,(0),(len - l))].join('');
} else {
return x;
}
});
}));
thi.ng.strf.core.hex = cljs.core.memoize((function (len){
var pad = (thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2(len,"0") : thi.ng.strf.core.pad_left.call(null,len,"0"));
return (function (x){
var G__31972 = (new Number((thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.strf.core.int$.call(null,x)))).toString((16));
return (pad.cljs$core$IFn$_invoke$arity$1 ? pad.cljs$core$IFn$_invoke$arity$1(G__31972) : pad.call(null,G__31972));
});
}));
thi.ng.strf.core.trunc_left = (function thi$ng$strf$core$trunc_left(len){
return (function (x){
var l = cljs.core.count(x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x,(0),len);
}
});
});
thi.ng.strf.core.trunc_right = (function thi$ng$strf$core$trunc_right(len){
return (function (x){
var l = cljs.core.count(x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,(l - len));
}
});
});
thi.ng.strf.core.format = (function thi$ng$strf$core$format(var_args){
var args__4835__auto__ = [];
var len__4829__auto___31976 = arguments.length;
var i__4830__auto___31977 = (0);
while(true){
if((i__4830__auto___31977 < len__4829__auto___31976)){
args__4835__auto__.push((arguments[i__4830__auto___31977]));

var G__31978 = (i__4830__auto___31977 + (1));
i__4830__auto___31977 = G__31978;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var s = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var fmt__$1 = fmt;
var args__$1 = args;
while(true){
var temp__5751__auto__ = cljs.core.first(fmt__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
if(typeof f === 'string'){
var G__31979 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,f);
var G__31980 = cljs.core.next(fmt__$1);
var G__31981 = args__$1;
s = G__31979;
fmt__$1 = G__31980;
args__$1 = G__31981;
continue;
} else {
var G__31982 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,(function (){var G__31975 = cljs.core.first(args__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__31975) : f.call(null,G__31975));
})());
var G__31983 = cljs.core.next(fmt__$1);
var G__31984 = cljs.core.next(args__$1);
s = G__31982;
fmt__$1 = G__31983;
args__$1 = G__31984;
continue;
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.persistent_BANG_(s));
}
break;
}
}));

(thi.ng.strf.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.format.cljs$lang$applyTo = (function (seq31973){
var G__31974 = cljs.core.first(seq31973);
var seq31973__$1 = cljs.core.next(seq31973);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31974,seq31973__$1);
}));

thi.ng.strf.core.date_fields = (function thi$ng$strf$core$date_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate()], null)], null);
});
thi.ng.strf.core.time_fields = (function thi$ng$strf$core$time_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.datetime_fields = (function thi$ng$strf$core$datetime_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.date_formatters = (function (){var d2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2((2),"0") : thi.ng.strf.core.pad_left.call(null,(2),"0")),cljs.core.str);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$yyyy_DASH_mm_DASH_dd,(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2], null),thi.ng.strf.core.date_fields(d));
}),cljs.core.cst$kw$yyyy_DASH_mm_DASH_dd_DASH_hh_DASH_mm_DASH_ss,(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2," ",d2,":",d2,":",d2], null),thi.ng.strf.core.datetime_fields(d));
}),cljs.core.cst$kw$yyyymmdd_DASH_hhmmss,(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,d2,d2,"-",d2,d2,d2], null),thi.ng.strf.core.datetime_fields(d));
}),cljs.core.cst$kw$dd_DASH_mm_DASH_yyyy,(function (d){
var vec__31986 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31986,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31986,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31986,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d__$1,m,y], 0));
}),cljs.core.cst$kw$mm_DASH_dd_DASH_yyyy,(function (d){
var vec__31989 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31989,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31989,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31989,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,d__$1,y], 0));
}),cljs.core.cst$kw$dd_DASH_mm_DASH_yy,(function (d){
var vec__31992 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31992,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31992,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31992,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.comp.cljs$core$IFn$_invoke$arity$2(d2,(function (p1__31985_SHARP_){
return cljs.core.mod(p1__31985_SHARP_,(100));
}))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d__$1,m,y], 0));
}),cljs.core.cst$kw$hh_DASH_mm_DASH_ss,(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,":",d2,":",d2], null),thi.ng.strf.core.time_fields(d));
})], null);
})();
thi.ng.strf.core.format_date = (function thi$ng$strf$core$format_date(var_args){
var G__31996 = arguments.length;
switch (G__31996) {
case 1:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
var fexpr__31998 = (function (){var G__31999 = cljs.core.cst$kw$yyyy_DASH_mm_DASH_dd_DASH_hh_DASH_mm_DASH_ss;
return (thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1(G__31999) : thi.ng.strf.core.date_formatters.call(null,G__31999));
})();
return (fexpr__31998.cljs$core$IFn$_invoke$arity$1 ? fexpr__31998.cljs$core$IFn$_invoke$arity$1(d) : fexpr__31998.call(null,d));
}));

(thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,d){
if(cljs.core.fn_QMARK_(fmt)){
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(d) : fmt.call(null,d));
} else {
var fexpr__32000 = (thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1(fmt) : thi.ng.strf.core.date_formatters.call(null,fmt));
return (fexpr__32000.cljs$core$IFn$_invoke$arity$1 ? fexpr__32000.cljs$core$IFn$_invoke$arity$1(d) : fexpr__32000.call(null,d));
}
}));

(thi.ng.strf.core.format_date.cljs$lang$maxFixedArity = 2);

thi.ng.strf.core.now = (function thi$ng$strf$core$now(){
return (new Date());
});
thi.ng.strf.core.timestamp = (function thi$ng$strf$core$timestamp(){
return (new Date()).getTime();
});
thi.ng.strf.core.format_16bit_hex = (function (){var G__32002 = (4);
var G__32003 = "0";
return (thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2(G__32002,G__32003) : thi.ng.strf.core.pad_left.call(null,G__32002,G__32003));
})();
thi.ng.strf.core.rand_bits = (function thi$ng$strf$core$rand_bits(bits){
var G__32004 = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * ((1) << bits));
return (thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1(G__32004) : thi.ng.strf.core.int$.call(null,G__32004));
});
thi.ng.strf.core.rand_bits_hex = (function thi$ng$strf$core$rand_bits_hex(bits){
var G__32009 = thi.ng.strf.core.rand_bits(bits).toString((16));
var fexpr__32008 = (function (){var G__32010 = (function (){var G__32012 = (bits / (4));
return Math.ceil(G__32012);
})();
var G__32011 = "0";
return (thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2 ? thi.ng.strf.core.pad_left.cljs$core$IFn$_invoke$arity$2(G__32010,G__32011) : thi.ng.strf.core.pad_left.call(null,G__32010,G__32011));
})();
return (fexpr__32008.cljs$core$IFn$_invoke$arity$1 ? fexpr__32008.cljs$core$IFn$_invoke$arity$1(G__32009) : fexpr__32008.call(null,G__32009));
});
thi.ng.strf.core.rand_16bits_hex = (function thi$ng$strf$core$rand_16bits_hex(){
var G__32013 = cljs.core.rand_int((65536)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__32013) : thi.ng.strf.core.format_16bit_hex.call(null,G__32013));
});
thi.ng.strf.core.new_uuid = (function thi$ng$strf$core$new_uuid(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__32016 = ((thi.ng.strf.core.rand_bits((16)) & (4095)) | (16384)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__32016) : thi.ng.strf.core.format_16bit_hex.call(null,G__32016));
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__32017 = ((thi.ng.strf.core.rand_bits((16)) & (16383)) | (32768)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__32017) : thi.ng.strf.core.format_16bit_hex.call(null,G__32017));
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex())].join('');
});
thi.ng.strf.core.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.strf.core.as_str = (function thi$ng$strf$core$as_str(x){
if((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
return cljs.core.name(x);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
});
thi.ng.strf.core.escape_html = (function thi$ng$strf$core$escape_html(x){
return clojure.string.escape(thi.ng.strf.core.as_str(x),thi.ng.strf.core.html_entities);
});
