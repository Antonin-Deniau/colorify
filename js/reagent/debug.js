// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__27244__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27245__i = 0, G__27245__a = new Array(arguments.length -  0);
while (G__27245__i < G__27245__a.length) {G__27245__a[G__27245__i] = arguments[G__27245__i + 0]; ++G__27245__i;}
  args = new cljs.core.IndexedSeq(G__27245__a,0,null);
} 
return G__27244__delegate.call(this,args);};
G__27244.cljs$lang$maxFixedArity = 0;
G__27244.cljs$lang$applyTo = (function (arglist__27246){
var args = cljs.core.seq(arglist__27246);
return G__27244__delegate(args);
});
G__27244.cljs$core$IFn$_invoke$arity$variadic = G__27244__delegate;
return G__27244;
})()
);

(o.error = (function() { 
var G__27247__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27248__i = 0, G__27248__a = new Array(arguments.length -  0);
while (G__27248__i < G__27248__a.length) {G__27248__a[G__27248__i] = arguments[G__27248__i + 0]; ++G__27248__i;}
  args = new cljs.core.IndexedSeq(G__27248__a,0,null);
} 
return G__27247__delegate.call(this,args);};
G__27247.cljs$lang$maxFixedArity = 0;
G__27247.cljs$lang$applyTo = (function (arglist__27249){
var args = cljs.core.seq(arglist__27249);
return G__27247__delegate(args);
});
G__27247.cljs$core$IFn$_invoke$arity$variadic = G__27247__delegate;
return G__27247;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
