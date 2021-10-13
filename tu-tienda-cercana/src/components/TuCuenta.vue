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
      <p>Nombre De tienda:</p>
      <input class="primer-input" type="text" placeholder="Nombre de tienda" v-model="form.name">
      <p>Numero de Telefono:</p>
      <input type="number" placeholder="numero de telefono" v-model="form.phone">
      <p>E-mail:</p>
      <input type="email" placeholder="E-mail" v-model="form.email">
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
      <input type="number" placeholder="Precio" v-model="form.precio">
      <button type="submit" class="Guardar">Guardar</button>
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

                    <th>Name</th>
                    <th>Author</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   <tr v-for="c in comida" :key="c.alimento">
                    <td>
                      <a target="_blank">{{c.alimento}}</a>
                    </td>
                    <td>
                      {{c.precio}} 
                    </td>
                    <td>
                      <button  class="btn btn-danger" @click="deletecomida()">
                        Delete
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
        city:"",
        direction:"",
        name: "",
        phone: "",
        email: "",
        tipo:"",
        alimento:"",
        precio:"",
      },
      comida:[],
      id:[]
    }
  },
  created(){
          let user = fb.auth().currentUser
          var uid = user.uid;
          db.collection(uid).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
          this.comida.push(doc.data())
          this.id.push(doc.id)
        });
        });
  },
  methods: {
      addProducto() {
        let user = fb.auth().currentUser
        var uid = user.uid;
        db.collection(uid).add(this.form)
        this.form.tipo = '';
        this.form.alimento='';
        this.form.precio = '';
    },
  },
  deletecomida(){
      let user = fb.auth().currentUser
      var uid = user.uid;
      db.collection(uid).doc(this.id).delete().then(() => {
      console.log("Document successfully deleted!");
      }).catch((error) => {
      console.error("Error removing document: ", error);
  });
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
  height: 850px;
  border-radius: 5px;
  box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);
  margin: 0 auto;
  margin-top: 150px;
  display: flex;
  justify-content: center;
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
.Guardar{
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