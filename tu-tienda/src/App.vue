<template>
  <div id="app">
    <navbar/>
    <carousel/>
    <productos/>
    <news/>
    <tiendas/>
    <pie/>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import Navbar from './components/Navbar.vue'
import News from './components/News.vue'
import Productos from './components/Productos.vue'
import Tiendas from './components/Tiendas.vue'
import Pie from './components/Pie.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Navbar,
    Productos,
    News,
    Tiendas,
    Pie

    },
    News
}
</script>

<style lang="scss">
</style>
