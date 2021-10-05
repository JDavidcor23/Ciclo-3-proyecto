<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
      <div class="container-fluid" style="background: #2f7a2c">
        <a class="navbar-brand" href="#">
          <img
            img
            class="d-inline-block align-top"
            src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1632289106/Tu%20Tienda%20Cercana/logo-TTC-01_saviwg.svg"
            width="200"
          />
        </a>
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
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">INICIO</a>
            </li>

            <li class="nav-item">
              <a> <router-link to="/productos">PRODUCTOS</router-link></a>
            </li>

            <li class="nav-item">
              <a><router-link to="/blog">BLOG</router-link></a>
            </li>
          </ul>

          <div class="forms">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Busca tu producto preferido"
                aria-label="Buscar"
              />
              <button
                class="btn"
                style="background-color: #ffab49"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>

          <div class="btn-group">
            <button
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="margin-left: 10px"
            >
              ACCEDER
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <button class="dropdown-item" type="button">REGISTRARSE</button>
              </li>
              <li>
                <button class="dropdown-item" type="button">ENTRAR</button>
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
