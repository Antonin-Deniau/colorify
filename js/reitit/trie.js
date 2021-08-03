// Compiled by ClojureScript 1.10.866 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reitit.trie');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reitit.exception');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_(x)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.core.set(x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,x);

}
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
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k25931,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__25935 = k25931;
var G__25935__$1 = (((G__25935 instanceof cljs.core.Keyword))?G__25935.fqn:null);
switch (G__25935__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25931,else__4475__auto__);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__25936){
var vec__25937 = p__25936;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25937,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25937,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#reitit.trie.Wild{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25930){
var self__ = this;
var G__25930__$1 = this;
return (new cljs.core.RecordIter((0),G__25930__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__25940 = (function (coll__4469__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__25940(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25932,other25933){
var self__ = this;
var this25932__$1 = this;
return (((!((other25933 == null)))) && ((((this25932__$1.constructor === other25933.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25932__$1.value,other25933.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25932__$1.__extmap,other25933.__extmap)))))));
}));

(reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k25931){
var self__ = this;
var this__4479__auto____$1 = this;
var G__25941 = k25931;
var G__25941__$1 = (((G__25941 instanceof cljs.core.Keyword))?G__25941.fqn:null);
switch (G__25941__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k25931);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__25930){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__25942 = cljs.core.keyword_identical_QMARK_;
var expr__25943 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__25945 = cljs.core.cst$kw$value;
var G__25946 = expr__25943;
return (pred__25942.cljs$core$IFn$_invoke$arity$2 ? pred__25942.cljs$core$IFn$_invoke$arity$2(G__25945,G__25946) : pred__25942.call(null,G__25945,G__25946));
})())){
return (new reitit.trie.Wild(G__25930,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__25930),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__25930){
var self__ = this;
var this__4471__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__25930,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
}));

(reitit.trie.Wild.cljs$lang$type = true);

(reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
}));

(reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"reitit.trie/Wild");
}));

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__25934){
var extmap__4512__auto__ = (function (){var G__25947 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25934,cljs.core.cst$kw$value);
if(cljs.core.record_QMARK_(G__25934)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25947);
} else {
return G__25947;
}
})();
return (new reitit.trie.Wild(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__25934),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k25951,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__25955 = k25951;
var G__25955__$1 = (((G__25955 instanceof cljs.core.Keyword))?G__25955.fqn:null);
switch (G__25955__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25951,else__4475__auto__);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__25956){
var vec__25957 = p__25956;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25957,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25957,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#reitit.trie.CatchAll{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25950){
var self__ = this;
var G__25950__$1 = this;
return (new cljs.core.RecordIter((0),G__25950__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__25960 = (function (coll__4469__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__25960(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25952,other25953){
var self__ = this;
var this25952__$1 = this;
return (((!((other25953 == null)))) && ((((this25952__$1.constructor === other25953.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25952__$1.value,other25953.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25952__$1.__extmap,other25953.__extmap)))))));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k25951){
var self__ = this;
var this__4479__auto____$1 = this;
var G__25961 = k25951;
var G__25961__$1 = (((G__25961 instanceof cljs.core.Keyword))?G__25961.fqn:null);
switch (G__25961__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k25951);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__25950){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__25962 = cljs.core.keyword_identical_QMARK_;
var expr__25963 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__25965 = cljs.core.cst$kw$value;
var G__25966 = expr__25963;
return (pred__25962.cljs$core$IFn$_invoke$arity$2 ? pred__25962.cljs$core$IFn$_invoke$arity$2(G__25965,G__25966) : pred__25962.call(null,G__25965,G__25966));
})())){
return (new reitit.trie.CatchAll(G__25950,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__25950),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__25950){
var self__ = this;
var this__4471__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__25950,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
}));

(reitit.trie.CatchAll.cljs$lang$type = true);

(reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
}));

(reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"reitit.trie/CatchAll");
}));

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__25954){
var extmap__4512__auto__ = (function (){var G__25967 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25954,cljs.core.cst$kw$value);
if(cljs.core.record_QMARK_(G__25954)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25967);
} else {
return G__25967;
}
})();
return (new reitit.trie.CatchAll(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__25954),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k25971,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__25975 = k25971;
var G__25975__$1 = (((G__25975 instanceof cljs.core.Keyword))?G__25975.fqn:null);
switch (G__25975__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25971,else__4475__auto__);

}
}));

(reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__25976){
var vec__25977 = p__25976;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25977,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25977,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#reitit.trie.Match{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25970){
var self__ = this;
var G__25970__$1 = this;
return (new cljs.core.RecordIter((0),G__25970__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$data], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__25980 = (function (coll__4469__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__25980(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25972,other25973){
var self__ = this;
var this25972__$1 = this;
return (((!((other25973 == null)))) && ((((this25972__$1.constructor === other25973.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25972__$1.params,other25973.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25972__$1.data,other25973.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25972__$1.__extmap,other25973.__extmap)))))))));
}));

(reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,null,cljs.core.cst$kw$data,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k25971){
var self__ = this;
var this__4479__auto____$1 = this;
var G__25981 = k25971;
var G__25981__$1 = (((G__25981 instanceof cljs.core.Keyword))?G__25981.fqn:null);
switch (G__25981__$1) {
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k25971);

}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__25970){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__25982 = cljs.core.keyword_identical_QMARK_;
var expr__25983 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__25985 = cljs.core.cst$kw$params;
var G__25986 = expr__25983;
return (pred__25982.cljs$core$IFn$_invoke$arity$2 ? pred__25982.cljs$core$IFn$_invoke$arity$2(G__25985,G__25986) : pred__25982.call(null,G__25985,G__25986));
})())){
return (new reitit.trie.Match(G__25970,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25987 = cljs.core.cst$kw$data;
var G__25988 = expr__25983;
return (pred__25982.cljs$core$IFn$_invoke$arity$2 ? pred__25982.cljs$core$IFn$_invoke$arity$2(G__25987,G__25988) : pred__25982.call(null,G__25987,G__25988));
})())){
return (new reitit.trie.Match(self__.params,G__25970,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__25970),null));
}
}
}));

(reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__25970){
var self__ = this;
var this__4471__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__25970,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params,cljs.core.cst$sym$data], null);
}));

(reitit.trie.Match.cljs$lang$type = true);

(reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
}));

(reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"reitit.trie/Match");
}));

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__25974){
var extmap__4512__auto__ = (function (){var G__25989 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25974,cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data], 0));
if(cljs.core.record_QMARK_(G__25974)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25989);
} else {
return G__25989;
}
})();
return (new reitit.trie.Match(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__25974),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__25974),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k25993,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__25997 = k25993;
var G__25997__$1 = (((G__25997 instanceof cljs.core.Keyword))?G__25997.fqn:null);
switch (G__25997__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25993,else__4475__auto__);

}
}));

(reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__25998){
var vec__25999 = p__25998;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25999,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25999,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#reitit.trie.Node{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$children,self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wilds,self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_all,self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25992){
var self__ = this;
var G__25992__$1 = this;
return (new cljs.core.RecordIter((0),G__25992__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,cljs.core.cst$kw$wilds,cljs.core.cst$kw$catch_DASH_all,cljs.core.cst$kw$params,cljs.core.cst$kw$data], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (){var fexpr__26002 = (function (coll__4469__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
});
return fexpr__26002(this__4468__auto____$1);
})();
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25994,other25995){
var self__ = this;
var this25994__$1 = this;
return (((!((other25995 == null)))) && ((((this25994__$1.constructor === other25995.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25994__$1.children,other25995.children)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25994__$1.wilds,other25995.wilds)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25994__$1.catch_all,other25995.catch_all)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25994__$1.params,other25995.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25994__$1.data,other25995.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25994__$1.__extmap,other25995.__extmap)))))))))))))));
}));

(reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$children,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$wilds,null,cljs.core.cst$kw$catch_DASH_all,null,cljs.core.cst$kw$data,null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k25993){
var self__ = this;
var this__4479__auto____$1 = this;
var G__26003 = k25993;
var G__26003__$1 = (((G__26003 instanceof cljs.core.Keyword))?G__26003.fqn:null);
switch (G__26003__$1) {
case "children":
case "wilds":
case "catch-all":
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k25993);

}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__25992){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__26004 = cljs.core.keyword_identical_QMARK_;
var expr__26005 = k__4481__auto__;
if(cljs.core.truth_((function (){var G__26007 = cljs.core.cst$kw$children;
var G__26008 = expr__26005;
return (pred__26004.cljs$core$IFn$_invoke$arity$2 ? pred__26004.cljs$core$IFn$_invoke$arity$2(G__26007,G__26008) : pred__26004.call(null,G__26007,G__26008));
})())){
return (new reitit.trie.Node(G__25992,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26009 = cljs.core.cst$kw$wilds;
var G__26010 = expr__26005;
return (pred__26004.cljs$core$IFn$_invoke$arity$2 ? pred__26004.cljs$core$IFn$_invoke$arity$2(G__26009,G__26010) : pred__26004.call(null,G__26009,G__26010));
})())){
return (new reitit.trie.Node(self__.children,G__25992,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26011 = cljs.core.cst$kw$catch_DASH_all;
var G__26012 = expr__26005;
return (pred__26004.cljs$core$IFn$_invoke$arity$2 ? pred__26004.cljs$core$IFn$_invoke$arity$2(G__26011,G__26012) : pred__26004.call(null,G__26011,G__26012));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,G__25992,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26013 = cljs.core.cst$kw$params;
var G__26014 = expr__26005;
return (pred__26004.cljs$core$IFn$_invoke$arity$2 ? pred__26004.cljs$core$IFn$_invoke$arity$2(G__26013,G__26014) : pred__26004.call(null,G__26013,G__26014));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__25992,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__26015 = cljs.core.cst$kw$data;
var G__26016 = expr__26005;
return (pred__26004.cljs$core$IFn$_invoke$arity$2 ? pred__26004.cljs$core$IFn$_invoke$arity$2(G__26015,G__26016) : pred__26004.call(null,G__26015,G__26016));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__25992,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__25992),null));
}
}
}
}
}
}));

(reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$children,self__.children,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$wilds,self__.wilds,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$catch_DASH_all,self__.catch_all,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__25992){
var self__ = this;
var this__4471__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__25992,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$children,cljs.core.cst$sym$wilds,cljs.core.cst$sym$catch_DASH_all,cljs.core.cst$sym$params,cljs.core.cst$sym$data], null);
}));

(reitit.trie.Node.cljs$lang$type = true);

(reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
}));

(reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"reitit.trie/Node");
}));

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__25996){
var extmap__4512__auto__ = (function (){var G__26017 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25996,cljs.core.cst$kw$children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$wilds,cljs.core.cst$kw$catch_DASH_all,cljs.core.cst$kw$params,cljs.core.cst$kw$data], 0));
if(cljs.core.record_QMARK_(G__25996)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26017);
} else {
return G__26017;
}
})();
return (new reitit.trie.Node(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__25996),cljs.core.cst$kw$wilds.cljs$core$IFn$_invoke$arity$1(G__25996),cljs.core.cst$kw$catch_DASH_all.cljs$core$IFn$_invoke$arity$1(G__25996),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__25996),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__25996),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

var reitit$trie$Matcher$match$dyn_26020 = (function (this$,i,max,path){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.match[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4522__auto__.call(null,this$,i,max,path));
} else {
var m__4519__auto__ = (reitit.trie.match["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4519__auto__.call(null,this$,i,max,path));
} else {
throw cljs.core.missing_protocol("Matcher.match",this$);
}
}
});
reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
return reitit$trie$Matcher$match$dyn_26020(this$,i,max,path);
}
});

var reitit$trie$Matcher$view$dyn_26021 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.view[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (reitit.trie.view["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.view",this$);
}
}
});
reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
return reitit$trie$Matcher$view$dyn_26021(this$);
}
});

var reitit$trie$Matcher$depth$dyn_26022 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.depth[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (reitit.trie.depth["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.depth",this$);
}
}
});
reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
return reitit$trie$Matcher$depth$dyn_26022(this$);
}
});

var reitit$trie$Matcher$length$dyn_26023 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.length[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (reitit.trie.length["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.length",this$);
}
}
});
reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
return reitit$trie$Matcher$length$dyn_26023(this$);
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

var reitit$trie$TrieCompiler$data_matcher$dyn_26024 = (function (this$,params,data){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4522__auto__.call(null,this$,params,data));
} else {
var m__4519__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4519__auto__.call(null,this$,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.data-matcher",this$);
}
}
});
reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
return reitit$trie$TrieCompiler$data_matcher$dyn_26024(this$,params,data);
}
});

var reitit$trie$TrieCompiler$static_matcher$dyn_26025 = (function (this$,path,matcher){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4522__auto__.call(null,this$,path,matcher));
} else {
var m__4519__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4519__auto__.call(null,this$,path,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.static-matcher",this$);
}
}
});
reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
return reitit$trie$TrieCompiler$static_matcher$dyn_26025(this$,path,matcher);
}
});

var reitit$trie$TrieCompiler$wild_matcher$dyn_26026 = (function (this$,key,end,matcher){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4522__auto__.call(null,this$,key,end,matcher));
} else {
var m__4519__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4519__auto__.call(null,this$,key,end,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.wild-matcher",this$);
}
}
});
reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
return reitit$trie$TrieCompiler$wild_matcher$dyn_26026(this$,key,end,matcher);
}
});

var reitit$trie$TrieCompiler$catch_all_matcher$dyn_26027 = (function (this$,key,params,data){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4522__auto__.call(null,this$,key,params,data));
} else {
var m__4519__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4519__auto__.call(null,this$,key,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.catch-all-matcher",this$);
}
}
});
reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
return reitit$trie$TrieCompiler$catch_all_matcher$dyn_26027(this$,key,params,data);
}
});

var reitit$trie$TrieCompiler$linear_matcher$dyn_26028 = (function (this$,matchers,ordered_QMARK_){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4522__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
var m__4519__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4519__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
throw cljs.core.missing_protocol("TrieCompiler.linear-matcher",this$);
}
}
});
reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
return reitit$trie$TrieCompiler$linear_matcher$dyn_26028(this$,matchers,ordered_QMARK_);
}
});

var reitit$trie$TrieCompiler$_pretty$dyn_26029 = (function (this$,matcher){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie._pretty[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4522__auto__.call(null,this$,matcher));
} else {
var m__4519__auto__ = (reitit.trie._pretty["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4519__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-pretty",this$);
}
}
});
reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_pretty$dyn_26029(this$,matcher);
}
});

