import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Productos from '../views/Productos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },

  {
    path: '/blog',
    name: 'Blog',
    component: Blog
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
  routes
})

export default router
