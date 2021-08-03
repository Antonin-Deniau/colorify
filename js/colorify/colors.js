// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('colorify.colors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('thi.ng.color.core');
goog.require('colorify.store');
goog.require('thi.ng.math.core');
colorify.colors.light_on_model = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model,cljs.core.cst$kw$direct,0.5], null);
colorify.colors.refracted_on_model = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$surface,cljs.core.cst$kw$direct,0.4], null),0.5], null);
colorify.colors.blood_refraction = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model,cljs.core.cst$kw$blood,0.2], null);
colorify.colors.light_on_model_blood = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model,cljs.core.cst$kw$direct,0.5], null),cljs.core.cst$kw$blood,0.2], null);
colorify.colors.is_too_dark_QMARK_ = (function colorify$colors$is_too_dark_QMARK_(hex){
return (thi.ng.color.core.css(hex).thi$ng$color$core$IColorComponents$brightness$arity$1(null) < 0.5);
});
colorify.colors.ligh_force = (function colorify$colors$ligh_force(key,mod){
var G__32373 = (function (){var G__32375 = colorify.store.force_key(key);
var fexpr__32374 = cljs.core.deref(colorify.store.state);
return (fexpr__32374.cljs$core$IFn$_invoke$arity$1 ? fexpr__32374.cljs$core$IFn$_invoke$arity$1(G__32375) : fexpr__32374.call(null,G__32375));
})();
var fexpr__32372 = (function (p1__32371_SHARP_){
return ((mod * p1__32371_SHARP_) / (100));
});
return fexpr__32372(G__32373);
});
colorify.colors.generate_gradient_pair = (function colorify$colors$generate_gradient_pair(orig,dest,force){
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(orig))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(colorify.colors.generate_gradient_pair,orig):thi.ng.color.core.css((function (){var fexpr__32376 = cljs.core.deref(colorify.store.state);
return (fexpr__32376.cljs$core$IFn$_invoke$arity$1 ? fexpr__32376.cljs$core$IFn$_invoke$arity$1(orig) : fexpr__32376.call(null,orig));
})())),((cljs.core.vector_QMARK_(dest))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(colorify.colors.generate_gradient_pair,dest):thi.ng.color.core.css((function (){var fexpr__32377 = cljs.core.deref(colorify.store.state);
return (fexpr__32377.cljs$core$IFn$_invoke$arity$1 ? fexpr__32377.cljs$core$IFn$_invoke$arity$1(dest) : fexpr__32377.call(null,dest));
})())),colorify.colors.ligh_force(cljs.core.cst$kw$direct,force));
});
colorify.colors.get_css_from_mix = (function colorify$colors$get_css_from_mix(mix){
return cljs.core.deref(thi.ng.color.core.as_css(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(colorify.colors.generate_gradient_pair,mix)));
});
colorify.colors.generate_gradient_scene = (function colorify$colors$generate_gradient_scene(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(colorify.colors.get_css_from_mix,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$direct,cljs.core.cst$kw$direct,(1)], null),colorify.colors.light_on_model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model,cljs.core.cst$kw$model,(1)], null),colorify.colors.refracted_on_model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$surface,cljs.core.cst$kw$surface,(1)], null)], null));
});
colorify.colors.generate_gradient_skintones = (function colorify$colors$generate_gradient_skintones(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(colorify.colors.get_css_from_mix,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [colorify.colors.refracted_on_model,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$model,cljs.core.cst$kw$model,(1)], null),colorify.colors.light_on_model_blood,colorify.colors.blood_refraction], null));
});