var reitit$trie$TrieCompiler$_path_matcher$dyn_26030 = (function (this$,matcher){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4522__auto__.call(null,this$,matcher));
} else {
var m__4519__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4519__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-path-matcher",this$);
}
}
});
reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_path_matcher$dyn_26030(this$,matcher);
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,cljs.core.cst$kw$params,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__4309__auto__ = cljs.core.count(s1);
var y__4310__auto__ = cljs.core.count(s2);
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),max);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s2,i))){
if((!((i === (0))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),i);
} else {
return null;
}
} else {
var G__26031 = (i + (1));
i = G__26031;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5751__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"/");
if(cljs.core.truth_(temp__5751__auto__)){
var i = temp__5751__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__26032){
var map__26033 = p__26032;
var map__26033__$1 = cljs.core.__destructure_map(map__26033);
var syntax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26033__$1,cljs.core.cst$kw$syntax,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$bracket,null], null), null));
var bracket_QMARK_ = cljs.core.cst$kw$bracket.cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var colon_QMARK_ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var _static = (function (from,to){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,from,to)], null);
} else {
return null;
}
});
var _wild = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild(reitit.trie._keyword(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var _catch_all = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.count(s))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ss,_static(from,to));
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,to);
if(cljs.core.truth_((function (){var and__4221__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",c);
} else {
return and__4221__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4223__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"}",to);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_unclosed_DASH_brackets,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,s], null));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(to + (1))))){
var G__26034 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all((to + (1)),to_SINGLEQUOTE_)], 0));
var G__26035 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__26036 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__26034;
from = G__26035;
to = G__26036;
continue;
} else {
var G__26037 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__26038 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__26039 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__26037;
from = G__26038;
to = G__26039;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",c);
} else {
return and__4221__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4223__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"/",to);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.count(s);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(to_SINGLEQUOTE_ - to))){
var G__26040 = ss;
var G__26041 = from;
var G__26042 = (to + (1));
ss = G__26040;
from = G__26041;
to = G__26042;
continue;
} else {
var G__26043 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__26044 = cljs.core.long$(to_SINGLEQUOTE_);
var G__26045 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__26043;
from = G__26044;
to = G__26045;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",c);
} else {
return and__4221__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count(s);
var G__26046 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all(to,to_SINGLEQUOTE_)], 0));
var G__26047 = cljs.core.long$(to_SINGLEQUOTE_);
var G__26048 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__26046;
from = G__26047;
to = G__26048;
continue;
} else {
var G__26049 = ss;
var G__26050 = from;
var G__26051 = (to + (1));
ss = G__26049;
from = G__26050;
to = G__26051;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path(reitit.trie.split_path(s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__26052,p__26053){
var vec__26054 = p__26052;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26054,(0),null);
var p1s = vec__26054;
var vec__26057 = p__26053;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26057,(0),null);
var p2s = vec__26057;
var _split = (function (p){
var temp__5751__auto__ = (function (){var and__4221__auto__ = p;
if(cljs.core.truth_(and__4221__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var i = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});
var _slash = (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cp),cljs.core.count(p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not(cp)))){
return _split(p);
} else {
return null;
}
}
}
});
var _postcut = (function (p__26060){
var vec__26061 = p__26060;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26061,(0),null);
var pps = vec__26061;
var i = (function (){var and__4221__auto__ = p;
if(cljs.core.truth_(and__4221__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4221__auto__ = i;
if(cljs.core.truth_(and__4221__auto__)){
return (i > (0));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null),cljs.core.rest(pps));
} else {
return pps;
}
});
var _tailcut = (function (cp,p__26064){
var vec__26065 = p__26064;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26065,(0),null);
var ps = vec__26065;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(_slash(cp,p),cljs.core.rest(ps));
});
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut(p1s),_postcut(p2s)], null);
} else {
var temp__5751__auto__ = (function (){var and__4221__auto__ = typeof p1 === 'string';
if(and__4221__auto__){
var and__4221__auto____$1 = typeof p2 === 'string';
if(and__4221__auto____$1){
return reitit.trie.common_prefix(p1,p2);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var cp = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut(cp,p1s),_tailcut(cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_parts_QMARK_ = (function reitit$trie$conflicting_parts_QMARK_(parts1,parts2){
while(true){
var vec__26068 = reitit.trie._slice_start(parts1,parts2);
var vec__26071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26068,(0),null);
var seq__26072 = cljs.core.seq(vec__26071);
var first__26073 = cljs.core.first(seq__26072);
var seq__26072__$1 = cljs.core.next(seq__26072);
var s1 = first__26073;
var ss1 = seq__26072__$1;
var vec__26074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26068,(1),null);
var seq__26075 = cljs.core.seq(vec__26074);
var first__26076 = cljs.core.first(seq__26075);
var seq__26075__$1 = cljs.core.next(seq__26075);
var s2 = first__26076;
var ss2 = seq__26075__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_(s1)) || (reitit.trie.catch_all_QMARK_(s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_(s1)) || (reitit.trie.wild_QMARK_(s2)))){
var G__26077 = reitit.trie._slice_end(s1,ss1);
var G__26078 = reitit.trie._slice_end(s2,ss2);
parts1 = G__26077;
parts2 = G__26078;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return false;
} else {
var G__26079 = ss1;
var G__26080 = ss2;
parts1 = G__26079;
parts2 = G__26080;
continue;

}
}
}
}
}
break;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
return reitit.trie.conflicting_parts_QMARK_(reitit.trie.split_path(path1,opts),reitit.trie.split_path(path2,opts));
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$children,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$wilds,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$catch_DASH_all,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY], null),m], 0)));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__26081,fp,params,data){
var vec__26082 = p__26081;
var seq__26083 = cljs.core.seq(vec__26082);
var first__26084 = cljs.core.first(seq__26083);
var seq__26083__$1 = cljs.core.next(seq__26083);
var path = first__26084;
var ps = seq__26083__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.cst$kw$data,data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,params], 0)):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first(ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_following_DASH_parameters,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,fp,cljs.core.cst$kw$parameters,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wilds,path], null),(function (n){
var G__26085 = (function (){var or__4223__auto__ = n;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__26086 = ps;
var G__26087 = fp;
var G__26088 = params;
var G__26089 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__26085,G__26086,G__26087,G__26088,G__26089) : reitit.trie._insert.call(null,G__26085,G__26086,G__26087,G__26088,G__26089));
}));
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$catch_DASH_all,path], null),reitit.trie._node(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$data,data], null))):((cljs.core.empty_QMARK_(path))?(reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(node,ps,fp,params,data) : reitit.trie._insert.call(null,node,ps,fp,params,data)):(function (){var or__4223__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p__26090){
var vec__26091 = p__26090;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26091,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26091,(1),null);
var temp__5751__auto__ = reitit.trie.common_prefix(p,path);
if(cljs.core.truth_(temp__5751__auto__)){
var cp = temp__5751__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cp,p)){
var n_SINGLEQUOTE_ = (function (){var G__26094 = n;
var G__26095 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(p)));
var G__26096 = fp;
var G__26097 = params;
var G__26098 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__26094,G__26095,G__26096,G__26097,G__26098) : reitit.trie._insert.call(null,G__26094,G__26095,G__26096,G__26097,G__26098));
})();
return cljs.core.reduced(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,((cp).length));
var rp_SINGLEQUOTE_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,((cp).length));
var n_SINGLEQUOTE_ = (function (){var G__26099 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__26100 = ps;
var G__26101 = fp;
var G__26102 = params;
var G__26103 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__26099,G__26100,G__26101,G__26102,G__26103) : reitit.trie._insert.call(null,G__26099,G__26100,G__26101,G__26102,G__26103));
})();
var n_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__26104 = reitit.trie._node(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null));
var G__26105 = null;
var G__26106 = null;
var G__26107 = null;
var G__26108 = null;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__26104,G__26105,G__26106,G__26107,G__26108) : reitit.trie._insert.call(null,G__26104,G__26105,G__26106,G__26107,G__26108));
})();
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$children,(function (children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
})));
}
} else {
return null;
}
}),null,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,path], null),(function (){var G__26109 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__26110 = ps;
var G__26111 = fp;
var G__26112 = params;
var G__26113 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__26109,G__26110,G__26111,G__26112,G__26113) : reitit.trie._insert.call(null,G__26109,G__26110,G__26111,G__26112,G__26113));
})());
}
})()
))));
var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,""], null));
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,cljs.core.cst$kw$data),child], 0)),cljs.core.cst$kw$children,cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie26114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie26114 = (function (meta26115){
this.meta26115 = meta26115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie26114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26116,meta26115__$1){
var self__ = this;
var _26116__$1 = this;
return (new reitit.trie.t_reitit$trie26114(meta26115__$1));
}));

