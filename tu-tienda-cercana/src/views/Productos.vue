<template>
    <div>
        <navbar/>
        <productos-int/> 
    </div>
</template>


<script>
import Navbar from '../components/Navbar.vue'
import ProductosInt from '../components/ProductosInt.vue'

export default {
        components:
         {
         ProductosInt,
         Navbar,
        },
}
    
    </script>