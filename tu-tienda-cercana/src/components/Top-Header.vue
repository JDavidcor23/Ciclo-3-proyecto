<template>
  <div>
    <div class="contenedor-sesion">

      <button class="but" @click="signOut">Cerrar Secion</button>
    </div>
  </div>
</template>

<script>
import  firebase from "firebase";
import "firebase/auth";
export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "Login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="scss" scoped>
.contenedor-sesion{
  margin: 150px 0 40px;
  widows: 100%;
  display: flex;
  justify-content: center;
}
.contenedor-sesion button{
  background: #f4a94d;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 20px;
} 
</style>