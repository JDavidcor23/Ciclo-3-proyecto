<template>
  <div id="app">
    <div class="barra">
      <router-link to="/"></router-link> 
      <router-link to="/blog"></router-link> 
      <router-link to="/productos"></router-link> 
      <router-link to="/registro"></router-link>
      <router-link to="/tucuenta"></router-link>
      <router-link to="/login"></router-link>
      <router-view />
    </div>
  </div>
</template>
<script>

export default {

  data() {
    return {
    };
  }
};
</script>  

