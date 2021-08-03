// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('thi.ng.math.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
thi.ng.math.core.IMathOps = function(){};

var thi$ng$math$core$IMathOps$_PLUS_$dyn_31648 = (function() {
var G__31649 = null;
var G__31649__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMathOps.+",_);
}
}
});
var G__31649__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMathOps.+",_);
}
}
});
var G__31649__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.+",_);
}
}
});
var G__31649__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4522__auto__.call(null,_,a,b,c));
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4519__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMathOps.+",_);
}
}
});
G__31649 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__31649__1.call(this,_);
case 2:
return G__31649__2.call(this,_,a);
case 3:
return G__31649__3.call(this,_,a,b);
case 4:
return G__31649__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31649.cljs$core$IFn$_invoke$arity$1 = G__31649__1;
G__31649.cljs$core$IFn$_invoke$arity$2 = G__31649__2;
G__31649.cljs$core$IFn$_invoke$arity$3 = G__31649__3;
G__31649.cljs$core$IFn$_invoke$arity$4 = G__31649__4;
return G__31649;
})()
;
thi.ng.math.core._PLUS_ = (function thi$ng$math$core$_PLUS_(var_args){
var G__31641 = arguments.length;
switch (G__31641) {
case 1:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$1 == null)))))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$1(_);
} else {
return thi$ng$math$core$IMathOps$_PLUS_$dyn_31648.cljs$core$IFn$_invoke$arity$1(_);
}
}));

(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$_PLUS_$dyn_31648.cljs$core$IFn$_invoke$arity$2(_,a);
}
}));

(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$_PLUS_$dyn_31648.cljs$core$IFn$_invoke$arity$3(_,a,b);
}
}));

(thi.ng.math.core._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_PLUS_$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$_PLUS_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$_PLUS_$dyn_31648.cljs$core$IFn$_invoke$arity$4(_,a,b,c);
}
}));

(thi.ng.math.core._PLUS_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$_$dyn_31651 = (function() {
var G__31652 = null;
var G__31652__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core._["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMathOps.-",_);
}
}
});
var G__31652__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core._["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMathOps.-",_);
}
}
});
var G__31652__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core._["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.-",_);
}
}
});
var G__31652__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4522__auto__.call(null,_,a,b,c));
} else {
var m__4519__auto__ = (thi.ng.math.core._["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4519__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMathOps.-",_);
}
}
});
G__31652 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__31652__1.call(this,_);
case 2:
return G__31652__2.call(this,_,a);
case 3:
return G__31652__3.call(this,_,a,b);
case 4:
return G__31652__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31652.cljs$core$IFn$_invoke$arity$1 = G__31652__1;
G__31652.cljs$core$IFn$_invoke$arity$2 = G__31652__2;
G__31652.cljs$core$IFn$_invoke$arity$3 = G__31652__3;
G__31652.cljs$core$IFn$_invoke$arity$4 = G__31652__4;
return G__31652;
})()
;
thi.ng.math.core._ = (function thi$ng$math$core$_(var_args){
var G__31643 = arguments.length;
switch (G__31643) {
case 1:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_$arity$1 == null)))))){
return _.thi$ng$math$core$IMathOps$_$arity$1(_);
} else {
return thi$ng$math$core$IMathOps$_$dyn_31651.cljs$core$IFn$_invoke$arity$1(_);
}
}));

(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$_$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$_$dyn_31651.cljs$core$IFn$_invoke$arity$2(_,a);
}
}));

(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$_$dyn_31651.cljs$core$IFn$_invoke$arity$3(_,a,b);
}
}));

(thi.ng.math.core._.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$_$dyn_31651.cljs$core$IFn$_invoke$arity$4(_,a,b,c);
}
}));

(thi.ng.math.core._.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$_STAR_$dyn_31654 = (function() {
var G__31655 = null;
var G__31655__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMathOps.*",_);
}
}
});
var G__31655__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMathOps.*",_);
}
}
});
var G__31655__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.*",_);
}
}
});
var G__31655__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4522__auto__.call(null,_,a,b,c));
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4519__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMathOps.*",_);
}
}
});
G__31655 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__31655__1.call(this,_);
case 2:
return G__31655__2.call(this,_,a);
case 3:
return G__31655__3.call(this,_,a,b);
case 4:
return G__31655__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31655.cljs$core$IFn$_invoke$arity$1 = G__31655__1;
G__31655.cljs$core$IFn$_invoke$arity$2 = G__31655__2;
G__31655.cljs$core$IFn$_invoke$arity$3 = G__31655__3;
G__31655.cljs$core$IFn$_invoke$arity$4 = G__31655__4;
return G__31655;
})()
;
thi.ng.math.core._STAR_ = (function thi$ng$math$core$_STAR_(var_args){
var G__31645 = arguments.length;
switch (G__31645) {
case 1:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_STAR_$arity$1 == null)))))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$1(_);
} else {
return thi$ng$math$core$IMathOps$_STAR_$dyn_31654.cljs$core$IFn$_invoke$arity$1(_);
}
}));

(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_STAR_$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$_STAR_$dyn_31654.cljs$core$IFn$_invoke$arity$2(_,a);
}
}));

(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_STAR_$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$_STAR_$dyn_31654.cljs$core$IFn$_invoke$arity$3(_,a,b);
}
}));

(thi.ng.math.core._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$_STAR_$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$_STAR_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$_STAR_$dyn_31654.cljs$core$IFn$_invoke$arity$4(_,a,b,c);
}
}));

(thi.ng.math.core._STAR_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$div$dyn_31657 = (function() {
var G__31658 = null;
var G__31658__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.div["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMathOps.div",_);
}
}
});
var G__31658__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core.div["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMathOps.div",_);
}
}
});
var G__31658__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.div["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.div",_);
}
}
});
var G__31658__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4522__auto__.call(null,_,a,b,c));
} else {
var m__4519__auto__ = (thi.ng.math.core.div["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4519__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMathOps.div",_);
}
}
});
G__31658 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__31658__1.call(this,_);
case 2:
return G__31658__2.call(this,_,a);
case 3:
return G__31658__3.call(this,_,a,b);
case 4:
return G__31658__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31658.cljs$core$IFn$_invoke$arity$1 = G__31658__1;
G__31658.cljs$core$IFn$_invoke$arity$2 = G__31658__2;
G__31658.cljs$core$IFn$_invoke$arity$3 = G__31658__3;
G__31658.cljs$core$IFn$_invoke$arity$4 = G__31658__4;
return G__31658;
})()
;
thi.ng.math.core.div = (function thi$ng$math$core$div(var_args){
var G__31647 = arguments.length;
switch (G__31647) {
case 1:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$div$arity$1 == null)))))){
return _.thi$ng$math$core$IMathOps$div$arity$1(_);
} else {
return thi$ng$math$core$IMathOps$div$dyn_31657.cljs$core$IFn$_invoke$arity$1(_);
}
}));

(thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$div$arity$2 == null)))))){
return _.thi$ng$math$core$IMathOps$div$arity$2(_,a);
} else {
return thi$ng$math$core$IMathOps$div$dyn_31657.cljs$core$IFn$_invoke$arity$2(_,a);
}
}));

(thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$div$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$div$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$div$dyn_31657.cljs$core$IFn$_invoke$arity$3(_,a,b);
}
}));

(thi.ng.math.core.div.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$div$arity$4 == null)))))){
return _.thi$ng$math$core$IMathOps$div$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMathOps$div$dyn_31657.cljs$core$IFn$_invoke$arity$4(_,a,b,c);
}
}));

