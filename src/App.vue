<template>
  <div class="app">
    <div class="header"></div>
    <div class="main wrapper">
      <CardUser />
      <CardUser />
      <CardUser />
      <ModalProfile />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import CardUser from '@/components/card-user.vue'
  import ModalProfile from '@/components/modal-profile.vue'

  export default defineComponent({
    components: { ModalProfile, CardUser },
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

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
  }
</style>
