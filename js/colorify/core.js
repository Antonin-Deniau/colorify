// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('colorify.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
goog.require('colorify.store');
goog.require('colorify.actions');
goog.require('colorify.colors');
colorify.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.cst$kw$index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",cljs.core.cst$kw$about], null)], null));
colorify.core.path_for = (function colorify$core$path_for(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32442 = arguments.length;
var i__4830__auto___32443 = (0);
while(true){
if((i__4830__auto___32443 < len__4829__auto___32442)){
args__4835__auto__.push((arguments[i__4830__auto___32443]));

var G__32444 = (i__4830__auto___32443 + (1));
i__4830__auto___32443 = G__32444;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return colorify.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(colorify.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__32438){
var vec__32439 = p__32438;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32439,(0),null);
if(cljs.core.truth_(params)){
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(colorify.core.router,route,params));
} else {
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(colorify.core.router,route));
}
}));

(colorify.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(colorify.core.path_for.cljs$lang$applyTo = (function (seq32436){
var G__32437 = cljs.core.first(seq32436);
var seq32436__$1 = cljs.core.next(seq32436);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32437,seq32436__$1);
}));

colorify.core.color_chooser = (function colorify$core$color_chooser(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32456 = arguments.length;
var i__4830__auto___32457 = (0);
while(true){
if((i__4830__auto___32457 < len__4829__auto___32456)){
args__4835__auto__.push((arguments[i__4830__auto___32457]));

var G__32458 = (i__4830__auto___32457 + (1));
i__4830__auto___32457 = G__32458;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return colorify.core.color_chooser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(colorify.core.color_chooser.cljs$core$IFn$_invoke$arity$variadic = (function (title,icon,key,force_QMARK_){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background_DASH_color,(function (){var G__32451 = cljs.core.deref(colorify.store.state);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__32451) : key.call(null,G__32451));
})(),cljs.core.cst$kw$color,((colorify.colors.is_too_dark_QMARK_((function (){var G__32452 = cljs.core.deref(colorify.store.state);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__32452) : key.call(null,G__32452));
})()))?"white":"black")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["color-cursor fas ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_right,"1vw"], null)], null)], null),title,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"color-picker",cljs.core.cst$kw$type,cljs.core.cst$kw$color,cljs.core.cst$kw$value,(function (){var G__32453 = cljs.core.deref(colorify.store.state);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__32453) : key.call(null,G__32453));
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__32445_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colorify.store.state,colorify.actions.change_color,key,p1__32445_SHARP_.target.value);
})], null)], null),(cljs.core.truth_(force_QMARK_)?"Force: ":null),(cljs.core.truth_(force_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$range,cljs.core.cst$kw$min,(0),cljs.core.cst$kw$max,(100),cljs.core.cst$kw$value,(function (){var G__32455 = cljs.core.deref(colorify.store.state);
var fexpr__32454 = colorify.store.force_key(key);
return (fexpr__32454.cljs$core$IFn$_invoke$arity$1 ? fexpr__32454.cljs$core$IFn$_invoke$arity$1(G__32455) : fexpr__32454.call(null,G__32455));
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__32446_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colorify.store.state,colorify.actions.change_force,colorify.store.force_key(key),(p1__32446_SHARP_.target.value | (0)));
})], null)], null):null)], null);
}));