(reitit.trie.t_reitit$trie26114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26116){
var self__ = this;
var _26116__$1 = this;
return self__.meta26115;
}));

(reitit.trie.t_reitit$trie26114.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie26114.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie26117 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie26117 = (function (meta26115,_,params,data,match,meta26118){
this.meta26115 = meta26115;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta26118 = meta26118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie26117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26119,meta26118__$1){
var self__ = this;
var _26119__$1 = this;
return (new reitit.trie.t_reitit$trie26117(self__.meta26115,self__._,self__.params,self__.data,self__.match,meta26118__$1));
}));

(reitit.trie.t_reitit$trie26117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26119){
var self__ = this;
var _26119__$1 = this;
return self__.meta26118;
}));

(reitit.trie.t_reitit$trie26117.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie26117.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return self__.match;
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie26117.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
}));

(reitit.trie.t_reitit$trie26117.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie26117.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie26117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta26115,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie26114], null)),cljs.core.cst$sym$params,cljs.core.cst$sym$data,cljs.core.cst$sym$match,cljs.core.cst$sym$meta26118], null);
}));

(reitit.trie.t_reitit$trie26117.cljs$lang$type = true);

(reitit.trie.t_reitit$trie26117.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie26117");

(reitit.trie.t_reitit$trie26117.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie26117");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie26117.
 */
reitit.trie.__GT_t_reitit$trie26117 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie26117(meta26115__$1,___$2,params__$1,data__$1,match__$1,meta26118){
return (new reitit.trie.t_reitit$trie26117(meta26115__$1,___$2,params__$1,data__$1,match__$1,meta26118));
});

}

