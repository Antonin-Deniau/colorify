// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('thi.ng.dstruct.streams');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('thi.ng.xerror.core');


/**
 * @interface
 */
thi.ng.dstruct.streams.IInputStream = function(){};

var thi$ng$dstruct$streams$IInputStream$read_utf8_line$dyn_31830 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_utf8_line[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_utf8_line["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-utf8-line",_);
}
}
});
thi.ng.dstruct.streams.read_utf8_line = (function thi$ng$dstruct$streams$read_utf8_line(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_utf8_line$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_utf8_line$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_utf8_line$dyn_31830(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_uint8$dyn_31831 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_uint8[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_uint8["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-uint8",_);
}
}
});
thi.ng.dstruct.streams.read_uint8 = (function thi$ng$dstruct$streams$read_uint8(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_uint8$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint8$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_uint8$dyn_31831(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_uint16_le$dyn_31832 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_uint16_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_uint16_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-uint16-le",_);
}
}
});
thi.ng.dstruct.streams.read_uint16_le = (function thi$ng$dstruct$streams$read_uint16_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_uint16_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint16_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_uint16_le$dyn_31832(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_uint16_be$dyn_31833 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_uint16_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_uint16_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-uint16-be",_);
}
}
});
thi.ng.dstruct.streams.read_uint16_be = (function thi$ng$dstruct$streams$read_uint16_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_uint16_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint16_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_uint16_be$dyn_31833(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_uint32_le$dyn_31834 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_uint32_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_uint32_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-uint32-le",_);
}
}
});
thi.ng.dstruct.streams.read_uint32_le = (function thi$ng$dstruct$streams$read_uint32_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_uint32_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint32_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_uint32_le$dyn_31834(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_uint32_be$dyn_31835 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_uint32_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_uint32_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-uint32-be",_);
}
}
});
thi.ng.dstruct.streams.read_uint32_be = (function thi$ng$dstruct$streams$read_uint32_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_uint32_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_uint32_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_uint32_be$dyn_31835(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_float_le$dyn_31836 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_float_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_float_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-float-le",_);
}
}
});
thi.ng.dstruct.streams.read_float_le = (function thi$ng$dstruct$streams$read_float_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_float_le$dyn_31836(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_float_be$dyn_31837 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_float_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_float_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-float-be",_);
}
}
});
thi.ng.dstruct.streams.read_float_be = (function thi$ng$dstruct$streams$read_float_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_float_be$dyn_31837(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_double_le$dyn_31838 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_double_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_double_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-double-le",_);
}
}
});
thi.ng.dstruct.streams.read_double_le = (function thi$ng$dstruct$streams$read_double_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_double_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_double_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_double_le$dyn_31838(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_double_be$dyn_31839 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_double_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_double_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-double-be",_);
}
}
});
thi.ng.dstruct.streams.read_double_be = (function thi$ng$dstruct$streams$read_double_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_double_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_double_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_double_be$dyn_31839(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_vec2f_le$dyn_31840 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_vec2f_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_vec2f_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-vec2f-le",_);
}
}
});
thi.ng.dstruct.streams.read_vec2f_le = (function thi$ng$dstruct$streams$read_vec2f_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_vec2f_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec2f_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_vec2f_le$dyn_31840(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_vec2f_be$dyn_31841 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_vec2f_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_vec2f_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-vec2f-be",_);
}
}
});
thi.ng.dstruct.streams.read_vec2f_be = (function thi$ng$dstruct$streams$read_vec2f_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_vec2f_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec2f_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_vec2f_be$dyn_31841(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_vec3f_le$dyn_31842 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_vec3f_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_vec3f_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-vec3f-le",_);
}
}
});
thi.ng.dstruct.streams.read_vec3f_le = (function thi$ng$dstruct$streams$read_vec3f_le(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_vec3f_le$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec3f_le$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_vec3f_le$dyn_31842(_);
}
});

