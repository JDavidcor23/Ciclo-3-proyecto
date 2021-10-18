<template>
  <div>
    <div class="container">
    <form class="formulario"  @submit.prevent="addProducto">
      <h2>REGISTRO PRODUCTOS</h2>
       <p>Ciudad:</p>
      <select name="select" v-model="form.city">
        <option>Leticia</option>
        <option>Medellín</option>
        <option>Arauca</option>
        <option>Barranquilla</option>
        <option>Cartagena de Indias</option>
        <option>Tunja</option>
        <option>Manizales</option>
        <option>Florencia</option>
        <option>Yopal</option>
        <option>Popayán</option>
        <option>Valledupar</option>
        <option>Quibdó</option>
        <option>Montería</option>
        <option>Bogotá</option>
        <option>Inírida</option>
        <option>San José del Guaviare</option>
        <option>Neiva</option>
        <option>Riohacha</option>
        <option>Santa Marta</option>
        <option> Villavicencio</option>
        <option>San Juan de Pasto</option>
        <option>San José de Cúcuta</option>
        <option>Mocoa</option>
        <option>Armenia</option>
        <option>Pereira</option>
        <option>San Andrés</option>
        <option>Bucaramanga</option>
        <option>Sincelejo</option>
        <option>Ibagué</option>
        <option>Cali</option>
        <option>Mitú</option>
        <option>Puerto Carreño</option>
      </select>
      <p>Direccion:</p>
      <input type="text" placeholder="Direccion"  v-model="form.direction">
      <p>Nombre de tienda:</p>
      <input class="primer-input" type="text" placeholder="Nombre de tienda" v-model="form.name">
      <p>Numero de telefono:</p>
      <input type="number" placeholder="numero de telefono" v-model="form.numero">
      <p>Tipo:</p>
      <select name="select" v-model="form.tipo">
        <option>Verduras</option>
        <option>Carnes</option>
        <option>Frutas</option>
      </select>
      <p>Alimento:</p>
      <select name="select" v-model="form.alimento">
        <option>Cebolla</option>
        <option>Papa</option>
        <option>Manzana</option>
        <option>Tomate</option>
        <option>Pollo</option>
        <option>Kiwi</option>
        <option>Carne de res</option>
        <option>Banano</option>
        <option>Ajo</option>
        <option>Coco</option>
        <option>Zanahoria</option>
        <option>Mango</option>
        <option>Pepino</option>
      </select>
      <p>Precio (Kg):</p>
      <input type="number" step="5" placeholder="Precio" v-model="form.precio">
      <button type="submit" class="botones-tu-cuenta">Guardar</button>
      <button @click="ver" class="botones-tu-cuenta">ver lista de productos</button>
    </form>
    <div class="contenedor-crud">
          <div class="col-sm-8 text-center">
          <div class="card">
            <div class="card-header">
              <h3>listas de Productos</h3>
            </div>
            <div class="card-body">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>

                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   <tr v-for="c in comida" :key="c.alimento">
                    <td>
                      <a target="_blank">{{c.data().alimento}}</a>
                    </td>
                    <td>
                      <a target="_blank">{{c.data().precio}}</a>
                    </td>
                    <td>
                      <button  class="btn btn-danger" @click="deletecomida(c.id)">
                        Borrar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    </div>
    </div>
    </div>
  </div>
</template>
<script>
import {fb} from "../firebase";
import "firebase/firestore";
let db =  fb.firestore()
export default {
  name: 'TuCuenta',
  data () {
    return {
      form: {
        city:null,
        direction:null,
        name: null,
        numero: null,
        tipo:null,
        alimento:null,
        precio:null,
        url:null
      },
      comida:[],


    }
  },
  methods: {
  addProducto() {
    if(this.form.alimento === 'Cebolla'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/GFJ0tg6/Cebolla-Cabezona.png'
    }
    else if(this.form.alimento === 'Ajo'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/r5F3N63/garlic-PNG12800.png'

    }
    else if(this.form.alimento === 'Banano'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/MhvNrnp/banana-1218133-1280.png'

    }
    else if(this.form.alimento === 'Pollo'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/Yyjdtws/carne-de-pollo.png'

    }
    else if(this.form.alimento === 'Carne de res'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/qnNFPVn/carne-de-res.png'

    }
    else if(this.form.alimento === 'Coco'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/2KMcCWf/coco.jpg'

    }
    else if(this.form.alimento === 'Kiwi'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/f0B15zW/kiwi.jpg'

    }
    else if(this.form.alimento === 'Mango'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/PMPRG7h/mango.png'

    }
    else if(this.form.alimento === 'Papa'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/RyKt6Ln/Papa.png'

    }
    else if(this.form.alimento === 'Manzana'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/BNRNdhQ/manzana-roja.png'

    }
    else if(this.form.alimento === 'Pepino'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/hg7tvFL/pepino.jpg'

    }
    else if(this.form.alimento === 'Tomate'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/rsdpHfW/tomate.jpg'

    }
    else if(this.form.alimento === 'Zanahoria'){
      this.form.url=""
      this.form.url ='https://i.ibb.co/g6KKdSn/zanahoria.jpg'

    }
      let user = fb.auth().currentUser
      var uid = user.uid;
      if(this.form.alimento != null && this.form.precio != null && this.form.direction != null && this.form.numero != null && this.form.name != null){
        db.collection('users').add(this.form)
        db.collection(uid).add(this.form)
        this.form.tipo = '';
        this.form.alimento='';
        this.form.precio = '';
      }
      else{
        alert(`         Tienes que agregar los campos obligatorios
        -Numero de Telefono
        -Nombre de la tienda
        -Dirección
        -Tipo de alimento
        -Precio
        `)
      }
      this.ver()
  },
   ver(){
    let user = fb.auth().currentUser
    var uid = user.uid;
    this.comida=[]
    db.collection(uid).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      this.comida.push(doc)
    });
    });
  },
  deletecomida(id){
    let user = fb.auth().currentUser
     var uid = user.uid;
     db.collection(uid).doc(id).delete().then(() => {
       console.log("Document successfully deleted!");
     }).catch((error) => {
       console.error("Error removing document: ", error);
   });
       this.ver()
  },
  }
}
</script>

<style scoped>
:root {
  --green: #2f7a2c;
  --backgroud: #faf7ef;
  --yellow: #f4a94d;
  --letter: #eceeec;
  --hueso: #faf7ee;
  --amarillo: #ffab49;
  --gris-oscuro: #444444;
}
*{
  color:black;
  font-family: "Poppins" "Krub";
}
.formulario{
  width: 320px;
  height: 950px;
  border-radius: 5px;
  box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--green); 
}
.formulario h2{
  padding: 20px;
  color: var(--letter);
}
.formulario input{
  margin: 10px;
  width: 300px;
}
.formulario p{
  color: var(--letter);
  margin: 10px 0 10px 10px;
}
.formulario select{
  width: 300px;
  margin: 0 0 2px 10px;
}
.botones-tu-cuenta{
  width: 150px;
  padding: 10px;
  margin: 10px 0 0 10px;
  border: none;
  border-radius: 20px;
  background: var(--amarillo);
}

.contenedor-crud{
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 700px) {
.formulario{
  width: 500px;
  align-items: center;
}
.formulario input{
  width: 355px;
}
.formulario select{
  width: 355px;
  margin: 0 0 2px 0px;

}
}
  

</style>