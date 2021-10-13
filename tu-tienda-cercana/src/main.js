import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VueFire from 'vuefire';
Vue.use(VueFire);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false




//Initialize Firebase
// if (!firebase.apps.length) {
//     firebase.initializeApp({firebaseConfig});
//   }else {
//        firebase.app(); // if already initialized, use that one
//      }
    


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
