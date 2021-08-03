// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('colorify.actions');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('colorify.store');
colorify.actions.reset_state = (function colorify$actions$reset_state(state){
return colorify.store.init_state;
});
colorify.actions.change_color = (function colorify$actions$change_color(state,key,value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,value);
});
colorify.actions.change_force = (function colorify$actions$change_force(state,key,value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,value);
});
