// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reitit.impl');
goog.require('reitit.exception');
goog.require('reitit.trie');

/**
 * @interface
 */
reitit.core.Expand = function(){};

var reitit$core$Expand$expand$dyn_31142 = (function (this$,opts){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.core.expand[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4522__auto__.call(null,this$,opts));
} else {
var m__4519__auto__ = (reitit.core.expand["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4519__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
});
reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
return reitit$core$Expand$expand$dyn_31142(this$,opts);
}
});

(cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,this$__$1], null);
}));

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

goog.object.set(reitit.core.Expand,"function",true);

goog.object.set(reitit.core.expand,"function",(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,this$], null);
}));

goog.object.set(reitit.core.Expand,"null",true);

goog.object.set(reitit.core.expand,"null",(function (_,___$1){
return null;
}));

/**
 * @interface
 */
reitit.core.Router = function(){};

var reitit$core$Router$router_name$dyn_31145 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.core.router_name[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (reitit.core.router_name["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
});
reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
return reitit$core$Router$router_name$dyn_31145(this$);
}
});

var reitit$core$Router$routes$dyn_31146 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.core.routes[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (reitit.core.routes["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
});
reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
return reitit$core$Router$routes$dyn_31146(this$);
}
});

var reitit$core$Router$compiled_routes$dyn_31147 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
});
reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
return reitit$core$Router$compiled_routes$dyn_31147(this$);
}
});

var reitit$core$Router$options$dyn_31148 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.core.options[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (reitit.core.options["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
});
reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
return reitit$core$Router$options$dyn_31148(this$);
}
});

var reitit$core$Router$route_names$dyn_31149 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.core.route_names[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (reitit.core.route_names["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
});
reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
return reitit$core$Router$route_names$dyn_31149(this$);
}
});

var reitit$core$Router$match_by_path$dyn_31150 = (function (this$,path){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4522__auto__.call(null,this$,path));
} else {
var m__4519__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4519__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
});
reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
return reitit$core$Router$match_by_path$dyn_31150(this$,path);
}
});

var reitit$core$Router$match_by_name$dyn_31151 = (function() {
var G__31152 = null;
var G__31152__2 = (function (this$,name){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4522__auto__.call(null,this$,name));
} else {
var m__4519__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4519__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
var G__31152__3 = (function (this$,name,path_params){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4522__auto__.call(null,this$,name,path_params));
} else {
var m__4519__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4519__auto__.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
});
G__31152 = function(this$,name,path_params){
switch(arguments.length){
case 2:
return G__31152__2.call(this,this$,name);
case 3:
return G__31152__3.call(this,this$,name,path_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__31152.cljs$core$IFn$_invoke$arity$2 = G__31152__2;
G__31152.cljs$core$IFn$_invoke$arity$3 = G__31152__3;
return G__31152;
})()
;
reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__31144 = arguments.length;
switch (G__31144) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
return reitit$core$Router$match_by_name$dyn_31151.cljs$core$IFn$_invoke$arity$2(this$,name);
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
return reitit$core$Router$match_by_name$dyn_31151.cljs$core$IFn$_invoke$arity$3(this$,name,path_params);
}
}));

(reitit.core.match_by_name.cljs$lang$maxFixedArity = 3);


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k31156,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__31160 = k31156;
var G__31160__$1 = (((G__31160 instanceof cljs.core.Keyword))?G__31160.fqn:null);
switch (G__31160__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31156,else__4475__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__31161){
var vec__31162 = p__31161;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31162,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31162,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#reitit.core.Match{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$template,self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$result,self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_params,self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31155){
var self__ = this;
var G__31155__$1 = this;
return (new cljs.core.RecordIter((0),G__31155__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__31165 = (function (coll__4469__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__31165(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31157,other31158){
var self__ = this;
var this31157__$1 = this;
return (((!((other31158 == null)))) && ((((this31157__$1.constructor === other31158.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31157__$1.template,other31158.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31157__$1.data,other31158.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31157__$1.result,other31158.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31157__$1.path_params,other31158.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31157__$1.path,other31158.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31157__$1.__extmap,other31158.__extmap)))))))))))))));
}));

(reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$template,null,cljs.core.cst$kw$result,null,cljs.core.cst$kw$path_DASH_params,null,cljs.core.cst$kw$data,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k31156){
var self__ = this;
var this__4479__auto____$1 = this;
var G__31166 = k31156;
var G__31166__$1 = (((G__31166 instanceof cljs.core.Keyword))?G__31166.fqn:null);
switch (G__31166__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31156);

}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__31155){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__31167 = cljs.core.keyword_identical_QMARK_;
var expr__31168 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__31170 = cljs.core.cst$kw$template;
var G__31171 = expr__31168;
return (pred__31167.cljs$core$IFn$_invoke$arity$2 ? pred__31167.cljs$core$IFn$_invoke$arity$2(G__31170,G__31171) : pred__31167.call(null,G__31170,G__31171));
})())){
return (new reitit.core.Match(G__31155,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31172 = cljs.core.cst$kw$data;
var G__31173 = expr__31168;
return (pred__31167.cljs$core$IFn$_invoke$arity$2 ? pred__31167.cljs$core$IFn$_invoke$arity$2(G__31172,G__31173) : pred__31167.call(null,G__31172,G__31173));
})())){
return (new reitit.core.Match(self__.template,G__31155,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31174 = cljs.core.cst$kw$result;
var G__31175 = expr__31168;
return (pred__31167.cljs$core$IFn$_invoke$arity$2 ? pred__31167.cljs$core$IFn$_invoke$arity$2(G__31174,G__31175) : pred__31167.call(null,G__31174,G__31175));
})())){
return (new reitit.core.Match(self__.template,self__.data,G__31155,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31176 = cljs.core.cst$kw$path_DASH_params;
var G__31177 = expr__31168;
return (pred__31167.cljs$core$IFn$_invoke$arity$2 ? pred__31167.cljs$core$IFn$_invoke$arity$2(G__31176,G__31177) : pred__31167.call(null,G__31176,G__31177));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__31155,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31178 = cljs.core.cst$kw$path;
var G__31179 = expr__31168;
return (pred__31167.cljs$core$IFn$_invoke$arity$2 ? pred__31167.cljs$core$IFn$_invoke$arity$2(G__31178,G__31179) : pred__31167.call(null,G__31178,G__31179));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__31155,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__31155),null));
}
}
}
}
}
}));

(reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$template,self__.template,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$result,self__.result,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_params,self__.path_params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__31155){
var self__ = this;
var this__4471__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__31155,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$template,cljs.core.cst$sym$data,cljs.core.cst$sym$result,cljs.core.cst$sym$path_DASH_params,cljs.core.cst$sym$path], null);
}));

(reitit.core.Match.cljs$lang$type = true);

(reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
}));

(reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"reitit.core/Match");
}));

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__31159){
var extmap__4512__auto__ = (function (){var G__31180 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31159,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], 0));
if(cljs.core.record_QMARK_(G__31159)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31180);
} else {
return G__31180;
}
})();
return (new reitit.core.Match(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__31159),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__31159),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__31159),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__31159),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__31159),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k31184,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__31188 = k31184;
var G__31188__$1 = (((G__31188 instanceof cljs.core.Keyword))?G__31188.fqn:null);
switch (G__31188__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31184,else__4475__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__31189){
var vec__31190 = p__31189;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31190,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31190,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$template,self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$result,self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_params,self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31183){
var self__ = this;
var G__31183__$1 = this;
return (new cljs.core.RecordIter((0),G__31183__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__31193 = (function (coll__4469__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__31193(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31185,other31186){
var self__ = this;
var this31185__$1 = this;
return (((!((other31186 == null)))) && ((((this31185__$1.constructor === other31186.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31185__$1.template,other31186.template)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31185__$1.data,other31186.data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31185__$1.result,other31186.result)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31185__$1.path_params,other31186.path_params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31185__$1.required,other31186.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31185__$1.__extmap,other31186.__extmap)))))))))))))));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$template,null,cljs.core.cst$kw$result,null,cljs.core.cst$kw$path_DASH_params,null,cljs.core.cst$kw$required,null,cljs.core.cst$kw$data,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k31184){
var self__ = this;
var this__4479__auto____$1 = this;
var G__31194 = k31184;
var G__31194__$1 = (((G__31194 instanceof cljs.core.Keyword))?G__31194.fqn:null);
switch (G__31194__$1) {
case "template":
case "data":
case "result":
case "path-params":
case "required":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31184);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__31183){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__31195 = cljs.core.keyword_identical_QMARK_;
var expr__31196 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__31198 = cljs.core.cst$kw$template;
var G__31199 = expr__31196;
return (pred__31195.cljs$core$IFn$_invoke$arity$2 ? pred__31195.cljs$core$IFn$_invoke$arity$2(G__31198,G__31199) : pred__31195.call(null,G__31198,G__31199));
})())){
return (new reitit.core.PartialMatch(G__31183,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31200 = cljs.core.cst$kw$data;
var G__31201 = expr__31196;
return (pred__31195.cljs$core$IFn$_invoke$arity$2 ? pred__31195.cljs$core$IFn$_invoke$arity$2(G__31200,G__31201) : pred__31195.call(null,G__31200,G__31201));
})())){
return (new reitit.core.PartialMatch(self__.template,G__31183,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31202 = cljs.core.cst$kw$result;
var G__31203 = expr__31196;
return (pred__31195.cljs$core$IFn$_invoke$arity$2 ? pred__31195.cljs$core$IFn$_invoke$arity$2(G__31202,G__31203) : pred__31195.call(null,G__31202,G__31203));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__31183,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31204 = cljs.core.cst$kw$path_DASH_params;
var G__31205 = expr__31196;
return (pred__31195.cljs$core$IFn$_invoke$arity$2 ? pred__31195.cljs$core$IFn$_invoke$arity$2(G__31204,G__31205) : pred__31195.call(null,G__31204,G__31205));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__31183,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31206 = cljs.core.cst$kw$required;
var G__31207 = expr__31196;
return (pred__31195.cljs$core$IFn$_invoke$arity$2 ? pred__31195.cljs$core$IFn$_invoke$arity$2(G__31206,G__31207) : pred__31195.call(null,G__31206,G__31207));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__31183,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__31183),null));
}
}
}
}
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$template,self__.template,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$result,self__.result,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_params,self__.path_params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$required,self__.required,null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__31183){
var self__ = this;
var this__4471__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__31183,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$template,cljs.core.cst$sym$data,cljs.core.cst$sym$result,cljs.core.cst$sym$path_DASH_params,cljs.core.cst$sym$required], null);
}));

(reitit.core.PartialMatch.cljs$lang$type = true);

(reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
}));

(reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"reitit.core/PartialMatch");
}));

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__31187){
var extmap__4512__auto__ = (function (){var G__31208 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31187,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], 0));
if(cljs.core.record_QMARK_(G__31187)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31208);
} else {
return G__31208;
}
})();
return (new reitit.core.PartialMatch(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__31187),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__31187),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__31187),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__31187),cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(G__31187),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__31212 = arguments.length;
switch (G__31212) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(this$,name,null);
}));

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5751__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(this$,name,path_params);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
if((!(reitit.core.partial_match_QMARK_(match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
}));

(reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__31215 = arguments.length;
switch (G__31215) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,null);
}));

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__31216 = match;
var G__31216__$1 = (((G__31216 == null))?null:cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__31216));
if((G__31216__$1 == null)){
return null;
} else {
var G__31217 = G__31216__$1;
if(cljs.core.seq(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31217),"?",reitit.impl.query_string(query_params)].join('');
} else {
return G__31217;
}
}
}));

(reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2);

/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__31221 = arguments.length;
switch (G__31221) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = cljs.core.cst$kw$reitit$trie_SLASH_trie_DASH_compiler.cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__31222 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__31225,p__31226){
var vec__31227 = p__31225;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31227,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31227,(1),null);
var vec__31230 = p__31226;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31230,(0),null);
var map__31233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31230,(1),null);
var map__31233__$1 = cljs.core.__destructure_map(map__31233);
var data = map__31233__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31233__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31230,(2),null);
var map__31234 = reitit.impl.parse(p,opts);
var map__31234__$1 = cljs.core.__destructure_map(map__31234);
var route = map__31234__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,cljs.core.cst$kw$path_DASH_params);
var f = (function (p1__31219_SHARP_){
var temp__5751__auto__ = reitit.impl.path_for(route,p1__31219_SHARP_);
if(cljs.core.truth_(temp__5751__auto__)){
var path = temp__5751__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__31219_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__31219_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31222,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31222,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core31235 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core31235 = (function (matcher,names,compiled_routes,routes,lookup,vec__31222,pl,nl,match_by_path,compiler,opts,meta31236){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__31222 = vec__31222;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta31236 = meta31236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core31235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31237,meta31236__$1){
var self__ = this;
var _31237__$1 = this;
return (new reitit.core.t_reitit$core31235(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__31222,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta31236__$1));
}));

(reitit.core.t_reitit$core31235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31237){
var self__ = this;
var _31237__$1 = this;
return self__.meta31236;
}));