(thi.ng.math.core.div.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMathOps$madd$dyn_31660 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.madd[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.madd["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.madd",_);
}
}
});
thi.ng.math.core.madd = (function thi$ng$math$core$madd(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$madd$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$madd$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$madd$dyn_31660(_,a,b);
}
});

var thi$ng$math$core$IMathOps$addm$dyn_31661 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.addm[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.addm["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.addm",_);
}
}
});
thi.ng.math.core.addm = (function thi$ng$math$core$addm(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$addm$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$addm$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$addm$dyn_31661(_,a,b);
}
});

var thi$ng$math$core$IMathOps$msub$dyn_31662 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.msub[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.msub["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.msub",_);
}
}
});
thi.ng.math.core.msub = (function thi$ng$math$core$msub(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$msub$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$msub$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$msub$dyn_31662(_,a,b);
}
});

var thi$ng$math$core$IMathOps$subm$dyn_31663 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.subm[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.subm["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMathOps.subm",_);
}
}
});
thi.ng.math.core.subm = (function thi$ng$math$core$subm(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$subm$arity$3 == null)))))){
return _.thi$ng$math$core$IMathOps$subm$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMathOps$subm$dyn_31663(_,a,b);
}
});

var thi$ng$math$core$IMathOps$abs$dyn_31664 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.abs[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.abs["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMathOps.abs",_);
}
}
});
thi.ng.math.core.abs = (function thi$ng$math$core$abs(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMathOps$abs$arity$1 == null)))))){
return _.thi$ng$math$core$IMathOps$abs$arity$1(_);
} else {
return thi$ng$math$core$IMathOps$abs$dyn_31664(_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IMutableMathOps = function(){};

var thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_31673 = (function() {
var G__31674 = null;
var G__31674__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.+!",_);
}
}
});
var G__31674__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.+!",_);
}
}
});
var G__31674__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.+!",_);
}
}
});
var G__31674__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._PLUS__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4522__auto__.call(null,_,a,b,c));
} else {
var m__4519__auto__ = (thi.ng.math.core._PLUS__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4519__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.+!",_);
}
}
});
G__31674 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__31674__1.call(this,_);
case 2:
return G__31674__2.call(this,_,a);
case 3:
return G__31674__3.call(this,_,a,b);
case 4:
return G__31674__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31674.cljs$core$IFn$_invoke$arity$1 = G__31674__1;
G__31674.cljs$core$IFn$_invoke$arity$2 = G__31674__2;
G__31674.cljs$core$IFn$_invoke$arity$3 = G__31674__3;
G__31674.cljs$core$IFn$_invoke$arity$4 = G__31674__4;
return G__31674;
})()
;
thi.ng.math.core._PLUS__BANG_ = (function thi$ng$math$core$_PLUS__BANG_(var_args){
var G__31666 = arguments.length;
switch (G__31666) {
case 1:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$1(_);
} else {
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_31673.cljs$core$IFn$_invoke$arity$1(_);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_31673.cljs$core$IFn$_invoke$arity$2(_,a);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_31673.cljs$core$IFn$_invoke$arity$3(_,a,b);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$_PLUS__BANG_$dyn_31673.cljs$core$IFn$_invoke$arity$4(_,a,b,c);
}
}));

(thi.ng.math.core._PLUS__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$__BANG_$dyn_31676 = (function() {
var G__31677 = null;
var G__31677__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.-!",_);
}
}
});
var G__31677__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core.__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.-!",_);
}
}
});
var G__31677__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.-!",_);
}
}
});
var G__31677__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4522__auto__.call(null,_,a,b,c));
} else {
var m__4519__auto__ = (thi.ng.math.core.__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4519__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.-!",_);
}
}
});
G__31677 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__31677__1.call(this,_);
case 2:
return G__31677__2.call(this,_,a);
case 3:
return G__31677__3.call(this,_,a,b);
case 4:
return G__31677__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31677.cljs$core$IFn$_invoke$arity$1 = G__31677__1;
G__31677.cljs$core$IFn$_invoke$arity$2 = G__31677__2;
G__31677.cljs$core$IFn$_invoke$arity$3 = G__31677__3;
G__31677.cljs$core$IFn$_invoke$arity$4 = G__31677__4;
return G__31677;
})()
;
thi.ng.math.core.__BANG_ = (function thi$ng$math$core$__BANG_(var_args){
var G__31668 = arguments.length;
switch (G__31668) {
case 1:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$1(_);
} else {
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_31676.cljs$core$IFn$_invoke$arity$1(_);
}
}));

(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_31676.cljs$core$IFn$_invoke$arity$2(_,a);
}
}));

(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_31676.cljs$core$IFn$_invoke$arity$3(_,a,b);
}
}));

(thi.ng.math.core.__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$__BANG_$dyn_31676.cljs$core$IFn$_invoke$arity$4(_,a,b,c);
}
}));

(thi.ng.math.core.__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_31679 = (function() {
var G__31680 = null;
var G__31680__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.*!",_);
}
}
});
var G__31680__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.*!",_);
}
}
});
var G__31680__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.*!",_);
}
}
});
var G__31680__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core._STAR__BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4522__auto__.call(null,_,a,b,c));
} else {
var m__4519__auto__ = (thi.ng.math.core._STAR__BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4519__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.*!",_);
}
}
});
G__31680 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__31680__1.call(this,_);
case 2:
return G__31680__2.call(this,_,a);
case 3:
return G__31680__3.call(this,_,a,b);
case 4:
return G__31680__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31680.cljs$core$IFn$_invoke$arity$1 = G__31680__1;
G__31680.cljs$core$IFn$_invoke$arity$2 = G__31680__2;
G__31680.cljs$core$IFn$_invoke$arity$3 = G__31680__3;
G__31680.cljs$core$IFn$_invoke$arity$4 = G__31680__4;
return G__31680;
})()
;
thi.ng.math.core._STAR__BANG_ = (function thi$ng$math$core$_STAR__BANG_(var_args){
var G__31670 = arguments.length;
switch (G__31670) {
case 1:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$1(_);
} else {
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_31679.cljs$core$IFn$_invoke$arity$1(_);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_31679.cljs$core$IFn$_invoke$arity$2(_,a);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_31679.cljs$core$IFn$_invoke$arity$3(_,a,b);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$_STAR__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$_STAR__BANG_$dyn_31679.cljs$core$IFn$_invoke$arity$4(_,a,b,c);
}
}));

(thi.ng.math.core._STAR__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_31682 = (function() {
var G__31683 = null;
var G__31683__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.div_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.div!",_);
}
}
});
var G__31683__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core.div_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.div!",_);
}
}
});
var G__31683__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.div_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.div!",_);
}
}
});
var G__31683__4 = (function (_,a,b,c){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.div_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4522__auto__.call(null,_,a,b,c));
} else {
var m__4519__auto__ = (thi.ng.math.core.div_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4519__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.div!",_);
}
}
});
G__31683 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__31683__1.call(this,_);
case 2:
return G__31683__2.call(this,_,a);
case 3:
return G__31683__3.call(this,_,a,b);
case 4:
return G__31683__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31683.cljs$core$IFn$_invoke$arity$1 = G__31683__1;
G__31683.cljs$core$IFn$_invoke$arity$2 = G__31683__2;
G__31683.cljs$core$IFn$_invoke$arity$3 = G__31683__3;
G__31683.cljs$core$IFn$_invoke$arity$4 = G__31683__4;
return G__31683;
})()
;
thi.ng.math.core.div_BANG_ = (function thi$ng$math$core$div_BANG_(var_args){
var G__31672 = arguments.length;
switch (G__31672) {
case 1:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$1(_);
} else {
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_31682.cljs$core$IFn$_invoke$arity$1(_);
}
}));

(thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$2(_,a);
} else {
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_31682.cljs$core$IFn$_invoke$arity$2(_,a);
}
}));

(thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_31682.cljs$core$IFn$_invoke$arity$3(_,a,b);
}
}));

(thi.ng.math.core.div_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$div_BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$math$core$IMutableMathOps$div_BANG_$dyn_31682.cljs$core$IFn$_invoke$arity$4(_,a,b,c);
}
}));

(thi.ng.math.core.div_BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$math$core$IMutableMathOps$madd_BANG_$dyn_31685 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.madd_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.madd_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.madd!",_);
}
}
});
thi.ng.math.core.madd_BANG_ = (function thi$ng$math$core$madd_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$madd_BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$madd_BANG_$dyn_31685(_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$addm_BANG_$dyn_31686 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.addm_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.addm_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.addm!",_);
}
}
});
thi.ng.math.core.addm_BANG_ = (function thi$ng$math$core$addm_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$addm_BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$addm_BANG_$dyn_31686(_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$msub_BANG_$dyn_31687 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.msub_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.msub_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.msub!",_);
}
}
});
thi.ng.math.core.msub_BANG_ = (function thi$ng$math$core$msub_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$msub_BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$msub_BANG_$dyn_31687(_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$subm_BANG_$dyn_31688 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.subm_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.subm_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.subm!",_);
}
}
});
thi.ng.math.core.subm_BANG_ = (function thi$ng$math$core$subm_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$subm_BANG_$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMutableMathOps$subm_BANG_$dyn_31688(_,a,b);
}
});

var thi$ng$math$core$IMutableMathOps$abs_BANG_$dyn_31689 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.abs_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.abs_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMutableMathOps.abs!",_);
}
}
});
thi.ng.math.core.abs_BANG_ = (function thi$ng$math$core$abs_BANG_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1 == null)))))){
return _.thi$ng$math$core$IMutableMathOps$abs_BANG_$arity$1(_);
} else {
return thi$ng$math$core$IMutableMathOps$abs_BANG_$dyn_31689(_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IConjugate = function(){};

var thi$ng$math$core$IConjugate$conjugate$dyn_31690 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.conjugate[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.conjugate["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConjugate.conjugate",_);
}
}
});
thi.ng.math.core.conjugate = (function thi$ng$math$core$conjugate(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IConjugate$conjugate$arity$1 == null)))))){
return _.thi$ng$math$core$IConjugate$conjugate$arity$1(_);
} else {
return thi$ng$math$core$IConjugate$conjugate$dyn_31690(_);
}
});


/**
 * @interface
 */
thi.ng.math.core.ICrossProduct = function(){};

var thi$ng$math$core$ICrossProduct$cross$dyn_31691 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.cross[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core.cross["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("ICrossProduct.cross",_);
}
}
});
thi.ng.math.core.cross = (function thi$ng$math$core$cross(_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ICrossProduct$cross$arity$2 == null)))))){
return _.thi$ng$math$core$ICrossProduct$cross$arity$2(_,a);
} else {
return thi$ng$math$core$ICrossProduct$cross$dyn_31691(_,a);
}
});


/**
 * @interface
 */
thi.ng.math.core.IDeltaEquals = function(){};

var thi$ng$math$core$IDeltaEquals$delta_EQ_$dyn_31694 = (function() {
var G__31695 = null;
var G__31695__2 = (function (a,b){
var x__4521__auto__ = (((a == null))?null:a);
var m__4522__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4522__auto__.call(null,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.delta_EQ_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4519__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("IDeltaEquals.delta=",a);
}
}
});
var G__31695__3 = (function (a,b,eps){
var x__4521__auto__ = (((a == null))?null:a);
var m__4522__auto__ = (thi.ng.math.core.delta_EQ_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(a,b,eps) : m__4522__auto__.call(null,a,b,eps));
} else {
var m__4519__auto__ = (thi.ng.math.core.delta_EQ_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(a,b,eps) : m__4519__auto__.call(null,a,b,eps));
} else {
throw cljs.core.missing_protocol("IDeltaEquals.delta=",a);
}
}
});
G__31695 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__31695__2.call(this,a,b);
case 3:
return G__31695__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31695.cljs$core$IFn$_invoke$arity$2 = G__31695__2;
G__31695.cljs$core$IFn$_invoke$arity$3 = G__31695__3;
return G__31695;
})()
;
thi.ng.math.core.delta_EQ_ = (function thi$ng$math$core$delta_EQ_(var_args){
var G__31693 = arguments.length;
switch (G__31693) {
case 2:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((((!((a == null)))) && ((!((a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 == null)))))){
return a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2(a,b);
} else {
return thi$ng$math$core$IDeltaEquals$delta_EQ_$dyn_31694.cljs$core$IFn$_invoke$arity$2(a,b);
}
}));

(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,eps){
if((((!((a == null)))) && ((!((a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 == null)))))){
return a.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3(a,b,eps);
} else {
return thi$ng$math$core$IDeltaEquals$delta_EQ_$dyn_31694.cljs$core$IFn$_invoke$arity$3(a,b,eps);
}
}));

(thi.ng.math.core.delta_EQ_.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
thi.ng.math.core.IDeterminant = function(){};

var thi$ng$math$core$IDeterminant$determinant$dyn_31697 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.determinant[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.determinant["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IDeterminant.determinant",_);
}
}
});
thi.ng.math.core.determinant = (function thi$ng$math$core$determinant(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IDeterminant$determinant$arity$1 == null)))))){
return _.thi$ng$math$core$IDeterminant$determinant$arity$1(_);
} else {
return thi$ng$math$core$IDeterminant$determinant$dyn_31697(_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IDotProduct = function(){};

var thi$ng$math$core$IDotProduct$dot$dyn_31700 = (function() {
var G__31701 = null;
var G__31701__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.dot[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.dot["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IDotProduct.dot",_);
}
}
});
var G__31701__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.dot[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core.dot["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IDotProduct.dot",_);
}
}
});
G__31701 = function(_,a){
switch(arguments.length){
case 1:
return G__31701__1.call(this,_);
case 2:
return G__31701__2.call(this,_,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31701.cljs$core$IFn$_invoke$arity$1 = G__31701__1;
G__31701.cljs$core$IFn$_invoke$arity$2 = G__31701__2;
return G__31701;
})()
;
thi.ng.math.core.dot = (function thi$ng$math$core$dot(var_args){
var G__31699 = arguments.length;
switch (G__31699) {
case 1:
return thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IDotProduct$dot$arity$1 == null)))))){
return _.thi$ng$math$core$IDotProduct$dot$arity$1(_);
} else {
return thi$ng$math$core$IDotProduct$dot$dyn_31700.cljs$core$IFn$_invoke$arity$1(_);
}
}));

(thi.ng.math.core.dot.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IDotProduct$dot$arity$2 == null)))))){
return _.thi$ng$math$core$IDotProduct$dot$arity$2(_,a);
} else {
return thi$ng$math$core$IDotProduct$dot$dyn_31700.cljs$core$IFn$_invoke$arity$2(_,a);
}
}));

