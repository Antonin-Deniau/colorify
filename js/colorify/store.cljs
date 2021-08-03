(ns colorify.store
   (:require [reagent.core :as r]))

(def init-state {
	:direct "#d7e774"
	:model "#e19898"
	:surface "#00e1ff"
	:force-direct 95
	:blood "#660000"
	})

(def state (r/atom init-state))

(defn force-key [key] (keyword (str "force-" (name key))))