(reitit.core.t_reitit$core31235.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core31235.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$linear_DASH_router;
}));

(reitit.core.t_reitit$core31235.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core31235.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core31235.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core31235.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core31235.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match)),cljs.core.cst$kw$path,path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core31235.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core31235.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
var G__31238 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__31238) : match.call(null,G__31238));
} else {
return null;
}
}));

(reitit.core.t_reitit$core31235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$matcher,cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$vec__31222,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$match_DASH_by_DASH_path,cljs.core.cst$sym$compiler,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta31236], null);
}));

(reitit.core.t_reitit$core31235.cljs$lang$type = true);

(reitit.core.t_reitit$core31235.cljs$lang$ctorStr = "reitit.core/t_reitit$core31235");

(reitit.core.t_reitit$core31235.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.core/t_reitit$core31235");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core31235.
 */
reitit.core.__GT_t_reitit$core31235 = (function reitit$core$__GT_t_reitit$core31235(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__31222__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta31236){
return (new reitit.core.t_reitit$core31235(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__31222__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta31236));
});

}

return (new reitit.core.t_reitit$core31235(matcher,names,compiled_routes,routes,lookup,vec__31222,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__31242 = arguments.length;
switch (G__31242) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5753__auto___31260 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes));
if(temp__5753__auto___31260){
var wilds_31261 = temp__5753__auto___31260;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_31261)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$wilds,wilds_31261,cljs.core.cst$kw$routes,compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__31243 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__31246,p__31247){
var vec__31248 = p__31246;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31248,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31248,(1),null);
var vec__31251 = p__31247;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31251,(0),null);
var map__31254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31251,(1),null);
var map__31254__$1 = cljs.core.__destructure_map(map__31254);
var data = map__31254__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31254__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31251,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,(function (p1__31240_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__31240_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31243,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31243,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core31255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core31255 = (function (names,data,compiled_routes,routes,vec__31243,lookup,pl,nl,opts,meta31256){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.vec__31243 = vec__31243;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta31256 = meta31256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core31255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31257,meta31256__$1){
var self__ = this;
var _31257__$1 = this;
return (new reitit.core.t_reitit$core31255(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.vec__31243,self__.lookup,self__.pl,self__.nl,self__.opts,meta31256__$1));
}));

(reitit.core.t_reitit$core31255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31257){
var self__ = this;
var _31257__$1 = this;
return self__.meta31256;
}));

(reitit.core.t_reitit$core31255.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core31255.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$lookup_DASH_router;
}));

(reitit.core.t_reitit$core31255.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core31255.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core31255.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core31255.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core31255.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
}));

(reitit.core.t_reitit$core31255.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core31255.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
var G__31258 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__31258) : match.call(null,G__31258));
} else {
return null;
}
}));

(reitit.core.t_reitit$core31255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$names,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$vec__31243,cljs.core.cst$sym$lookup,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta31256], null);
}));

(reitit.core.t_reitit$core31255.cljs$lang$type = true);

(reitit.core.t_reitit$core31255.cljs$lang$ctorStr = "reitit.core/t_reitit$core31255");

(reitit.core.t_reitit$core31255.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.core/t_reitit$core31255");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core31255.
 */
reitit.core.__GT_t_reitit$core31255 = (function reitit$core$__GT_t_reitit$core31255(names__$1,data__$1,compiled_routes__$1,routes__$1,vec__31243__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta31256){
return (new reitit.core.t_reitit$core31255(names__$1,data__$1,compiled_routes__$1,routes__$1,vec__31243__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta31256));
});

}