return (new reitit.trie.t_reitit$trie26117(self__.meta26115,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie26114.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count(path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie26120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie26120 = (function (meta26115,_,path,matcher,size,meta26121){
this.meta26115 = meta26115;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta26121 = meta26121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie26120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26122,meta26121__$1){
var self__ = this;
var _26122__$1 = this;
return (new reitit.trie.t_reitit$trie26120(self__.meta26115,self__._,self__.path,self__.matcher,self__.size,meta26121__$1));
}));

(reitit.trie.t_reitit$trie26120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26122){
var self__ = this;
var _26122__$1 = this;
return self__.meta26121;
}));

(reitit.trie.t_reitit$trie26120.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie26120.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,self__.size)){
return reitit.trie.match(self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(i + j)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.path,j))){
var G__26142 = (j + (1));
j = G__26142;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie26120.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie26120.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie26120.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count(self__.path);
}));

(reitit.trie.t_reitit$trie26120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta26115,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie26114], null)),cljs.core.cst$sym$path,cljs.core.cst$sym$matcher,cljs.core.cst$sym$size,cljs.core.cst$sym$meta26121], null);
}));

(reitit.trie.t_reitit$trie26120.cljs$lang$type = true);

(reitit.trie.t_reitit$trie26120.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie26120");

(reitit.trie.t_reitit$trie26120.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie26120");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie26120.
 */
reitit.trie.__GT_t_reitit$trie26120 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie26120(meta26115__$1,___$2,path__$1,matcher__$1,size__$1,meta26121){
return (new reitit.trie.t_reitit$trie26120(meta26115__$1,___$2,path__$1,matcher__$1,size__$1,meta26121));
});

}

return (new reitit.trie.t_reitit$trie26120(self__.meta26115,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie26114.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie26123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie26123 = (function (meta26115,_,key,end,matcher,meta26124){
this.meta26115 = meta26115;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta26124 = meta26124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie26123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26125,meta26124__$1){
var self__ = this;
var _26125__$1 = this;
return (new reitit.trie.t_reitit$trie26123(self__.meta26115,self__._,self__.key,self__.end,self__.matcher,meta26124__$1));
}));

(reitit.trie.t_reitit$trie26123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26125){
var self__ = this;
var _26125__$1 = this;
return self__.meta26124;
}));

(reitit.trie.t_reitit$trie26123.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie26123.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,j)){
var temp__5751__auto__ = reitit.trie.match(self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,j);
var pred__26131 = cljs.core._EQ_;
var expr__26132 = c;
if(cljs.core.truth_((pred__26131.cljs$core$IFn$_invoke$arity$2 ? pred__26131.cljs$core$IFn$_invoke$arity$2(self__.end,expr__26132) : pred__26131.call(null,self__.end,expr__26132)))){
var temp__5751__auto__ = reitit.trie.match(self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__26134 = "%";
var G__26135 = expr__26132;
return (pred__26131.cljs$core$IFn$_invoke$arity$2 ? pred__26131.cljs$core$IFn$_invoke$arity$2(G__26134,G__26135) : pred__26131.call(null,G__26134,G__26135));
})())){
var G__26143 = true;
var G__26144 = (j + (1));
percent_QMARK_ = G__26143;
j = G__26144;
continue;
} else {
var G__26145 = percent_QMARK_;
var G__26146 = (j + (1));
percent_QMARK_ = G__26145;
j = G__26146;
continue;
}
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie26123.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie26123.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie26123.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie26123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta26115,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie26114], null)),cljs.core.cst$sym$key,cljs.core.cst$sym$end,cljs.core.cst$sym$matcher,cljs.core.cst$sym$meta26124], null);
}));

(reitit.trie.t_reitit$trie26123.cljs$lang$type = true);

(reitit.trie.t_reitit$trie26123.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie26123");

(reitit.trie.t_reitit$trie26123.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie26123");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie26123.
 */
reitit.trie.__GT_t_reitit$trie26123 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie26123(meta26115__$1,___$2,key__$1,end__$1,matcher__$1,meta26124){
return (new reitit.trie.t_reitit$trie26123(meta26115__$1,___$2,key__$1,end__$1,matcher__$1,meta26124));
});

}

