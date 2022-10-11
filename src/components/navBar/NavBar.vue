<template>
    <nav id="nav">
        <router-link to="/" id="logo-url">
          <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">Início</router-link> 
        <router-link to="/lista">Dashboard</router-link>
      </nav>
</template>
<script lang="js">

import NavBarComponent from './NavBarComponents';
export default NavBarComponent;
</script>

<style lang="scss">
@import './NavBar.scss';
</style>