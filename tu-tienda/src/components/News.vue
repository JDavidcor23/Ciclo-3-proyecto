<template>
  <div id="news" class="container mt-50 mb-100">
    <div class="row">
      <div class="col">
        <div class="card mb-6 mt-20" style="max-width: 100%">
          <div class="row g-0">
            <div class="card-header">Nuestro Blog Saludable</div>
            <div class="col-md-4">
              <img
                style="align-rigth"
                src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1633049670/Tu%20Tienda%20Cercana/blog_saludable_rfeg1r.jpg"
                alt="frutas"
                class="img-fluid rounded-start"
              />
            </div>

            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">
                  Muchos creemos que llevar una vida saludable, una dieta sana y
                  una rutina de ejercicios es cada vez más difícil con lo
                  demandante que se ha vuelto nuestra sociedad. Las largas
                  jornadas laborales, el estrés del tráfico, las actividades
                  diarias, la familia y muchos otros aspectos más son factores
                  que pueden limitar la práctica de buenos hábitos de salud si
                  no se tiene la información correcta.
                </p>
                <button class="btn">
                  <router-link to="/blog">Leer más...</router-link>
                </button>
                <!-- < src="/blog" class="btn" target="_blank">Leer más...</> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card mb-3" style="max-width: 100%">
          <div class="row g-0">
            <div class="card-header">Blog Recomendado</div>
            <div class="col-md-4">
              <img
                src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1633049670/Tu%20Tienda%20Cercana/adelgaza_con_susy_n6jgoa.jpg"
                alt="frutas"
                class="img-fluid align-rigth rounded-start"
              />
            </div>

            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">
                  Susi es dietista y por su experiencia con el manejo del
                  sobrepeso decidió desarrollar este blog para aportar a su
                  comunidad de lectores recetas y menús nutritivos para perder
                  peso. La autora admite que no hay fórmulas mágicas ni
                  alimentos exclusivos para adelgazar, por ello recomienda
                  cambiar los hábitos alimenticios por unos más saludables,
                  aprender a comer mejor y mantener la nueva rutina para
                  alcanzar el peso deseado.
                </p>
                <a href="https://cutt.ly/OEzQBx8" class="btn" target="_blank"
                  >Adelgaza con Susi</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>





<script>
export default {
  name: "News",
};
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
  font-family: "Poppins" "Krub";
}

.card {
  margin-top: 20px;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 30px;
  box-shadow: 1px 6px 21px -1px #000000;
  border: none;
}

.card-header {
  background: var(--green);
  font-size: 1.6rem;
  font-family: "Poppins";
  color: var(--hueso);
}

.card-body p {
  padding: 10px;
  background: #ffff;
  font-family: "Krub";
  color: var(--gris-oscuro);
  text-align: justify;
}

.card-text p {
  padding: 10px;
  background: #ffff;
  font-family: "Krub";
  color: var(--gris-oscuro);
  text-align: justify;
}

.btn {
  background: var(--amarillo);
  color: var(--gris-oscuro);
  text-decoration: none;
}
@media (min-width: 356px) {
  .card {
    margin: 20px;
    box-shadow: 1px 3px 9px -1px #000000;
    border: none;
  }

  .card-header {
    background: var(--green);
    font-size: 1.3rem;
  }

  .card-body p {
    padding: 10px;
    background: #ffff;
    font-family: "Krub";
    color: var(--gris-oscuro);
    text-align: justify;
    font-size: 1rem;
  }
}
</style>