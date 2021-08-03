// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29242 = arguments.length;
switch (G__29242) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29243 = (function (f,blockable,meta29244){
this.f = f;
this.blockable = blockable;
this.meta29244 = meta29244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29245,meta29244__$1){
var self__ = this;
var _29245__$1 = this;
return (new cljs.core.async.t_cljs$core$async29243(self__.f,self__.blockable,meta29244__$1));
}));

(cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29245){
var self__ = this;
var _29245__$1 = this;
return self__.meta29244;
}));

(cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta29244], null);
}));

(cljs.core.async.t_cljs$core$async29243.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29243");

(cljs.core.async.t_cljs$core$async29243.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29243");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29243.
 */
cljs.core.async.__GT_t_cljs$core$async29243 = (function cljs$core$async$__GT_t_cljs$core$async29243(f__$1,blockable__$1,meta29244){
return (new cljs.core.async.t_cljs$core$async29243(f__$1,blockable__$1,meta29244));
});

}

return (new cljs.core.async.t_cljs$core$async29243(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29249 = arguments.length;
switch (G__29249) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29252 = arguments.length;
switch (G__29252) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29255 = arguments.length;
switch (G__29255) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_29257 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29257) : fn1.call(null,val_29257));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29257) : fn1.call(null,val_29257));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29259 = arguments.length;
switch (G__29259) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___29261 = n;
var x_29262 = (0);
while(true){
if((x_29262 < n__4706__auto___29261)){
(a[x_29262] = (0));

var G__29263 = (x_29262 + (1));
x_29262 = G__29263;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__29264 = (i + (1));
i = G__29264;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29265 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29265 = (function (flag,meta29266){
this.flag = flag;
this.meta29266 = meta29266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29267,meta29266__$1){
var self__ = this;
var _29267__$1 = this;
return (new cljs.core.async.t_cljs$core$async29265(self__.flag,meta29266__$1));
}));

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29267){
var self__ = this;
var _29267__$1 = this;
return self__.meta29266;
}));

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta29266], null);
}));

(cljs.core.async.t_cljs$core$async29265.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29265");

(cljs.core.async.t_cljs$core$async29265.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29265");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29265.
 */
cljs.core.async.__GT_t_cljs$core$async29265 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29265(flag__$1,meta29266){
return (new cljs.core.async.t_cljs$core$async29265(flag__$1,meta29266));
});

}

return (new cljs.core.async.t_cljs$core$async29265(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29268 = (function (flag,cb,meta29269){
this.flag = flag;
this.cb = cb;
this.meta29269 = meta29269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29270,meta29269__$1){
var self__ = this;
var _29270__$1 = this;
return (new cljs.core.async.t_cljs$core$async29268(self__.flag,self__.cb,meta29269__$1));
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29270){
var self__ = this;
var _29270__$1 = this;
return self__.meta29269;
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta29269], null);
}));

(cljs.core.async.t_cljs$core$async29268.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29268");

(cljs.core.async.t_cljs$core$async29268.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29268");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29268.
 */
cljs.core.async.__GT_t_cljs$core$async29268 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29268(flag__$1,cb__$1,meta29269){
return (new cljs.core.async.t_cljs$core$async29268(flag__$1,cb__$1,meta29269));
});

}