var thi$ng$dstruct$streams$IInputStream$read_vec3f_be$dyn_31843 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.read_vec3f_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.read_vec3f_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IInputStream.read-vec3f-be",_);
}
}
});
thi.ng.dstruct.streams.read_vec3f_be = (function thi$ng$dstruct$streams$read_vec3f_be(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IInputStream$read_vec3f_be$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IInputStream$read_vec3f_be$arity$1(_);
} else {
return thi$ng$dstruct$streams$IInputStream$read_vec3f_be$dyn_31843(_);
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IOutputStream = function(){};

var thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$dyn_31844 = (function (_,str){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_utf8_bytes[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,str) : m__4522__auto__.call(null,_,str));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_utf8_bytes["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,str) : m__4519__auto__.call(null,_,str));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-utf8-bytes",_);
}
}
});
thi.ng.dstruct.streams.write_utf8_bytes = (function thi$ng$dstruct$streams$write_utf8_bytes(_,str){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$arity$2(_,str);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$dyn_31844(_,str);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_uint8$dyn_31845 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_uint8[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_uint8["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-uint8",_);
}
}
});
thi.ng.dstruct.streams.write_uint8 = (function thi$ng$dstruct$streams$write_uint8(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_uint8$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint8$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_uint8$dyn_31845(_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_uint16_le$dyn_31846 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_uint16_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_uint16_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-uint16-le",_);
}
}
});
thi.ng.dstruct.streams.write_uint16_le = (function thi$ng$dstruct$streams$write_uint16_le(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_uint16_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint16_le$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_uint16_le$dyn_31846(_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_uint16_be$dyn_31847 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_uint16_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_uint16_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-uint16-be",_);
}
}
});
thi.ng.dstruct.streams.write_uint16_be = (function thi$ng$dstruct$streams$write_uint16_be(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_uint16_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint16_be$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_uint16_be$dyn_31847(_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_uint32_le$dyn_31848 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_uint32_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_uint32_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-uint32-le",_);
}
}
});
thi.ng.dstruct.streams.write_uint32_le = (function thi$ng$dstruct$streams$write_uint32_le(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_uint32_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint32_le$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_uint32_le$dyn_31848(_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_uint32_be$dyn_31849 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_uint32_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_uint32_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-uint32-be",_);
}
}
});
thi.ng.dstruct.streams.write_uint32_be = (function thi$ng$dstruct$streams$write_uint32_be(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_uint32_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_uint32_be$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_uint32_be$dyn_31849(_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_float_le$dyn_31850 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_float_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_float_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-float-le",_);
}
}
});
thi.ng.dstruct.streams.write_float_le = (function thi$ng$dstruct$streams$write_float_le(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_float_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_float_le$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_float_le$dyn_31850(_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_float_be$dyn_31851 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_float_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_float_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-float-be",_);
}
}
});
thi.ng.dstruct.streams.write_float_be = (function thi$ng$dstruct$streams$write_float_be(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_float_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_float_be$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_float_be$dyn_31851(_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_double_le$dyn_31852 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_double_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_double_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-double-le",_);
}
}
});
thi.ng.dstruct.streams.write_double_le = (function thi$ng$dstruct$streams$write_double_le(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_double_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_double_le$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_double_le$dyn_31852(_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_double_be$dyn_31853 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_double_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_double_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-double-be",_);
}
}
});
thi.ng.dstruct.streams.write_double_be = (function thi$ng$dstruct$streams$write_double_be(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_double_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_double_be$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_double_be$dyn_31853(_,x);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$dyn_31854 = (function (_,v){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_vec2f_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4522__auto__.call(null,_,v));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_vec2f_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4519__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-vec2f-le",_);
}
}
});
thi.ng.dstruct.streams.write_vec2f_le = (function thi$ng$dstruct$streams$write_vec2f_le(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$arity$2(_,v);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$dyn_31854(_,v);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$dyn_31855 = (function (_,v){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_vec2f_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4522__auto__.call(null,_,v));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_vec2f_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4519__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-vec2f-be",_);
}
}
});
thi.ng.dstruct.streams.write_vec2f_be = (function thi$ng$dstruct$streams$write_vec2f_be(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$arity$2(_,v);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$dyn_31855(_,v);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$dyn_31856 = (function (_,v){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_vec3f_le[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4522__auto__.call(null,_,v));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_vec3f_le["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4519__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-vec3f-le",_);
}
}
});
thi.ng.dstruct.streams.write_vec3f_le = (function thi$ng$dstruct$streams$write_vec3f_le(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$arity$2(_,v);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$dyn_31856(_,v);
}
});

var thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$dyn_31857 = (function (_,v){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.write_vec3f_be[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4522__auto__.call(null,_,v));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.write_vec3f_be["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4519__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("IOutputStream.write-vec3f-be",_);
}
}
});
thi.ng.dstruct.streams.write_vec3f_be = (function thi$ng$dstruct$streams$write_vec3f_be(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$arity$2(_,v);
} else {
return thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$dyn_31857(_,v);
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IStreamPosition = function(){};

var thi$ng$dstruct$streams$IStreamPosition$skip$dyn_31858 = (function (_,x){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.skip[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4522__auto__.call(null,_,x));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.skip["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4519__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("IStreamPosition.skip",_);
}
}
});
thi.ng.dstruct.streams.skip = (function thi$ng$dstruct$streams$skip(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IStreamPosition$skip$arity$2 == null)))))){
return _.thi$ng$dstruct$streams$IStreamPosition$skip$arity$2(_,x);
} else {
return thi$ng$dstruct$streams$IStreamPosition$skip$dyn_31858(_,x);
}
});

var thi$ng$dstruct$streams$IStreamPosition$get_position$dyn_31859 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_position[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_position["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IStreamPosition.get-position",_);
}
}
});
thi.ng.dstruct.streams.get_position = (function thi$ng$dstruct$streams$get_position(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IStreamPosition$get_position$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IStreamPosition$get_position$arity$1(_);
} else {
return thi$ng$dstruct$streams$IStreamPosition$get_position$dyn_31859(_);
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IBuffer = function(){};

var thi$ng$dstruct$streams$IBuffer$get_byte_buffer$dyn_31860 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_byte_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_byte_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBuffer.get-byte-buffer",_);
}
}
});
thi.ng.dstruct.streams.get_byte_buffer = (function thi$ng$dstruct$streams$get_byte_buffer(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IBuffer$get_byte_buffer$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IBuffer$get_byte_buffer$arity$1(_);
} else {
return thi$ng$dstruct$streams$IBuffer$get_byte_buffer$dyn_31860(_);
}
});

var thi$ng$dstruct$streams$IBuffer$get_float_buffer$dyn_31861 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_float_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_float_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBuffer.get-float-buffer",_);
}
}
});
thi.ng.dstruct.streams.get_float_buffer = (function thi$ng$dstruct$streams$get_float_buffer(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1(_);
} else {
return thi$ng$dstruct$streams$IBuffer$get_float_buffer$dyn_31861(_);
}
});

var thi$ng$dstruct$streams$IBuffer$get_double_buffer$dyn_31862 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_double_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_double_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBuffer.get-double-buffer",_);
}
}
});
thi.ng.dstruct.streams.get_double_buffer = (function thi$ng$dstruct$streams$get_double_buffer(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IBuffer$get_double_buffer$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IBuffer$get_double_buffer$arity$1(_);
} else {
return thi$ng$dstruct$streams$IBuffer$get_double_buffer$dyn_31862(_);
}
});

var thi$ng$dstruct$streams$IBuffer$get_short_buffer$dyn_31863 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_short_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_short_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBuffer.get-short-buffer",_);
}
}
});
thi.ng.dstruct.streams.get_short_buffer = (function thi$ng$dstruct$streams$get_short_buffer(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IBuffer$get_short_buffer$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IBuffer$get_short_buffer$arity$1(_);
} else {
return thi$ng$dstruct$streams$IBuffer$get_short_buffer$dyn_31863(_);
}
});

var thi$ng$dstruct$streams$IBuffer$get_int_buffer$dyn_31864 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.get_int_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.get_int_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IBuffer.get-int-buffer",_);
}
}
});
thi.ng.dstruct.streams.get_int_buffer = (function thi$ng$dstruct$streams$get_int_buffer(_){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IBuffer$get_int_buffer$arity$1 == null)))))){
return _.thi$ng$dstruct$streams$IBuffer$get_int_buffer$arity$1(_);
} else {
return thi$ng$dstruct$streams$IBuffer$get_int_buffer$dyn_31864(_);
}
});


/**
 * @interface
 */
thi.ng.dstruct.streams.IIntoBuffer = function(){};

