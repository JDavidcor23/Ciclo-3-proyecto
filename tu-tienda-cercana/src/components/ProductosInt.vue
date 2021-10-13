<template>
<div class="col-12 contendor-cards-tiendas">
  <div class="card">
    <img src="" alt="" class="card-img-top"/>
    <div class="card-body">
      <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <h5 class="card-title">Nombre Tienda</h5>
        <h5>Teléfono Tienda</h5>
        </li>
      
      <li class="list-group-item">
        <h5>Nombre Producto</h5>
        <h5>$  <span></span></h5>
      </li>
      </ul>
      <button class="btn btn-dark">Comprar</button>
    </div>
  </div>
</div>
  
</template>
<script>
import {fb} from "../firebase";
import "firebase/firestore";

let db =  fb.firestore()
export default{
  created(){
    db.collection.forEach(doc => console.log(doc.id, doc.data()));
  }
}
</script>
<style>
  .contendor-cards-tiendas{
    margin: 150px 0 0 0;
  }
</style>