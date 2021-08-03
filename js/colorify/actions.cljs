(ns colorify.actions
  (:require [colorify.store :as store]))


(defn reset-state [state] store/init-state)


(defn change-color [state key value] (assoc state key value))
(defn change-force [state key value] (assoc state key value))