return (new reitit.core.t_reitit$core31255(names,data,compiled_routes,routes,vec__31243,lookup,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.lookup_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__31264 = arguments.length;
switch (G__31264) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = cljs.core.cst$kw$reitit$trie_SLASH_trie_DASH_compiler.cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__31265 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__31268,p__31269){
var vec__31270 = p__31268;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31270,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31270,(1),null);
var vec__31273 = p__31269;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31273,(0),null);
var map__31276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31273,(1),null);
var map__31276__$1 = cljs.core.__destructure_map(map__31276);
var data = map__31276__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31276__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31273,(2),null);
var map__31277 = reitit.impl.parse(p,opts);
var map__31277__$1 = cljs.core.__destructure_map(map__31277);
var route = map__31277__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31277__$1,cljs.core.cst$kw$path_DASH_params);
var f = (function (p1__31262_SHARP_){
var temp__5751__auto__ = reitit.impl.path_for(route,p1__31262_SHARP_);
if(cljs.core.truth_(temp__5751__auto__)){
var path = temp__5751__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__31262_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__31262_SHARP_),path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31265,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31265,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core31278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core31278 = (function (matcher,names,compiled_routes,routes,lookup,vec__31265,pl,nl,match_by_path,compiler,opts,meta31279){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__31265 = vec__31265;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta31279 = meta31279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core31278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31280,meta31279__$1){
var self__ = this;
var _31280__$1 = this;
return (new reitit.core.t_reitit$core31278(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__31265,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta31279__$1));
}));

(reitit.core.t_reitit$core31278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31280){
var self__ = this;
var _31280__$1 = this;
return self__.meta31279;
}));

(reitit.core.t_reitit$core31278.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core31278.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$trie_DASH_router;
}));

(reitit.core.t_reitit$core31278.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core31278.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core31278.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core31278.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core31278.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match)),cljs.core.cst$kw$path,path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core31278.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core31278.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5751__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
var G__31281 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__31281) : match.call(null,G__31281));
} else {
return null;
}
}));

(reitit.core.t_reitit$core31278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$matcher,cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$vec__31265,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$match_DASH_by_DASH_path,cljs.core.cst$sym$compiler,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta31279], null);
}));

(reitit.core.t_reitit$core31278.cljs$lang$type = true);

(reitit.core.t_reitit$core31278.cljs$lang$ctorStr = "reitit.core/t_reitit$core31278");

(reitit.core.t_reitit$core31278.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.core/t_reitit$core31278");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core31278.
 */
reitit.core.__GT_t_reitit$core31278 = (function reitit$core$__GT_t_reitit$core31278(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__31265__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta31279){
return (new reitit.core.t_reitit$core31278(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__31265__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta31279));
});

}

return (new reitit.core.t_reitit$core31278(matcher,names,compiled_routes,routes,lookup,vec__31265,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.trie_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__31284 = arguments.length;
switch (G__31284) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4223__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2([":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$routes,compiled_routes], null));
} else {
}

var vec__31285 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31285,(0),null);
var names = vec__31285;
var vec__31288 = compiled_routes;
var vec__31291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31288,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31291,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31291,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31291,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core31294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core31294 = (function (vec__31288,p,names,match,data,compiled_routes,routes,vec__31291,vec__31285,n,result,opts,meta31295){
this.vec__31288 = vec__31288;
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.vec__31291 = vec__31291;
this.vec__31285 = vec__31285;
this.n = n;
this.result = result;
this.opts = opts;
this.meta31295 = meta31295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core31294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31296,meta31295__$1){
var self__ = this;
var _31296__$1 = this;
return (new reitit.core.t_reitit$core31294(self__.vec__31288,self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.vec__31291,self__.vec__31285,self__.n,self__.result,self__.opts,meta31295__$1));
}));

(reitit.core.t_reitit$core31294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31296){
var self__ = this;
var _31296__$1 = this;
return self__.meta31295;
}));

(reitit.core.t_reitit$core31294.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core31294.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$single_DASH_static_DASH_path_DASH_router;
}));

(reitit.core.t_reitit$core31294.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core31294.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core31294.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core31294.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core31294.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core31294.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core31294.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,cljs.core.cst$kw$path_DASH_params,reitit.impl.path_params(path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core31294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vec__31288,cljs.core.cst$sym$p,cljs.core.cst$sym$names,cljs.core.cst$sym$match,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$vec__31291,cljs.core.cst$sym$vec__31285,cljs.core.cst$sym$n,cljs.core.cst$sym$result,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta31295], null);
}));

(reitit.core.t_reitit$core31294.cljs$lang$type = true);

