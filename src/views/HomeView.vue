<template>
  <Banner/>
  <div class="main-container">
    <h1>Cadastre-se agora mesmo!</h1>
    <Form/>
  </div>
</template>

<script lang="js">

import Banner from '../components/body/Banner.vue';
import Form from '../components/form/Form.vue';
export default {
  name: "Home",
  components: {
    Banner,
    Form
  }
}
</script>
