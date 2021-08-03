(ns colorify.colors
  (:require
   [thi.ng.color.core :as col]
   [colorify.store :as store]
   [thi.ng.math.core :as m]))

(def light-on-model [:model :direct 0.5])
(def refracted-on-model [:model [:surface :direct 0.4] 0.5])
(def blood-refraction [:model :blood 0.2])
(def light-on-model-blood [[:model :direct 0.5] :blood 0.2])


(defn is-too-dark? [hex] (< (col/brightness (col/css hex)) 0.5))

(defn ligh-force [key mod]
	(->> key store/force-key (@store/state) (#(/ (* mod %) 100))) )

(defn generate-gradient-pair [orig dest force]
		(m/mix 
				(if (vector? orig)
				 	(apply generate-gradient-pair orig)
				 	(->> orig  (@store/state)  col/css))
				(if (vector? dest)
				 	(apply generate-gradient-pair dest)
				 	(->> dest  (@store/state)  col/css))
				(ligh-force :direct force)))

(defn get-css-from-mix [mix] (->> mix	(apply generate-gradient-pair)	col/as-css deref))

(defn generate-gradient-scene []
	(->> [[:direct :direct 1]
							light-on-model
							[:model :model 1]
							refracted-on-model
							[:surface :surface 1]]
		(map get-css-from-mix)))

(defn generate-gradient-skintones []
	(->> [refracted-on-model
							[:model :model 1]
							light-on-model-blood
							blood-refraction]
		(map get-css-from-mix)))