(reitit.core.t_reitit$core31294.cljs$lang$ctorStr = "reitit.core/t_reitit$core31294");

(reitit.core.t_reitit$core31294.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.core/t_reitit$core31294");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core31294.
 */
reitit.core.__GT_t_reitit$core31294 = (function reitit$core$__GT_t_reitit$core31294(vec__31288__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__31291__$1,vec__31285__$1,n__$1,result__$1,opts__$1,meta31295){
return (new reitit.core.t_reitit$core31294(vec__31288__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,vec__31291__$1,vec__31285__$1,n__$1,result__$1,opts__$1,meta31295));
});

}

return (new reitit.core.t_reitit$core31294(vec__31288,p__$1,names,match,data,compiled_routes,routes,vec__31291,vec__31285,n,result,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__31299 = arguments.length;
switch (G__31299) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__31300 = cljs.core.group_by(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
var map__31300__$1 = cljs.core.__destructure_map(map__31300);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31300__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31300__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core31301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core31301 = (function (names,compiled_routes,routes,__GT_static_router,lookup,map__31300,wild,static_router,opts,wildcard_router,meta31302){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.map__31300 = map__31300;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta31302 = meta31302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core31301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31303,meta31302__$1){
var self__ = this;
var _31303__$1 = this;
return (new reitit.core.t_reitit$core31301(self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.map__31300,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta31302__$1));
}));

(reitit.core.t_reitit$core31301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31303){
var self__ = this;
var _31303__$1 = this;
return self__.meta31302;
}));

(reitit.core.t_reitit$core31301.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core31301.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$mixed_DASH_router;
}));

(reitit.core.t_reitit$core31301.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core31301.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core31301.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core31301.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core31301.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4223__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core31301.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4223__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.static_router,name);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core31301.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4223__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.static_router,name,path_params);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.wildcard_router,name,path_params);
}
}));

(reitit.core.t_reitit$core31301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$_DASH__GT_static_DASH_router,cljs.core.cst$sym$lookup,cljs.core.cst$sym$map__31300,cljs.core.cst$sym$wild,cljs.core.cst$sym$static_DASH_router,cljs.core.cst$sym$opts,cljs.core.cst$sym$wildcard_DASH_router,cljs.core.cst$sym$meta31302], null);
}));

(reitit.core.t_reitit$core31301.cljs$lang$type = true);

(reitit.core.t_reitit$core31301.cljs$lang$ctorStr = "reitit.core/t_reitit$core31301");

(reitit.core.t_reitit$core31301.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.core/t_reitit$core31301");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core31301.
 */
reitit.core.__GT_t_reitit$core31301 = (function reitit$core$__GT_t_reitit$core31301(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,map__31300__$2,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta31302){
return (new reitit.core.t_reitit$core31301(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,map__31300__$2,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta31302));
});

}

return (new reitit.core.t_reitit$core31301(names,compiled_routes,routes,__GT_static_router,lookup,map__31300__$1,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__31307 = arguments.length;
switch (G__31307) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths((function (){var or__4223__auto__ = cljs.core.cst$kw$reitit$core_SLASH_path_DASH_conflicting.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.impl.path_conflicting_routes(compiled_routes,opts);
}
})());
var conflicting_QMARK_ = (function (p1__31305_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__31305_SHARP_));
});
var map__31308 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__31308__$1 = cljs.core.__destructure_map(map__31308);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31308__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31308__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core31309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core31309 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__31308,mixed_router,linear_router,opts,meta31310){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.map__31308 = map__31308;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta31310 = meta31310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core31309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31311,meta31310__$1){
var self__ = this;
var _31311__$1 = this;
return (new reitit.core.t_reitit$core31309(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.map__31308,self__.mixed_router,self__.linear_router,self__.opts,meta31310__$1));
}));

(reitit.core.t_reitit$core31309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31311){
var self__ = this;
var _31311__$1 = this;
return self__.meta31310;
}));

(reitit.core.t_reitit$core31309.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core31309.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$quarantine_DASH_router;
}));

(reitit.core.t_reitit$core31309.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core31309.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core31309.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core31309.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core31309.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4223__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core31309.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4223__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.mixed_router,name);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core31309.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4223__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.linear_router,name,path_params);
}
}));