var thi$ng$dstruct$streams$IIntoBuffer$into_byte_buffer$dyn_31865 = (function (_,dest,stride,idx){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.into_byte_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4522__auto__.call(null,_,dest,stride,idx));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.into_byte_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4519__auto__.call(null,_,dest,stride,idx));
} else {
throw cljs.core.missing_protocol("IIntoBuffer.into-byte-buffer",_);
}
}
});
thi.ng.dstruct.streams.into_byte_buffer = (function thi$ng$dstruct$streams$into_byte_buffer(_,dest,stride,idx){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IIntoBuffer$into_byte_buffer$arity$4 == null)))))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_byte_buffer$arity$4(_,dest,stride,idx);
} else {
return thi$ng$dstruct$streams$IIntoBuffer$into_byte_buffer$dyn_31865(_,dest,stride,idx);
}
});

var thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$dyn_31866 = (function (_,dest,stride,idx){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.into_float_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4522__auto__.call(null,_,dest,stride,idx));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.into_float_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4519__auto__.call(null,_,dest,stride,idx));
} else {
throw cljs.core.missing_protocol("IIntoBuffer.into-float-buffer",_);
}
}
});
thi.ng.dstruct.streams.into_float_buffer = (function thi$ng$dstruct$streams$into_float_buffer(_,dest,stride,idx){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4 == null)))))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$arity$4(_,dest,stride,idx);
} else {
return thi$ng$dstruct$streams$IIntoBuffer$into_float_buffer$dyn_31866(_,dest,stride,idx);
}
});

var thi$ng$dstruct$streams$IIntoBuffer$into_double_buffer$dyn_31867 = (function (_,dest,stride,idx){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.into_double_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4522__auto__.call(null,_,dest,stride,idx));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.into_double_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4519__auto__.call(null,_,dest,stride,idx));
} else {
throw cljs.core.missing_protocol("IIntoBuffer.into-double-buffer",_);
}
}
});
thi.ng.dstruct.streams.into_double_buffer = (function thi$ng$dstruct$streams$into_double_buffer(_,dest,stride,idx){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IIntoBuffer$into_double_buffer$arity$4 == null)))))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_double_buffer$arity$4(_,dest,stride,idx);
} else {
return thi$ng$dstruct$streams$IIntoBuffer$into_double_buffer$dyn_31867(_,dest,stride,idx);
}
});

var thi$ng$dstruct$streams$IIntoBuffer$into_short_buffer$dyn_31868 = (function (_,dest,stride,idx){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.into_short_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4522__auto__.call(null,_,dest,stride,idx));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.into_short_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4519__auto__.call(null,_,dest,stride,idx));
} else {
throw cljs.core.missing_protocol("IIntoBuffer.into-short-buffer",_);
}
}
});
thi.ng.dstruct.streams.into_short_buffer = (function thi$ng$dstruct$streams$into_short_buffer(_,dest,stride,idx){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IIntoBuffer$into_short_buffer$arity$4 == null)))))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_short_buffer$arity$4(_,dest,stride,idx);
} else {
return thi$ng$dstruct$streams$IIntoBuffer$into_short_buffer$dyn_31868(_,dest,stride,idx);
}
});

var thi$ng$dstruct$streams$IIntoBuffer$into_int_buffer$dyn_31869 = (function (_,dest,stride,idx){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (thi.ng.dstruct.streams.into_int_buffer[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4522__auto__.call(null,_,dest,stride,idx));
} else {
var m__4519__auto__ = (thi.ng.dstruct.streams.into_int_buffer["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4519__auto__.call(null,_,dest,stride,idx));
} else {
throw cljs.core.missing_protocol("IIntoBuffer.into-int-buffer",_);
}
}
});
thi.ng.dstruct.streams.into_int_buffer = (function thi$ng$dstruct$streams$into_int_buffer(_,dest,stride,idx){
if((((!((_ == null)))) && ((!((_.thi$ng$dstruct$streams$IIntoBuffer$into_int_buffer$arity$4 == null)))))){
return _.thi$ng$dstruct$streams$IIntoBuffer$into_int_buffer$arity$4(_,dest,stride,idx);
} else {
return thi$ng$dstruct$streams$IIntoBuffer$into_int_buffer$dyn_31869(_,dest,stride,idx);
}
});

thi.ng.dstruct.streams.utf8_str = (function thi$ng$dstruct$streams$utf8_str(str){
return unescape(encodeURIComponent(str));
});

/**
* @constructor
 * @implements {thi.ng.dstruct.streams.IInputStream}
*/
thi.ng.dstruct.streams.InputStreamWrapper = (function (buf,dv,pos){
this.buf = buf;
this.dv = dv;
this.pos = pos;
});
(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_double_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2(___$1,(8)) : thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(8)));

