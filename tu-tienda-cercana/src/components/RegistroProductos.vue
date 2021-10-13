<template>
  <div>
    <b-card class="container-fluid col-4">
      <b-form v-if="show">
        <h2>REGISTRO PRODUCTOS</h2>
        <b-form-group
          id="input-group-1"
          label="Nombre Tienda:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            placeholder="Ingresar nombre de la Tienda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Telefono:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Ingresar Teléfono"
            type="number"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="E-mail:" label-for="input-3">
          <b-form-input
            id="input-3"
            type="email"
            placeholder="Ingresar email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Tipo Producto:"
          label-for="input-4"
        >
          <b-form-select
            id="input-4"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Nombre Producto:"
          label-for="input-5"
        >
          <b-form-select
            id="input-5"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-7"
          label="Precio por Kilo"
          label-for="input-7"
        >
          <b-input-group prepend="$">
            <b-form-input
              id="input-7"
              placeholder="Ingresar precio Kg"
              type="number"
              required
            >
            </b-form-input>
          </b-input-group>
          
          <b-form-group
          id="input-group-8"
          label="Imagen:"
          label-for="input-8"
        >
          <b-form-select
            id="input-8"
            required
          ></b-form-select>
        </b-form-group>
          <b-button
          variant="success"
          class="btn my-10"
          >Registrar</b-button
        >
        </b-form-group>
          
      </b-form>
    </b-card>
    <div class="container-fluid col-10">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre Tienda</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Tipo Producto</th>
            <th scope="col">Nombre Producto</th>
            <th scope="col">Precio Kg</th>
            <th scope="col">Cambiar/Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in productos" :key="item._id">
            <td>{{ item.nombre_tienda }}</td>
            <td>{{ item.telefono_tienda }}</td>
            <td>{{ item.email_tienda }}</td>
            <td>{{ item.tipo_producto }}</td>
            <td>{{ item.nombre_producto }}</td>
            <td>$ {{ item.precio_kg }}</td>
            <td>
              <b-button
                @click="eliminarProductos(item._id)"
                variant="danger"
                rounded
                small
              >
                Borrar
              </b-button>

              <b-button variant="primary" rounded small> Cambiar </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import {fb} from "../firebase";
import "firebase/firestore";
let db =  fb.firestore()
export default {
  data() {
    return {
      datos:[],

      url_img: [
        { text: "Seleccione uno", value: null },
        "https://bit.ly/Ajo_",
        "https://bit.ly/Banano_",
        "https://bit.ly/Coco_coco",
        "https://bit.ly/Kiwi_Kiwi",
        "https://bit.ly/Lomo_res",
        "https://bit.ly/Mango_oneco",
        "https://bit.ly/Manzana_Roja",
        "https://bit.ly/Naranja_Naranja",
        "https://bit.ly/Pechuga_",
        "https://bit.ly/Pepino_",
        "https://bit.ly/Piña_",
        "https://bit.ly/Sobrebarriga_",
        "https://bit.ly/Tomate_Tomate",
        "https://bit.ly/Zanahoria_",        
            ],
      show: true,
    };
  },
  created(){
    console.log('hola')
    db.collection.map(doc => doc.data());
  }


};
</script>

<style scoped>
:root {
  --green: #2f7a2c;
  --yellow: #f4a94d;
  --hueso: #faf7ee;
  --gris-oscuro: #444444;
  font-family: "Poppins" "Krub";
}

.container-fluid {
  font-family: "Krub";
  background: var(--hueso);
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-top: 100px;
}

.container-fluid h2 {
  font-family: "Poppins";
  color: var(--green);
  text-align: center;
}

.btn {
  margin-top: 10px;
  margin-left: 10px;
  justify-content: center;
}
</style>