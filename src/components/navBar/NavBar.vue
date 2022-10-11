<template>
    <nav id="nav">
        <router-link to="/" id="logo-url">
          <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">Home</router-link> |
        <router-link to="/list">list</router-link>
      </nav>
</template>
<script lang="js">

import NavBarComponent from './NavBarComponents';
export default NavBarComponent;
</script>

<style lang="scss">
@import './NavBar.scss';
</style>