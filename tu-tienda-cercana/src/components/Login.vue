<template>
    <div class="contenedor-login">
        <form @submit.prevent="pressed" class="formulario-login">
            <h2>Entrar</h2>
            <div class="email">
                <input type="email" v-model="email" placeholder="email">
            </div>
            <div class="password-container">
                <input type="password" v-model="password" placeholder="Contraseña">
            </div>
            <button type="submit">Iniciar secion</button>
        <span class="tienes" >¿No tienes una cuenta? dale click aquí <router-link to="/registro" style="color:#f4a94d;">Registrarse</router-link></span>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase';
import "firebase/auth";
    export default {
        methods:{
            pressed() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(data => {
                console.log(data);
                 this.$router.replace({ name: "TuCuenta" });
            }).catch(error => {
                this.error = error;
            });
        }
        },
        data(){
            return{
                email: "",
                password: "",
                error: ""
            }
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
  --verde: #2f7a2c;
  --amarillo: #ffab49;
  --gris-oscuro: #444444;
}
 .error{
    color:red;
    font-size: 1.4rem;
}
.contenedor-login{
    color: white;
    text-align: center;
    width: 90%;
    margin:0 auto;
    margin-top: 130px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-content: center;
}
.formulario-login{
    padding: 5px;
    width: 400px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--green);
}

input{
    width: 300px;
    padding:30px;
    height: 40px;
    border: none;
    border-radius: 30px;
    box-shadow: 5px 3px 10px -1px #000000;
    margin:20px 0 20px 0;
    font-size: 1.8rem;
} 
button{
    width: 300px;
    height: 45px;
    border: none;
    color: var(--letter);
    background: var(--amarillo);
    font-size: 1.4rem;
    margin: 20px;
}
</style>