var x = self__.dv.getFloat64(self__.pos);
(self__.pos = (self__.pos + (8)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec3f_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1(null),___$1.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1(null),___$1.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1(null)], null);
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint32_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2(___$1,(4)) : thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4)));

var x = self__.dv.getUint32(self__.pos);
(self__.pos = (self__.pos + (4)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint8$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2(___$1,(1)) : thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(1)));

var x = self__.dv.getUint8(self__.pos);
(self__.pos = (self__.pos + (1)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec3f_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1(null),___$1.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1(null),___$1.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1(null)], null);
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint32_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2(___$1,(4)) : thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4)));

var x = self__.dv.getUint32(self__.pos,true);
(self__.pos = (self__.pos + (4)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec2f_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1(null),___$1.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1(null)], null);
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_vec2f_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1(null),___$1.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1(null)], null);
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_double_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2(___$1,(8)) : thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(8)));

var x = self__.dv.getFloat64(self__.pos,true);
(self__.pos = (self__.pos + (8)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint16_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2(___$1,(2)) : thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(2)));

var x = self__.dv.getUint16(self__.pos);
(self__.pos = (self__.pos + (2)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_uint16_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2(___$1,(2)) : thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(2)));

var x = self__.dv.getUint16(self__.pos,true);
(self__.pos = (self__.pos + (2)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_float_le$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2(___$1,(4)) : thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4)));

var x = self__.dv.getFloat32(self__.pos,true);
(self__.pos = (self__.pos + (4)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.prototype.thi$ng$dstruct$streams$IInputStream$read_float_be$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_readable.cljs$core$IFn$_invoke$arity$2(___$1,(4)) : thi.ng.dstruct.streams.ensure_readable.call(null,___$1,(4)));

var x = self__.dv.getFloat32(self__.pos);
(self__.pos = (self__.pos + (4)));

return x;
}));

(thi.ng.dstruct.streams.InputStreamWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$buf,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$js_SLASH_ArrayBuffer], null)),cljs.core.with_meta(cljs.core.cst$sym$dv,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$js_SLASH_DataView], null)),cljs.core.with_meta(cljs.core.cst$sym$pos,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
}));

(thi.ng.dstruct.streams.InputStreamWrapper.cljs$lang$type = true);

(thi.ng.dstruct.streams.InputStreamWrapper.cljs$lang$ctorStr = "thi.ng.dstruct.streams/InputStreamWrapper");

(thi.ng.dstruct.streams.InputStreamWrapper.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"thi.ng.dstruct.streams/InputStreamWrapper");
}));

/**
 * Positional factory function for thi.ng.dstruct.streams/InputStreamWrapper.
 */
thi.ng.dstruct.streams.__GT_InputStreamWrapper = (function thi$ng$dstruct$streams$__GT_InputStreamWrapper(buf,dv,pos){
return (new thi.ng.dstruct.streams.InputStreamWrapper(buf,dv,pos));
});


/**
* @constructor
 * @implements {thi.ng.dstruct.streams.IStreamPosition}
 * @implements {thi.ng.dstruct.streams.IBuffer}
 * @implements {thi.ng.dstruct.streams.IOutputStream}
*/
thi.ng.dstruct.streams.OutputStreamWrapper = (function (buf,dv,pos){
this.buf = buf;
this.dv = dv;
this.pos = pos;
});
(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_utf8_bytes$arity$2 = (function (_,str){
var self__ = this;
var ___$1 = this;
var utf8_31872 = thi.ng.dstruct.streams.utf8_str(str);
var len_31873 = cljs.core.count(utf8_31872);
var G__31870_31874 = ___$1;
var G__31871_31875 = cljs.core.count(utf8_31872);
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(G__31870_31874,G__31871_31875) : thi.ng.dstruct.streams.ensure_size.call(null,G__31870_31874,G__31871_31875));

var i_31876 = (0);
var p_31877 = self__.pos;
while(true){
if((i_31876 < len_31873)){
self__.dv.setUint8(p_31877,utf8_31872.charCodeAt(i_31876));

var G__31878 = (i_31876 + (1));
var G__31879 = (p_31877 + (1));
i_31876 = G__31878;
p_31877 = G__31879;
continue;
} else {
(self__.pos = p_31877);
}
break;
}

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint16_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(2)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(2)));

