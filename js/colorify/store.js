// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('colorify.store');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
colorify.store.init_state = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$direct,"#d7e774",cljs.core.cst$kw$model,"#e19898",cljs.core.cst$kw$surface,"#00e1ff",cljs.core.cst$kw$force_DASH_direct,(95),cljs.core.cst$kw$blood,"#660000"], null);
colorify.store.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(colorify.store.init_state);
colorify.store.force_key = (function colorify$store$force_key(key){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["force-",cljs.core.name(key)].join(''));
});
