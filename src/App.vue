<template>
  <div id="app" class="app">
    <div class="header"></div>
    <div class="main wrapper">
      <h1 class="main__title">Hello ReqRes users!</h1>
      <CardUser v-for="(user, key) in users" :key="key" :user="user" />
      <div class="main__action">
        <button class="main__update-btn" @click="updateUsers">
          Обновить пользователей
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import CardUser from '@/components/card-user.vue'
  import ModalProfile from '@/components/modal-profile.vue'

  export default defineComponent({
    components: { ModalProfile, CardUser },
    computed: {
      users() {
        return this.$store.state.users
      },
    },
    methods: {
      updateUsers() {
        this.$store.dispatch('UPDATE_USERS')
      },
    },
    mounted() {
      this.$store.dispatch('LOAD_USERS') // this.$store
    },
  })
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Rubik, sans-serif;
  }
  input {
    border: none;
    outline: none;
  }

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    &__title {
      font-family: Rubik, sans-serif;
      font-size: 60px;
      font-weight: normal;

      margin: 20px auto;

      grid-column: span 3;
      align-self: center;
      justify-self: center;
    }

    &__action {
      grid-column: span 3;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      min-height: 55px;
    }

    &__update-btn {
      border: 1px solid #090042;
      background: #fff;
      border-radius: 10px;
      padding: 15px 0;
      width: 30%;
      font-size: 18px;
      height: 54px;

      cursor: pointer;
      box-shadow: 1px 3px 0 #090042;

      &:active {
        box-shadow: 1px 1px 0 #090042;
        align-self: end;
      }
    }
  }
</style>
