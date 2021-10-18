import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Home.vue'
import Registro from '../views/Registro.vue'
import TuCuenta from '../views/TuCuenta.vue'
import Login from '../views/Login.vue'
import Productos from '../views/Productos.vue'
import firebase from "firebase";
import "firebase/auth";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },

  
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tucuenta',
    name: 'TuCuenta',
    component: TuCuenta,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  }
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
