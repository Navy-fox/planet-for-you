<template>
  <div class="overlay">
    <div class="modal-profile">
      <img
        src="public/mdi_close-circle-outline.svg"
        alt=""
        class="modal-profile__close"
      />
      <div class="modal-profile__user-info user-info">
        <img
          src="https://reqres.in/img/faces/7-image.jpg"
          alt=""
          class="user-info__img"
        />
        <form action="" class="user-info__form form">
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

      <div class="modal-profile__action">
        <button class="modal-profile__btn">Удалить</button>
        <button class="modal-profile__btn">Редактировать</button>
      </div>
    </div>
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
    position: relative;

    margin: 15% auto auto;
    width: 50%;
    padding: 20px;
    border-radius: 10px;
    background: #fff;

    display: flex;
    flex-direction: column;
    gap: 10px;

    &__close {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;
    }
    &__action {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: end;
      gap: 10px;
      min-height: 50px;
    }
    &__btn {
      border: 1px solid #090042;
      background: #fff;
      border-radius: 10px;
      padding: 15px 0;
      width: 30%;

      cursor: pointer;
      box-shadow: 1px 3px 0 #090042;

      &:active {
        box-shadow: 1px 1px 0 #090042;
        align-self: end;
      }
    }
  }

  .user-info {
    display: flex;
    gap: 20px;
    align-items: center;
    &__img {
      grid-column: span 1;
      border-radius: 25px;
    }
    &__form {
      grid-column: span 5;
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

  .overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(2, 0, 15, 0.5);
  }
</style>