(thi.ng.math.core.dot.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.math.core.IInterpolate = function(){};

var thi$ng$math$core$IInterpolate$mix$dyn_31705 = (function() {
var G__31706 = null;
var G__31706__2 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.math.core.mix["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IInterpolate.mix",_);
}
}
});
var G__31706__3 = (function (_,x,t){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,x,t) : m__4522__auto__.call(null,_,x,t));
} else {
var m__4519__auto__ = (thi.ng.math.core.mix["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,x,t) : m__4519__auto__.call(null,_,x,t));
} else {
throw cljs.core.missing_protocol("IInterpolate.mix",_);
}
}
});
var G__31706__6 = (function (_,a,b,c,u,v){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mix[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$6 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$6(_,a,b,c,u,v) : m__4522__auto__.call(null,_,a,b,c,u,v));
} else {
var m__4519__auto__ = (thi.ng.math.core.mix["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$6 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$6(_,a,b,c,u,v) : m__4519__auto__.call(null,_,a,b,c,u,v));
} else {
throw cljs.core.missing_protocol("IInterpolate.mix",_);
}
}
});
G__31706 = function(_,a,b,c,u,v){
switch(arguments.length){
case 2:
return G__31706__2.call(this,_,a);
case 3:
return G__31706__3.call(this,_,a,b);
case 6:
return G__31706__6.call(this,_,a,b,c,u,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31706.cljs$core$IFn$_invoke$arity$2 = G__31706__2;
G__31706.cljs$core$IFn$_invoke$arity$3 = G__31706__3;
G__31706.cljs$core$IFn$_invoke$arity$6 = G__31706__6;
return G__31706;
})()
;
thi.ng.math.core.mix = (function thi$ng$math$core$mix(var_args){
var G__31704 = arguments.length;
switch (G__31704) {
case 2:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$mix$arity$2 == null)))))){
return _.thi$ng$math$core$IInterpolate$mix$arity$2(_,x);
} else {
return thi$ng$math$core$IInterpolate$mix$dyn_31705.cljs$core$IFn$_invoke$arity$2(_,x);
}
}));

(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$3 = (function (_,x,t){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$mix$arity$3 == null)))))){
return _.thi$ng$math$core$IInterpolate$mix$arity$3(_,x,t);
} else {
return thi$ng$math$core$IInterpolate$mix$dyn_31705.cljs$core$IFn$_invoke$arity$3(_,x,t);
}
}));

(thi.ng.math.core.mix.cljs$core$IFn$_invoke$arity$6 = (function (_,a,b,c,u,v){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$mix$arity$6 == null)))))){
return _.thi$ng$math$core$IInterpolate$mix$arity$6(_,a,b,c,u,v);
} else {
return thi$ng$math$core$IInterpolate$mix$dyn_31705.cljs$core$IFn$_invoke$arity$6(_,a,b,c,u,v);
}
}));

(thi.ng.math.core.mix.cljs$lang$maxFixedArity = 6);


var thi$ng$math$core$IInterpolate$mix_with$dyn_31708 = (function (_,x,t,f){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mix_with[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,x,t,f) : m__4522__auto__.call(null,_,x,t,f));
} else {
var m__4519__auto__ = (thi.ng.math.core.mix_with["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,x,t,f) : m__4519__auto__.call(null,_,x,t,f));
} else {
throw cljs.core.missing_protocol("IInterpolate.mix-with",_);
}
}
});
thi.ng.math.core.mix_with = (function thi$ng$math$core$mix_with(_,x,t,f){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$mix_with$arity$4 == null)))))){
return _.thi$ng$math$core$IInterpolate$mix_with$arity$4(_,x,t,f);
} else {
return thi$ng$math$core$IInterpolate$mix_with$dyn_31708(_,x,t,f);
}
});

var thi$ng$math$core$IInterpolate$step$dyn_31709 = (function (_,e){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.step[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__4522__auto__.call(null,_,e));
} else {
var m__4519__auto__ = (thi.ng.math.core.step["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__4519__auto__.call(null,_,e));
} else {
throw cljs.core.missing_protocol("IInterpolate.step",_);
}
}
});
thi.ng.math.core.step = (function thi$ng$math$core$step(_,e){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$step$arity$2 == null)))))){
return _.thi$ng$math$core$IInterpolate$step$arity$2(_,e);
} else {
return thi$ng$math$core$IInterpolate$step$dyn_31709(_,e);
}
});

var thi$ng$math$core$IInterpolate$smoothstep$dyn_31710 = (function (_,e1,e2){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.smoothstep[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,e1,e2) : m__4522__auto__.call(null,_,e1,e2));
} else {
var m__4519__auto__ = (thi.ng.math.core.smoothstep["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,e1,e2) : m__4519__auto__.call(null,_,e1,e2));
} else {
throw cljs.core.missing_protocol("IInterpolate.smoothstep",_);
}
}
});
thi.ng.math.core.smoothstep = (function thi$ng$math$core$smoothstep(_,e1,e2){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInterpolate$smoothstep$arity$3 == null)))))){
return _.thi$ng$math$core$IInterpolate$smoothstep$arity$3(_,e1,e2);
} else {
return thi$ng$math$core$IInterpolate$smoothstep$dyn_31710(_,e1,e2);
}
});


/**
 * @interface
 */
thi.ng.math.core.IInvert = function(){};

var thi$ng$math$core$IInvert$invert$dyn_31711 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.invert[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.invert["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInvert.invert",_);
}
}
});
thi.ng.math.core.invert = (function thi$ng$math$core$invert(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IInvert$invert$arity$1 == null)))))){
return _.thi$ng$math$core$IInvert$invert$arity$1(_);
} else {
return thi$ng$math$core$IInvert$invert$dyn_31711(_);
}
});


/**
 * @interface
 */
thi.ng.math.core.IMinMax = function(){};

var thi$ng$math$core$IMinMax$min$dyn_31716 = (function() {
var G__31717 = null;
var G__31717__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.min[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core.min["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMinMax.min",_);
}
}
});
var G__31717__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.min[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.min["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMinMax.min",_);
}
}
});
G__31717 = function(_,a,b){
switch(arguments.length){
case 2:
return G__31717__2.call(this,_,a);
case 3:
return G__31717__3.call(this,_,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31717.cljs$core$IFn$_invoke$arity$2 = G__31717__2;
G__31717.cljs$core$IFn$_invoke$arity$3 = G__31717__3;
return G__31717;
})()
;
thi.ng.math.core.min = (function thi$ng$math$core$min(var_args){
var G__31713 = arguments.length;
switch (G__31713) {
case 2:
return thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMinMax$min$arity$2 == null)))))){
return _.thi$ng$math$core$IMinMax$min$arity$2(_,a);
} else {
return thi$ng$math$core$IMinMax$min$dyn_31716.cljs$core$IFn$_invoke$arity$2(_,a);
}
}));

(thi.ng.math.core.min.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMinMax$min$arity$3 == null)))))){
return _.thi$ng$math$core$IMinMax$min$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMinMax$min$dyn_31716.cljs$core$IFn$_invoke$arity$3(_,a,b);
}
}));

(thi.ng.math.core.min.cljs$lang$maxFixedArity = 3);


var thi$ng$math$core$IMinMax$max$dyn_31719 = (function() {
var G__31720 = null;
var G__31720__2 = (function (_,a){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.max[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4522__auto__.call(null,_,a));
} else {
var m__4519__auto__ = (thi.ng.math.core.max["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4519__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("IMinMax.max",_);
}
}
});
var G__31720__3 = (function (_,a,b){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.max[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4522__auto__.call(null,_,a,b));
} else {
var m__4519__auto__ = (thi.ng.math.core.max["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4519__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("IMinMax.max",_);
}
}
});
G__31720 = function(_,a,b){
switch(arguments.length){
case 2:
return G__31720__2.call(this,_,a);
case 3:
return G__31720__3.call(this,_,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31720.cljs$core$IFn$_invoke$arity$2 = G__31720__2;
G__31720.cljs$core$IFn$_invoke$arity$3 = G__31720__3;
return G__31720;
})()
;
thi.ng.math.core.max = (function thi$ng$math$core$max(var_args){
var G__31715 = arguments.length;
switch (G__31715) {
case 2:
return thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMinMax$max$arity$2 == null)))))){
return _.thi$ng$math$core$IMinMax$max$arity$2(_,a);
} else {
return thi$ng$math$core$IMinMax$max$dyn_31719.cljs$core$IFn$_invoke$arity$2(_,a);
}
}));

