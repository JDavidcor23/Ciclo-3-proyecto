<template>
  <div class="container mb-3 mt-400 mb-400">
    <div class="card" style="margin: 20px 20px 0 20px">
      <img
        src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1633319763/Tu%20Tienda%20Cercana/productos_zqgusu.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body" style="text-align: center;">
        <button class="btn-producto btn-dark">
          <router-link to="/Productos-Int"> Ir </router-link>>
        </button>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "Productos",
};
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

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}

.card {
  margin-top: 20px;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 30px;
  box-shadow: 1px 6px 21px -1px #000000;
  justify-content: center;
  border: none;
}

.card-header {
  background: var(--amarillo);
  font-size: 3rem;
}

.card-body {
  justify-content: center;
  align-content: center;
  align-items: center;
}

.btn-producto {
  justify-content: center;
  width: 200px;
  height: 50px;
  border: none;
  background: var(--yellow);
  border-radius: 15px;
}
</style>