return (new cljs.core.async.t_cljs$core$async29268(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29271_SHARP_){
var G__29273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29271_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29273) : fret.call(null,G__29273));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29272_SHARP_){
var G__29274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29272_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29274) : fret.call(null,G__29274));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29275 = (i + (1));
i = G__29275;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___29280 = arguments.length;
var i__4830__auto___29281 = (0);
while(true){
if((i__4830__auto___29281 < len__4829__auto___29280)){
args__4835__auto__.push((arguments[i__4830__auto___29281]));

var G__29282 = (i__4830__auto___29281 + (1));
i__4830__auto___29281 = G__29282;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29278){
var map__29279 = p__29278;
var map__29279__$1 = cljs.core.__destructure_map(map__29279);
var opts = map__29279__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29276){
var G__29277 = cljs.core.first(seq29276);
var seq29276__$1 = cljs.core.next(seq29276);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29277,seq29276__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29284 = arguments.length;
switch (G__29284) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29182__auto___29330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_29308){
var state_val_29309 = (state_29308[(1)]);
if((state_val_29309 === (7))){
var inst_29304 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
var statearr_29310_29331 = state_29308__$1;
(statearr_29310_29331[(2)] = inst_29304);

(statearr_29310_29331[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29309 === (1))){
var state_29308__$1 = state_29308;
var statearr_29311_29332 = state_29308__$1;
(statearr_29311_29332[(2)] = null);

(statearr_29311_29332[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29309 === (4))){
var inst_29287 = (state_29308[(7)]);
var inst_29287__$1 = (state_29308[(2)]);
var inst_29288 = (inst_29287__$1 == null);
var state_29308__$1 = (function (){var statearr_29312 = state_29308;
(statearr_29312[(7)] = inst_29287__$1);

return statearr_29312;
})();
if(cljs.core.truth_(inst_29288)){
var statearr_29313_29333 = state_29308__$1;
(statearr_29313_29333[(1)] = (5));

} else {
var statearr_29314_29334 = state_29308__$1;
(statearr_29314_29334[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29309 === (13))){
var state_29308__$1 = state_29308;
var statearr_29315_29335 = state_29308__$1;
(statearr_29315_29335[(2)] = null);

(statearr_29315_29335[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29309 === (6))){
var inst_29287 = (state_29308[(7)]);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29308__$1,(11),to,inst_29287);
} else {
if((state_val_29309 === (3))){
var inst_29306 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29308__$1,inst_29306);
} else {
if((state_val_29309 === (12))){
var state_29308__$1 = state_29308;
var statearr_29316_29336 = state_29308__$1;
(statearr_29316_29336[(2)] = null);

(statearr_29316_29336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29309 === (2))){
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29308__$1,(4),from);
} else {
if((state_val_29309 === (11))){
var inst_29297 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
if(cljs.core.truth_(inst_29297)){
var statearr_29317_29337 = state_29308__$1;
(statearr_29317_29337[(1)] = (12));

} else {
var statearr_29318_29338 = state_29308__$1;
(statearr_29318_29338[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29309 === (9))){
var state_29308__$1 = state_29308;
var statearr_29319_29339 = state_29308__$1;
(statearr_29319_29339[(2)] = null);

(statearr_29319_29339[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29309 === (5))){
var state_29308__$1 = state_29308;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29320_29340 = state_29308__$1;
(statearr_29320_29340[(1)] = (8));

} else {
var statearr_29321_29341 = state_29308__$1;
(statearr_29321_29341[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29309 === (14))){
var inst_29302 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
var statearr_29322_29342 = state_29308__$1;
(statearr_29322_29342[(2)] = inst_29302);

(statearr_29322_29342[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29309 === (10))){
var inst_29294 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
var statearr_29323_29343 = state_29308__$1;
(statearr_29323_29343[(2)] = inst_29294);

(statearr_29323_29343[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29309 === (8))){
var inst_29291 = cljs.core.async.close_BANG_(to);
var state_29308__$1 = state_29308;
var statearr_29324_29344 = state_29308__$1;
(statearr_29324_29344[(2)] = inst_29291);

(statearr_29324_29344[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29074__auto__ = null;
var cljs$core$async$state_machine__29074__auto____0 = (function (){
var statearr_29325 = [null,null,null,null,null,null,null,null];
(statearr_29325[(0)] = cljs$core$async$state_machine__29074__auto__);

(statearr_29325[(1)] = (1));

return statearr_29325;
});
var cljs$core$async$state_machine__29074__auto____1 = (function (state_29308){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_29308);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e29326){if((e29326 instanceof Object)){
var ex__29077__auto__ = e29326;
var statearr_29327_29345 = state_29308;
(statearr_29327_29345[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29308);

return cljs.core.cst$kw$recur;
} else {
throw e29326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__29346 = state_29308;
state_29308 = G__29346;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$state_machine__29074__auto__ = function(state_29308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29074__auto____1.call(this,state_29308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29074__auto____0;
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29074__auto____1;
return cljs$core$async$state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_29328 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_29328[(6)] = c__29182__auto___29330);

return statearr_29328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29347){
var vec__29348 = p__29347;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29348,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29348,(1),null);
var job = vec__29348;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29182__auto___29519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_29355){
var state_val_29356 = (state_29355[(1)]);
if((state_val_29356 === (1))){
var state_29355__$1 = state_29355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29355__$1,(2),res,v);
} else {
if((state_val_29356 === (2))){
var inst_29352 = (state_29355[(2)]);
var inst_29353 = cljs.core.async.close_BANG_(res);
var state_29355__$1 = (function (){var statearr_29357 = state_29355;
(statearr_29357[(7)] = inst_29352);

return statearr_29357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29355__$1,inst_29353);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0 = (function (){
var statearr_29358 = [null,null,null,null,null,null,null,null];
(statearr_29358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__);

(statearr_29358[(1)] = (1));

return statearr_29358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1 = (function (state_29355){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_29355);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e29359){if((e29359 instanceof Object)){
var ex__29077__auto__ = e29359;
var statearr_29360_29520 = state_29355;
(statearr_29360_29520[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29355);

return cljs.core.cst$kw$recur;
} else {
throw e29359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__29521 = state_29355;
state_29355 = G__29521;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__ = function(state_29355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1.call(this,state_29355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_29361 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_29361[(6)] = c__29182__auto___29519);

return statearr_29361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29362){
var vec__29363 = p__29362;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29363,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29363,(1),null);
var job = vec__29363;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___29522 = n;
var __29523 = (0);
while(true){
if((__29523 < n__4706__auto___29522)){
var G__29366_29524 = type;
var G__29366_29525__$1 = (((G__29366_29524 instanceof cljs.core.Keyword))?G__29366_29524.fqn:null);
switch (G__29366_29525__$1) {
case "compute":
var c__29182__auto___29527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29523,c__29182__auto___29527,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async){
return (function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = ((function (__29523,c__29182__auto___29527,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async){
return (function (state_29379){
var state_val_29380 = (state_29379[(1)]);
if((state_val_29380 === (1))){
var state_29379__$1 = state_29379;
var statearr_29381_29528 = state_29379__$1;
(statearr_29381_29528[(2)] = null);

(statearr_29381_29528[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29380 === (2))){
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29379__$1,(4),jobs);
} else {
if((state_val_29380 === (3))){
var inst_29377 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29379__$1,inst_29377);
} else {
if((state_val_29380 === (4))){
var inst_29369 = (state_29379[(2)]);
var inst_29370 = process(inst_29369);
var state_29379__$1 = state_29379;
if(cljs.core.truth_(inst_29370)){
var statearr_29382_29529 = state_29379__$1;
(statearr_29382_29529[(1)] = (5));

} else {
var statearr_29383_29530 = state_29379__$1;
(statearr_29383_29530[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29380 === (5))){
var state_29379__$1 = state_29379;
var statearr_29384_29531 = state_29379__$1;
(statearr_29384_29531[(2)] = null);

(statearr_29384_29531[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29380 === (6))){
var state_29379__$1 = state_29379;
var statearr_29385_29532 = state_29379__$1;
(statearr_29385_29532[(2)] = null);

(statearr_29385_29532[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29380 === (7))){
var inst_29375 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
var statearr_29386_29533 = state_29379__$1;
(statearr_29386_29533[(2)] = inst_29375);

(statearr_29386_29533[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__29523,c__29182__auto___29527,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async))
;
return ((function (__29523,switch__29073__auto__,c__29182__auto___29527,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0 = (function (){
var statearr_29387 = [null,null,null,null,null,null,null];
(statearr_29387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__);

(statearr_29387[(1)] = (1));

return statearr_29387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1 = (function (state_29379){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_29379);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e29388){if((e29388 instanceof Object)){
var ex__29077__auto__ = e29388;
var statearr_29389_29534 = state_29379;
(statearr_29389_29534[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29379);

return cljs.core.cst$kw$recur;
} else {
throw e29388;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__29535 = state_29379;
state_29379 = G__29535;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__ = function(state_29379){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1.call(this,state_29379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__;
})()
;})(__29523,switch__29073__auto__,c__29182__auto___29527,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async))
})();
var state__29184__auto__ = (function (){var statearr_29390 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_29390[(6)] = c__29182__auto___29527);

return statearr_29390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
});})(__29523,c__29182__auto___29527,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async))
);


break;
case "async":
var c__29182__auto___29536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29523,c__29182__auto___29536,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async){
return (function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = ((function (__29523,c__29182__auto___29536,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async){
return (function (state_29403){
var state_val_29404 = (state_29403[(1)]);
if((state_val_29404 === (1))){
var state_29403__$1 = state_29403;
var statearr_29405_29537 = state_29403__$1;
(statearr_29405_29537[(2)] = null);

(statearr_29405_29537[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29404 === (2))){
var state_29403__$1 = state_29403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29403__$1,(4),jobs);
} else {
if((state_val_29404 === (3))){
var inst_29401 = (state_29403[(2)]);
var state_29403__$1 = state_29403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29403__$1,inst_29401);
} else {
if((state_val_29404 === (4))){
var inst_29393 = (state_29403[(2)]);
var inst_29394 = async(inst_29393);
var state_29403__$1 = state_29403;
if(cljs.core.truth_(inst_29394)){
var statearr_29406_29538 = state_29403__$1;
(statearr_29406_29538[(1)] = (5));

} else {
var statearr_29407_29539 = state_29403__$1;
(statearr_29407_29539[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29404 === (5))){
var state_29403__$1 = state_29403;
var statearr_29408_29540 = state_29403__$1;
(statearr_29408_29540[(2)] = null);

(statearr_29408_29540[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29404 === (6))){
var state_29403__$1 = state_29403;
var statearr_29409_29541 = state_29403__$1;
(statearr_29409_29541[(2)] = null);

(statearr_29409_29541[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29404 === (7))){
var inst_29399 = (state_29403[(2)]);
var state_29403__$1 = state_29403;
var statearr_29410_29542 = state_29403__$1;
(statearr_29410_29542[(2)] = inst_29399);

(statearr_29410_29542[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__29523,c__29182__auto___29536,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async))
;
return ((function (__29523,switch__29073__auto__,c__29182__auto___29536,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0 = (function (){
var statearr_29411 = [null,null,null,null,null,null,null];
(statearr_29411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__);

(statearr_29411[(1)] = (1));

return statearr_29411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1 = (function (state_29403){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_29403);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e29412){if((e29412 instanceof Object)){
var ex__29077__auto__ = e29412;
var statearr_29413_29543 = state_29403;
(statearr_29413_29543[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29403);

return cljs.core.cst$kw$recur;
} else {
throw e29412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__29544 = state_29403;
state_29403 = G__29544;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__ = function(state_29403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1.call(this,state_29403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__;
})()
;})(__29523,switch__29073__auto__,c__29182__auto___29536,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async))
})();
var state__29184__auto__ = (function (){var statearr_29414 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_29414[(6)] = c__29182__auto___29536);

return statearr_29414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
});})(__29523,c__29182__auto___29536,G__29366_29524,G__29366_29525__$1,n__4706__auto___29522,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29366_29525__$1)].join('')));

}

var G__29545 = (__29523 + (1));
__29523 = G__29545;
continue;
} else {
}
break;
}

var c__29182__auto___29546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_29436){
var state_val_29437 = (state_29436[(1)]);
if((state_val_29437 === (7))){
var inst_29432 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
var statearr_29438_29547 = state_29436__$1;
(statearr_29438_29547[(2)] = inst_29432);

(statearr_29438_29547[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29437 === (1))){
var state_29436__$1 = state_29436;
var statearr_29439_29548 = state_29436__$1;
(statearr_29439_29548[(2)] = null);

(statearr_29439_29548[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29437 === (4))){
var inst_29417 = (state_29436[(7)]);
var inst_29417__$1 = (state_29436[(2)]);
var inst_29418 = (inst_29417__$1 == null);
var state_29436__$1 = (function (){var statearr_29440 = state_29436;
(statearr_29440[(7)] = inst_29417__$1);

return statearr_29440;
})();
if(cljs.core.truth_(inst_29418)){
var statearr_29441_29549 = state_29436__$1;
(statearr_29441_29549[(1)] = (5));

} else {
var statearr_29442_29550 = state_29436__$1;
(statearr_29442_29550[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29437 === (6))){
var inst_29417 = (state_29436[(7)]);
var inst_29422 = (state_29436[(8)]);
var inst_29422__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29423 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29424 = [inst_29417,inst_29422__$1];
var inst_29425 = (new cljs.core.PersistentVector(null,2,(5),inst_29423,inst_29424,null));
var state_29436__$1 = (function (){var statearr_29443 = state_29436;
(statearr_29443[(8)] = inst_29422__$1);

return statearr_29443;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29436__$1,(8),jobs,inst_29425);
} else {
if((state_val_29437 === (3))){
var inst_29434 = (state_29436[(2)]);
var state_29436__$1 = state_29436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29436__$1,inst_29434);
} else {
if((state_val_29437 === (2))){
var state_29436__$1 = state_29436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29436__$1,(4),from);
} else {
if((state_val_29437 === (9))){
var inst_29429 = (state_29436[(2)]);
var state_29436__$1 = (function (){var statearr_29444 = state_29436;
(statearr_29444[(9)] = inst_29429);

return statearr_29444;
})();
var statearr_29445_29551 = state_29436__$1;
(statearr_29445_29551[(2)] = null);

(statearr_29445_29551[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29437 === (5))){
var inst_29420 = cljs.core.async.close_BANG_(jobs);
var state_29436__$1 = state_29436;
var statearr_29446_29552 = state_29436__$1;
(statearr_29446_29552[(2)] = inst_29420);

(statearr_29446_29552[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29437 === (8))){
var inst_29422 = (state_29436[(8)]);
var inst_29427 = (state_29436[(2)]);
var state_29436__$1 = (function (){var statearr_29447 = state_29436;
(statearr_29447[(10)] = inst_29427);

return statearr_29447;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29436__$1,(9),results,inst_29422);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0 = (function (){
var statearr_29448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__);

(statearr_29448[(1)] = (1));

return statearr_29448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1 = (function (state_29436){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_29436);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e29449){if((e29449 instanceof Object)){
var ex__29077__auto__ = e29449;
var statearr_29450_29553 = state_29436;
(statearr_29450_29553[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29436);

return cljs.core.cst$kw$recur;
} else {
throw e29449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__29554 = state_29436;
state_29436 = G__29554;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__ = function(state_29436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1.call(this,state_29436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_29451 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_29451[(6)] = c__29182__auto___29546);

return statearr_29451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


var c__29182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_29489){
var state_val_29490 = (state_29489[(1)]);
if((state_val_29490 === (7))){
var inst_29485 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29491_29555 = state_29489__$1;
(statearr_29491_29555[(2)] = inst_29485);

(statearr_29491_29555[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (20))){
var state_29489__$1 = state_29489;
var statearr_29492_29556 = state_29489__$1;
(statearr_29492_29556[(2)] = null);

(statearr_29492_29556[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (1))){
var state_29489__$1 = state_29489;
var statearr_29493_29557 = state_29489__$1;
(statearr_29493_29557[(2)] = null);

(statearr_29493_29557[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (4))){
var inst_29454 = (state_29489[(7)]);
var inst_29454__$1 = (state_29489[(2)]);
var inst_29455 = (inst_29454__$1 == null);
var state_29489__$1 = (function (){var statearr_29494 = state_29489;
(statearr_29494[(7)] = inst_29454__$1);

return statearr_29494;
})();
if(cljs.core.truth_(inst_29455)){
var statearr_29495_29558 = state_29489__$1;
(statearr_29495_29558[(1)] = (5));

} else {
var statearr_29496_29559 = state_29489__$1;
(statearr_29496_29559[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (15))){
var inst_29467 = (state_29489[(8)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29489__$1,(18),to,inst_29467);
} else {
if((state_val_29490 === (21))){
var inst_29480 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29497_29560 = state_29489__$1;
(statearr_29497_29560[(2)] = inst_29480);

(statearr_29497_29560[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (13))){
var inst_29482 = (state_29489[(2)]);
var state_29489__$1 = (function (){var statearr_29498 = state_29489;
(statearr_29498[(9)] = inst_29482);

return statearr_29498;
})();
var statearr_29499_29561 = state_29489__$1;
(statearr_29499_29561[(2)] = null);

(statearr_29499_29561[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (6))){
var inst_29454 = (state_29489[(7)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29489__$1,(11),inst_29454);
} else {
if((state_val_29490 === (17))){
var inst_29475 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
if(cljs.core.truth_(inst_29475)){
var statearr_29500_29562 = state_29489__$1;
(statearr_29500_29562[(1)] = (19));

} else {
var statearr_29501_29563 = state_29489__$1;
(statearr_29501_29563[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (3))){
var inst_29487 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29489__$1,inst_29487);
} else {
if((state_val_29490 === (12))){
var inst_29464 = (state_29489[(10)]);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29489__$1,(14),inst_29464);
} else {
if((state_val_29490 === (2))){
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29489__$1,(4),results);
} else {
if((state_val_29490 === (19))){
var state_29489__$1 = state_29489;
var statearr_29502_29564 = state_29489__$1;
(statearr_29502_29564[(2)] = null);

(statearr_29502_29564[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (11))){
var inst_29464 = (state_29489[(2)]);
var state_29489__$1 = (function (){var statearr_29503 = state_29489;
(statearr_29503[(10)] = inst_29464);

return statearr_29503;
})();
var statearr_29504_29565 = state_29489__$1;
(statearr_29504_29565[(2)] = null);

(statearr_29504_29565[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (9))){
var state_29489__$1 = state_29489;
var statearr_29505_29566 = state_29489__$1;
(statearr_29505_29566[(2)] = null);

(statearr_29505_29566[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (5))){
var state_29489__$1 = state_29489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29506_29567 = state_29489__$1;
(statearr_29506_29567[(1)] = (8));

} else {
var statearr_29507_29568 = state_29489__$1;
(statearr_29507_29568[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (14))){
var inst_29467 = (state_29489[(8)]);
var inst_29469 = (state_29489[(11)]);
var inst_29467__$1 = (state_29489[(2)]);
var inst_29468 = (inst_29467__$1 == null);
var inst_29469__$1 = cljs.core.not(inst_29468);
var state_29489__$1 = (function (){var statearr_29508 = state_29489;
(statearr_29508[(8)] = inst_29467__$1);

(statearr_29508[(11)] = inst_29469__$1);

return statearr_29508;
})();
if(inst_29469__$1){
var statearr_29509_29569 = state_29489__$1;
(statearr_29509_29569[(1)] = (15));

} else {
var statearr_29510_29570 = state_29489__$1;
(statearr_29510_29570[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (16))){
var inst_29469 = (state_29489[(11)]);
var state_29489__$1 = state_29489;
var statearr_29511_29571 = state_29489__$1;
(statearr_29511_29571[(2)] = inst_29469);

(statearr_29511_29571[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (10))){
var inst_29461 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29512_29572 = state_29489__$1;
(statearr_29512_29572[(2)] = inst_29461);

(statearr_29512_29572[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (18))){
var inst_29472 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29513_29573 = state_29489__$1;
(statearr_29513_29573[(2)] = inst_29472);

(statearr_29513_29573[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29490 === (8))){
var inst_29458 = cljs.core.async.close_BANG_(to);
var state_29489__$1 = state_29489;
var statearr_29514_29574 = state_29489__$1;
(statearr_29514_29574[(2)] = inst_29458);

(statearr_29514_29574[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0 = (function (){
var statearr_29515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__);

(statearr_29515[(1)] = (1));

return statearr_29515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1 = (function (state_29489){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_29489);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e29516){if((e29516 instanceof Object)){
var ex__29077__auto__ = e29516;
var statearr_29517_29575 = state_29489;
(statearr_29517_29575[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29489);

return cljs.core.cst$kw$recur;
} else {
throw e29516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__29576 = state_29489;
state_29489 = G__29576;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__ = function(state_29489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1.call(this,state_29489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29074__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_29518 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_29518[(6)] = c__29182__auto__);

return statearr_29518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));

return c__29182__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29578 = arguments.length;
switch (G__29578) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29581 = arguments.length;
switch (G__29581) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29584 = arguments.length;
switch (G__29584) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29182__auto___29633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_29610){
var state_val_29611 = (state_29610[(1)]);
if((state_val_29611 === (7))){
var inst_29606 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29612_29634 = state_29610__$1;
(statearr_29612_29634[(2)] = inst_29606);

(statearr_29612_29634[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29611 === (1))){
var state_29610__$1 = state_29610;
var statearr_29613_29635 = state_29610__$1;
(statearr_29613_29635[(2)] = null);

(statearr_29613_29635[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29611 === (4))){
var inst_29587 = (state_29610[(7)]);
var inst_29587__$1 = (state_29610[(2)]);
var inst_29588 = (inst_29587__$1 == null);
var state_29610__$1 = (function (){var statearr_29614 = state_29610;
(statearr_29614[(7)] = inst_29587__$1);

return statearr_29614;
})();
if(cljs.core.truth_(inst_29588)){
var statearr_29615_29636 = state_29610__$1;
(statearr_29615_29636[(1)] = (5));

} else {
var statearr_29616_29637 = state_29610__$1;
(statearr_29616_29637[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29611 === (13))){
var state_29610__$1 = state_29610;
var statearr_29617_29638 = state_29610__$1;
(statearr_29617_29638[(2)] = null);

(statearr_29617_29638[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29611 === (6))){
var inst_29587 = (state_29610[(7)]);
var inst_29593 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29587) : p.call(null,inst_29587));
var state_29610__$1 = state_29610;
if(cljs.core.truth_(inst_29593)){
var statearr_29618_29639 = state_29610__$1;
(statearr_29618_29639[(1)] = (9));

} else {
var statearr_29619_29640 = state_29610__$1;
(statearr_29619_29640[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29611 === (3))){
var inst_29608 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29610__$1,inst_29608);
} else {
if((state_val_29611 === (12))){
var state_29610__$1 = state_29610;
var statearr_29620_29641 = state_29610__$1;
(statearr_29620_29641[(2)] = null);

(statearr_29620_29641[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29611 === (2))){
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29610__$1,(4),ch);
} else {
if((state_val_29611 === (11))){
var inst_29587 = (state_29610[(7)]);
var inst_29597 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29610__$1,(8),inst_29597,inst_29587);
} else {
if((state_val_29611 === (9))){
var state_29610__$1 = state_29610;
var statearr_29621_29642 = state_29610__$1;
(statearr_29621_29642[(2)] = tc);

(statearr_29621_29642[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29611 === (5))){
var inst_29590 = cljs.core.async.close_BANG_(tc);
var inst_29591 = cljs.core.async.close_BANG_(fc);
var state_29610__$1 = (function (){var statearr_29622 = state_29610;
(statearr_29622[(8)] = inst_29590);

return statearr_29622;
})();
var statearr_29623_29643 = state_29610__$1;
(statearr_29623_29643[(2)] = inst_29591);

(statearr_29623_29643[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29611 === (14))){
var inst_29604 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29624_29644 = state_29610__$1;
(statearr_29624_29644[(2)] = inst_29604);

(statearr_29624_29644[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29611 === (10))){
var state_29610__$1 = state_29610;
var statearr_29625_29645 = state_29610__$1;
(statearr_29625_29645[(2)] = fc);

(statearr_29625_29645[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29611 === (8))){
var inst_29599 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
if(cljs.core.truth_(inst_29599)){
var statearr_29626_29646 = state_29610__$1;
(statearr_29626_29646[(1)] = (12));

} else {
var statearr_29627_29647 = state_29610__$1;
(statearr_29627_29647[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29074__auto__ = null;
var cljs$core$async$state_machine__29074__auto____0 = (function (){
var statearr_29628 = [null,null,null,null,null,null,null,null,null];
(statearr_29628[(0)] = cljs$core$async$state_machine__29074__auto__);

(statearr_29628[(1)] = (1));

return statearr_29628;
});
var cljs$core$async$state_machine__29074__auto____1 = (function (state_29610){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_29610);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e29629){if((e29629 instanceof Object)){
var ex__29077__auto__ = e29629;
var statearr_29630_29648 = state_29610;
(statearr_29630_29648[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29610);

return cljs.core.cst$kw$recur;
} else {
throw e29629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__29649 = state_29610;
state_29610 = G__29649;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$state_machine__29074__auto__ = function(state_29610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29074__auto____1.call(this,state_29610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29074__auto____0;
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29074__auto____1;
return cljs$core$async$state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_29631 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_29631[(6)] = c__29182__auto___29633);

return statearr_29631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_29670){
var state_val_29671 = (state_29670[(1)]);
if((state_val_29671 === (7))){
var inst_29666 = (state_29670[(2)]);
var state_29670__$1 = state_29670;
var statearr_29672_29690 = state_29670__$1;
(statearr_29672_29690[(2)] = inst_29666);

(statearr_29672_29690[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29671 === (1))){
var inst_29650 = init;
var state_29670__$1 = (function (){var statearr_29673 = state_29670;
(statearr_29673[(7)] = inst_29650);

return statearr_29673;
})();
var statearr_29674_29691 = state_29670__$1;
(statearr_29674_29691[(2)] = null);

(statearr_29674_29691[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29671 === (4))){
var inst_29653 = (state_29670[(8)]);
var inst_29653__$1 = (state_29670[(2)]);
var inst_29654 = (inst_29653__$1 == null);
var state_29670__$1 = (function (){var statearr_29675 = state_29670;
(statearr_29675[(8)] = inst_29653__$1);

return statearr_29675;
})();
if(cljs.core.truth_(inst_29654)){
var statearr_29676_29692 = state_29670__$1;
(statearr_29676_29692[(1)] = (5));

} else {
var statearr_29677_29693 = state_29670__$1;
(statearr_29677_29693[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29671 === (6))){
var inst_29653 = (state_29670[(8)]);
var inst_29657 = (state_29670[(9)]);
var inst_29650 = (state_29670[(7)]);
var inst_29657__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29650,inst_29653) : f.call(null,inst_29650,inst_29653));
var inst_29658 = cljs.core.reduced_QMARK_(inst_29657__$1);
var state_29670__$1 = (function (){var statearr_29678 = state_29670;
(statearr_29678[(9)] = inst_29657__$1);

return statearr_29678;
})();
if(inst_29658){
var statearr_29679_29694 = state_29670__$1;
(statearr_29679_29694[(1)] = (8));

} else {
var statearr_29680_29695 = state_29670__$1;
(statearr_29680_29695[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29671 === (3))){
var inst_29668 = (state_29670[(2)]);
var state_29670__$1 = state_29670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29670__$1,inst_29668);
} else {
if((state_val_29671 === (2))){
var state_29670__$1 = state_29670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29670__$1,(4),ch);
} else {
if((state_val_29671 === (9))){
var inst_29657 = (state_29670[(9)]);
var inst_29650 = inst_29657;
var state_29670__$1 = (function (){var statearr_29681 = state_29670;
(statearr_29681[(7)] = inst_29650);

return statearr_29681;
})();
var statearr_29682_29696 = state_29670__$1;
(statearr_29682_29696[(2)] = null);

(statearr_29682_29696[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29671 === (5))){
var inst_29650 = (state_29670[(7)]);
var state_29670__$1 = state_29670;
var statearr_29683_29697 = state_29670__$1;
(statearr_29683_29697[(2)] = inst_29650);

(statearr_29683_29697[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29671 === (10))){
var inst_29664 = (state_29670[(2)]);
var state_29670__$1 = state_29670;
var statearr_29684_29698 = state_29670__$1;
(statearr_29684_29698[(2)] = inst_29664);

(statearr_29684_29698[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29671 === (8))){
var inst_29657 = (state_29670[(9)]);
var inst_29660 = cljs.core.deref(inst_29657);
var state_29670__$1 = state_29670;
var statearr_29685_29699 = state_29670__$1;
(statearr_29685_29699[(2)] = inst_29660);

(statearr_29685_29699[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29074__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29074__auto____0 = (function (){
var statearr_29686 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29686[(0)] = cljs$core$async$reduce_$_state_machine__29074__auto__);

(statearr_29686[(1)] = (1));

return statearr_29686;
});
var cljs$core$async$reduce_$_state_machine__29074__auto____1 = (function (state_29670){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_29670);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e29687){if((e29687 instanceof Object)){
var ex__29077__auto__ = e29687;
var statearr_29688_29700 = state_29670;
(statearr_29688_29700[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29670);

return cljs.core.cst$kw$recur;
} else {
throw e29687;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__29701 = state_29670;
state_29670 = G__29701;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29074__auto__ = function(state_29670){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29074__auto____1.call(this,state_29670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29074__auto____0;
cljs$core$async$reduce_$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29074__auto____1;
return cljs$core$async$reduce_$_state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_29689 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_29689[(6)] = c__29182__auto__);

return statearr_29689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));

return c__29182__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_29707){
var state_val_29708 = (state_29707[(1)]);
if((state_val_29708 === (1))){
var inst_29702 = cljs.core.async.reduce(f__$1,init,ch);
var state_29707__$1 = state_29707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29707__$1,(2),inst_29702);
} else {
if((state_val_29708 === (2))){
var inst_29704 = (state_29707[(2)]);
var inst_29705 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29704) : f__$1.call(null,inst_29704));
var state_29707__$1 = state_29707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29707__$1,inst_29705);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29074__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29074__auto____0 = (function (){
var statearr_29709 = [null,null,null,null,null,null,null];
(statearr_29709[(0)] = cljs$core$async$transduce_$_state_machine__29074__auto__);

(statearr_29709[(1)] = (1));

return statearr_29709;
});
var cljs$core$async$transduce_$_state_machine__29074__auto____1 = (function (state_29707){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_29707);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e29710){if((e29710 instanceof Object)){
var ex__29077__auto__ = e29710;
var statearr_29711_29713 = state_29707;
(statearr_29711_29713[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29707);

return cljs.core.cst$kw$recur;
} else {
throw e29710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__29714 = state_29707;
state_29707 = G__29714;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29074__auto__ = function(state_29707){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29074__auto____1.call(this,state_29707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29074__auto____0;
cljs$core$async$transduce_$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29074__auto____1;
return cljs$core$async$transduce_$_state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_29712 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_29712[(6)] = c__29182__auto__);

return statearr_29712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));

return c__29182__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29716 = arguments.length;
switch (G__29716) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_29741){
var state_val_29742 = (state_29741[(1)]);
if((state_val_29742 === (7))){
var inst_29723 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29743_29764 = state_29741__$1;
(statearr_29743_29764[(2)] = inst_29723);

(statearr_29743_29764[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29742 === (1))){
var inst_29717 = cljs.core.seq(coll);
var inst_29718 = inst_29717;
var state_29741__$1 = (function (){var statearr_29744 = state_29741;
(statearr_29744[(7)] = inst_29718);

return statearr_29744;
})();
var statearr_29745_29765 = state_29741__$1;
(statearr_29745_29765[(2)] = null);

(statearr_29745_29765[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29742 === (4))){
var inst_29718 = (state_29741[(7)]);
var inst_29721 = cljs.core.first(inst_29718);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29741__$1,(7),ch,inst_29721);
} else {
if((state_val_29742 === (13))){
var inst_29735 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29746_29766 = state_29741__$1;
(statearr_29746_29766[(2)] = inst_29735);

(statearr_29746_29766[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29742 === (6))){
var inst_29726 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
if(cljs.core.truth_(inst_29726)){
var statearr_29747_29767 = state_29741__$1;
(statearr_29747_29767[(1)] = (8));

} else {
var statearr_29748_29768 = state_29741__$1;
(statearr_29748_29768[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29742 === (3))){
var inst_29739 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29741__$1,inst_29739);
} else {
if((state_val_29742 === (12))){
var state_29741__$1 = state_29741;
var statearr_29749_29769 = state_29741__$1;
(statearr_29749_29769[(2)] = null);

(statearr_29749_29769[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29742 === (2))){
var inst_29718 = (state_29741[(7)]);
var state_29741__$1 = state_29741;
if(cljs.core.truth_(inst_29718)){
var statearr_29750_29770 = state_29741__$1;
(statearr_29750_29770[(1)] = (4));

} else {
var statearr_29751_29771 = state_29741__$1;
(statearr_29751_29771[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29742 === (11))){
var inst_29732 = cljs.core.async.close_BANG_(ch);
var state_29741__$1 = state_29741;
var statearr_29752_29772 = state_29741__$1;
(statearr_29752_29772[(2)] = inst_29732);

(statearr_29752_29772[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29742 === (9))){
var state_29741__$1 = state_29741;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29753_29773 = state_29741__$1;
(statearr_29753_29773[(1)] = (11));

} else {
var statearr_29754_29774 = state_29741__$1;
(statearr_29754_29774[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29742 === (5))){
var inst_29718 = (state_29741[(7)]);
var state_29741__$1 = state_29741;
var statearr_29755_29775 = state_29741__$1;
(statearr_29755_29775[(2)] = inst_29718);

(statearr_29755_29775[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29742 === (10))){
var inst_29737 = (state_29741[(2)]);
var state_29741__$1 = state_29741;
var statearr_29756_29776 = state_29741__$1;
(statearr_29756_29776[(2)] = inst_29737);

(statearr_29756_29776[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29742 === (8))){
var inst_29718 = (state_29741[(7)]);
var inst_29728 = cljs.core.next(inst_29718);
var inst_29718__$1 = inst_29728;
var state_29741__$1 = (function (){var statearr_29757 = state_29741;
(statearr_29757[(7)] = inst_29718__$1);

return statearr_29757;
})();
var statearr_29758_29777 = state_29741__$1;
(statearr_29758_29777[(2)] = null);

(statearr_29758_29777[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29074__auto__ = null;
var cljs$core$async$state_machine__29074__auto____0 = (function (){
var statearr_29759 = [null,null,null,null,null,null,null,null];
(statearr_29759[(0)] = cljs$core$async$state_machine__29074__auto__);

(statearr_29759[(1)] = (1));

return statearr_29759;
});
var cljs$core$async$state_machine__29074__auto____1 = (function (state_29741){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_29741);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e29760){if((e29760 instanceof Object)){
var ex__29077__auto__ = e29760;
var statearr_29761_29778 = state_29741;
(statearr_29761_29778[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29741);

return cljs.core.cst$kw$recur;
} else {
throw e29760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__29779 = state_29741;
state_29741 = G__29779;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$state_machine__29074__auto__ = function(state_29741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29074__auto____1.call(this,state_29741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29074__auto____0;
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29074__auto____1;
return cljs$core$async$state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_29762 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_29762[(6)] = c__29182__auto__);

return statearr_29762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));

return c__29182__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_29780 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_29780(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29781 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_29781(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29782 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_29782(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29783 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_29783(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29784 = (function (ch,cs,meta29785){
this.ch = ch;
this.cs = cs;
this.meta29785 = meta29785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29786,meta29785__$1){
var self__ = this;
var _29786__$1 = this;
return (new cljs.core.async.t_cljs$core$async29784(self__.ch,self__.cs,meta29785__$1));
}));

(cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29786){
var self__ = this;
var _29786__$1 = this;
return self__.meta29785;
}));

(cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29784.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta29785], null);
}));

(cljs.core.async.t_cljs$core$async29784.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29784");

(cljs.core.async.t_cljs$core$async29784.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async29784");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29784.
 */
cljs.core.async.__GT_t_cljs$core$async29784 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29784(ch__$1,cs__$1,meta29785){
return (new cljs.core.async.t_cljs$core$async29784(ch__$1,cs__$1,meta29785));
});

}

return (new cljs.core.async.t_cljs$core$async29784(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29182__auto___30006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_29921){
var state_val_29922 = (state_29921[(1)]);
if((state_val_29922 === (7))){
var inst_29917 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29923_30007 = state_29921__$1;
(statearr_29923_30007[(2)] = inst_29917);

(statearr_29923_30007[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (20))){
var inst_29820 = (state_29921[(7)]);
var inst_29832 = cljs.core.first(inst_29820);
var inst_29833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29832,(0),null);
var inst_29834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29832,(1),null);
var state_29921__$1 = (function (){var statearr_29924 = state_29921;
(statearr_29924[(8)] = inst_29833);

return statearr_29924;
})();
if(cljs.core.truth_(inst_29834)){
var statearr_29925_30008 = state_29921__$1;
(statearr_29925_30008[(1)] = (22));

} else {
var statearr_29926_30009 = state_29921__$1;
(statearr_29926_30009[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (27))){
var inst_29869 = (state_29921[(9)]);
var inst_29862 = (state_29921[(10)]);
var inst_29789 = (state_29921[(11)]);
var inst_29864 = (state_29921[(12)]);
var inst_29869__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29862,inst_29864);
var inst_29870 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29869__$1,inst_29789,done);
var state_29921__$1 = (function (){var statearr_29927 = state_29921;
(statearr_29927[(9)] = inst_29869__$1);

return statearr_29927;
})();
if(cljs.core.truth_(inst_29870)){
var statearr_29928_30010 = state_29921__$1;
(statearr_29928_30010[(1)] = (30));

} else {
var statearr_29929_30011 = state_29921__$1;
(statearr_29929_30011[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (1))){
var state_29921__$1 = state_29921;
var statearr_29930_30012 = state_29921__$1;
(statearr_29930_30012[(2)] = null);

(statearr_29930_30012[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (24))){
var inst_29820 = (state_29921[(7)]);
var inst_29839 = (state_29921[(2)]);
var inst_29840 = cljs.core.next(inst_29820);
var inst_29798 = inst_29840;
var inst_29799 = null;
var inst_29800 = (0);
var inst_29801 = (0);
var state_29921__$1 = (function (){var statearr_29931 = state_29921;
(statearr_29931[(13)] = inst_29799);

(statearr_29931[(14)] = inst_29839);

(statearr_29931[(15)] = inst_29800);

(statearr_29931[(16)] = inst_29801);

(statearr_29931[(17)] = inst_29798);

return statearr_29931;
})();
var statearr_29932_30013 = state_29921__$1;
(statearr_29932_30013[(2)] = null);

(statearr_29932_30013[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (39))){
var state_29921__$1 = state_29921;
var statearr_29936_30014 = state_29921__$1;
(statearr_29936_30014[(2)] = null);

(statearr_29936_30014[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (4))){
var inst_29789 = (state_29921[(11)]);
var inst_29789__$1 = (state_29921[(2)]);
var inst_29790 = (inst_29789__$1 == null);
var state_29921__$1 = (function (){var statearr_29937 = state_29921;
(statearr_29937[(11)] = inst_29789__$1);

return statearr_29937;
})();
if(cljs.core.truth_(inst_29790)){
var statearr_29938_30015 = state_29921__$1;
(statearr_29938_30015[(1)] = (5));

} else {
var statearr_29939_30016 = state_29921__$1;
(statearr_29939_30016[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (15))){
var inst_29799 = (state_29921[(13)]);
var inst_29800 = (state_29921[(15)]);
var inst_29801 = (state_29921[(16)]);
var inst_29798 = (state_29921[(17)]);
var inst_29816 = (state_29921[(2)]);
var inst_29817 = (inst_29801 + (1));
var tmp29933 = inst_29799;
var tmp29934 = inst_29800;
var tmp29935 = inst_29798;
var inst_29798__$1 = tmp29935;
var inst_29799__$1 = tmp29933;
var inst_29800__$1 = tmp29934;
var inst_29801__$1 = inst_29817;
var state_29921__$1 = (function (){var statearr_29940 = state_29921;
(statearr_29940[(18)] = inst_29816);

(statearr_29940[(13)] = inst_29799__$1);

(statearr_29940[(15)] = inst_29800__$1);

(statearr_29940[(16)] = inst_29801__$1);

(statearr_29940[(17)] = inst_29798__$1);

return statearr_29940;
})();
var statearr_29941_30017 = state_29921__$1;
(statearr_29941_30017[(2)] = null);

(statearr_29941_30017[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (21))){
var inst_29843 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29945_30018 = state_29921__$1;
(statearr_29945_30018[(2)] = inst_29843);

(statearr_29945_30018[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (31))){
var inst_29869 = (state_29921[(9)]);
var inst_29873 = done(null);
var inst_29874 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29869);
var state_29921__$1 = (function (){var statearr_29946 = state_29921;
(statearr_29946[(19)] = inst_29873);

return statearr_29946;
})();
var statearr_29947_30019 = state_29921__$1;
(statearr_29947_30019[(2)] = inst_29874);

(statearr_29947_30019[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (32))){
var inst_29861 = (state_29921[(20)]);
var inst_29863 = (state_29921[(21)]);
var inst_29862 = (state_29921[(10)]);
var inst_29864 = (state_29921[(12)]);
var inst_29876 = (state_29921[(2)]);
var inst_29877 = (inst_29864 + (1));
var tmp29942 = inst_29861;
var tmp29943 = inst_29863;
var tmp29944 = inst_29862;
var inst_29861__$1 = tmp29942;
var inst_29862__$1 = tmp29944;
var inst_29863__$1 = tmp29943;
var inst_29864__$1 = inst_29877;
var state_29921__$1 = (function (){var statearr_29948 = state_29921;
(statearr_29948[(22)] = inst_29876);

(statearr_29948[(20)] = inst_29861__$1);

(statearr_29948[(21)] = inst_29863__$1);

(statearr_29948[(10)] = inst_29862__$1);

(statearr_29948[(12)] = inst_29864__$1);

return statearr_29948;
})();
var statearr_29949_30020 = state_29921__$1;
(statearr_29949_30020[(2)] = null);

(statearr_29949_30020[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (40))){
var inst_29889 = (state_29921[(23)]);
var inst_29893 = done(null);
var inst_29894 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_29889);
var state_29921__$1 = (function (){var statearr_29950 = state_29921;
(statearr_29950[(24)] = inst_29893);

return statearr_29950;
})();
var statearr_29951_30021 = state_29921__$1;
(statearr_29951_30021[(2)] = inst_29894);

(statearr_29951_30021[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (33))){
var inst_29880 = (state_29921[(25)]);
var inst_29882 = cljs.core.chunked_seq_QMARK_(inst_29880);
var state_29921__$1 = state_29921;
if(inst_29882){
var statearr_29952_30022 = state_29921__$1;
(statearr_29952_30022[(1)] = (36));

} else {
var statearr_29953_30023 = state_29921__$1;
(statearr_29953_30023[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (13))){
var inst_29810 = (state_29921[(26)]);
var inst_29813 = cljs.core.async.close_BANG_(inst_29810);
var state_29921__$1 = state_29921;
var statearr_29954_30024 = state_29921__$1;
(statearr_29954_30024[(2)] = inst_29813);

(statearr_29954_30024[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (22))){
var inst_29833 = (state_29921[(8)]);
var inst_29836 = cljs.core.async.close_BANG_(inst_29833);
var state_29921__$1 = state_29921;
var statearr_29955_30025 = state_29921__$1;
(statearr_29955_30025[(2)] = inst_29836);

(statearr_29955_30025[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (36))){
var inst_29880 = (state_29921[(25)]);
var inst_29884 = cljs.core.chunk_first(inst_29880);
var inst_29885 = cljs.core.chunk_rest(inst_29880);
var inst_29886 = cljs.core.count(inst_29884);
var inst_29861 = inst_29885;
var inst_29862 = inst_29884;
var inst_29863 = inst_29886;
var inst_29864 = (0);
var state_29921__$1 = (function (){var statearr_29956 = state_29921;
(statearr_29956[(20)] = inst_29861);

(statearr_29956[(21)] = inst_29863);

(statearr_29956[(10)] = inst_29862);

(statearr_29956[(12)] = inst_29864);

return statearr_29956;
})();
var statearr_29957_30026 = state_29921__$1;
(statearr_29957_30026[(2)] = null);

(statearr_29957_30026[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (41))){
var inst_29880 = (state_29921[(25)]);
var inst_29896 = (state_29921[(2)]);
var inst_29897 = cljs.core.next(inst_29880);
var inst_29861 = inst_29897;
var inst_29862 = null;
var inst_29863 = (0);
var inst_29864 = (0);
var state_29921__$1 = (function (){var statearr_29958 = state_29921;
(statearr_29958[(20)] = inst_29861);

(statearr_29958[(27)] = inst_29896);

(statearr_29958[(21)] = inst_29863);

(statearr_29958[(10)] = inst_29862);

(statearr_29958[(12)] = inst_29864);

return statearr_29958;
})();
var statearr_29959_30027 = state_29921__$1;
(statearr_29959_30027[(2)] = null);

(statearr_29959_30027[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (43))){
var state_29921__$1 = state_29921;
var statearr_29960_30028 = state_29921__$1;
(statearr_29960_30028[(2)] = null);

(statearr_29960_30028[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (29))){
var inst_29905 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29961_30029 = state_29921__$1;
(statearr_29961_30029[(2)] = inst_29905);

(statearr_29961_30029[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (44))){
var inst_29914 = (state_29921[(2)]);
var state_29921__$1 = (function (){var statearr_29962 = state_29921;
(statearr_29962[(28)] = inst_29914);

return statearr_29962;
})();
var statearr_29963_30030 = state_29921__$1;
(statearr_29963_30030[(2)] = null);

(statearr_29963_30030[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (6))){
var inst_29853 = (state_29921[(29)]);
var inst_29852 = cljs.core.deref(cs);
var inst_29853__$1 = cljs.core.keys(inst_29852);
var inst_29854 = cljs.core.count(inst_29853__$1);
var inst_29855 = cljs.core.reset_BANG_(dctr,inst_29854);
var inst_29860 = cljs.core.seq(inst_29853__$1);
var inst_29861 = inst_29860;
var inst_29862 = null;
var inst_29863 = (0);
var inst_29864 = (0);
var state_29921__$1 = (function (){var statearr_29964 = state_29921;
(statearr_29964[(20)] = inst_29861);

(statearr_29964[(21)] = inst_29863);

(statearr_29964[(30)] = inst_29855);

(statearr_29964[(10)] = inst_29862);

(statearr_29964[(29)] = inst_29853__$1);

(statearr_29964[(12)] = inst_29864);

return statearr_29964;
})();
var statearr_29965_30031 = state_29921__$1;
(statearr_29965_30031[(2)] = null);

(statearr_29965_30031[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (28))){
var inst_29861 = (state_29921[(20)]);
var inst_29880 = (state_29921[(25)]);
var inst_29880__$1 = cljs.core.seq(inst_29861);
var state_29921__$1 = (function (){var statearr_29966 = state_29921;
(statearr_29966[(25)] = inst_29880__$1);

return statearr_29966;
})();
if(inst_29880__$1){
var statearr_29967_30032 = state_29921__$1;
(statearr_29967_30032[(1)] = (33));

} else {
var statearr_29968_30033 = state_29921__$1;
(statearr_29968_30033[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (25))){
var inst_29863 = (state_29921[(21)]);
var inst_29864 = (state_29921[(12)]);
var inst_29866 = (inst_29864 < inst_29863);
var inst_29867 = inst_29866;
var state_29921__$1 = state_29921;
if(cljs.core.truth_(inst_29867)){
var statearr_29969_30034 = state_29921__$1;
(statearr_29969_30034[(1)] = (27));

} else {
var statearr_29970_30035 = state_29921__$1;
(statearr_29970_30035[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (34))){
var state_29921__$1 = state_29921;
var statearr_29971_30036 = state_29921__$1;
(statearr_29971_30036[(2)] = null);

(statearr_29971_30036[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (17))){
var state_29921__$1 = state_29921;
var statearr_29972_30037 = state_29921__$1;
(statearr_29972_30037[(2)] = null);

(statearr_29972_30037[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (3))){
var inst_29919 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29921__$1,inst_29919);
} else {
if((state_val_29922 === (12))){
var inst_29848 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29973_30038 = state_29921__$1;
(statearr_29973_30038[(2)] = inst_29848);

(statearr_29973_30038[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (2))){
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29921__$1,(4),ch);
} else {
if((state_val_29922 === (23))){
var state_29921__$1 = state_29921;
var statearr_29974_30039 = state_29921__$1;
(statearr_29974_30039[(2)] = null);

(statearr_29974_30039[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (35))){
var inst_29903 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29975_30040 = state_29921__$1;
(statearr_29975_30040[(2)] = inst_29903);

(statearr_29975_30040[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (19))){
var inst_29820 = (state_29921[(7)]);
var inst_29824 = cljs.core.chunk_first(inst_29820);
var inst_29825 = cljs.core.chunk_rest(inst_29820);
var inst_29826 = cljs.core.count(inst_29824);
var inst_29798 = inst_29825;
var inst_29799 = inst_29824;
var inst_29800 = inst_29826;
var inst_29801 = (0);
var state_29921__$1 = (function (){var statearr_29976 = state_29921;
(statearr_29976[(13)] = inst_29799);

(statearr_29976[(15)] = inst_29800);

(statearr_29976[(16)] = inst_29801);

(statearr_29976[(17)] = inst_29798);

return statearr_29976;
})();
var statearr_29977_30041 = state_29921__$1;
(statearr_29977_30041[(2)] = null);

(statearr_29977_30041[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (11))){
var inst_29820 = (state_29921[(7)]);
var inst_29798 = (state_29921[(17)]);
var inst_29820__$1 = cljs.core.seq(inst_29798);
var state_29921__$1 = (function (){var statearr_29978 = state_29921;
(statearr_29978[(7)] = inst_29820__$1);

return statearr_29978;
})();
if(inst_29820__$1){
var statearr_29979_30042 = state_29921__$1;
(statearr_29979_30042[(1)] = (16));

} else {
var statearr_29980_30043 = state_29921__$1;
(statearr_29980_30043[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (9))){
var inst_29850 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29981_30044 = state_29921__$1;
(statearr_29981_30044[(2)] = inst_29850);

(statearr_29981_30044[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (5))){
var inst_29796 = cljs.core.deref(cs);
var inst_29797 = cljs.core.seq(inst_29796);
var inst_29798 = inst_29797;
var inst_29799 = null;
var inst_29800 = (0);
var inst_29801 = (0);
var state_29921__$1 = (function (){var statearr_29982 = state_29921;
(statearr_29982[(13)] = inst_29799);

(statearr_29982[(15)] = inst_29800);

(statearr_29982[(16)] = inst_29801);

(statearr_29982[(17)] = inst_29798);

return statearr_29982;
})();
var statearr_29983_30045 = state_29921__$1;
(statearr_29983_30045[(2)] = null);

(statearr_29983_30045[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (14))){
var state_29921__$1 = state_29921;
var statearr_29984_30046 = state_29921__$1;
(statearr_29984_30046[(2)] = null);

(statearr_29984_30046[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (45))){
var inst_29911 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29985_30047 = state_29921__$1;
(statearr_29985_30047[(2)] = inst_29911);

(statearr_29985_30047[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (26))){
var inst_29853 = (state_29921[(29)]);
var inst_29907 = (state_29921[(2)]);
var inst_29908 = cljs.core.seq(inst_29853);
var state_29921__$1 = (function (){var statearr_29986 = state_29921;
(statearr_29986[(31)] = inst_29907);

return statearr_29986;
})();
if(inst_29908){
var statearr_29987_30048 = state_29921__$1;
(statearr_29987_30048[(1)] = (42));

} else {
var statearr_29988_30049 = state_29921__$1;
(statearr_29988_30049[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (16))){
var inst_29820 = (state_29921[(7)]);
var inst_29822 = cljs.core.chunked_seq_QMARK_(inst_29820);
var state_29921__$1 = state_29921;
if(inst_29822){
var statearr_29989_30050 = state_29921__$1;
(statearr_29989_30050[(1)] = (19));

} else {
var statearr_29990_30051 = state_29921__$1;
(statearr_29990_30051[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (38))){
var inst_29900 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29991_30052 = state_29921__$1;
(statearr_29991_30052[(2)] = inst_29900);

(statearr_29991_30052[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (30))){
var state_29921__$1 = state_29921;
var statearr_29992_30053 = state_29921__$1;
(statearr_29992_30053[(2)] = null);

(statearr_29992_30053[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (10))){
var inst_29799 = (state_29921[(13)]);
var inst_29801 = (state_29921[(16)]);
var inst_29809 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29799,inst_29801);
var inst_29810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29809,(0),null);
var inst_29811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29809,(1),null);
var state_29921__$1 = (function (){var statearr_29993 = state_29921;
(statearr_29993[(26)] = inst_29810);

return statearr_29993;
})();
if(cljs.core.truth_(inst_29811)){
var statearr_29994_30054 = state_29921__$1;
(statearr_29994_30054[(1)] = (13));

} else {
var statearr_29995_30055 = state_29921__$1;
(statearr_29995_30055[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (18))){
var inst_29846 = (state_29921[(2)]);
var state_29921__$1 = state_29921;
var statearr_29996_30056 = state_29921__$1;
(statearr_29996_30056[(2)] = inst_29846);

(statearr_29996_30056[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (42))){
var state_29921__$1 = state_29921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29921__$1,(45),dchan);
} else {
if((state_val_29922 === (37))){
var inst_29789 = (state_29921[(11)]);
var inst_29880 = (state_29921[(25)]);
var inst_29889 = (state_29921[(23)]);
var inst_29889__$1 = cljs.core.first(inst_29880);
var inst_29890 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29889__$1,inst_29789,done);
var state_29921__$1 = (function (){var statearr_29997 = state_29921;
(statearr_29997[(23)] = inst_29889__$1);

return statearr_29997;
})();
if(cljs.core.truth_(inst_29890)){
var statearr_29998_30057 = state_29921__$1;
(statearr_29998_30057[(1)] = (39));

} else {
var statearr_29999_30058 = state_29921__$1;
(statearr_29999_30058[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29922 === (8))){
var inst_29800 = (state_29921[(15)]);
var inst_29801 = (state_29921[(16)]);
var inst_29803 = (inst_29801 < inst_29800);
var inst_29804 = inst_29803;
var state_29921__$1 = state_29921;
if(cljs.core.truth_(inst_29804)){
var statearr_30000_30059 = state_29921__$1;
(statearr_30000_30059[(1)] = (10));

} else {
var statearr_30001_30060 = state_29921__$1;
(statearr_30001_30060[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29074__auto__ = null;
var cljs$core$async$mult_$_state_machine__29074__auto____0 = (function (){
var statearr_30002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30002[(0)] = cljs$core$async$mult_$_state_machine__29074__auto__);

(statearr_30002[(1)] = (1));

return statearr_30002;
});
var cljs$core$async$mult_$_state_machine__29074__auto____1 = (function (state_29921){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_29921);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e30003){if((e30003 instanceof Object)){
var ex__29077__auto__ = e30003;
var statearr_30004_30061 = state_29921;
(statearr_30004_30061[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29921);

return cljs.core.cst$kw$recur;
} else {
throw e30003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__30062 = state_29921;
state_29921 = G__30062;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29074__auto__ = function(state_29921){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29074__auto____1.call(this,state_29921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29074__auto____0;
cljs$core$async$mult_$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29074__auto____1;
return cljs$core$async$mult_$_state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_30005 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_30005[(6)] = c__29182__auto___30006);

return statearr_30005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30064 = arguments.length;
switch (G__30064) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_30066 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_30066(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_30067 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_30067(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_30068 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_30068(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_30069 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_30069(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_30070 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_30070(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___30080 = arguments.length;
var i__4830__auto___30081 = (0);
while(true){
if((i__4830__auto___30081 < len__4829__auto___30080)){
args__4835__auto__.push((arguments[i__4830__auto___30081]));

var G__30082 = (i__4830__auto___30081 + (1));
i__4830__auto___30081 = G__30082;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30075){
var map__30076 = p__30075;
var map__30076__$1 = cljs.core.__destructure_map(map__30076);
var opts = map__30076__$1;
var statearr_30077_30083 = state;
(statearr_30077_30083[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30078_30084 = state;
(statearr_30078_30084[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30079_30085 = state;
(statearr_30079_30085[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30071){
var G__30072 = cljs.core.first(seq30071);
var seq30071__$1 = cljs.core.next(seq30071);
var G__30073 = cljs.core.first(seq30071__$1);
var seq30071__$2 = cljs.core.next(seq30071__$1);
var G__30074 = cljs.core.first(seq30071__$2);
var seq30071__$3 = cljs.core.next(seq30071__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30072,G__30073,G__30074,seq30071__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30086 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30086 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30087){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30087 = meta30087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30088,meta30087__$1){
var self__ = this;
var _30088__$1 = this;
return (new cljs.core.async.t_cljs$core$async30086(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30087__$1));
}));

(cljs.core.async.t_cljs$core$async30086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30088){
var self__ = this;
var _30088__$1 = this;
return self__.meta30087;
}));

(cljs.core.async.t_cljs$core$async30086.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30086.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30086.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30086.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30086.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30086.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30086.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta30087], null);
}));

(cljs.core.async.t_cljs$core$async30086.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30086");

(cljs.core.async.t_cljs$core$async30086.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30086");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30086.
 */
cljs.core.async.__GT_t_cljs$core$async30086 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30086(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30087){
return (new cljs.core.async.t_cljs$core$async30086(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30087));
});

}

return (new cljs.core.async.t_cljs$core$async30086(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29182__auto___30200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_30156){
var state_val_30157 = (state_30156[(1)]);
if((state_val_30157 === (7))){
var inst_30116 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
if(cljs.core.truth_(inst_30116)){
var statearr_30158_30201 = state_30156__$1;
(statearr_30158_30201[(1)] = (8));

} else {
var statearr_30159_30202 = state_30156__$1;
(statearr_30159_30202[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (20))){
var inst_30109 = (state_30156[(7)]);
var state_30156__$1 = state_30156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30156__$1,(23),out,inst_30109);
} else {
if((state_val_30157 === (1))){
var inst_30092 = calc_state();
var inst_30093 = cljs.core.__destructure_map(inst_30092);
var inst_30094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30093,cljs.core.cst$kw$solos);
var inst_30095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30093,cljs.core.cst$kw$mutes);
var inst_30096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30093,cljs.core.cst$kw$reads);
var inst_30097 = inst_30092;
var state_30156__$1 = (function (){var statearr_30160 = state_30156;
(statearr_30160[(8)] = inst_30095);

(statearr_30160[(9)] = inst_30096);

(statearr_30160[(10)] = inst_30097);

(statearr_30160[(11)] = inst_30094);

return statearr_30160;
})();
var statearr_30161_30203 = state_30156__$1;
(statearr_30161_30203[(2)] = null);

(statearr_30161_30203[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (24))){
var inst_30100 = (state_30156[(12)]);
var inst_30097 = inst_30100;
var state_30156__$1 = (function (){var statearr_30162 = state_30156;
(statearr_30162[(10)] = inst_30097);

return statearr_30162;
})();
var statearr_30163_30204 = state_30156__$1;
(statearr_30163_30204[(2)] = null);

(statearr_30163_30204[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (4))){
var inst_30111 = (state_30156[(13)]);
var inst_30109 = (state_30156[(7)]);
var inst_30108 = (state_30156[(2)]);
var inst_30109__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30108,(0),null);
var inst_30110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30108,(1),null);
var inst_30111__$1 = (inst_30109__$1 == null);
var state_30156__$1 = (function (){var statearr_30164 = state_30156;
(statearr_30164[(14)] = inst_30110);

(statearr_30164[(13)] = inst_30111__$1);

(statearr_30164[(7)] = inst_30109__$1);

return statearr_30164;
})();
if(cljs.core.truth_(inst_30111__$1)){
var statearr_30165_30205 = state_30156__$1;
(statearr_30165_30205[(1)] = (5));

} else {
var statearr_30166_30206 = state_30156__$1;
(statearr_30166_30206[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (15))){
var inst_30130 = (state_30156[(15)]);
var inst_30101 = (state_30156[(16)]);
var inst_30130__$1 = cljs.core.empty_QMARK_(inst_30101);
var state_30156__$1 = (function (){var statearr_30167 = state_30156;
(statearr_30167[(15)] = inst_30130__$1);

return statearr_30167;
})();
if(inst_30130__$1){
var statearr_30168_30207 = state_30156__$1;
(statearr_30168_30207[(1)] = (17));

} else {
var statearr_30169_30208 = state_30156__$1;
(statearr_30169_30208[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (21))){
var inst_30100 = (state_30156[(12)]);
var inst_30097 = inst_30100;
var state_30156__$1 = (function (){var statearr_30170 = state_30156;
(statearr_30170[(10)] = inst_30097);

return statearr_30170;
})();
var statearr_30171_30209 = state_30156__$1;
(statearr_30171_30209[(2)] = null);

(statearr_30171_30209[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (13))){
var inst_30123 = (state_30156[(2)]);
var inst_30124 = calc_state();
var inst_30097 = inst_30124;
var state_30156__$1 = (function (){var statearr_30172 = state_30156;
(statearr_30172[(10)] = inst_30097);

(statearr_30172[(17)] = inst_30123);

return statearr_30172;
})();
var statearr_30173_30210 = state_30156__$1;
(statearr_30173_30210[(2)] = null);

(statearr_30173_30210[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (22))){
var inst_30150 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
var statearr_30174_30211 = state_30156__$1;
(statearr_30174_30211[(2)] = inst_30150);

(statearr_30174_30211[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (6))){
var inst_30110 = (state_30156[(14)]);
var inst_30114 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30110,change);
var state_30156__$1 = state_30156;
var statearr_30175_30212 = state_30156__$1;
(statearr_30175_30212[(2)] = inst_30114);

(statearr_30175_30212[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (25))){
var state_30156__$1 = state_30156;
var statearr_30176_30213 = state_30156__$1;
(statearr_30176_30213[(2)] = null);

(statearr_30176_30213[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (17))){
var inst_30110 = (state_30156[(14)]);
var inst_30102 = (state_30156[(18)]);
var inst_30132 = (inst_30102.cljs$core$IFn$_invoke$arity$1 ? inst_30102.cljs$core$IFn$_invoke$arity$1(inst_30110) : inst_30102.call(null,inst_30110));
var inst_30133 = cljs.core.not(inst_30132);
var state_30156__$1 = state_30156;
var statearr_30177_30214 = state_30156__$1;
(statearr_30177_30214[(2)] = inst_30133);

(statearr_30177_30214[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (3))){
var inst_30154 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30156__$1,inst_30154);
} else {
if((state_val_30157 === (12))){
var state_30156__$1 = state_30156;
var statearr_30178_30215 = state_30156__$1;
(statearr_30178_30215[(2)] = null);

(statearr_30178_30215[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (2))){
var inst_30097 = (state_30156[(10)]);
var inst_30100 = (state_30156[(12)]);
var inst_30100__$1 = cljs.core.__destructure_map(inst_30097);
var inst_30101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30100__$1,cljs.core.cst$kw$solos);
var inst_30102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30100__$1,cljs.core.cst$kw$mutes);
var inst_30103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30100__$1,cljs.core.cst$kw$reads);
var state_30156__$1 = (function (){var statearr_30179 = state_30156;
(statearr_30179[(18)] = inst_30102);

(statearr_30179[(12)] = inst_30100__$1);

(statearr_30179[(16)] = inst_30101);

return statearr_30179;
})();
return cljs.core.async.ioc_alts_BANG_(state_30156__$1,(4),inst_30103);
} else {
if((state_val_30157 === (23))){
var inst_30141 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
if(cljs.core.truth_(inst_30141)){
var statearr_30180_30216 = state_30156__$1;
(statearr_30180_30216[(1)] = (24));

} else {
var statearr_30181_30217 = state_30156__$1;
(statearr_30181_30217[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (19))){
var inst_30136 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
var statearr_30182_30218 = state_30156__$1;
(statearr_30182_30218[(2)] = inst_30136);

(statearr_30182_30218[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (11))){
var inst_30110 = (state_30156[(14)]);
var inst_30120 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30110);
var state_30156__$1 = state_30156;
var statearr_30183_30219 = state_30156__$1;
(statearr_30183_30219[(2)] = inst_30120);

(statearr_30183_30219[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (9))){
var inst_30110 = (state_30156[(14)]);
var inst_30101 = (state_30156[(16)]);
var inst_30127 = (state_30156[(19)]);
var inst_30127__$1 = (inst_30101.cljs$core$IFn$_invoke$arity$1 ? inst_30101.cljs$core$IFn$_invoke$arity$1(inst_30110) : inst_30101.call(null,inst_30110));
var state_30156__$1 = (function (){var statearr_30184 = state_30156;
(statearr_30184[(19)] = inst_30127__$1);

return statearr_30184;
})();
if(cljs.core.truth_(inst_30127__$1)){
var statearr_30185_30220 = state_30156__$1;
(statearr_30185_30220[(1)] = (14));

} else {
var statearr_30186_30221 = state_30156__$1;
(statearr_30186_30221[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (5))){
var inst_30111 = (state_30156[(13)]);
var state_30156__$1 = state_30156;
var statearr_30187_30222 = state_30156__$1;
(statearr_30187_30222[(2)] = inst_30111);

(statearr_30187_30222[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (14))){
var inst_30127 = (state_30156[(19)]);
var state_30156__$1 = state_30156;
var statearr_30188_30223 = state_30156__$1;
(statearr_30188_30223[(2)] = inst_30127);

(statearr_30188_30223[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (26))){
var inst_30146 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
var statearr_30189_30224 = state_30156__$1;
(statearr_30189_30224[(2)] = inst_30146);

(statearr_30189_30224[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (16))){
var inst_30138 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
if(cljs.core.truth_(inst_30138)){
var statearr_30190_30225 = state_30156__$1;
(statearr_30190_30225[(1)] = (20));

} else {
var statearr_30191_30226 = state_30156__$1;
(statearr_30191_30226[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (10))){
var inst_30152 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
var statearr_30192_30227 = state_30156__$1;
(statearr_30192_30227[(2)] = inst_30152);

(statearr_30192_30227[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (18))){
var inst_30130 = (state_30156[(15)]);
var state_30156__$1 = state_30156;
var statearr_30193_30228 = state_30156__$1;
(statearr_30193_30228[(2)] = inst_30130);

(statearr_30193_30228[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30157 === (8))){
var inst_30109 = (state_30156[(7)]);
var inst_30118 = (inst_30109 == null);
var state_30156__$1 = state_30156;
if(cljs.core.truth_(inst_30118)){
var statearr_30194_30229 = state_30156__$1;
(statearr_30194_30229[(1)] = (11));

} else {
var statearr_30195_30230 = state_30156__$1;
(statearr_30195_30230[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29074__auto__ = null;
var cljs$core$async$mix_$_state_machine__29074__auto____0 = (function (){
var statearr_30196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30196[(0)] = cljs$core$async$mix_$_state_machine__29074__auto__);

(statearr_30196[(1)] = (1));

return statearr_30196;
});
var cljs$core$async$mix_$_state_machine__29074__auto____1 = (function (state_30156){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_30156);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e30197){if((e30197 instanceof Object)){
var ex__29077__auto__ = e30197;
var statearr_30198_30231 = state_30156;
(statearr_30198_30231[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30156);

return cljs.core.cst$kw$recur;
} else {
throw e30197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__30232 = state_30156;
state_30156 = G__30232;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29074__auto__ = function(state_30156){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29074__auto____1.call(this,state_30156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29074__auto____0;
cljs$core$async$mix_$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29074__auto____1;
return cljs$core$async$mix_$_state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_30199 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_30199[(6)] = c__29182__auto___30200);

return statearr_30199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_30235 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_30235(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_30236 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_30236(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_30237 = (function() {
var G__30238 = null;
var G__30238__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__30238__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__30238 = function(p,v){
switch(arguments.length){
case 1:
return G__30238__1.call(this,p);
case 2:
return G__30238__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30238.cljs$core$IFn$_invoke$arity$1 = G__30238__1;
G__30238.cljs$core$IFn$_invoke$arity$2 = G__30238__2;
return G__30238;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30234 = arguments.length;
switch (G__30234) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30237.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30237.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30242 = arguments.length;
switch (G__30242) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30240_SHARP_){
if(cljs.core.truth_((p1__30240_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30240_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30240_SHARP_.call(null,topic)))){
return p1__30240_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30240_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30243 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30244){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30244 = meta30244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30245,meta30244__$1){
var self__ = this;
var _30245__$1 = this;
return (new cljs.core.async.t_cljs$core$async30243(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30244__$1));
}));

(cljs.core.async.t_cljs$core$async30243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30245){
var self__ = this;
var _30245__$1 = this;
return self__.meta30244;
}));

(cljs.core.async.t_cljs$core$async30243.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30243.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30243.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30243.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30243.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30243.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30243.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta30244], null);
}));

(cljs.core.async.t_cljs$core$async30243.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30243");

(cljs.core.async.t_cljs$core$async30243.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30243");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30243.
 */
cljs.core.async.__GT_t_cljs$core$async30243 = (function cljs$core$async$__GT_t_cljs$core$async30243(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30244){
return (new cljs.core.async.t_cljs$core$async30243(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30244));
});

}

return (new cljs.core.async.t_cljs$core$async30243(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29182__auto___30363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_30317){
var state_val_30318 = (state_30317[(1)]);
if((state_val_30318 === (7))){
var inst_30313 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30319_30364 = state_30317__$1;
(statearr_30319_30364[(2)] = inst_30313);

(statearr_30319_30364[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (20))){
var state_30317__$1 = state_30317;
var statearr_30320_30365 = state_30317__$1;
(statearr_30320_30365[(2)] = null);

(statearr_30320_30365[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (1))){
var state_30317__$1 = state_30317;
var statearr_30321_30366 = state_30317__$1;
(statearr_30321_30366[(2)] = null);

(statearr_30321_30366[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (24))){
var inst_30296 = (state_30317[(7)]);
var inst_30305 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30296);
var state_30317__$1 = state_30317;
var statearr_30322_30367 = state_30317__$1;
(statearr_30322_30367[(2)] = inst_30305);

(statearr_30322_30367[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (4))){
var inst_30248 = (state_30317[(8)]);
var inst_30248__$1 = (state_30317[(2)]);
var inst_30249 = (inst_30248__$1 == null);
var state_30317__$1 = (function (){var statearr_30323 = state_30317;
(statearr_30323[(8)] = inst_30248__$1);

return statearr_30323;
})();
if(cljs.core.truth_(inst_30249)){
var statearr_30324_30368 = state_30317__$1;
(statearr_30324_30368[(1)] = (5));

} else {
var statearr_30325_30369 = state_30317__$1;
(statearr_30325_30369[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (15))){
var inst_30290 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30326_30370 = state_30317__$1;
(statearr_30326_30370[(2)] = inst_30290);

(statearr_30326_30370[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (21))){
var inst_30310 = (state_30317[(2)]);
var state_30317__$1 = (function (){var statearr_30327 = state_30317;
(statearr_30327[(9)] = inst_30310);

return statearr_30327;
})();
var statearr_30328_30371 = state_30317__$1;
(statearr_30328_30371[(2)] = null);

(statearr_30328_30371[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (13))){
var inst_30272 = (state_30317[(10)]);
var inst_30274 = cljs.core.chunked_seq_QMARK_(inst_30272);
var state_30317__$1 = state_30317;
if(inst_30274){
var statearr_30329_30372 = state_30317__$1;
(statearr_30329_30372[(1)] = (16));

} else {
var statearr_30330_30373 = state_30317__$1;
(statearr_30330_30373[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (22))){
var inst_30302 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
if(cljs.core.truth_(inst_30302)){
var statearr_30331_30374 = state_30317__$1;
(statearr_30331_30374[(1)] = (23));

} else {
var statearr_30332_30375 = state_30317__$1;
(statearr_30332_30375[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (6))){
var inst_30248 = (state_30317[(8)]);
var inst_30296 = (state_30317[(7)]);
var inst_30298 = (state_30317[(11)]);
var inst_30296__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30248) : topic_fn.call(null,inst_30248));
var inst_30297 = cljs.core.deref(mults);
var inst_30298__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30297,inst_30296__$1);
var state_30317__$1 = (function (){var statearr_30333 = state_30317;
(statearr_30333[(7)] = inst_30296__$1);

(statearr_30333[(11)] = inst_30298__$1);

return statearr_30333;
})();
if(cljs.core.truth_(inst_30298__$1)){
var statearr_30334_30376 = state_30317__$1;
(statearr_30334_30376[(1)] = (19));

} else {
var statearr_30335_30377 = state_30317__$1;
(statearr_30335_30377[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (25))){
var inst_30307 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30336_30378 = state_30317__$1;
(statearr_30336_30378[(2)] = inst_30307);

(statearr_30336_30378[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (17))){
var inst_30272 = (state_30317[(10)]);
var inst_30281 = cljs.core.first(inst_30272);
var inst_30282 = cljs.core.async.muxch_STAR_(inst_30281);
var inst_30283 = cljs.core.async.close_BANG_(inst_30282);
var inst_30284 = cljs.core.next(inst_30272);
var inst_30258 = inst_30284;
var inst_30259 = null;
var inst_30260 = (0);
var inst_30261 = (0);
var state_30317__$1 = (function (){var statearr_30337 = state_30317;
(statearr_30337[(12)] = inst_30259);

(statearr_30337[(13)] = inst_30260);

(statearr_30337[(14)] = inst_30258);

(statearr_30337[(15)] = inst_30283);

(statearr_30337[(16)] = inst_30261);

return statearr_30337;
})();
var statearr_30338_30379 = state_30317__$1;
(statearr_30338_30379[(2)] = null);

(statearr_30338_30379[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (3))){
var inst_30315 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30317__$1,inst_30315);
} else {
if((state_val_30318 === (12))){
var inst_30292 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30339_30380 = state_30317__$1;
(statearr_30339_30380[(2)] = inst_30292);

(statearr_30339_30380[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (2))){
var state_30317__$1 = state_30317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30317__$1,(4),ch);
} else {
if((state_val_30318 === (23))){
var state_30317__$1 = state_30317;
var statearr_30340_30381 = state_30317__$1;
(statearr_30340_30381[(2)] = null);

(statearr_30340_30381[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (19))){
var inst_30248 = (state_30317[(8)]);
var inst_30298 = (state_30317[(11)]);
var inst_30300 = cljs.core.async.muxch_STAR_(inst_30298);
var state_30317__$1 = state_30317;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30317__$1,(22),inst_30300,inst_30248);
} else {
if((state_val_30318 === (11))){
var inst_30272 = (state_30317[(10)]);
var inst_30258 = (state_30317[(14)]);
var inst_30272__$1 = cljs.core.seq(inst_30258);
var state_30317__$1 = (function (){var statearr_30341 = state_30317;
(statearr_30341[(10)] = inst_30272__$1);

return statearr_30341;
})();
if(inst_30272__$1){
var statearr_30342_30382 = state_30317__$1;
(statearr_30342_30382[(1)] = (13));

} else {
var statearr_30343_30383 = state_30317__$1;
(statearr_30343_30383[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (9))){
var inst_30294 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30344_30384 = state_30317__$1;
(statearr_30344_30384[(2)] = inst_30294);

(statearr_30344_30384[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (5))){
var inst_30255 = cljs.core.deref(mults);
var inst_30256 = cljs.core.vals(inst_30255);
var inst_30257 = cljs.core.seq(inst_30256);
var inst_30258 = inst_30257;
var inst_30259 = null;
var inst_30260 = (0);
var inst_30261 = (0);
var state_30317__$1 = (function (){var statearr_30345 = state_30317;
(statearr_30345[(12)] = inst_30259);

(statearr_30345[(13)] = inst_30260);

(statearr_30345[(14)] = inst_30258);

(statearr_30345[(16)] = inst_30261);

return statearr_30345;
})();
var statearr_30346_30385 = state_30317__$1;
(statearr_30346_30385[(2)] = null);

(statearr_30346_30385[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (14))){
var state_30317__$1 = state_30317;
var statearr_30350_30386 = state_30317__$1;
(statearr_30350_30386[(2)] = null);

(statearr_30350_30386[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (16))){
var inst_30272 = (state_30317[(10)]);
var inst_30276 = cljs.core.chunk_first(inst_30272);
var inst_30277 = cljs.core.chunk_rest(inst_30272);
var inst_30278 = cljs.core.count(inst_30276);
var inst_30258 = inst_30277;
var inst_30259 = inst_30276;
var inst_30260 = inst_30278;
var inst_30261 = (0);
var state_30317__$1 = (function (){var statearr_30351 = state_30317;
(statearr_30351[(12)] = inst_30259);

(statearr_30351[(13)] = inst_30260);

(statearr_30351[(14)] = inst_30258);

(statearr_30351[(16)] = inst_30261);

return statearr_30351;
})();
var statearr_30352_30387 = state_30317__$1;
(statearr_30352_30387[(2)] = null);

(statearr_30352_30387[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (10))){
var inst_30259 = (state_30317[(12)]);
var inst_30260 = (state_30317[(13)]);
var inst_30258 = (state_30317[(14)]);
var inst_30261 = (state_30317[(16)]);
var inst_30266 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30259,inst_30261);
var inst_30267 = cljs.core.async.muxch_STAR_(inst_30266);
var inst_30268 = cljs.core.async.close_BANG_(inst_30267);
var inst_30269 = (inst_30261 + (1));
var tmp30347 = inst_30259;
var tmp30348 = inst_30260;
var tmp30349 = inst_30258;
var inst_30258__$1 = tmp30349;
var inst_30259__$1 = tmp30347;
var inst_30260__$1 = tmp30348;
var inst_30261__$1 = inst_30269;
var state_30317__$1 = (function (){var statearr_30353 = state_30317;
(statearr_30353[(12)] = inst_30259__$1);

(statearr_30353[(17)] = inst_30268);

(statearr_30353[(13)] = inst_30260__$1);

(statearr_30353[(14)] = inst_30258__$1);

(statearr_30353[(16)] = inst_30261__$1);

return statearr_30353;
})();
var statearr_30354_30388 = state_30317__$1;
(statearr_30354_30388[(2)] = null);

(statearr_30354_30388[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (18))){
var inst_30287 = (state_30317[(2)]);
var state_30317__$1 = state_30317;
var statearr_30355_30389 = state_30317__$1;
(statearr_30355_30389[(2)] = inst_30287);

(statearr_30355_30389[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30318 === (8))){
var inst_30260 = (state_30317[(13)]);
var inst_30261 = (state_30317[(16)]);
var inst_30263 = (inst_30261 < inst_30260);
var inst_30264 = inst_30263;
var state_30317__$1 = state_30317;
if(cljs.core.truth_(inst_30264)){
var statearr_30356_30390 = state_30317__$1;
(statearr_30356_30390[(1)] = (10));

} else {
var statearr_30357_30391 = state_30317__$1;
(statearr_30357_30391[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29074__auto__ = null;
var cljs$core$async$state_machine__29074__auto____0 = (function (){
var statearr_30358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30358[(0)] = cljs$core$async$state_machine__29074__auto__);

(statearr_30358[(1)] = (1));

return statearr_30358;
});
var cljs$core$async$state_machine__29074__auto____1 = (function (state_30317){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_30317);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e30359){if((e30359 instanceof Object)){
var ex__29077__auto__ = e30359;
var statearr_30360_30392 = state_30317;
(statearr_30360_30392[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30317);

return cljs.core.cst$kw$recur;
} else {
throw e30359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__30393 = state_30317;
state_30317 = G__30393;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$state_machine__29074__auto__ = function(state_30317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29074__auto____1.call(this,state_30317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29074__auto____0;
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29074__auto____1;
return cljs$core$async$state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_30361 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_30361[(6)] = c__29182__auto___30363);

return statearr_30361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30395 = arguments.length;
switch (G__30395) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__30398 = arguments.length;
switch (G__30398) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__30401 = arguments.length;
switch (G__30401) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29182__auto___30468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_30440){
var state_val_30441 = (state_30440[(1)]);
if((state_val_30441 === (7))){
var state_30440__$1 = state_30440;
var statearr_30442_30469 = state_30440__$1;
(statearr_30442_30469[(2)] = null);

(statearr_30442_30469[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (1))){
var state_30440__$1 = state_30440;
var statearr_30443_30470 = state_30440__$1;
(statearr_30443_30470[(2)] = null);

(statearr_30443_30470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (4))){
var inst_30404 = (state_30440[(7)]);
var inst_30406 = (inst_30404 < cnt);
var state_30440__$1 = state_30440;
if(cljs.core.truth_(inst_30406)){
var statearr_30444_30471 = state_30440__$1;
(statearr_30444_30471[(1)] = (6));

} else {
var statearr_30445_30472 = state_30440__$1;
(statearr_30445_30472[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (15))){
var inst_30436 = (state_30440[(2)]);
var state_30440__$1 = state_30440;
var statearr_30446_30473 = state_30440__$1;
(statearr_30446_30473[(2)] = inst_30436);

(statearr_30446_30473[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (13))){
var inst_30429 = cljs.core.async.close_BANG_(out);
var state_30440__$1 = state_30440;
var statearr_30447_30474 = state_30440__$1;
(statearr_30447_30474[(2)] = inst_30429);

(statearr_30447_30474[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (6))){
var state_30440__$1 = state_30440;
var statearr_30448_30475 = state_30440__$1;
(statearr_30448_30475[(2)] = null);

(statearr_30448_30475[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (3))){
var inst_30438 = (state_30440[(2)]);
var state_30440__$1 = state_30440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30440__$1,inst_30438);
} else {
if((state_val_30441 === (12))){
var inst_30426 = (state_30440[(8)]);
var inst_30426__$1 = (state_30440[(2)]);
var inst_30427 = cljs.core.some(cljs.core.nil_QMARK_,inst_30426__$1);
var state_30440__$1 = (function (){var statearr_30449 = state_30440;
(statearr_30449[(8)] = inst_30426__$1);

return statearr_30449;
})();
if(cljs.core.truth_(inst_30427)){
var statearr_30450_30476 = state_30440__$1;
(statearr_30450_30476[(1)] = (13));

} else {
var statearr_30451_30477 = state_30440__$1;
(statearr_30451_30477[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (2))){
var inst_30403 = cljs.core.reset_BANG_(dctr,cnt);
var inst_30404 = (0);
var state_30440__$1 = (function (){var statearr_30452 = state_30440;
(statearr_30452[(7)] = inst_30404);

(statearr_30452[(9)] = inst_30403);

return statearr_30452;
})();
var statearr_30453_30478 = state_30440__$1;
(statearr_30453_30478[(2)] = null);

(statearr_30453_30478[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (11))){
var inst_30404 = (state_30440[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_30440,(10),Object,null,(9));
var inst_30413 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_30404) : chs__$1.call(null,inst_30404));
var inst_30414 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_30404) : done.call(null,inst_30404));
var inst_30415 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_30413,inst_30414);
var state_30440__$1 = state_30440;
var statearr_30454_30479 = state_30440__$1;
(statearr_30454_30479[(2)] = inst_30415);


cljs.core.async.impl.ioc_helpers.process_exception(state_30440__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (9))){
var inst_30404 = (state_30440[(7)]);
var inst_30417 = (state_30440[(2)]);
var inst_30418 = (inst_30404 + (1));
var inst_30404__$1 = inst_30418;
var state_30440__$1 = (function (){var statearr_30455 = state_30440;
(statearr_30455[(7)] = inst_30404__$1);

(statearr_30455[(10)] = inst_30417);

return statearr_30455;
})();
var statearr_30456_30480 = state_30440__$1;
(statearr_30456_30480[(2)] = null);

(statearr_30456_30480[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (5))){
var inst_30424 = (state_30440[(2)]);
var state_30440__$1 = (function (){var statearr_30457 = state_30440;
(statearr_30457[(11)] = inst_30424);

return statearr_30457;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30440__$1,(12),dchan);
} else {
if((state_val_30441 === (14))){
var inst_30426 = (state_30440[(8)]);
var inst_30431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_30426);
var state_30440__$1 = state_30440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30440__$1,(16),out,inst_30431);
} else {
if((state_val_30441 === (16))){
var inst_30433 = (state_30440[(2)]);
var state_30440__$1 = (function (){var statearr_30458 = state_30440;
(statearr_30458[(12)] = inst_30433);

return statearr_30458;
})();
var statearr_30459_30481 = state_30440__$1;
(statearr_30459_30481[(2)] = null);

(statearr_30459_30481[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (10))){
var inst_30408 = (state_30440[(2)]);
var inst_30409 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_30440__$1 = (function (){var statearr_30460 = state_30440;
(statearr_30460[(13)] = inst_30408);

return statearr_30460;
})();
var statearr_30461_30482 = state_30440__$1;
(statearr_30461_30482[(2)] = inst_30409);


cljs.core.async.impl.ioc_helpers.process_exception(state_30440__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_30441 === (8))){
var inst_30422 = (state_30440[(2)]);
var state_30440__$1 = state_30440;
var statearr_30462_30483 = state_30440__$1;
(statearr_30462_30483[(2)] = inst_30422);

(statearr_30462_30483[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29074__auto__ = null;
var cljs$core$async$state_machine__29074__auto____0 = (function (){
var statearr_30463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30463[(0)] = cljs$core$async$state_machine__29074__auto__);

(statearr_30463[(1)] = (1));

return statearr_30463;
});
var cljs$core$async$state_machine__29074__auto____1 = (function (state_30440){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_30440);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e30464){if((e30464 instanceof Object)){
var ex__29077__auto__ = e30464;
var statearr_30465_30484 = state_30440;
(statearr_30465_30484[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30440);

return cljs.core.cst$kw$recur;
} else {
throw e30464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__30485 = state_30440;
state_30440 = G__30485;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$state_machine__29074__auto__ = function(state_30440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29074__auto____1.call(this,state_30440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29074__auto____0;
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29074__auto____1;
return cljs$core$async$state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_30466 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_30466[(6)] = c__29182__auto___30468);

return statearr_30466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30488 = arguments.length;
switch (G__30488) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29182__auto___30542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_30520){
var state_val_30521 = (state_30520[(1)]);
if((state_val_30521 === (7))){
var inst_30499 = (state_30520[(7)]);
var inst_30500 = (state_30520[(8)]);
var inst_30499__$1 = (state_30520[(2)]);
var inst_30500__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30499__$1,(0),null);
var inst_30501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30499__$1,(1),null);
var inst_30502 = (inst_30500__$1 == null);
var state_30520__$1 = (function (){var statearr_30522 = state_30520;
(statearr_30522[(7)] = inst_30499__$1);

(statearr_30522[(8)] = inst_30500__$1);

(statearr_30522[(9)] = inst_30501);

return statearr_30522;
})();
if(cljs.core.truth_(inst_30502)){
var statearr_30523_30543 = state_30520__$1;
(statearr_30523_30543[(1)] = (8));

} else {
var statearr_30524_30544 = state_30520__$1;
(statearr_30524_30544[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30521 === (1))){
var inst_30489 = cljs.core.vec(chs);
var inst_30490 = inst_30489;
var state_30520__$1 = (function (){var statearr_30525 = state_30520;
(statearr_30525[(10)] = inst_30490);

return statearr_30525;
})();
var statearr_30526_30545 = state_30520__$1;
(statearr_30526_30545[(2)] = null);

(statearr_30526_30545[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30521 === (4))){
var inst_30490 = (state_30520[(10)]);
var state_30520__$1 = state_30520;
return cljs.core.async.ioc_alts_BANG_(state_30520__$1,(7),inst_30490);
} else {
if((state_val_30521 === (6))){
var inst_30516 = (state_30520[(2)]);
var state_30520__$1 = state_30520;
var statearr_30527_30546 = state_30520__$1;
(statearr_30527_30546[(2)] = inst_30516);

(statearr_30527_30546[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30521 === (3))){
var inst_30518 = (state_30520[(2)]);
var state_30520__$1 = state_30520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30520__$1,inst_30518);
} else {
if((state_val_30521 === (2))){
var inst_30490 = (state_30520[(10)]);
var inst_30492 = cljs.core.count(inst_30490);
var inst_30493 = (inst_30492 > (0));
var state_30520__$1 = state_30520;
if(cljs.core.truth_(inst_30493)){
var statearr_30529_30547 = state_30520__$1;
(statearr_30529_30547[(1)] = (4));

} else {
var statearr_30530_30548 = state_30520__$1;
(statearr_30530_30548[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30521 === (11))){
var inst_30490 = (state_30520[(10)]);
var inst_30509 = (state_30520[(2)]);
var tmp30528 = inst_30490;
var inst_30490__$1 = tmp30528;
var state_30520__$1 = (function (){var statearr_30531 = state_30520;
(statearr_30531[(10)] = inst_30490__$1);

(statearr_30531[(11)] = inst_30509);

return statearr_30531;
})();
var statearr_30532_30549 = state_30520__$1;
(statearr_30532_30549[(2)] = null);

(statearr_30532_30549[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30521 === (9))){
var inst_30500 = (state_30520[(8)]);
var state_30520__$1 = state_30520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30520__$1,(11),out,inst_30500);
} else {
if((state_val_30521 === (5))){
var inst_30514 = cljs.core.async.close_BANG_(out);
var state_30520__$1 = state_30520;
var statearr_30533_30550 = state_30520__$1;
(statearr_30533_30550[(2)] = inst_30514);

(statearr_30533_30550[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30521 === (10))){
var inst_30512 = (state_30520[(2)]);
var state_30520__$1 = state_30520;
var statearr_30534_30551 = state_30520__$1;
(statearr_30534_30551[(2)] = inst_30512);

(statearr_30534_30551[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30521 === (8))){
var inst_30499 = (state_30520[(7)]);
var inst_30490 = (state_30520[(10)]);
var inst_30500 = (state_30520[(8)]);
var inst_30501 = (state_30520[(9)]);
var inst_30504 = (function (){var cs = inst_30490;
var vec__30495 = inst_30499;
var v = inst_30500;
var c = inst_30501;
return (function (p1__30486_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__30486_SHARP_);
});
})();
var inst_30505 = cljs.core.filterv(inst_30504,inst_30490);
var inst_30490__$1 = inst_30505;
var state_30520__$1 = (function (){var statearr_30535 = state_30520;
(statearr_30535[(10)] = inst_30490__$1);

return statearr_30535;
})();
var statearr_30536_30552 = state_30520__$1;
(statearr_30536_30552[(2)] = null);

(statearr_30536_30552[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29074__auto__ = null;
var cljs$core$async$state_machine__29074__auto____0 = (function (){
var statearr_30537 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30537[(0)] = cljs$core$async$state_machine__29074__auto__);

(statearr_30537[(1)] = (1));

return statearr_30537;
});
var cljs$core$async$state_machine__29074__auto____1 = (function (state_30520){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_30520);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e30538){if((e30538 instanceof Object)){
var ex__29077__auto__ = e30538;
var statearr_30539_30553 = state_30520;
(statearr_30539_30553[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30520);

return cljs.core.cst$kw$recur;
} else {
throw e30538;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__30554 = state_30520;
state_30520 = G__30554;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$state_machine__29074__auto__ = function(state_30520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29074__auto____1.call(this,state_30520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29074__auto____0;
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29074__auto____1;
return cljs$core$async$state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_30540 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_30540[(6)] = c__29182__auto___30542);

return statearr_30540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__30556 = arguments.length;
switch (G__30556) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29182__auto___30601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_30580){
var state_val_30581 = (state_30580[(1)]);
if((state_val_30581 === (7))){
var inst_30562 = (state_30580[(7)]);
var inst_30562__$1 = (state_30580[(2)]);
var inst_30563 = (inst_30562__$1 == null);
var inst_30564 = cljs.core.not(inst_30563);
var state_30580__$1 = (function (){var statearr_30582 = state_30580;
(statearr_30582[(7)] = inst_30562__$1);

return statearr_30582;
})();
if(inst_30564){
var statearr_30583_30602 = state_30580__$1;
(statearr_30583_30602[(1)] = (8));

} else {
var statearr_30584_30603 = state_30580__$1;
(statearr_30584_30603[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30581 === (1))){
var inst_30557 = (0);
var state_30580__$1 = (function (){var statearr_30585 = state_30580;
(statearr_30585[(8)] = inst_30557);

return statearr_30585;
})();
var statearr_30586_30604 = state_30580__$1;
(statearr_30586_30604[(2)] = null);

(statearr_30586_30604[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30581 === (4))){
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30580__$1,(7),ch);
} else {
if((state_val_30581 === (6))){
var inst_30575 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
var statearr_30587_30605 = state_30580__$1;
(statearr_30587_30605[(2)] = inst_30575);

(statearr_30587_30605[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30581 === (3))){
var inst_30577 = (state_30580[(2)]);
var inst_30578 = cljs.core.async.close_BANG_(out);
var state_30580__$1 = (function (){var statearr_30588 = state_30580;
(statearr_30588[(9)] = inst_30577);

return statearr_30588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30580__$1,inst_30578);
} else {
if((state_val_30581 === (2))){
var inst_30557 = (state_30580[(8)]);
var inst_30559 = (inst_30557 < n);
var state_30580__$1 = state_30580;
if(cljs.core.truth_(inst_30559)){
var statearr_30589_30606 = state_30580__$1;
(statearr_30589_30606[(1)] = (4));

} else {
var statearr_30590_30607 = state_30580__$1;
(statearr_30590_30607[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30581 === (11))){
var inst_30557 = (state_30580[(8)]);
var inst_30567 = (state_30580[(2)]);
var inst_30568 = (inst_30557 + (1));
var inst_30557__$1 = inst_30568;
var state_30580__$1 = (function (){var statearr_30591 = state_30580;
(statearr_30591[(10)] = inst_30567);

(statearr_30591[(8)] = inst_30557__$1);

return statearr_30591;
})();
var statearr_30592_30608 = state_30580__$1;
(statearr_30592_30608[(2)] = null);

(statearr_30592_30608[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30581 === (9))){
var state_30580__$1 = state_30580;
var statearr_30593_30609 = state_30580__$1;
(statearr_30593_30609[(2)] = null);

(statearr_30593_30609[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30581 === (5))){
var state_30580__$1 = state_30580;
var statearr_30594_30610 = state_30580__$1;
(statearr_30594_30610[(2)] = null);

(statearr_30594_30610[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30581 === (10))){
var inst_30572 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
var statearr_30595_30611 = state_30580__$1;
(statearr_30595_30611[(2)] = inst_30572);

(statearr_30595_30611[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30581 === (8))){
var inst_30562 = (state_30580[(7)]);
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30580__$1,(11),out,inst_30562);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29074__auto__ = null;
var cljs$core$async$state_machine__29074__auto____0 = (function (){
var statearr_30596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30596[(0)] = cljs$core$async$state_machine__29074__auto__);

(statearr_30596[(1)] = (1));

return statearr_30596;
});
var cljs$core$async$state_machine__29074__auto____1 = (function (state_30580){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_30580);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e30597){if((e30597 instanceof Object)){
var ex__29077__auto__ = e30597;
var statearr_30598_30612 = state_30580;
(statearr_30598_30612[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30580);

return cljs.core.cst$kw$recur;
} else {
throw e30597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__30613 = state_30580;
state_30580 = G__30613;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$state_machine__29074__auto__ = function(state_30580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29074__auto____1.call(this,state_30580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29074__auto____0;
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29074__auto____1;
return cljs$core$async$state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_30599 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_30599[(6)] = c__29182__auto___30601);

return statearr_30599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30615 = (function (f,ch,meta30616){
this.f = f;
this.ch = ch;
this.meta30616 = meta30616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30617,meta30616__$1){
var self__ = this;
var _30617__$1 = this;
return (new cljs.core.async.t_cljs$core$async30615(self__.f,self__.ch,meta30616__$1));
}));

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30617){
var self__ = this;
var _30617__$1 = this;
return self__.meta30616;
}));

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30618 = (function (f,ch,meta30616,_,fn1,meta30619){
this.f = f;
this.ch = ch;
this.meta30616 = meta30616;
this._ = _;
this.fn1 = fn1;
this.meta30619 = meta30619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30620,meta30619__$1){
var self__ = this;
var _30620__$1 = this;
return (new cljs.core.async.t_cljs$core$async30618(self__.f,self__.ch,self__.meta30616,self__._,self__.fn1,meta30619__$1));
}));

(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30620){
var self__ = this;
var _30620__$1 = this;
return self__.meta30619;
}));

(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__30614_SHARP_){
var G__30621 = (((p1__30614_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__30614_SHARP_) : self__.f.call(null,p1__30614_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__30621) : f1.call(null,G__30621));
});
}));

(cljs.core.async.t_cljs$core$async30618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30616,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async30615], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta30619], null);
}));

(cljs.core.async.t_cljs$core$async30618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30618");

(cljs.core.async.t_cljs$core$async30618.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30618.
 */
cljs.core.async.__GT_t_cljs$core$async30618 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30618(f__$1,ch__$1,meta30616__$1,___$2,fn1__$1,meta30619){
return (new cljs.core.async.t_cljs$core$async30618(f__$1,ch__$1,meta30616__$1,___$2,fn1__$1,meta30619));
});

}

return (new cljs.core.async.t_cljs$core$async30618(self__.f,self__.ch,self__.meta30616,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__30622 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__30622) : self__.f.call(null,G__30622));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async30615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30616], null);
}));

(cljs.core.async.t_cljs$core$async30615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30615");

(cljs.core.async.t_cljs$core$async30615.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30615.
 */
cljs.core.async.__GT_t_cljs$core$async30615 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30615(f__$1,ch__$1,meta30616){
return (new cljs.core.async.t_cljs$core$async30615(f__$1,ch__$1,meta30616));
});

}

return (new cljs.core.async.t_cljs$core$async30615(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30623 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30623 = (function (f,ch,meta30624){
this.f = f;
this.ch = ch;
this.meta30624 = meta30624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30625,meta30624__$1){
var self__ = this;
var _30625__$1 = this;
return (new cljs.core.async.t_cljs$core$async30623(self__.f,self__.ch,meta30624__$1));
}));

(cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30625){
var self__ = this;
var _30625__$1 = this;
return self__.meta30624;
}));

(cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async30623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30624], null);
}));

(cljs.core.async.t_cljs$core$async30623.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30623");

(cljs.core.async.t_cljs$core$async30623.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30623");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30623.
 */
cljs.core.async.__GT_t_cljs$core$async30623 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30623(f__$1,ch__$1,meta30624){
return (new cljs.core.async.t_cljs$core$async30623(f__$1,ch__$1,meta30624));
});

}

return (new cljs.core.async.t_cljs$core$async30623(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30626 = (function (p,ch,meta30627){
this.p = p;
this.ch = ch;
this.meta30627 = meta30627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30628,meta30627__$1){
var self__ = this;
var _30628__$1 = this;
return (new cljs.core.async.t_cljs$core$async30626(self__.p,self__.ch,meta30627__$1));
}));

(cljs.core.async.t_cljs$core$async30626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30628){
var self__ = this;
var _30628__$1 = this;
return self__.meta30627;
}));

(cljs.core.async.t_cljs$core$async30626.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30626.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30626.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async30626.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30626.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async30626.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30626.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async30626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta30627], null);
}));

(cljs.core.async.t_cljs$core$async30626.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30626");

(cljs.core.async.t_cljs$core$async30626.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async30626");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30626.
 */
cljs.core.async.__GT_t_cljs$core$async30626 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30626(p__$1,ch__$1,meta30627){
return (new cljs.core.async.t_cljs$core$async30626(p__$1,ch__$1,meta30627));
});

}

return (new cljs.core.async.t_cljs$core$async30626(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__30630 = arguments.length;
switch (G__30630) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29182__auto___30670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_30651){
var state_val_30652 = (state_30651[(1)]);
if((state_val_30652 === (7))){
var inst_30647 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30653_30671 = state_30651__$1;
(statearr_30653_30671[(2)] = inst_30647);

(statearr_30653_30671[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30652 === (1))){
var state_30651__$1 = state_30651;
var statearr_30654_30672 = state_30651__$1;
(statearr_30654_30672[(2)] = null);

(statearr_30654_30672[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30652 === (4))){
var inst_30633 = (state_30651[(7)]);
var inst_30633__$1 = (state_30651[(2)]);
var inst_30634 = (inst_30633__$1 == null);
var state_30651__$1 = (function (){var statearr_30655 = state_30651;
(statearr_30655[(7)] = inst_30633__$1);

return statearr_30655;
})();
if(cljs.core.truth_(inst_30634)){
var statearr_30656_30673 = state_30651__$1;
(statearr_30656_30673[(1)] = (5));

} else {
var statearr_30657_30674 = state_30651__$1;
(statearr_30657_30674[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30652 === (6))){
var inst_30633 = (state_30651[(7)]);
var inst_30638 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30633) : p.call(null,inst_30633));
var state_30651__$1 = state_30651;
if(cljs.core.truth_(inst_30638)){
var statearr_30658_30675 = state_30651__$1;
(statearr_30658_30675[(1)] = (8));

} else {
var statearr_30659_30676 = state_30651__$1;
(statearr_30659_30676[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30652 === (3))){
var inst_30649 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30651__$1,inst_30649);
} else {
if((state_val_30652 === (2))){
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30651__$1,(4),ch);
} else {
if((state_val_30652 === (11))){
var inst_30641 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30660_30677 = state_30651__$1;
(statearr_30660_30677[(2)] = inst_30641);

(statearr_30660_30677[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30652 === (9))){
var state_30651__$1 = state_30651;
var statearr_30661_30678 = state_30651__$1;
(statearr_30661_30678[(2)] = null);

(statearr_30661_30678[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30652 === (5))){
var inst_30636 = cljs.core.async.close_BANG_(out);
var state_30651__$1 = state_30651;
var statearr_30662_30679 = state_30651__$1;
(statearr_30662_30679[(2)] = inst_30636);

(statearr_30662_30679[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30652 === (10))){
var inst_30644 = (state_30651[(2)]);
var state_30651__$1 = (function (){var statearr_30663 = state_30651;
(statearr_30663[(8)] = inst_30644);

return statearr_30663;
})();
var statearr_30664_30680 = state_30651__$1;
(statearr_30664_30680[(2)] = null);

(statearr_30664_30680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30652 === (8))){
var inst_30633 = (state_30651[(7)]);
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30651__$1,(11),out,inst_30633);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29074__auto__ = null;
var cljs$core$async$state_machine__29074__auto____0 = (function (){
var statearr_30665 = [null,null,null,null,null,null,null,null,null];
(statearr_30665[(0)] = cljs$core$async$state_machine__29074__auto__);

(statearr_30665[(1)] = (1));

return statearr_30665;
});
var cljs$core$async$state_machine__29074__auto____1 = (function (state_30651){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_30651);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e30666){if((e30666 instanceof Object)){
var ex__29077__auto__ = e30666;
var statearr_30667_30681 = state_30651;
(statearr_30667_30681[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30651);

return cljs.core.cst$kw$recur;
} else {
throw e30666;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__30682 = state_30651;
state_30651 = G__30682;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$state_machine__29074__auto__ = function(state_30651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29074__auto____1.call(this,state_30651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29074__auto____0;
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29074__auto____1;
return cljs$core$async$state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_30668 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_30668[(6)] = c__29182__auto___30670);

return statearr_30668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30684 = arguments.length;
switch (G__30684) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29182__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_30747){
var state_val_30748 = (state_30747[(1)]);
if((state_val_30748 === (7))){
var inst_30743 = (state_30747[(2)]);
var state_30747__$1 = state_30747;
var statearr_30749_30787 = state_30747__$1;
(statearr_30749_30787[(2)] = inst_30743);

(statearr_30749_30787[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (20))){
var inst_30713 = (state_30747[(7)]);
var inst_30724 = (state_30747[(2)]);
var inst_30725 = cljs.core.next(inst_30713);
var inst_30699 = inst_30725;
var inst_30700 = null;
var inst_30701 = (0);
var inst_30702 = (0);
var state_30747__$1 = (function (){var statearr_30750 = state_30747;
(statearr_30750[(8)] = inst_30699);

(statearr_30750[(9)] = inst_30700);

(statearr_30750[(10)] = inst_30702);

(statearr_30750[(11)] = inst_30724);

(statearr_30750[(12)] = inst_30701);

return statearr_30750;
})();
var statearr_30751_30788 = state_30747__$1;
(statearr_30751_30788[(2)] = null);

(statearr_30751_30788[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (1))){
var state_30747__$1 = state_30747;
var statearr_30752_30789 = state_30747__$1;
(statearr_30752_30789[(2)] = null);

(statearr_30752_30789[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (4))){
var inst_30688 = (state_30747[(13)]);
var inst_30688__$1 = (state_30747[(2)]);
var inst_30689 = (inst_30688__$1 == null);
var state_30747__$1 = (function (){var statearr_30753 = state_30747;
(statearr_30753[(13)] = inst_30688__$1);

return statearr_30753;
})();
if(cljs.core.truth_(inst_30689)){
var statearr_30754_30790 = state_30747__$1;
(statearr_30754_30790[(1)] = (5));

} else {
var statearr_30755_30791 = state_30747__$1;
(statearr_30755_30791[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (15))){
var state_30747__$1 = state_30747;
var statearr_30759_30792 = state_30747__$1;
(statearr_30759_30792[(2)] = null);

(statearr_30759_30792[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (21))){
var state_30747__$1 = state_30747;
var statearr_30760_30793 = state_30747__$1;
(statearr_30760_30793[(2)] = null);

(statearr_30760_30793[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (13))){
var inst_30699 = (state_30747[(8)]);
var inst_30700 = (state_30747[(9)]);
var inst_30702 = (state_30747[(10)]);
var inst_30701 = (state_30747[(12)]);
var inst_30709 = (state_30747[(2)]);
var inst_30710 = (inst_30702 + (1));
var tmp30756 = inst_30699;
var tmp30757 = inst_30700;
var tmp30758 = inst_30701;
var inst_30699__$1 = tmp30756;
var inst_30700__$1 = tmp30757;
var inst_30701__$1 = tmp30758;
var inst_30702__$1 = inst_30710;
var state_30747__$1 = (function (){var statearr_30761 = state_30747;
(statearr_30761[(14)] = inst_30709);

(statearr_30761[(8)] = inst_30699__$1);

(statearr_30761[(9)] = inst_30700__$1);

(statearr_30761[(10)] = inst_30702__$1);

(statearr_30761[(12)] = inst_30701__$1);

return statearr_30761;
})();
var statearr_30762_30794 = state_30747__$1;
(statearr_30762_30794[(2)] = null);

(statearr_30762_30794[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (22))){
var state_30747__$1 = state_30747;
var statearr_30763_30795 = state_30747__$1;
(statearr_30763_30795[(2)] = null);

(statearr_30763_30795[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (6))){
var inst_30688 = (state_30747[(13)]);
var inst_30697 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30688) : f.call(null,inst_30688));
var inst_30698 = cljs.core.seq(inst_30697);
var inst_30699 = inst_30698;
var inst_30700 = null;
var inst_30701 = (0);
var inst_30702 = (0);
var state_30747__$1 = (function (){var statearr_30764 = state_30747;
(statearr_30764[(8)] = inst_30699);

(statearr_30764[(9)] = inst_30700);

(statearr_30764[(10)] = inst_30702);

(statearr_30764[(12)] = inst_30701);

return statearr_30764;
})();
var statearr_30765_30796 = state_30747__$1;
(statearr_30765_30796[(2)] = null);

(statearr_30765_30796[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (17))){
var inst_30713 = (state_30747[(7)]);
var inst_30717 = cljs.core.chunk_first(inst_30713);
var inst_30718 = cljs.core.chunk_rest(inst_30713);
var inst_30719 = cljs.core.count(inst_30717);
var inst_30699 = inst_30718;
var inst_30700 = inst_30717;
var inst_30701 = inst_30719;
var inst_30702 = (0);
var state_30747__$1 = (function (){var statearr_30766 = state_30747;
(statearr_30766[(8)] = inst_30699);

(statearr_30766[(9)] = inst_30700);

(statearr_30766[(10)] = inst_30702);

(statearr_30766[(12)] = inst_30701);

return statearr_30766;
})();
var statearr_30767_30797 = state_30747__$1;
(statearr_30767_30797[(2)] = null);

(statearr_30767_30797[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (3))){
var inst_30745 = (state_30747[(2)]);
var state_30747__$1 = state_30747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30747__$1,inst_30745);
} else {
if((state_val_30748 === (12))){
var inst_30733 = (state_30747[(2)]);
var state_30747__$1 = state_30747;
var statearr_30768_30798 = state_30747__$1;
(statearr_30768_30798[(2)] = inst_30733);

(statearr_30768_30798[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (2))){
var state_30747__$1 = state_30747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30747__$1,(4),in$);
} else {
if((state_val_30748 === (23))){
var inst_30741 = (state_30747[(2)]);
var state_30747__$1 = state_30747;
var statearr_30769_30799 = state_30747__$1;
(statearr_30769_30799[(2)] = inst_30741);

(statearr_30769_30799[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (19))){
var inst_30728 = (state_30747[(2)]);
var state_30747__$1 = state_30747;
var statearr_30770_30800 = state_30747__$1;
(statearr_30770_30800[(2)] = inst_30728);

(statearr_30770_30800[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (11))){
var inst_30699 = (state_30747[(8)]);
var inst_30713 = (state_30747[(7)]);
var inst_30713__$1 = cljs.core.seq(inst_30699);
var state_30747__$1 = (function (){var statearr_30771 = state_30747;
(statearr_30771[(7)] = inst_30713__$1);

return statearr_30771;
})();
if(inst_30713__$1){
var statearr_30772_30801 = state_30747__$1;
(statearr_30772_30801[(1)] = (14));

} else {
var statearr_30773_30802 = state_30747__$1;
(statearr_30773_30802[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (9))){
var inst_30735 = (state_30747[(2)]);
var inst_30736 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_30747__$1 = (function (){var statearr_30774 = state_30747;
(statearr_30774[(15)] = inst_30735);

return statearr_30774;
})();
if(cljs.core.truth_(inst_30736)){
var statearr_30775_30803 = state_30747__$1;
(statearr_30775_30803[(1)] = (21));

} else {
var statearr_30776_30804 = state_30747__$1;
(statearr_30776_30804[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (5))){
var inst_30691 = cljs.core.async.close_BANG_(out);
var state_30747__$1 = state_30747;
var statearr_30777_30805 = state_30747__$1;
(statearr_30777_30805[(2)] = inst_30691);

(statearr_30777_30805[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (14))){
var inst_30713 = (state_30747[(7)]);
var inst_30715 = cljs.core.chunked_seq_QMARK_(inst_30713);
var state_30747__$1 = state_30747;
if(inst_30715){
var statearr_30778_30806 = state_30747__$1;
(statearr_30778_30806[(1)] = (17));

} else {
var statearr_30779_30807 = state_30747__$1;
(statearr_30779_30807[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (16))){
var inst_30731 = (state_30747[(2)]);
var state_30747__$1 = state_30747;
var statearr_30780_30808 = state_30747__$1;
(statearr_30780_30808[(2)] = inst_30731);

(statearr_30780_30808[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30748 === (10))){
var inst_30700 = (state_30747[(9)]);
var inst_30702 = (state_30747[(10)]);
var inst_30707 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30700,inst_30702);
var state_30747__$1 = state_30747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30747__$1,(13),out,inst_30707);
} else {
if((state_val_30748 === (18))){
var inst_30713 = (state_30747[(7)]);
var inst_30722 = cljs.core.first(inst_30713);
var state_30747__$1 = state_30747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30747__$1,(20),out,inst_30722);
} else {
if((state_val_30748 === (8))){
var inst_30702 = (state_30747[(10)]);
var inst_30701 = (state_30747[(12)]);
var inst_30704 = (inst_30702 < inst_30701);
var inst_30705 = inst_30704;
var state_30747__$1 = state_30747;
if(cljs.core.truth_(inst_30705)){
var statearr_30781_30809 = state_30747__$1;
(statearr_30781_30809[(1)] = (10));

} else {
var statearr_30782_30810 = state_30747__$1;
(statearr_30782_30810[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29074__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29074__auto____0 = (function (){
var statearr_30783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30783[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29074__auto__);

(statearr_30783[(1)] = (1));

return statearr_30783;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29074__auto____1 = (function (state_30747){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_30747);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e30784){if((e30784 instanceof Object)){
var ex__29077__auto__ = e30784;
var statearr_30785_30811 = state_30747;
(statearr_30785_30811[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30747);

return cljs.core.cst$kw$recur;
} else {
throw e30784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__30812 = state_30747;
state_30747 = G__30812;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29074__auto__ = function(state_30747){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29074__auto____1.call(this,state_30747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29074__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29074__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_30786 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_30786[(6)] = c__29182__auto__);

return statearr_30786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));

return c__29182__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30814 = arguments.length;
switch (G__30814) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30817 = arguments.length;
switch (G__30817) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30820 = arguments.length;
switch (G__30820) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29182__auto___30867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_30844){
var state_val_30845 = (state_30844[(1)]);
if((state_val_30845 === (7))){
var inst_30839 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30846_30868 = state_30844__$1;
(statearr_30846_30868[(2)] = inst_30839);

(statearr_30846_30868[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30845 === (1))){
var inst_30821 = null;
var state_30844__$1 = (function (){var statearr_30847 = state_30844;
(statearr_30847[(7)] = inst_30821);

return statearr_30847;
})();
var statearr_30848_30869 = state_30844__$1;
(statearr_30848_30869[(2)] = null);

(statearr_30848_30869[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30845 === (4))){
var inst_30824 = (state_30844[(8)]);
var inst_30824__$1 = (state_30844[(2)]);
var inst_30825 = (inst_30824__$1 == null);
var inst_30826 = cljs.core.not(inst_30825);
var state_30844__$1 = (function (){var statearr_30849 = state_30844;
(statearr_30849[(8)] = inst_30824__$1);

return statearr_30849;
})();
if(inst_30826){
var statearr_30850_30870 = state_30844__$1;
(statearr_30850_30870[(1)] = (5));

} else {
var statearr_30851_30871 = state_30844__$1;
(statearr_30851_30871[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30845 === (6))){
var state_30844__$1 = state_30844;
var statearr_30852_30872 = state_30844__$1;
(statearr_30852_30872[(2)] = null);

(statearr_30852_30872[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30845 === (3))){
var inst_30841 = (state_30844[(2)]);
var inst_30842 = cljs.core.async.close_BANG_(out);
var state_30844__$1 = (function (){var statearr_30853 = state_30844;
(statearr_30853[(9)] = inst_30841);

return statearr_30853;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30844__$1,inst_30842);
} else {
if((state_val_30845 === (2))){
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30844__$1,(4),ch);
} else {
if((state_val_30845 === (11))){
var inst_30824 = (state_30844[(8)]);
var inst_30833 = (state_30844[(2)]);
var inst_30821 = inst_30824;
var state_30844__$1 = (function (){var statearr_30854 = state_30844;
(statearr_30854[(10)] = inst_30833);

(statearr_30854[(7)] = inst_30821);

return statearr_30854;
})();
var statearr_30855_30873 = state_30844__$1;
(statearr_30855_30873[(2)] = null);

(statearr_30855_30873[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30845 === (9))){
var inst_30824 = (state_30844[(8)]);
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30844__$1,(11),out,inst_30824);
} else {
if((state_val_30845 === (5))){
var inst_30824 = (state_30844[(8)]);
var inst_30821 = (state_30844[(7)]);
var inst_30828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30824,inst_30821);
var state_30844__$1 = state_30844;
if(inst_30828){
var statearr_30857_30874 = state_30844__$1;
(statearr_30857_30874[(1)] = (8));

} else {
var statearr_30858_30875 = state_30844__$1;
(statearr_30858_30875[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30845 === (10))){
var inst_30836 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30859_30876 = state_30844__$1;
(statearr_30859_30876[(2)] = inst_30836);

(statearr_30859_30876[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30845 === (8))){
var inst_30821 = (state_30844[(7)]);
var tmp30856 = inst_30821;
var inst_30821__$1 = tmp30856;
var state_30844__$1 = (function (){var statearr_30860 = state_30844;
(statearr_30860[(7)] = inst_30821__$1);

return statearr_30860;
})();
var statearr_30861_30877 = state_30844__$1;
(statearr_30861_30877[(2)] = null);

(statearr_30861_30877[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29074__auto__ = null;
var cljs$core$async$state_machine__29074__auto____0 = (function (){
var statearr_30862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30862[(0)] = cljs$core$async$state_machine__29074__auto__);

(statearr_30862[(1)] = (1));

return statearr_30862;
});
var cljs$core$async$state_machine__29074__auto____1 = (function (state_30844){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_30844);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e30863){if((e30863 instanceof Object)){
var ex__29077__auto__ = e30863;
var statearr_30864_30878 = state_30844;
(statearr_30864_30878[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30844);

return cljs.core.cst$kw$recur;
} else {
throw e30863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__30879 = state_30844;
state_30844 = G__30879;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$state_machine__29074__auto__ = function(state_30844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29074__auto____1.call(this,state_30844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29074__auto____0;
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29074__auto____1;
return cljs$core$async$state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_30865 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_30865[(6)] = c__29182__auto___30867);

return statearr_30865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30881 = arguments.length;
switch (G__30881) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29182__auto___30947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_30919){
var state_val_30920 = (state_30919[(1)]);
if((state_val_30920 === (7))){
var inst_30915 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
var statearr_30921_30948 = state_30919__$1;
(statearr_30921_30948[(2)] = inst_30915);

(statearr_30921_30948[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30920 === (1))){
var inst_30882 = (new Array(n));
var inst_30883 = inst_30882;
var inst_30884 = (0);
var state_30919__$1 = (function (){var statearr_30922 = state_30919;
(statearr_30922[(7)] = inst_30884);

(statearr_30922[(8)] = inst_30883);

return statearr_30922;
})();
var statearr_30923_30949 = state_30919__$1;
(statearr_30923_30949[(2)] = null);

(statearr_30923_30949[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30920 === (4))){
var inst_30887 = (state_30919[(9)]);
var inst_30887__$1 = (state_30919[(2)]);
var inst_30888 = (inst_30887__$1 == null);
var inst_30889 = cljs.core.not(inst_30888);
var state_30919__$1 = (function (){var statearr_30924 = state_30919;
(statearr_30924[(9)] = inst_30887__$1);

return statearr_30924;
})();
if(inst_30889){
var statearr_30925_30950 = state_30919__$1;
(statearr_30925_30950[(1)] = (5));

} else {
var statearr_30926_30951 = state_30919__$1;
(statearr_30926_30951[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30920 === (15))){
var inst_30909 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
var statearr_30927_30952 = state_30919__$1;
(statearr_30927_30952[(2)] = inst_30909);

(statearr_30927_30952[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30920 === (13))){
var state_30919__$1 = state_30919;
var statearr_30928_30953 = state_30919__$1;
(statearr_30928_30953[(2)] = null);

(statearr_30928_30953[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30920 === (6))){
var inst_30884 = (state_30919[(7)]);
var inst_30905 = (inst_30884 > (0));
var state_30919__$1 = state_30919;
if(cljs.core.truth_(inst_30905)){
var statearr_30929_30954 = state_30919__$1;
(statearr_30929_30954[(1)] = (12));

} else {
var statearr_30930_30955 = state_30919__$1;
(statearr_30930_30955[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30920 === (3))){
var inst_30917 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30919__$1,inst_30917);
} else {
if((state_val_30920 === (12))){
var inst_30883 = (state_30919[(8)]);
var inst_30907 = cljs.core.vec(inst_30883);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30919__$1,(15),out,inst_30907);
} else {
if((state_val_30920 === (2))){
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30919__$1,(4),ch);
} else {
if((state_val_30920 === (11))){
var inst_30899 = (state_30919[(2)]);
var inst_30900 = (new Array(n));
var inst_30883 = inst_30900;
var inst_30884 = (0);
var state_30919__$1 = (function (){var statearr_30931 = state_30919;
(statearr_30931[(7)] = inst_30884);

(statearr_30931[(8)] = inst_30883);

(statearr_30931[(10)] = inst_30899);

return statearr_30931;
})();
var statearr_30932_30956 = state_30919__$1;
(statearr_30932_30956[(2)] = null);

(statearr_30932_30956[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30920 === (9))){
var inst_30883 = (state_30919[(8)]);
var inst_30897 = cljs.core.vec(inst_30883);
var state_30919__$1 = state_30919;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30919__$1,(11),out,inst_30897);
} else {
if((state_val_30920 === (5))){
var inst_30884 = (state_30919[(7)]);
var inst_30883 = (state_30919[(8)]);
var inst_30887 = (state_30919[(9)]);
var inst_30892 = (state_30919[(11)]);
var inst_30891 = (inst_30883[inst_30884] = inst_30887);
var inst_30892__$1 = (inst_30884 + (1));
var inst_30893 = (inst_30892__$1 < n);
var state_30919__$1 = (function (){var statearr_30933 = state_30919;
(statearr_30933[(11)] = inst_30892__$1);

(statearr_30933[(12)] = inst_30891);

return statearr_30933;
})();
if(cljs.core.truth_(inst_30893)){
var statearr_30934_30957 = state_30919__$1;
(statearr_30934_30957[(1)] = (8));

} else {
var statearr_30935_30958 = state_30919__$1;
(statearr_30935_30958[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30920 === (14))){
var inst_30912 = (state_30919[(2)]);
var inst_30913 = cljs.core.async.close_BANG_(out);
var state_30919__$1 = (function (){var statearr_30937 = state_30919;
(statearr_30937[(13)] = inst_30912);

return statearr_30937;
})();
var statearr_30938_30959 = state_30919__$1;
(statearr_30938_30959[(2)] = inst_30913);

(statearr_30938_30959[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30920 === (10))){
var inst_30903 = (state_30919[(2)]);
var state_30919__$1 = state_30919;
var statearr_30939_30960 = state_30919__$1;
(statearr_30939_30960[(2)] = inst_30903);

(statearr_30939_30960[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30920 === (8))){
var inst_30883 = (state_30919[(8)]);
var inst_30892 = (state_30919[(11)]);
var tmp30936 = inst_30883;
var inst_30883__$1 = tmp30936;
var inst_30884 = inst_30892;
var state_30919__$1 = (function (){var statearr_30940 = state_30919;
(statearr_30940[(7)] = inst_30884);

(statearr_30940[(8)] = inst_30883__$1);

return statearr_30940;
})();
var statearr_30941_30961 = state_30919__$1;
(statearr_30941_30961[(2)] = null);

(statearr_30941_30961[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29074__auto__ = null;
var cljs$core$async$state_machine__29074__auto____0 = (function (){
var statearr_30942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30942[(0)] = cljs$core$async$state_machine__29074__auto__);

(statearr_30942[(1)] = (1));

return statearr_30942;
});
var cljs$core$async$state_machine__29074__auto____1 = (function (state_30919){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_30919);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e30943){if((e30943 instanceof Object)){
var ex__29077__auto__ = e30943;
var statearr_30944_30962 = state_30919;
(statearr_30944_30962[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30919);

return cljs.core.cst$kw$recur;
} else {
throw e30943;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__30963 = state_30919;
state_30919 = G__30963;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$state_machine__29074__auto__ = function(state_30919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29074__auto____1.call(this,state_30919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29074__auto____0;
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29074__auto____1;
return cljs$core$async$state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_30945 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_30945[(6)] = c__29182__auto___30947);

return statearr_30945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30965 = arguments.length;
switch (G__30965) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29182__auto___31042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29183__auto__ = (function (){var switch__29073__auto__ = (function (state_31010){
var state_val_31011 = (state_31010[(1)]);
if((state_val_31011 === (7))){
var inst_31006 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
var statearr_31012_31043 = state_31010__$1;
(statearr_31012_31043[(2)] = inst_31006);

(statearr_31012_31043[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (1))){
var inst_30966 = [];
var inst_30967 = inst_30966;
var inst_30968 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_31010__$1 = (function (){var statearr_31013 = state_31010;
(statearr_31013[(7)] = inst_30968);

(statearr_31013[(8)] = inst_30967);

return statearr_31013;
})();
var statearr_31014_31044 = state_31010__$1;
(statearr_31014_31044[(2)] = null);

(statearr_31014_31044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (4))){
var inst_30971 = (state_31010[(9)]);
var inst_30971__$1 = (state_31010[(2)]);
var inst_30972 = (inst_30971__$1 == null);
var inst_30973 = cljs.core.not(inst_30972);
var state_31010__$1 = (function (){var statearr_31015 = state_31010;
(statearr_31015[(9)] = inst_30971__$1);

return statearr_31015;
})();
if(inst_30973){
var statearr_31016_31045 = state_31010__$1;
(statearr_31016_31045[(1)] = (5));

} else {
var statearr_31017_31046 = state_31010__$1;
(statearr_31017_31046[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (15))){
var inst_30967 = (state_31010[(8)]);
var inst_30998 = cljs.core.vec(inst_30967);
var state_31010__$1 = state_31010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31010__$1,(18),out,inst_30998);
} else {
if((state_val_31011 === (13))){
var inst_30993 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
var statearr_31018_31047 = state_31010__$1;
(statearr_31018_31047[(2)] = inst_30993);

(statearr_31018_31047[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (6))){
var inst_30967 = (state_31010[(8)]);
var inst_30995 = inst_30967.length;
var inst_30996 = (inst_30995 > (0));
var state_31010__$1 = state_31010;
if(cljs.core.truth_(inst_30996)){
var statearr_31019_31048 = state_31010__$1;
(statearr_31019_31048[(1)] = (15));

} else {
var statearr_31020_31049 = state_31010__$1;
(statearr_31020_31049[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (17))){
var inst_31003 = (state_31010[(2)]);
var inst_31004 = cljs.core.async.close_BANG_(out);
var state_31010__$1 = (function (){var statearr_31021 = state_31010;
(statearr_31021[(10)] = inst_31003);

return statearr_31021;
})();
var statearr_31022_31050 = state_31010__$1;
(statearr_31022_31050[(2)] = inst_31004);

(statearr_31022_31050[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (3))){
var inst_31008 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31010__$1,inst_31008);
} else {
if((state_val_31011 === (12))){
var inst_30967 = (state_31010[(8)]);
var inst_30986 = cljs.core.vec(inst_30967);
var state_31010__$1 = state_31010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31010__$1,(14),out,inst_30986);
} else {
if((state_val_31011 === (2))){
var state_31010__$1 = state_31010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31010__$1,(4),ch);
} else {
if((state_val_31011 === (11))){
var inst_30967 = (state_31010[(8)]);
var inst_30975 = (state_31010[(11)]);
var inst_30971 = (state_31010[(9)]);
var inst_30983 = inst_30967.push(inst_30971);
var tmp31023 = inst_30967;
var inst_30967__$1 = tmp31023;
var inst_30968 = inst_30975;
var state_31010__$1 = (function (){var statearr_31024 = state_31010;
(statearr_31024[(7)] = inst_30968);

(statearr_31024[(12)] = inst_30983);

(statearr_31024[(8)] = inst_30967__$1);

return statearr_31024;
})();
var statearr_31025_31051 = state_31010__$1;
(statearr_31025_31051[(2)] = null);

(statearr_31025_31051[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (9))){
var inst_30968 = (state_31010[(7)]);
var inst_30979 = cljs.core.keyword_identical_QMARK_(inst_30968,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var state_31010__$1 = state_31010;
var statearr_31026_31052 = state_31010__$1;
(statearr_31026_31052[(2)] = inst_30979);

(statearr_31026_31052[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (5))){
var inst_30968 = (state_31010[(7)]);
var inst_30976 = (state_31010[(13)]);
var inst_30975 = (state_31010[(11)]);
var inst_30971 = (state_31010[(9)]);
var inst_30975__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_30971) : f.call(null,inst_30971));
var inst_30976__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30975__$1,inst_30968);
var state_31010__$1 = (function (){var statearr_31027 = state_31010;
(statearr_31027[(13)] = inst_30976__$1);

(statearr_31027[(11)] = inst_30975__$1);

return statearr_31027;
})();
if(inst_30976__$1){
var statearr_31028_31053 = state_31010__$1;
(statearr_31028_31053[(1)] = (8));

} else {
var statearr_31029_31054 = state_31010__$1;
(statearr_31029_31054[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (14))){
var inst_30975 = (state_31010[(11)]);
var inst_30971 = (state_31010[(9)]);
var inst_30988 = (state_31010[(2)]);
var inst_30989 = [];
var inst_30990 = inst_30989.push(inst_30971);
var inst_30967 = inst_30989;
var inst_30968 = inst_30975;
var state_31010__$1 = (function (){var statearr_31030 = state_31010;
(statearr_31030[(7)] = inst_30968);

(statearr_31030[(14)] = inst_30990);

(statearr_31030[(8)] = inst_30967);

(statearr_31030[(15)] = inst_30988);

return statearr_31030;
})();
var statearr_31031_31055 = state_31010__$1;
(statearr_31031_31055[(2)] = null);

(statearr_31031_31055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (16))){
var state_31010__$1 = state_31010;
var statearr_31032_31056 = state_31010__$1;
(statearr_31032_31056[(2)] = null);

(statearr_31032_31056[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (10))){
var inst_30981 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
if(cljs.core.truth_(inst_30981)){
var statearr_31033_31057 = state_31010__$1;
(statearr_31033_31057[(1)] = (11));

} else {
var statearr_31034_31058 = state_31010__$1;
(statearr_31034_31058[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (18))){
var inst_31000 = (state_31010[(2)]);
var state_31010__$1 = state_31010;
var statearr_31035_31059 = state_31010__$1;
(statearr_31035_31059[(2)] = inst_31000);

(statearr_31035_31059[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31011 === (8))){
var inst_30976 = (state_31010[(13)]);
var state_31010__$1 = state_31010;
var statearr_31036_31060 = state_31010__$1;
(statearr_31036_31060[(2)] = inst_30976);

(statearr_31036_31060[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29074__auto__ = null;
var cljs$core$async$state_machine__29074__auto____0 = (function (){
var statearr_31037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31037[(0)] = cljs$core$async$state_machine__29074__auto__);

(statearr_31037[(1)] = (1));

return statearr_31037;
});
var cljs$core$async$state_machine__29074__auto____1 = (function (state_31010){
while(true){
var ret_value__29075__auto__ = (function (){try{while(true){
var result__29076__auto__ = switch__29073__auto__(state_31010);
if(cljs.core.keyword_identical_QMARK_(result__29076__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__29076__auto__;
}
break;
}
}catch (e31038){if((e31038 instanceof Object)){
var ex__29077__auto__ = e31038;
var statearr_31039_31061 = state_31010;
(statearr_31039_31061[(5)] = ex__29077__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31010);

return cljs.core.cst$kw$recur;
} else {
throw e31038;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29075__auto__,cljs.core.cst$kw$recur)){
var G__31062 = state_31010;
state_31010 = G__31062;
continue;
} else {
return ret_value__29075__auto__;
}
break;
}
});
cljs$core$async$state_machine__29074__auto__ = function(state_31010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29074__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29074__auto____1.call(this,state_31010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29074__auto____0;
cljs$core$async$state_machine__29074__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29074__auto____1;
return cljs$core$async$state_machine__29074__auto__;
})()
})();
var state__29184__auto__ = (function (){var statearr_31040 = (f__29183__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29183__auto__.cljs$core$IFn$_invoke$arity$0() : f__29183__auto__.call(null));
(statearr_31040[(6)] = c__29182__auto___31042);

return statearr_31040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29184__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