(thi.ng.math.core.max.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMinMax$max$arity$3 == null)))))){
return _.thi$ng$math$core$IMinMax$max$arity$3(_,a,b);
} else {
return thi$ng$math$core$IMinMax$max$dyn_31719.cljs$core$IFn$_invoke$arity$3(_,a,b);
}
}));

(thi.ng.math.core.max.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
thi.ng.math.core.ILimit = function(){};

var thi$ng$math$core$ILimit$limit$dyn_31722 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.limit[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.math.core.limit["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("ILimit.limit",_);
}
}
});
thi.ng.math.core.limit = (function thi$ng$math$core$limit(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ILimit$limit$arity$2 == null)))))){
return _.thi$ng$math$core$ILimit$limit$arity$2(_,x);
} else {
return thi$ng$math$core$ILimit$limit$dyn_31722(_,x);
}
});


/**
 * @interface
 */
thi.ng.math.core.IMagnitude = function(){};

var thi$ng$math$core$IMagnitude$mag$dyn_31723 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mag[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.mag["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMagnitude.mag",_);
}
}
});
thi.ng.math.core.mag = (function thi$ng$math$core$mag(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMagnitude$mag$arity$1 == null)))))){
return _.thi$ng$math$core$IMagnitude$mag$arity$1(_);
} else {
return thi$ng$math$core$IMagnitude$mag$dyn_31723(_);
}
});

var thi$ng$math$core$IMagnitude$mag_squared$dyn_31724 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.mag_squared[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.mag_squared["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IMagnitude.mag-squared",_);
}
}
});
thi.ng.math.core.mag_squared = (function thi$ng$math$core$mag_squared(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$IMagnitude$mag_squared$arity$1 == null)))))){
return _.thi$ng$math$core$IMagnitude$mag_squared$arity$1(_);
} else {
return thi$ng$math$core$IMagnitude$mag_squared$dyn_31724(_);
}
});


/**
 * @interface
 */
thi.ng.math.core.INormalize = function(){};

var thi$ng$math$core$INormalize$normalize$dyn_31727 = (function() {
var G__31728 = null;
var G__31728__1 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.normalize[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.normalize["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("INormalize.normalize",_);
}
}
});
var G__31728__2 = (function (_,norm){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.normalize[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,norm) : m__4522__auto__.call(null,_,norm));
} else {
var m__4519__auto__ = (thi.ng.math.core.normalize["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,norm) : m__4519__auto__.call(null,_,norm));
} else {
throw cljs.core.missing_protocol("INormalize.normalize",_);
}
}
});
G__31728 = function(_,norm){
switch(arguments.length){
case 1:
return G__31728__1.call(this,_);
case 2:
return G__31728__2.call(this,_,norm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31728.cljs$core$IFn$_invoke$arity$1 = G__31728__1;
G__31728.cljs$core$IFn$_invoke$arity$2 = G__31728__2;
return G__31728;
})()
;
thi.ng.math.core.normalize = (function thi$ng$math$core$normalize(var_args){
var G__31726 = arguments.length;
switch (G__31726) {
case 1:
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$INormalize$normalize$arity$1 == null)))))){
return _.thi$ng$math$core$INormalize$normalize$arity$1(_);
} else {
return thi$ng$math$core$INormalize$normalize$dyn_31727.cljs$core$IFn$_invoke$arity$1(_);
}
}));

(thi.ng.math.core.normalize.cljs$core$IFn$_invoke$arity$2 = (function (_,norm){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$INormalize$normalize$arity$2 == null)))))){
return _.thi$ng$math$core$INormalize$normalize$arity$2(_,norm);
} else {
return thi$ng$math$core$INormalize$normalize$dyn_31727.cljs$core$IFn$_invoke$arity$2(_,norm);
}
}));

(thi.ng.math.core.normalize.cljs$lang$maxFixedArity = 2);


var thi$ng$math$core$INormalize$normalized_QMARK_$dyn_31730 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.normalized_QMARK_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.normalized_QMARK_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("INormalize.normalized?",_);
}
}
});
thi.ng.math.core.normalized_QMARK_ = (function thi$ng$math$core$normalized_QMARK_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1 == null)))))){
return _.thi$ng$math$core$INormalize$normalized_QMARK_$arity$1(_);
} else {
return thi$ng$math$core$INormalize$normalized_QMARK_$dyn_31730(_);
}
});


/**
 * @interface
 */
thi.ng.math.core.ISetOps = function(){};

var thi$ng$math$core$ISetOps$union$dyn_31731 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.union[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.math.core.union["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("ISetOps.union",_);
}
}
});
thi.ng.math.core.union = (function thi$ng$math$core$union(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ISetOps$union$arity$2 == null)))))){
return _.thi$ng$math$core$ISetOps$union$arity$2(_,x);
} else {
return thi$ng$math$core$ISetOps$union$dyn_31731(_,x);
}
});

var thi$ng$math$core$ISetOps$intersection$dyn_31732 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.intersection[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.math.core.intersection["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("ISetOps.intersection",_);
}
}
});
thi.ng.math.core.intersection = (function thi$ng$math$core$intersection(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ISetOps$intersection$arity$2 == null)))))){
return _.thi$ng$math$core$ISetOps$intersection$arity$2(_,x);
} else {
return thi$ng$math$core$ISetOps$intersection$dyn_31732(_,x);
}
});

var thi$ng$math$core$ISetOps$difference$dyn_31733 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.difference[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.math.core.difference["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("ISetOps.difference",_);
}
}
});
thi.ng.math.core.difference = (function thi$ng$math$core$difference(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ISetOps$difference$arity$2 == null)))))){
return _.thi$ng$math$core$ISetOps$difference$arity$2(_,x);
} else {
return thi$ng$math$core$ISetOps$difference$dyn_31733(_,x);
}
});


/**
 * @interface
 */
thi.ng.math.core.ITranspose = function(){};

var thi$ng$math$core$ITranspose$transpose$dyn_31734 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.math.core.transpose[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.math.core.transpose["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITranspose.transpose",_);
}
}
});
thi.ng.math.core.transpose = (function thi$ng$math$core$transpose(_){
if((((!((_ == null)))) && ((!((_.thi$ng$math$core$ITranspose$transpose$arity$1 == null)))))){
return _.thi$ng$math$core$ITranspose$transpose$arity$1(_);
} else {
return thi$ng$math$core$ITranspose$transpose$dyn_31734(_);
}
});

