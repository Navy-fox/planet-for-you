<template>
  <div class="card-user">
    <img
      src="https://reqres.in/img/faces/7-image.jpg"
      alt=""
      class="card-user__img"
    />
    <div class="card-user__info info">
      <p class="info__name">Michael</p>
      <p class="info__email">michael.lawson@reqres.in</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'CardUser',
  })
</script>

<style lang="scss">
  .card-user {
    width: 100%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 3px 3px 4px 3px rgba(14, 0, 103, 0.25);

    display: flex;
    gap: 20px;
    padding: 25px 20px;

    &__img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }

    &__info {
      font-size: 18px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