return (new reitit.trie.t_reitit$trie26123(self__.meta26115,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie26114.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie26136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie26136 = (function (meta26115,_,key,params,data,match,meta26137){
this.meta26115 = meta26115;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta26137 = meta26137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie26136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26138,meta26137__$1){
var self__ = this;
var _26138__$1 = this;
return (new reitit.trie.t_reitit$trie26136(self__.meta26115,self__._,self__.key,self__.params,self__.data,self__.match,meta26137__$1));
}));

(reitit.trie.t_reitit$trie26136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26138){
var self__ = this;
var _26138__$1 = this;
return self__.meta26137;
}));

(reitit.trie.t_reitit$trie26136.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie26136.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param(self__.match,self__.key,reitit.trie.decode(path,i,max,true));
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie26136.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
}));

(reitit.trie.t_reitit$trie26136.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie26136.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie26136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta26115,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie26114], null)),cljs.core.cst$sym$key,cljs.core.cst$sym$params,cljs.core.cst$sym$data,cljs.core.cst$sym$match,cljs.core.cst$sym$meta26137], null);
}));

(reitit.trie.t_reitit$trie26136.cljs$lang$type = true);

(reitit.trie.t_reitit$trie26136.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie26136");

(reitit.trie.t_reitit$trie26136.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie26136");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie26136.
 */
reitit.trie.__GT_t_reitit$trie26136 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie26136(meta26115__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta26137){
return (new reitit.trie.t_reitit$trie26136(meta26115__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta26137));
});

}

return (new reitit.trie.t_reitit$trie26136(self__.meta26115,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie26114.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec((cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count(matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie26139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie26139 = (function (meta26115,_,matchers,ordered_QMARK_,size,meta26140){
this.meta26115 = meta26115;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta26140 = meta26140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie26139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26141,meta26140__$1){
var self__ = this;
var _26141__$1 = this;
return (new reitit.trie.t_reitit$trie26139(self__.meta26115,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta26140__$1));
}));

(reitit.trie.t_reitit$trie26139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26141){
var self__ = this;
var _26141__$1 = this;
return self__.meta26140;
}));

(reitit.trie.t_reitit$trie26139.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie26139.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__4223__auto__ = reitit.trie.match(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var G__26147 = (j + (1));
j = G__26147;
continue;
}
} else {
return null;
}
break;
}
}));

(reitit.trie.t_reitit$trie26139.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reitit.trie.view,self__.matchers);
}));

(reitit.trie.t_reitit$trie26139.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,self__.matchers)) + (1));
}));

(reitit.trie.t_reitit$trie26139.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie26139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta26115,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie26114], null)),cljs.core.cst$sym$matchers,cljs.core.cst$sym$ordered_QMARK_,cljs.core.cst$sym$size,cljs.core.cst$sym$meta26140], null);
}));

(reitit.trie.t_reitit$trie26139.cljs$lang$type = true);

(reitit.trie.t_reitit$trie26139.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie26139");

(reitit.trie.t_reitit$trie26139.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie26139");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie26139.
 */
reitit.trie.__GT_t_reitit$trie26139 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie26139(meta26115__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta26140){
return (new reitit.trie.t_reitit$trie26139(meta26115__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta26140));
});

}

return (new reitit.trie.t_reitit$trie26139(self__.meta26115,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie26114.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view(matcher);
}));

(reitit.trie.t_reitit$trie26114.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return (function (path){
var temp__5751__auto__ = reitit.trie.match(matcher,(0),cljs.core.count(path),path);
if(cljs.core.truth_(temp__5751__auto__)){
var match = temp__5751__auto__;
return reitit.trie.__GT_Match(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
}));

(reitit.trie.t_reitit$trie26114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta26115], null);
}));

(reitit.trie.t_reitit$trie26114.cljs$lang$type = true);

(reitit.trie.t_reitit$trie26114.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie26114");

(reitit.trie.t_reitit$trie26114.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"reitit.trie/t_reitit$trie26114");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie26114.
 */
reitit.trie.__GT_t_reitit$trie26114 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie26114(meta26115){
return (new reitit.trie.t_reitit$trie26114(meta26115));
});

}

return (new reitit.trie.t_reitit$trie26114(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__26149 = arguments.length;
switch (G__26149) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2(null,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__26150){
var vec__26151 = p__26150;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26151,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26151,(1),null);
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3(acc,p,d);
}),node,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(node,path,data,null);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__26154){
var map__26155 = p__26154;
var map__26155__$1 = cljs.core.__destructure_map(map__26155);
var opts = map__26155__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26155__$1,cljs.core.cst$kw$reitit$trie_SLASH_parameters,reitit.trie.map_parameters);
var parts = reitit.trie.split_path(path,opts);
var params = (function (){var G__26156 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,parts));
return (parameters.cljs$core$IFn$_invoke$arity$1 ? parameters.cljs$core$IFn$_invoke$arity$1(G__26156) : parameters.call(null,G__26156));
})();
return reitit.trie._insert((function (){var or__4223__auto__ = node;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path(path,opts),path,params,data);
}));

