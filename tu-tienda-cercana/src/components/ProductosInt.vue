<template>
<div class="col-12 contendor-cards-tiendas">
  <div class="card" v-for="iteradort in tiendas" :key="iteradort.id">
    <div class="card-body">
      <img v-bind:src="iteradort.url" alt="" class="card-img-imagenes"/>
      <div>
        <p class="card-title">{{iteradort.tipo}}: {{iteradort.alimento}}</p>
        <p class="card-title">${{iteradort.precio}} </p>
        <p>{{iteradort.name}}</p>
        <p>{{iteradort.city}}: {{iteradort.direction}}</p>
        <p>☎️{{iteradort.numero}}</p>
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
 import {fb} from "../firebase";
// import "firebase/firestore";
  let db =  fb.firestore()
// import "firebase/auth";
export default{
  data(){
    return{
      tiendas:[],
      url:''
    }
  },
  created(){

    db.collection('users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
      this.tiendas.push(doc.data())
    });
    });
  }
}
</script>
<style>
  .contendor-cards-tiendas{
    margin: 150px 0 0 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  .contendor-cards-tiendas div{
    display: flex;
    width: 380px;
    height: 700px;
    flex-direction: column;
    justify-items: center;
  }
  .card-img-imagenes{
    width: 300px;
    height:200px;
  }
  .card-body div{
    width: 80%;
    display: flex;
    flex-direction: column;

  }
  .card-body p{
    margin: 20px 0 20px 0;
    font-size: 1.4rem;
    padding: 10px;
    font-weight: bold;
  }
</style>