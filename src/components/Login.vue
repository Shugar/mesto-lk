<template lang="pug">
  .login
    .login-title
      | Welcome To Your Personal Area
    input(type="text" placeholder="Login")
    input(type="password" placeholder="Password")
    button(type="submit") Log In
</template>

<script type="text/babel">
  export default {
    name: "LoginComponent",

    data () {
      return {
      }
    },

    methods: {
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .login {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    &-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    input {
      margin-top: 15px;
      width: 100%;
      padding: 8px 16px;
      border-radius: 3px;
      border: 1px #e3e3e3 solid;
      outline: none;

      transition: border 0.2s ease;
      will-change: border;

      &:hover {
         border: 1px #5C6BC0 solid;
      }

      &:focus {
        border: 1px #42A5F5 solid;
      }
    }

    button {
      background: #4CAF50;
      padding: 8px 16px;
      border-radius: 3px;
      border: none;
      color: #fff;
      margin-top: 15px;
      text-align: center;
      cursor: pointer;

      transition: background 0.2s ease;
      will-change: background;

      &:hover {
        background: #66BB6A;
      }
    }
  }
</style>