thi.ng.math.core.PI = Math.PI;
thi.ng.math.core.TWO_PI = (thi.ng.math.core.PI * 2.0);
thi.ng.math.core.HALF_PI = (thi.ng.math.core.PI / 2.0);
thi.ng.math.core.THIRD_PI = (thi.ng.math.core.PI / 3.0);
thi.ng.math.core.QUARTER_PI = (thi.ng.math.core.PI / 4.0);
thi.ng.math.core.SIXTH_PI = (thi.ng.math.core.PI / 6.0);
thi.ng.math.core.THREE_HALVES_PI = (thi.ng.math.core.PI * 1.5);
thi.ng.math.core.MAX = 1.7976931348623157E308;
thi.ng.math.core.MIN = 4.9E-324;
thi.ng.math.core.SQRT2 = Math.sqrt((2));
thi.ng.math.core.SQRT3 = Math.sqrt((3));
thi.ng.math.core.PHI = ((Math.sqrt(5.0) + (1)) / (2));
thi.ng.math.core.THIRD = (1.0 / 3.0);
thi.ng.math.core.TWO_THIRD = (2.0 / 3.0);
thi.ng.math.core.SIXTH = (1.0 / 6.0);
thi.ng.math.core.LOG2 = Math.log(2.0);
thi.ng.math.core.INF_PLUS_ = Number.POSITIVE_INFINITY;
thi.ng.math.core.INF_ = Number.NEGATIVE_INFINITY;
thi.ng.math.core.DEG = (180.0 / thi.ng.math.core.PI);
thi.ng.math.core.RAD = (thi.ng.math.core.PI / 180.0);
thi.ng.math.core.INV7BIT = (1.0 / (127));
thi.ng.math.core.INV8BIT = (1.0 / (255));
thi.ng.math.core.INV15BIT = (1.0 / (32767));
thi.ng.math.core.INV16BIT = (1.0 / (65535));
thi.ng.math.core._STAR_eps_STAR_ = 1.0E-6;
thi.ng.math.core._STAR_rnd_STAR_ = Math.random;
thi.ng.math.core.abs_STAR_ = Math.abs;
thi.ng.math.core.abs_diff = (function thi$ng$math$core$abs_diff(x,y){
var G__31735 = (x - y);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__31735) : thi.ng.math.core.abs_STAR_.call(null,G__31735));
});
thi.ng.math.core.sign = (function thi$ng$math$core$sign(x){
if((x === (0))){
return (0);
} else {
if((x > (0))){
return (1);
} else {
return (-1);
}
}
});
goog.object.set(thi.ng.math.core.IDeltaEquals,"number",true);

goog.object.set(thi.ng.math.core.delta_EQ_,"number",(function() {
var G__31738 = null;
var G__31738__2 = (function (a,b){
if(typeof b === 'number'){
return ((function (){var G__31736 = (a - b);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__31736) : thi.ng.math.core.abs_STAR_.call(null,G__31736));
})() <= thi.ng.math.core._STAR_eps_STAR_);
} else {
return null;
}
});
var G__31738__3 = (function (a,b,eps){
if(typeof b === 'number'){
return ((function (){var G__31737 = (a - b);
return (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(G__31737) : thi.ng.math.core.abs_STAR_.call(null,G__31737));
})() <= eps);
} else {
return null;
}
});
G__31738 = function(a,b,eps){
switch(arguments.length){
case 2:
return G__31738__2.call(this,a,b);
case 3:
return G__31738__3.call(this,a,b,eps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31738.cljs$core$IFn$_invoke$arity$2 = G__31738__2;
G__31738.cljs$core$IFn$_invoke$arity$3 = G__31738__3;
return G__31738;
})()
);

(cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
}));

(cljs.core.PersistentVector.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_(b)){
if((cljs.core.count(a__$1) === cljs.core.count(b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__31739 = cljs.core.next(a__$2);
var G__31740 = cljs.core.next(b__$1);
a__$2 = G__31739;
b__$1 = G__31740;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
}));

(cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
}));

(cljs.core.List.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_(b)){
if((cljs.core.count(a__$1) === cljs.core.count(b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__31741 = cljs.core.next(a__$2);
var G__31742 = cljs.core.next(b__$1);
a__$2 = G__31741;
b__$1 = G__31742;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
}));

(cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
}));

(cljs.core.LazySeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_(b)){
if((cljs.core.count(a__$1) === cljs.core.count(b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__31743 = cljs.core.next(a__$2);
var G__31744 = cljs.core.next(b__$1);
a__$2 = G__31743;
b__$1 = G__31744;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
}));

(cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$2 = (function (a,b){
var a__$1 = this;
return thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(a__$1,b,thi.ng.math.core._STAR_eps_STAR_);
}));

(cljs.core.IndexedSeq.prototype.thi$ng$math$core$IDeltaEquals$delta_EQ_$arity$3 = (function (a,b,eps){
var a__$1 = this;
if(cljs.core.sequential_QMARK_(b)){
if((cljs.core.count(a__$1) === cljs.core.count(b))){
var a__$2 = a__$1;
var b__$1 = b;
while(true){
if(cljs.core.truth_(a__$2)){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a__$2),cljs.core.first(b__$1),eps))){
var G__31745 = cljs.core.next(a__$2);
var G__31746 = cljs.core.next(b__$1);
a__$2 = G__31745;
b__$1 = G__31746;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
} else {
return false;
}
}));

goog.object.set(thi.ng.math.core.IDeltaEquals,"null",true);

goog.object.set(thi.ng.math.core.delta_EQ_,"null",(function() {
var G__31747 = null;
var G__31747__2 = (function (_,b){
return (b == null);
});
var G__31747__3 = (function (_,b,___$1){
return (b == null);
});
G__31747 = function(_,b,___$1){
switch(arguments.length){
case 2:
return G__31747__2.call(this,_,b);
case 3:
return G__31747__3.call(this,_,b,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31747.cljs$core$IFn$_invoke$arity$2 = G__31747__2;
G__31747.cljs$core$IFn$_invoke$arity$3 = G__31747__3;
return G__31747;
})()
);
/**
 * Returns x if even or `x+1` if `x` is odd.
 */
thi.ng.math.core.ensure_even = (function thi$ng$math$core$ensure_even(x){
if(cljs.core.even_QMARK_(x)){
return x;
} else {
return (x + (1));
}
});
/**
 * Returns x if odd or `x+1` if `x` is even.
 */
thi.ng.math.core.ensure_odd = (function thi$ng$math$core$ensure_odd(x){
if(cljs.core.even_QMARK_(x)){
return (x + (1));
} else {
return x;
}
});
thi.ng.math.core.signum = (function thi$ng$math$core$signum(var_args){
var G__31749 = arguments.length;
switch (G__31749) {
case 1:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x < (0))){
return (-1);
} else {
if((x === (0))){
return (0);
} else {
return (1);
}
}
}));

(thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2 = (function (x,delta){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_.cljs$core$IFn$_invoke$arity$3(0.0,x,delta))){
return (0);
} else {
if((x < (0))){
return (-1);
} else {
return (1);
}
}
}));

(thi.ng.math.core.signum.cljs$lang$maxFixedArity = 2);

/**
 * Constraints x to be closed [min .. max] interval.
 */
thi.ng.math.core.clamp = (function thi$ng$math$core$clamp(x,min,max){
if((x < min)){
return min;
} else {
if((x > max)){
return max;
} else {
return x;
}
}
});
/**
 * Constraints x to closed [0.0 .. 1.0] interval.
 */
thi.ng.math.core.clamp_normalized = (function thi$ng$math$core$clamp_normalized(x){
if((x < -1.0)){
return -1.0;
} else {
if((x > 1.0)){
return 1.0;
} else {
return x;
}
}
});
/**
 * Constraints x to closed [0 .. 1] interval.
 */
thi.ng.math.core.clamp01 = (function thi$ng$math$core$clamp01(x){
if((x < 0.0)){
return 0.0;
} else {
if((x > 1.0)){
return 1.0;
} else {
return x;
}
}
});
thi.ng.math.core.clamp11 = thi.ng.math.core.clamp_normalized;
/**
 * Maps x from one interval into another. Intervals can be defined as
 *   vectors. If range of input interval is zero, returns min. bound of
 *   output.
 */
