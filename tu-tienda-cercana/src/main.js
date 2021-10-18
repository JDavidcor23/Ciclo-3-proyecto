import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import store from "./store";
import firebase from "firebase";
import "firebase/auth";



Vue.prototype.$axios = axios;

Vue.config.productionTip = false




//Initialize Firebase
// if (!firebase.apps.length) {
//     firebase.initializeApp({firebaseConfig});
//   }else {
//        firebase.app(); // if already initialized, use that one
//      }
    


Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});