(reitit.core.t_reitit$core31309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$non_DASH_conflicting,cljs.core.cst$sym$names,cljs.core.cst$sym$conflicting_DASH_paths,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$conflicting,cljs.core.cst$sym$routes,cljs.core.cst$sym$conflicting_QMARK_,cljs.core.cst$sym$map__31308,cljs.core.cst$sym$mixed_DASH_router,cljs.core.cst$sym$linear_DASH_router,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta31310], null);
}));

(reitit.core.t_reitit$core31309.cljs$lang$type = true);

(reitit.core.t_reitit$core31309.cljs$lang$ctorStr = "reitit.core/t_reitit$core31309");

(reitit.core.t_reitit$core31309.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.core/t_reitit$core31309");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core31309.
 */
reitit.core.__GT_t_reitit$core31309 = (function reitit$core$__GT_t_reitit$core31309(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,map__31308__$2,mixed_router__$1,linear_router__$1,opts__$1,meta31310){
return (new reitit.core.t_reitit$core31309(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,map__31308__$2,mixed_router__$1,linear_router__$1,opts__$1,meta31310));
});

}

return (new reitit.core.t_reitit$core31309(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__31308__$1,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$lookup,(function reitit$core$default_router_options_$_lookup(p__31313,_){
var vec__31314 = p__31313;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31314,(0),null);
var map__31317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31314,(1),null);
var map__31317__$1 = cljs.core.__destructure_map(map__31317);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31317__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),cljs.core.cst$kw$expand,reitit.core.expand,cljs.core.cst$kw$coerce,(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),cljs.core.cst$kw$compile,(function reitit$core$default_router_options_$_compile(p__31318,_){
var vec__31319 = p__31318;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31319,(0),null);
var map__31322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31319,(1),null);
var map__31322__$1 = cljs.core.__destructure_map(map__31322);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31322__$1,cljs.core.cst$kw$handler);
return handler;
}),cljs.core.cst$kw$exception,reitit.exception.exception,cljs.core.cst$kw$conflicts,(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path_DASH_conflicts,conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description
 *   | -------------|-------------
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:syntax`    | Path-parameter syntax as keyword or set of keywords (default #{:bracket :colon})
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception` | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__31324 = arguments.length;
switch (G__31324) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__31325 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__31325__$1 = cljs.core.__destructure_map(map__31325);
var opts__$1 = map__31325__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31325__$1,cljs.core.cst$kw$router);
var conflicts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31325__$1,cljs.core.cst$kw$conflicts);
try{var routes = reitit.impl.resolve_routes(raw_routes,opts__$1);
var path_conflicting = ((cljs.core.not((function (){var and__4221__auto__ = router;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(conflicts);
} else {
return and__4221__auto__;
}
})()))?reitit.impl.path_conflicting_routes(routes,opts__$1):null);
var name_conflicting = reitit.impl.name_conflicting_routes(routes);
var compiled_routes = reitit.impl.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5753__auto___31331 = (function (){var and__4221__auto__ = conflicts;
if(cljs.core.truth_(and__4221__auto__)){
return reitit.impl.unresolved_conflicts(path_conflicting);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto___31331)){
var conflict_report_31332 = temp__5753__auto___31331;
(conflicts.cljs$core$IFn$_invoke$arity$1 ? conflicts.cljs$core$IFn$_invoke$arity$1(conflict_report_31332) : conflicts.call(null,conflict_report_31332));
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name_DASH_conflicts,name_conflicting);
} else {
}

var temp__5753__auto___31333 = cljs.core.cst$kw$validate.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5753__auto___31333)){
var validate_31334 = temp__5753__auto___31333;
(validate_31334.cljs$core$IFn$_invoke$arity$2 ? validate_31334.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_31334.call(null,compiled_routes,opts__$1));
} else {
}

var G__31328 = compiled_routes;
var G__31329 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.cst$kw$reitit$core_SLASH_path_DASH_conflicting,path_conflicting);
return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(G__31328,G__31329) : router__$1.call(null,G__31328,G__31329));
}catch (e31326){if((e31326 instanceof Error)){
var e = e31326;
throw (function (){var fexpr__31327 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.cst$kw$exception,cljs.core.identity);
return (fexpr__31327.cljs$core$IFn$_invoke$arity$1 ? fexpr__31327.cljs$core$IFn$_invoke$arity$1(e) : fexpr__31327.call(null,e));
})();
} else {
throw e31326;

}
}}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);

