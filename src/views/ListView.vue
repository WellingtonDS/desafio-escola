<template>
  <div class="main-container">
    <h1>Listagem alunos cadastrados!</h1>
    <Dashboard/>
  </div>
</template>

<script lang="js">

import Dashboard from '../components/dashboard/Dashboard.vue';

export default {
  name: "Lista",
  components: {
    Dashboard
  }
}
</script>