thi.ng.math.core.map_interval = (function thi$ng$math$core$map_interval(var_args){
var G__31752 = arguments.length;
switch (G__31752) {
case 3:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$3 = (function (x,p__31753,p__31754){
var vec__31755 = p__31753;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31755,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31755,(1),null);
var vec__31758 = p__31754;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31758,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31758,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(in1,in2)){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
} else {
return out1;
}
}));

(thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(in1,in2)){
return (((out2 - out1) * ((x - in1) / (in2 - in1))) + out1);
} else {
return out1;
}
}));

(thi.ng.math.core.map_interval.cljs$lang$maxFixedArity = 5);

/**
 * Takes a number x, input interval and output interval. Returns x
 *   mapped proportionally from input to output interval and clamps it to
 *   output. If range of input interval is zero, returns min. bound of
 *   output.
 */
thi.ng.math.core.map_interval_clamped = (function thi$ng$math$core$map_interval_clamped(var_args){
var G__31763 = arguments.length;
switch (G__31763) {
case 3:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 7:
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$3 = (function (x,p__31764,p__31765){
var vec__31766 = p__31764;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31766,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31766,(1),null);
var vec__31769 = p__31765;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31769,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31769,(1),null);
return thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2);
}));

(thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$5 = (function (x,in1,in2,out1,out2){
if((x <= in1)){
return out1;
} else {
if((x >= in2)){
return out2;
} else {
return thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2);
}
}
}));

(thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$4 = (function (x,p__31772,p__31773,p__31774){
var vec__31775 = p__31772;
var in1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31775,(0),null);
var in2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31775,(1),null);
var vec__31778 = p__31773;
var out1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31778,(0),null);
var out2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31778,(1),null);
var vec__31781 = p__31774;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31781,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31781,(1),null);
return thi.ng.math.core.clamp(thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2),c1,c2);
}));

(thi.ng.math.core.map_interval_clamped.cljs$core$IFn$_invoke$arity$7 = (function (x,in1,in2,out1,out2,c1,c2){
return thi.ng.math.core.clamp(thi.ng.math.core.map_interval.cljs$core$IFn$_invoke$arity$5(x,in1,in2,out1,out2),c1,c2);
}));

(thi.ng.math.core.map_interval_clamped.cljs$lang$maxFixedArity = 7);

/**
 * Returns true if x >= min and x <= max.
 */
thi.ng.math.core.in_range_QMARK_ = (function thi$ng$math$core$in_range_QMARK_(var_args){
var G__31786 = arguments.length;
switch (G__31786) {
case 2:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__31787,x){
var vec__31788 = p__31787;
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31788,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31788,(1),null);
if((x >= min)){
return (x <= max);
} else {
return null;
}
}));

(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (min,max,x){
if((x >= min)){
return (x <= max);
} else {
return null;
}
}));