self__.dv.setUint16(self__.pos,x);

(self__.pos = (self__.pos + (2)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint16_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(2)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(2)));

self__.dv.setUint16(self__.pos,x,true);

(self__.pos = (self__.pos + (2)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint32_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(4)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4)));

self__.dv.setUint32(self__.pos,x);

(self__.pos = (self__.pos + (4)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec3f_le$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(12)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(12)));

self__.dv.setFloat32(self__.pos,cljs.core.first(v),true);

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),true);

self__.dv.setFloat32((self__.pos + (8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),true);

(self__.pos = (self__.pos + (12)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec3f_be$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(12)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(12)));

self__.dv.setFloat32(self__.pos,cljs.core.first(v));

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

self__.dv.setFloat32((self__.pos + (8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

(self__.pos = (self__.pos + (12)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_double_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(8)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8)));

self__.dv.setFloat64(self__.pos,x);

(self__.pos = (self__.pos + (8)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint8$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(1)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(1)));

self__.dv.setUint8(self__.pos,x);

(self__.pos = (self__.pos + (1)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_float_be$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(4)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4)));

self__.dv.setFloat32(self__.pos,x);

(self__.pos = (self__.pos + (4)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_float_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(4)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4)));

self__.dv.setFloat32(self__.pos,x,true);

(self__.pos = (self__.pos + (4)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_uint32_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(4)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(4)));

self__.dv.setUint32(self__.pos,x,true);

(self__.pos = (self__.pos + (4)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec2f_be$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(8)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8)));

self__.dv.setFloat32(self__.pos,cljs.core.first(v));

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

(self__.pos = (self__.pos + (8)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_double_le$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(8)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8)));

self__.dv.setFloat64(self__.pos,x,true);

(self__.pos = (self__.pos + (8)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IOutputStream$write_vec2f_le$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,(8)) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,(8)));

self__.dv.setFloat32(self__.pos,cljs.core.first(v),true);

self__.dv.setFloat32((self__.pos + (4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),true);

(self__.pos = (self__.pos + (8)));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$skip$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
(thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2 ? thi.ng.dstruct.streams.ensure_size.cljs$core$IFn$_invoke$arity$2(___$1,x) : thi.ng.dstruct.streams.ensure_size.call(null,___$1,x));

(self__.pos = (self__.pos + x));

return ___$1;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IStreamPosition$get_position$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.pos;
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_byte_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint8Array(self__.buf,(0),self__.pos));
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_float_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Float32Array(self__.buf,(0),(self__.pos >>> (2))));
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_double_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Float64Array(self__.buf,(0),(self__.pos >>> (3))));
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_short_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint16Array(self__.buf,(0),(self__.pos >>> (1))));
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.prototype.thi$ng$dstruct$streams$IBuffer$get_int_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new Uint32Array(self__.buf,(0),(self__.pos >>> (2))));
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$buf,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$sym$js_SLASH_ArrayBuffer,cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$dv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$sym$js_SLASH_DataView,cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$pos,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
}));

(thi.ng.dstruct.streams.OutputStreamWrapper.cljs$lang$type = true);

(thi.ng.dstruct.streams.OutputStreamWrapper.cljs$lang$ctorStr = "thi.ng.dstruct.streams/OutputStreamWrapper");

(thi.ng.dstruct.streams.OutputStreamWrapper.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"thi.ng.dstruct.streams/OutputStreamWrapper");
}));

/**
 * Positional factory function for thi.ng.dstruct.streams/OutputStreamWrapper.
 */
thi.ng.dstruct.streams.__GT_OutputStreamWrapper = (function thi$ng$dstruct$streams$__GT_OutputStreamWrapper(buf,dv,pos){
return (new thi.ng.dstruct.streams.OutputStreamWrapper(buf,dv,pos));
});

