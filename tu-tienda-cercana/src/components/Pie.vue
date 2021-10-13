<template>
    <footer>

        <div class="contenedor">

            <div class="col1">
                <div class="logo"></div>
                <p>&copy; Tu Tienda Cercana. 2021</p>

            </div>

            <div class="col2">

                <h2 class="titulo">Mapa del sitio</h2>
                <ul>
                    <a href="">
                        <li>Inicio</li>
                    </a>
                    <a href="">
                        <li>Productos</li>
                    </a>
                    <a href="">
                        <li>Tiendas</li>
                    </a>
                    <a href="">
                        <li>Blog</li>
                    </a>
                </ul>

            </div>

            <div class="col3">

                <h2 class="titulo">Acerca de nosotros: Grupo 2- Equipo 1</h2>
                <h3>Contacto</h3>
                <ul>
                    <li>jorgedavid23diaz@gmail.com</li>
                    <li>andrepijg@gmail.com</li>
                    <li>cajaramillob@gmail.com</li>
                    <li>oscreymar05@gmail.com</li>

                </ul>

            </div>

        </div>
    </footer>
</template>
<script>

</script>
<style scoped>
    :root {
  --hueso: #faf7ee;
  --verde: #2f7a2c;
  --amarillo: #ffab49;
  --gris-oscuro: #444444;
}

* {
  font-family: sans-serif;
  color: var(--hueso);
  font-family: "poppins", sans-serif;
  font-size: 0,5rem;
}

footer {
  width: 100%;
  background: var(--gris-oscuro);
  padding: 0px;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.contenedor {
  width: 100%;
  /* margin-left: 50px;
  margin-top: 10px;
  margin-right: 50px;
  margin-bottom: 10px; */
  display: flex;
  /* justify-content: space-between;*/
  flex-direction: column;
}
.contenedor .col1 {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.contenedor .col1 p {
  font-size: 1.2rem;
  padding: 40px 0 0 0;
}

.contenedor .col2 h2 {
  font-size: 1.4rem;
  display: inline-block;
  padding:20px;
}
.contenedor .col2 ul {
  display: flex;
  flex-direction: column;
  padding: 20px 0 0 0;
  list-style: none;
  justify-content: center;
}
.contenedor .col2 ul a {
  text-decoration: none;
  margin: 10px;
}
.contenedor .col2 ul a li {
  font-size: 1.2rem;
}
.contenedor .col3 {
  padding: 20px;
  align-items: center;
  text-align: right;
}
.contenedor .col3 h2 {
  font-size: 1.6rem;
  padding: 5px;
  display: inline-block;
}
.contenedor .col3 ul {
  list-style: none;
  padding: 0 0 0 5px;
  margin: 0;
}
.contenedor .col3 ul li {
  padding: 5px;
}
.contenedor .col1 .logo {
  background-image: url("https://res.cloudinary.com/dgjrfgl2e/image/upload/v1632289106/Tu%20Tienda%20Cercana/logo-TTC-01_saviwg.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 50px;
}
@media (min-width: 900px){
.contenedor .col2 h2 {
  font-size: 1rem;
  display: block;
}
.contenedor .col3 h2 {
  font-size: 1 rem;
  padding: 5px;
  display: block;
  text-align: right;
}
footer {
  width: 100%;
  background: var(--gris-oscuro);
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.contenedor {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.contenedor .col1{
    margin:10px;

}
.contenedor .col2{
    margin:10px;

}
.contenedor .col3{
    margin:10px;
}
}

</style>
