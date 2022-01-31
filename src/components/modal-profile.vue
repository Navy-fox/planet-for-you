<template>
  <div class="modal-profile">
    <img
      src="https://reqres.in/img/faces/7-image.jpg"
      alt=""
      class="modal-profile__img"
    />
    <form action="" class="modal-profile__form form">
      <fieldset class="form__fieldset">
        <label class="form__label">Name:</label>
        <input class="form__input" v-model="form.firstName" disabled />
      </fieldset>
      <fieldset class="form__fieldset">
        <label class="form__label">Last name:</label>
        <input class="form__input" v-model="form.firstName" disabled />
      </fieldset>
      <fieldset class="form__fieldset">
        <label class="form__label">e-mail:</label>
        <input class="form__input" v-model="form.firstName" disabled />
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ModalProfile',
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
        },
      }
    },
  })
</script>

<style lang="scss">
  .modal-profile {
    grid-column: 1/3;

    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background: #fff;

    display: grid;
    grid-template-columns: repeat(6, 1fr);

    &__img {
      grid-column: span 2;
      border-radius: 25px;
    }
    &__form {
      grid-column: span 4;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }

  .form {
    &__fieldset {
      border: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
    &__label {
    }
    &__input {
      border: 1px solid #090042;
      border-radius: 5px;
      padding: 5px 10px;
      &:disabled {
        border: none;
      }
    }
  }
</style>
