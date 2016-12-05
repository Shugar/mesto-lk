<template lang="pug">
  .list
    .header
      .header-logo
        | Residents of Mesto Place
    
      //- .header-login
      //-   | Log In
      .header-login
        .header-name
          | Nikita Shestakov
        .header-button
          | Log out
    
    .users
      .users-title
        | Users List
      .users-item
        | Tigran Tumasov
      .users-item
        | Boris Adimov
      .users-item
        | Nikita Golovin
      .users-item
        | Alex Taktarov
      .users-item
        | Ilya Sayapin
      .users-item
        | Anton Undefined
</template>

<script type="text/babel">
  export default {
    name: "ListComponent",

    data () {
      return {
      }
    },

    methods: {
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .header {
    background: #eee;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    padding: 10px 16px;

    &-login {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      cursor: pointer;
    }

    &-button {
      font-size: 12px;
      cursor: pointer;
    }

    &-name {
      font-weight: bold;

      margin-right: 20px;
    }
  }

  .users {
    margin-top: 50px;

    &-title {
      padding: 0 16px 20px;
      font-size: 24px;
      font-weight: bold;
    }

    &-item {
      padding: 10px 16px;
      cursor: pointer;

      transition: background 0.2s ease, color 0.2s ease;
      will-change: background, color;

      &:nth-child(odd) {
        background: #eee;
      }

      &:hover {
        background: black;
        color: #fff;
      }
    }
  }
</style>
