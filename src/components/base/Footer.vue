<template>
    <footer id="footer">
        <p> &copy; Todos os direitos reservados {{ new Date().getFullYear() }} </p>
    </footer>
</template>
<script lang="js">

import FooterComponent from './FooterComponent';
export default FooterComponent;
</script>

<style lang="scss">
@import './Footer.scss';
</style>