<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
      <div class="container-fluid" style="background: #2f7a2c">
        <router-link to="/">
         <a class="navbar-brand" href="#">
          <img
            img
            class="d-inline-block align-top"
            src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1632289106/Tu%20Tienda%20Cercana/logo-TTC-01_saviwg.svg"
            width="200"
          />
         </a>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" style="margin:0 0 0 7px;  style none;">
              <a class="nav-link active" aria-current="page" href="#" ><router-link to="/" style="text-decoration:none; color:#faf7ee;" >INICIO</router-link></a>
            </li>

            <li class="nav-item" style="margin: 7px;">
              <a> <router-link to="/productos" style="text-decoration:none; color:#faf7ee;" >PRODUCTOS</router-link></a>
            </li>

          </ul>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle "
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="background:#f4a94d;"
            >
              ACCEDER
            </button>
            <ul class="dropdown-menu dropdown-menu-end desplegable" id="desplegable">
              <li>
                <router-link to="/registro" style="color:black;"><button class="dropdown-item" type="button">REGISTRARSE</button></router-link>
                
              </li>
              <li>
                <router-link to="/login" style="color:black;"><button class="dropdown-item" type="button">ENTRAR</button></router-link>
              </li>
              <li>
                <router-link to="/tucuenta" style="color:black;"><button class="dropdown-item" type="button">TU CUENTA</button></router-link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  </div>
</template>

<script scope>
export default {
  name: "Navbar",
};
</script>

<style>
nav {
  background-color: #2f7a2c;
}
@media (max-width: 500px) {
  nav {
    height: 70px;
  }
  nav div a img {
    width: 150px;
  }
}
@media (max-width: 992px){
  #desplegable{
    left: 1px;
  }
}
a{
  text-decoration: none;
  font-family: 'Poppins';
  align-content: center;
  color: var(--hueso);
}
nav-item{
  margin-left: 100px;
}
navbar-nav{
  justify-content: center;
  align-content: center;
}
</style>