(colorify.core.color_chooser.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(colorify.core.color_chooser.cljs$lang$applyTo = (function (seq32447){
var G__32448 = cljs.core.first(seq32447);
var seq32447__$1 = cljs.core.next(seq32447);
var G__32449 = cljs.core.first(seq32447__$1);
var seq32447__$2 = cljs.core.next(seq32447__$1);
var G__32450 = cljs.core.first(seq32447__$2);
var seq32447__$3 = cljs.core.next(seq32447__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32448,G__32449,G__32450,seq32447__$3);
}));

colorify.core.color_generated = (function colorify$core$color_generated(name,icon,color){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,((colorify.colors.is_too_dark_QMARK_(color))?"white":"black"),cljs.core.cst$kw$background_DASH_color,color], null),cljs.core.cst$kw$class,"color"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["color-cursor fas ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join(''),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_right,"1vw"], null)], null)], null),name], null);
});
colorify.core.gradient_generated = (function colorify$core$gradient_generated(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,["linear-gradient(to right, ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",colorify.colors.generate_gradient_scene()),")"].join('')], null),cljs.core.cst$kw$class,"skin-tones"], null),"Scene colors"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color-cursor fas fa-sun",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,"0%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color-cursor fas fa-bowling-ball",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,"50%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color-cursor fas fa-chess-board",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,"100%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color-cursor fas fa-snowflake",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,"75%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color-cursor fas fas fa-fire",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,"25%"], null)], null)], null)], null);
});
colorify.core.skin_tones = (function colorify$core$skin_tones(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background,["linear-gradient(to right, ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",colorify.colors.generate_gradient_skintones()),")"].join('')], null),cljs.core.cst$kw$class,"skin-tones"], null),"Skin tones"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color-cursor fas fa-smile-beam",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,"33%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color-cursor fas fa-heart",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,"100%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color-cursor fas fa-snowflake",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,"0%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"color-cursor fas fas fa-fire",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,"66%"], null)], null)], null)], null);
});
colorify.core.color_page = (function colorify$core$color_page(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Colorify"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"color-container"], null),colorify.core.color_chooser.cljs$core$IFn$_invoke$arity$variadic("Direct light:","fa-sun",cljs.core.cst$kw$direct,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),colorify.core.color_chooser("Model color:","fa-bowling-ball",cljs.core.cst$kw$model),colorify.core.color_chooser("Surface color:","fa-chess-board",cljs.core.cst$kw$surface),colorify.core.color_generated("Direct","fa-fire",colorify.colors.get_css_from_mix(colorify.colors.light_on_model)),colorify.core.color_generated("Refracted","fa-snowflake",colorify.colors.get_css_from_mix(colorify.colors.refracted_on_model)),colorify.core.color_generated("Blood refraction","fa-heart",colorify.colors.get_css_from_mix(colorify.colors.blood_refraction)),colorify.core.gradient_generated(),colorify.core.skin_tones()], null)], null);
});
});
colorify.core.about_page = (function colorify$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"About colorify"], null)], null);
});
});
colorify.core.page_for = (function colorify$core$page_for(route){
var G__32459 = route;
var G__32459__$1 = (((G__32459 instanceof cljs.core.Keyword))?G__32459.fqn:null);
switch (G__32459__$1) {
case "index":
return new cljs.core.Var(function(){return colorify.core.color_page;},cljs.core.cst$sym$colorify$core_SLASH_color_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$colorify$core,cljs.core.cst$sym$color_DASH_page,"/home/runner/work/colorify/colorify/src/cljs/colorify/core.cljs",17,1,83,83,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(colorify.core.color_page)?colorify.core.color_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return colorify.core.about_page;},cljs.core.cst$sym$colorify$core_SLASH_about_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$colorify$core,cljs.core.cst$sym$about_DASH_page,"/home/runner/work/colorify/colorify/src/cljs/colorify/core.cljs",17,1,98,98,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(colorify.core.about_page)?colorify.core.about_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32459__$1)].join('')));

}
});
colorify.core.current_page = (function colorify$core$current_page(){
return (function (){
var page = cljs.core.cst$kw$current_DASH_page.cljs$core$IFn$_invoke$arity$1(reagent.session.get(cljs.core.cst$kw$route));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,colorify.core.path_for(cljs.core.cst$kw$index)], null),"Home"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,colorify.core.path_for(cljs.core.cst$kw$about)], null),"About colorify"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null);
});
});
colorify.core.mount_root = (function colorify$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [colorify.core.current_page], null),document.getElementById("app"));
});
colorify.core.init_BANG_ = (function colorify$core$init_BANG_(){
clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nav_DASH_handler,(function (path){
var match = reitit.frontend.match_by_path(colorify.core.router,path);
var current_page = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match));
var route_params = cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render(clerk.core.after_render_BANG_);

reagent.session.put_BANG_(cljs.core.cst$kw$route,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_page,colorify.core.page_for(current_page),cljs.core.cst$kw$route_DASH_params,route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),cljs.core.cst$kw$path_DASH_exists_QMARK_,(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path(colorify.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return colorify.core.mount_root();
});