(reitit.trie.insert.cljs$lang$maxFixedArity = 4);

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler();
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__26159 = arguments.length;
switch (G__26159) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(options,reitit.trie.compiler());
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(options,compiler,cljs.core.PersistentVector.EMPTY);
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__26160,compiler,cp){
var map__26161 = p__26160;
var map__26161__$1 = cljs.core.__destructure_map(map__26161);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26161__$1,cljs.core.cst$kw$data);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26161__$1,cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26161__$1,cljs.core.cst$kw$children);
var wilds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26161__$1,cljs.core.cst$kw$wilds);
var catch_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26161__$1,cljs.core.cst$kw$catch_DASH_all);
var ends = (function (p__26162){
var map__26163 = p__26162;
var map__26163__$1 = cljs.core.__destructure_map(map__26163);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26163__$1,cljs.core.cst$kw$children);
var or__4223__auto__ = cljs.core.keys(children__$1);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});
var matchers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__26164 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26164,reitit.trie.data_matcher(compiler,params,data));
} else {
return G__26164;
}
})(),(function (){var iter__4622__auto__ = (function reitit$trie$iter__26165(s__26166){
return (new cljs.core.LazySeq(null,(function (){
var s__26166__$1 = s__26166;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26166__$1);
if(temp__5753__auto__){
var s__26166__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26166__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__26166__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__26168 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__26167 = (0);
while(true){
if((i__26167 < size__4621__auto__)){
var vec__26169 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__26167);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26169,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26169,(1),null);
cljs.core.chunk_append(b__26168,reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))));

var G__26196 = (i__26167 + (1));
i__26167 = G__26196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26168),reitit$trie$iter__26165(cljs.core.chunk_rest(s__26166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26168),null);
}
} else {
var vec__26172 = cljs.core.first(s__26166__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26172,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26172,(1),null);
return cljs.core.cons(reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))),reitit$trie$iter__26165(cljs.core.rest(s__26166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(children);
})()),(function (){var iter__4622__auto__ = (function reitit$trie$iter__26175(s__26176){
return (new cljs.core.LazySeq(null,(function (){
var s__26176__$1 = s__26176;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26176__$1);
if(temp__5753__auto__){
var s__26176__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26176__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__26176__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__26178 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__26177 = (0);
while(true){
if((i__26177 < size__4621__auto__)){
var vec__26179 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__26177);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26179,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26179,(1),null);
cljs.core.chunk_append(b__26178,(function (){var pv = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_multiple_DASH_terminators,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$terminators,ends__$1,cljs.core.cst$kw$path,reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})());

var G__26197 = (i__26177 + (1));
i__26177 = G__26197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26178),reitit$trie$iter__26175(cljs.core.chunk_rest(s__26176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26178),null);
}
} else {
var vec__26182 = cljs.core.first(s__26176__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26182,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26182,(1),null);
return cljs.core.cons((function (){var pv = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_multiple_DASH_terminators,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$terminators,ends__$1,cljs.core.cst$kw$path,reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})(),reitit$trie$iter__26175(cljs.core.rest(s__26176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(wilds);
})()),(function (){var iter__4622__auto__ = (function reitit$trie$iter__26185(s__26186){
return (new cljs.core.LazySeq(null,(function (){
var s__26186__$1 = s__26186;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26186__$1);
if(temp__5753__auto__){
var s__26186__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26186__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__26186__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__26188 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__26187 = (0);
while(true){
if((i__26187 < size__4621__auto__)){
var vec__26189 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4620__auto__,i__26187);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26189,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26189,(1),null);
cljs.core.chunk_append(b__26188,reitit.trie.catch_all_matcher(compiler,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p),params,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(c)));

var G__26198 = (i__26187 + (1));
i__26187 = G__26198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26188),reitit$trie$iter__26185(cljs.core.chunk_rest(s__26186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26188),null);
}
} else {
var vec__26192 = cljs.core.first(s__26186__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26192,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26192,(1),null);
return cljs.core.cons(reitit.trie.catch_all_matcher(compiler,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p),params,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__26185(cljs.core.rest(s__26186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(catch_all);
})());
if((cljs.core.count(matchers) > (1))){
return reitit.trie.linear_matcher(compiler,matchers,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matchers),(1))){
return cljs.core.first(matchers);
} else {
return reitit.trie.data_matcher(compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
}));

(reitit.trie.compile.cljs$lang$maxFixedArity = 3);

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__26200 = arguments.length;
switch (G__26200) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty(compiler,compiled_trie);
}));

(reitit.trie.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__26203 = arguments.length;
switch (G__26203) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher(compiler,compiled_trie);
}));

(reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2);

