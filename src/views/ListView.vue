<template>
  <div class="main-container">
    <h1>This is an about page</h1>
    <Dashboard/>
  </div>
</template>

<script lang="js">

import Dashboard from '../components/dashboard/Dashboard.vue';
import Form from '../components/form/Form.vue';
export default {
  name: "Lista",
  components: {
    Dashboard
  }
}
</script>