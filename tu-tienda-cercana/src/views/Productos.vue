<template>
    <div>
        <navbar/>
        <productos-int/> 
    <!-- <registro-productos/> -->
    <!-- <prueba/> -->
    </div>
</template>


<script>
import Navbar from '../components/Navbar.vue'
// import Prueba from '../components/Prueba.vue'
// import RegistroProductos from '../components/RegistroProductos.vue'
 import ProductosInt from '../components/ProductosInt.vue'

export default {
        components:
         {
         ProductosInt,
         Navbar,
            //  RegistroProductos,
                //   Prueba,
             },
}
    
    </script>