thi.ng.dstruct.streams.ensure_readable = (function thi$ng$dstruct$streams$ensure_readable(in$,size){
if(((in$.pos + size) >= in$.buf.byteLength)){
throw (new Error(["EOF overrun, current pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$.pos),", requested read length: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),", but length: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$.buf.byteLength)].join('')));
} else {
return null;
}
});
thi.ng.dstruct.streams.ensure_size = (function thi$ng$dstruct$streams$ensure_size(out,size){
var len = out.buf.byteLength;
if(((out.pos + size) > len)){
var buf_SINGLEQUOTE_ = (new ArrayBuffer((len + (16384))));
(new Uint8Array(buf_SINGLEQUOTE_)).set((new Uint8Array(out.buf,(0),out.pos)));

(out.buf = buf_SINGLEQUOTE_);

return (out.dv = (new DataView(buf_SINGLEQUOTE_)));
} else {
return null;
}
});
/**
 * Takes an input or outputstream and optional mime type, returns
 *   contents as data url wrapped in a volatile. The volatile's value is
 *   initially nil and will only become realized after the function
 *   returned.
 */
thi.ng.dstruct.streams.as_data_url = (function thi$ng$dstruct$streams$as_data_url(var_args){
var G__31881 = arguments.length;
switch (G__31881) {
case 1:
return thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$1 = (function (stream){
return thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$2(stream,"application/octet-stream");
}));

(thi.ng.dstruct.streams.as_data_url.cljs$core$IFn$_invoke$arity$2 = (function (stream,mime){
var fr = (new FileReader());
var uri = cljs.core.volatile_BANG_(null);
(fr.onload = (function (e){
return cljs.core.vreset_BANG_(uri,e.target.result);
}));

fr.readAsDataURL((new Blob([thi.ng.dstruct.streams.get_byte_buffer(stream)],({"type": mime}))));

return uri;
}));

(thi.ng.dstruct.streams.as_data_url.cljs$lang$maxFixedArity = 2);

/**
 * Takes an input or outputstream, callback fn and optional mime
 *   type, calls fn with data url string, returns nil.
 */
thi.ng.dstruct.streams.as_data_url_async = (function thi$ng$dstruct$streams$as_data_url_async(var_args){
var G__31885 = arguments.length;
switch (G__31885) {
case 2:
return thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$2 = (function (stream,cb){
return thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$3(stream,cb,"application/octet-stream");
}));

(thi.ng.dstruct.streams.as_data_url_async.cljs$core$IFn$_invoke$arity$3 = (function (stream,cb,mime){
var fr = (new FileReader());
(fr.onload = (function (p1__31883_SHARP_){
var G__31886 = p1__31883_SHARP_.target.result;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__31886) : cb.call(null,G__31886));
}));

fr.readAsDataURL((new Blob([thi.ng.dstruct.streams.get_byte_buffer(stream)],({"type": mime}))));

return null;
}));

(thi.ng.dstruct.streams.as_data_url_async.cljs$lang$maxFixedArity = 3);

thi.ng.dstruct.streams.input_stream = (function thi$ng$dstruct$streams$input_stream(var_args){
var G__31889 = arguments.length;
switch (G__31889) {
case 1:
return thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$2(buf,(0));
}));

(thi.ng.dstruct.streams.input_stream.cljs$core$IFn$_invoke$arity$2 = (function (buf,pos){
return (new thi.ng.dstruct.streams.InputStreamWrapper(buf,(new DataView(buf)),pos));
}));

(thi.ng.dstruct.streams.input_stream.cljs$lang$maxFixedArity = 2);

thi.ng.dstruct.streams.output_stream = (function thi$ng$dstruct$streams$output_stream(var_args){
var G__31892 = arguments.length;
switch (G__31892) {
case 0:
return thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$1((4096));
}));

(thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$1 = (function (size){
return thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$2((new ArrayBuffer(size)),(0));
}));

(thi.ng.dstruct.streams.output_stream.cljs$core$IFn$_invoke$arity$2 = (function (buf,pos){
return (new thi.ng.dstruct.streams.OutputStreamWrapper(buf,(new DataView(buf)),pos));
}));

(thi.ng.dstruct.streams.output_stream.cljs$lang$maxFixedArity = 2);

