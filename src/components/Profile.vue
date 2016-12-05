<template lang="pug">
  .profile
    .profile-title
      | Profile

    .profile-info
      input(type="text" placeholder="Фамилия")
      input(type="text" placeholder="Имя")
      input(type="text" placeholder="Отчество")
      input(type="text" placeholder="Телефон")
      input(type="text" placeholder="Email")
      input(type="text" placeholder="Серия и номер паспорта")
      input(type="text" placeholder="Пароль")
      input(type="text" placeholder="Офис/место в опен-спейсе")
      input(type="text" placeholder="Статус")
      input(type="text" placeholder="Задолженность")
      button(type="submit") Save
</template>
<script type="text/babel">
  export default {
    name: "ProfileComponent",

    data () {
      return {
      }
    },

    methods: {
    }
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  .profile {
    padding: 90px 0;

    &-title {
      padding: 0 16px 20px;
      font-size: 24px;
      font-weight: bold;
    }

    &-info {
      padding: 0 16px;
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
