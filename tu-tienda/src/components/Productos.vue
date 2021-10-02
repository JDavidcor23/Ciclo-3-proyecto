<template>
    <div >
        <section id="team">
        <h2>Productos</h2>
        <section class="container">
            <article class="tarjetas tarjetas-1">
                <div class="contenedor-img">
                  <img class="carne imagen" src="https://i.ibb.co/Ms1V20q/carne.png" alt="carne"   >
                </div>
                <div class="padre_p">
                  <p>Carnes</p>
                </div>

                <a href="#">
                    <button>ir</button>
                </a>
            </article>
            <article class="tarjetas tarjetas-2">
                <div class="contenedor-img">
                    <img class="imagenes" src="https://i.ibb.co/thqvtsh/frutas.png" alt="frutas">
                </div>
                <div class="padre_p">
                  <p>Frutas</p>
                </div>

                <a href="#">
                    <button>ir</button>
                </a>
            </article>
            <article class="tarjetas tarjetas-3">
                <div class="contenedor-img">
                    <img  class="imagenes" src="https://i.ibb.co/wWWZyjV/vegetales.png" alt="vegetales">
                </div>
                <div class="padre_p">
                  <p>Vegetales</p>
                </div>
                <a href="#">
                    <button>ir</button>
                </a>
            </article>
        </section>
    </section>

    </div>
</template>
<script>
export default {
  name: 'Productos'
}
</script>
<style>
    :root {
  --green: #2f7a2c;
  --backgroud: #faf7ef;
  --yellow: #f4a94d;
  --letter: #eceeec;
  --hueso: #faf7ee;
  --amarillo: #ffab49;
  --gris-oscuro: #444444;
}

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------Jorge-estilos-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
#team h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
  color: var(--hueso);
  width: 200px;
  height: 50px;
  padding-top: 8px;
  background: var(--yellow);
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 20px;
}

#team {
  width: 100%;
  min-width: 320px;
}

#team .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}

#team .container .tarjetas {
  width: 300px;
  height: 250px;
  margin: 20px;
  display: grid;
  grid-template-columns: 100%;
  box-shadow: 1px 6px 21px -1px #000000;
  position: relative;
  border-radius: 10px;
  background: var(--green);
}
.contenedor-img{
  top: 10px;
  position: absolute;
  width: 300px;
  height: 200px;
  left: -1px;
  background: var(--hueso);
}

#team .container .tarjetas div .imagenes {
  width: 300px;
  height: 150px;
  border-radius: 20px;
  display: flex;
  justify-self: center;
  align-self: center;
}
#team .container .tarjetas div .carne{
  height: 200px;
}

.tarjetas a {
  justify-self: center;
  align-self: center;
}
.padre_p{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
}
.tarjetas .padre_p p {
  color: var(--gris-oscuro);
  font-weight: 600;
  font-size: 1.5rem;
  z-index: 1;
  margin: 0 auto;
  text-align: center;
}

.tarjetas a button {
  text-decoration: none;
  font-size: 20px;
  color: var(--letter);
  background: var(--yellow);
  border-radius: 30px;
  width: 200px;
  height: 40px;
  justify-self: center;
  align-self: center;
  border: none;
  left: 45px;
  top: 200px;
  position: absolute;
  transition: transform 0.2s;
}

.tarjetas a button:hover {
  cursor: pointer;
  transform: scale(1.1);
}

</style>