(thi.ng.math.core.in_range_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Returns x mod y with result always in semi-closed interval [0..y
 */
thi.ng.math.core.wrap_range = (function thi$ng$math$core$wrap_range(x,y){
var x__$1 = cljs.core.rem(x,y);
if((x__$1 < (0))){
return (x__$1 + y);
} else {
return x__$1;
}
});
/**
 * Returns lazy-seq of n values in the closed interval [0.0, 1.0] at
 *   resolution 1/x.
 */
thi.ng.math.core.norm_range = (function thi$ng$math$core$norm_range(n){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31792_SHARP_){
return (p1__31792_SHARP_ / n);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((n + (1))));
});
thi.ng.math.core.mix_STAR_ = (function thi$ng$math$core$mix_STAR_(a,b,t){
return (((b - a) * t) + a);
});
thi.ng.math.core.step_STAR_ = (function thi$ng$math$core$step_STAR_(edge,x){
if((x < edge)){
return 0.0;
} else {
return 1.0;
}
});
thi.ng.math.core.smoothstep_STAR_ = (function thi$ng$math$core$smoothstep_STAR_(e0,e1,x){
var t = thi.ng.math.core.clamp(((x - e0) / (e1 - e0)),0.0,1.0);
return (t * (t * ((t * -2.0) + 3.0)));
});
thi.ng.math.core.mix_circular = (function thi$ng$math$core$mix_circular(a,b,t){
var t__$1 = (1.0 - t);
return (((b - a) * (function (){var G__31793 = (1.0 - (t__$1 * t__$1));
return Math.sqrt(G__31793);
})()) + a);
});
thi.ng.math.core.mix_circular_flipped = (function thi$ng$math$core$mix_circular_flipped(a,b,t){
return (((b - a) * (- ((function (){var G__31794 = (1.0 - (t * t));
return Math.sqrt(G__31794);
})() - 1.0))) + a);
});
thi.ng.math.core.mix_cosine = (function thi$ng$math$core$mix_cosine(a,b,t){
return (((a - b) * (((function (){var G__31795 = (t * thi.ng.math.core.PI);
return Math.cos(G__31795);
})() * 0.5) + 0.5)) + b);
});
thi.ng.math.core.mix_bezier = (function thi$ng$math$core$mix_bezier(a,b,t,c1,c2){
var tsq = (t * t);
var invt = (1.0 - t);
var itsq = (invt * invt);
return (((((a * t) * itsq) + ((((((b - a) * c1) + a) * 3.0) * t) * itsq)) + ((((((b - a) * c2) + b) * 3.0) * tsq) * invt)) + ((b * t) * tsq));
});
thi.ng.math.core.mix_exp = (function thi$ng$math$core$mix_exp(a,b,t,e){
return (((b - a) * Math.pow(t,e)) + a);
});
thi.ng.math.core.mix_decimated = (function thi$ng$math$core$mix_decimated(a,b,t,n){
return (((b - a) * (((t * n) | (0)) / n)) + a);
});
thi.ng.math.core.mix_lens = (function thi$ng$math$core$mix_lens(a,b,t,pos,strength){
var v = (((b - a) * t) + a);
return ((((t < pos))?(((function (){var G__31797 = a;
var G__31798 = (((b - a) * pos) + a);
var G__31799 = (t / pos);
var fexpr__31796 = (((strength > (0)))?thi.ng.math.core.mix_circular_flipped:thi.ng.math.core.mix_circular);
return (fexpr__31796.cljs$core$IFn$_invoke$arity$3 ? fexpr__31796.cljs$core$IFn$_invoke$arity$3(G__31797,G__31798,G__31799) : fexpr__31796.call(null,G__31797,G__31798,G__31799));
})() - v) * strength):(((function (){var G__31801 = (((b - a) * pos) + a);
var G__31802 = b;
var G__31803 = ((t - pos) / (1.0 - pos));
var fexpr__31800 = (((strength < (0)))?thi.ng.math.core.mix_circular_flipped:thi.ng.math.core.mix_circular);
return (fexpr__31800.cljs$core$IFn$_invoke$arity$3 ? fexpr__31800.cljs$core$IFn$_invoke$arity$3(G__31801,G__31802,G__31803) : fexpr__31800.call(null,G__31801,G__31802,G__31803));
})() - v) * (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(strength) : thi.ng.math.core.abs_STAR_.call(null,strength)))) + v);
});
thi.ng.math.core.mix_bounce = (function thi$ng$math$core$mix_bounce(a,b,t,k){
if((!((t === (0))))){
var t_SINGLEQUOTE_ = (t * k);
var t_SINGLEQUOTE___$1 = (1.0 - ((Math.sin(t_SINGLEQUOTE_) / t_SINGLEQUOTE_) * (function (){var G__31804 = (t * thi.ng.math.core.HALF_PI);
return Math.cos(G__31804);
})()));
return (((b - a) * t_SINGLEQUOTE___$1) + a);
} else {
return a;
}
});
thi.ng.math.core.floor = (function thi$ng$math$core$floor(x){
return Math.floor(x);
});
thi.ng.math.core.ceil = (function thi$ng$math$core$ceil(x){
return Math.ceil(x);
});
thi.ng.math.core.roundto = (function thi$ng$math$core$roundto(x,prec){
return (thi.ng.math.core.floor(((x / prec) + 0.5)) * prec);
});
thi.ng.math.core.ceil_pow2 = (function thi$ng$math$core$ceil_pow2(x){
var pow2 = (1);
while(true){
if((pow2 >= x)){
return pow2;
} else {
var G__31805 = (pow2 << (1));
pow2 = G__31805;
continue;
}
break;
}
});
thi.ng.math.core.floor_pow2 = (function thi$ng$math$core$floor_pow2(x){
var G__31806 = (2);
var G__31807 = ((Math.log(x) / thi.ng.math.core.LOG2) | (0));
return Math.pow(G__31806,G__31807);
});
thi.ng.math.core.bit_count = (function thi$ng$math$core$bit_count(x){
return thi.ng.math.core.ceil((Math.log(x) / thi.ng.math.core.LOG2));
});
thi.ng.math.core.trunc = (function thi$ng$math$core$trunc(x){
if((x < (0))){
return thi.ng.math.core.ceil(x);
} else {
return thi.ng.math.core.floor(x);
}
});
thi.ng.math.core.fract = (function thi$ng$math$core$fract(x){
return (x - Math.floor(x));
});
thi.ng.math.core.fdim = (function thi$ng$math$core$fdim(x,y){
if((x > y)){
return (x - y);
} else {
return (0);
}
});
thi.ng.math.core.radians = (function thi$ng$math$core$radians(x){
return (x * thi.ng.math.core.RAD);
});
thi.ng.math.core.degrees = (function thi$ng$math$core$degrees(x){
return (x * thi.ng.math.core.DEG);
});
thi.ng.math.core.maxmag = (function thi$ng$math$core$maxmag(x,y){
var ax = (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.math.core.abs_STAR_.call(null,x));
var ay = (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(y) : thi.ng.math.core.abs_STAR_.call(null,y));
if((ax > ay)){
return x;
} else {
if((ay > ax)){
return y;
} else {
return x;

}
}
});
thi.ng.math.core.minmag = (function thi$ng$math$core$minmag(x,y){
var ax = (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.math.core.abs_STAR_.call(null,x));
var ay = (thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs_STAR_.cljs$core$IFn$_invoke$arity$1(y) : thi.ng.math.core.abs_STAR_.call(null,y));
if((ax < ay)){
return x;
} else {
if((ay < ax)){
return y;
} else {
return x;

}
}
});
thi.ng.math.core.ldexp = (function thi$ng$math$core$ldexp(x,k){
return (x * (function (){var G__31808 = (2);
var G__31809 = (k | (0));
return Math.pow(G__31808,G__31809);
})());
});
thi.ng.math.core.remquo = (function thi$ng$math$core$remquo(x,y){
var k = (x / y);
var f = thi.ng.math.core.fract(k);
var k__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,0.5))?((cljs.core.even_QMARK_((k | (0))))?(k | (0)):thi.ng.math.core.ceil(k)):(((f < 0.5))?thi.ng.math.core.floor(k):thi.ng.math.core.ceil(k)
));
return (x - (k__$1 * y));
});
thi.ng.math.core.hypot = (function thi$ng$math$core$hypot(x,y){
var G__31810 = ((x * x) + (y * y));
return Math.sqrt(G__31810);
});
thi.ng.math.core.rootn = (function thi$ng$math$core$rootn(x,y){
var G__31811 = x;
var G__31812 = (1.0 / y);
return Math.pow(G__31811,G__31812);
});
thi.ng.math.core.rsqrt = (function thi$ng$math$core$rsqrt(x){
var r = Math.sqrt(x);
if((r > (0))){
return (1.0 / r);
} else {
return (0);
}
});
thi.ng.math.core.impulse = (function thi$ng$math$core$impulse(k,t){
var h = (k * t);
return (h * (function (){var G__31813 = (1.0 - h);
return Math.exp(G__31813);
})());
});
thi.ng.math.core.sinc = (function thi$ng$math$core$sinc(var_args){
var G__31815 = arguments.length;
switch (G__31815) {
case 1:
return thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$1 = (function (x){
if((x === (0))){
return 0.0;
} else {
return (Math.sin(x) / x);
}
}));

(thi.ng.math.core.sinc.cljs$core$IFn$_invoke$arity$2 = (function (x,freq){
if((x === (0))){
return 0.0;
} else {
var x_SINGLEQUOTE_ = (x * freq);
return (Math.sin(x_SINGLEQUOTE_) / x_SINGLEQUOTE_);
}
}));

(thi.ng.math.core.sinc.cljs$lang$maxFixedArity = 2);

thi.ng.math.core.random = (function thi$ng$math$core$random(var_args){
var G__31818 = arguments.length;
switch (G__31818) {
case 0:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0 = (function (){
return (thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null));
}));

(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$1 = (function (max){
return ((thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null)) * max);
}));

(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return (((max - min) * (thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null))) + min);
}));

(thi.ng.math.core.random.cljs$lang$maxFixedArity = 2);

thi.ng.math.core.randnorm = (function thi$ng$math$core$randnorm(){
return (((thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0 ? thi.ng.math.core._STAR_rnd_STAR_.cljs$core$IFn$_invoke$arity$0() : thi.ng.math.core._STAR_rnd_STAR_.call(null)) * 2.0) - (1));
});
thi.ng.math.core.percentile_index = (function thi$ng$math$core$percentile_index(n,num){
return ((((n < (100)))?((function (){var G__31820 = (((n / 100.0) * num) + 0.5);
return Math.round(G__31820);
})() | (0)):num) - (1));
});
thi.ng.math.core.percentile = (function thi$ng$math$core$percentile(n,sorted){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,thi.ng.math.core.percentile_index(n,cljs.core.count(sorted)));
});
thi.ng.math.core.quartile_index = (function thi$ng$math$core$quartile_index(n,num){
return thi.ng.math.core.percentile_index((n * (25)),num);
});
thi.ng.math.core.quartile_range = (function thi$ng$math$core$quartile_range(n,num){
var a = thi.ng.math.core.quartile_index((n - (1)),num);
var b = thi.ng.math.core.quartile_index(n,num);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(4)))?(b + (1)):b)], null);
});
/**
 * Takes a quartile index (1..4) and sorted seq of samples, returns set of items in quartile.
 */
thi.ng.math.core.quartile = (function thi$ng$math$core$quartile(n,sorted){
var vec__31821 = thi.ng.math.core.quartile_range(n,cljs.core.count(sorted));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31821,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31821,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((b - a),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(a,sorted));
});
thi.ng.math.core.normdist_weights = (function thi$ng$math$core$normdist_weights(var_args){
var G__31826 = arguments.length;
switch (G__31826) {
case 1:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2(n,1.0);
}));

(thi.ng.math.core.normdist_weights.cljs$core$IFn$_invoke$arity$2 = (function (n,scale){
var ws = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,thi.ng.math.core.random);
var s = (scale / cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,ws));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31824_SHARP_){
return (s * p1__31824_SHARP_);
}),ws);
}));

(thi.ng.math.core.normdist_weights.cljs$lang$maxFixedArity = 2);

