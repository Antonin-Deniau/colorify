(ns colorify.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [accountant.core :as accountant]
   [colorify.store :as store]
   [colorify.actions :as actions]
   [colorify.colors :as colors]))

;; -------------------------
;; Routes

(def router
  (reitit/router
   [["/" :index]
    ["/about" :about]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

;; -------------------------
;; Page components

(defn color-chooser [title icon key & force?]
	[:div { 
		:class "color"
		:style {
			:background-color (key @store/state)
			:color (if (colors/is-too-dark? (key @store/state)) "white" "black") } }
			[:i { :class (str "color-cursor fas " icon) :style { :padding-right "1vw"} }] title
		[:input {
			:class "color-picker"
			:type :color
			:value (key @store/state)
			:on-change #(swap! store/state actions/change-color key (-> % .-target .-value))} ]
		(if force? "Force: ")
		(if force? [:input {
			:type :range
			:min 0
			:max 100
			:value ((store/force-key key) @store/state)
			:on-change #(swap! store/state actions/change-force (store/force-key key) (-> % .-target .-value int))
			}])])

(defn color-generated [name icon color]
	[:div {
		:style {
			:color (if (colors/is-too-dark? color) "white" "black")
			:background-color color	}
		:class "color"}
		[:i { :class (str "color-cursor fas " icon) :style { :padding-right "1vw"} }] name])

(defn gradient-generated []
	[:div [:div {
		:style {
			:background (str "linear-gradient(to right, " (clojure.string/join "," (colors/generate-gradient-scene))")")
  }
		:class "skin-tones"} "Scene colors"]
		[:i { :class "color-cursor fas fa-sun" :style { :left "0%" } }]
		[:i { :class "color-cursor fas fa-bowling-ball" :style { :left "50%" }}]
		[:i { :class "color-cursor fas fa-chess-board" :style { :left "100%" }}]
		[:i { :class "color-cursor fas fa-snowflake" :style { :left "75%" }}]
		[:i { :class "color-cursor fas fas fa-fire" :style { :left "25%" }}]
		])

(defn skin-tones []
	[:div [:div {
		:style {
			:background (str "linear-gradient(to right, " (clojure.string/join "," (colors/generate-gradient-skintones))")")
  }
		:class "skin-tones"} "Skin tones"] 
		[:i { :class "color-cursor fas fa-smile-beam" :style { :left "33%" } }]
		[:i { :class "color-cursor fas fa-heart" :style { :left "100%" }}]
		[:i { :class "color-cursor fas fa-snowflake" :style { :left "0%" }}]
		[:i { :class "color-cursor fas fas fa-fire" :style { :left "66%" }}]
		])

(defn color-page []
  (fn []
    [:span.main
     [:h1 "Colorify"]
     [:br]
     [:div { :class "color-container" } 
     	(color-chooser "Direct light:" "fa-sun" :direct true)
      (color-chooser "Model color:" "fa-bowling-ball" :model)
      (color-chooser "Surface color:" "fa-chess-board" :surface)
      (color-generated "Direct" "fa-fire" (colors/get-css-from-mix colors/light-on-model))
      (color-generated "Refracted" "fa-snowflake" (colors/get-css-from-mix colors/refracted-on-model))
      (color-generated "Blood refraction" "fa-heart" (colors/get-css-from-mix colors/blood-refraction))
      (gradient-generated) 
      (skin-tones)]]))

(defn about-page []
  (fn [] [:span.main
          [:h1 "About colorify"]]))

;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'color-page
    :about #'about-page))


;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [:header
        [:p [:a {:href (path-for :index)} "Home"] " | "
         [:a {:href (path-for :about)} "About colorify"]]]
       [page]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (rdom/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)
        ))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
