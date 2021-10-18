<template>
    <div>
        <navbar/>
         <top-header></top-header>
         <tu-cuenta/> 
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import TuCuenta from '../components/TuCuenta.vue'
import Header from "../components/Top-Header";
export default {
    components:{
         TuCuenta,
         "top-header":Header,
         Navbar,
        }
    }
</script>

<style scoped>

</style>