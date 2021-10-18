<template>
    <div>
        <navbar/>
        <login/> 
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
 import Login from '../components/Login.vue'
    export default {
  components: { 
    Login, 
       Navbar, 
      },
        
    }
</script>

<style scoped>

</style>