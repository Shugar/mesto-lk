<template lang="pug">
  #app
    list-component(v-if="false")
    login-component(v-if="true")
    profile-component(v-if="false")
</template>

<script>
  import 'whatwg-fetch';

  import ListComponent from 'components/List';
  import LoginComponent from 'components/Login';
  import ProfileComponent from 'components/Profile';


  export default {
    name: "App",

    components: {
      LoginComponent,
      ListComponent,
      ProfileComponent
    },

    data () {
      return {
      }
    },

    mounted () {
    },

    methods: {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import 'normalize.css';

  * {
    box-sizing: border-box;
  }

  html {
    overflow: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Work Sans', sans-serif;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }
</style>

<style lang="scss" scoped rel="stylesheet/scss">
  #app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>
