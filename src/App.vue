<template>
  <NavBar :logo="logo_src" :alt="app_name"/>
  <router-view/>
  <Footer/>
</template>
<script>

import NavBar from './components/navBar/NavBar.vue';
import Footer from './components/base/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      logo_src: "/logo/logo_header.png",
      app_name: "Crie seu cadastro"
    }
  },
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/colors.scss';


//padronizacao de fonts dos elementos.
#app {
  background-color: $gin;
}

* {
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  min-height: 250px;
  margin-bottom: 250px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: $juniper;

}
</style>
