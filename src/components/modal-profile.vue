<template>
  <div class="overlay">
    <div class="modal-profile">
      <img
        src="public/mdi_close-circle-outline.svg"
        alt=""
        class="modal-profile__close"
        @click="closeModal"
      />
      <div class="modal-profile__user-info user-info">
        <img :src="user.avatar" alt="" class="user-info__img" />
        <form action="" class="user-info__form form">
          <fieldset class="form__fieldset">
            <label class="form__label">Name:</label>
            <input
              class="form__input"
              v-model="form.first_name"
              :disabled="!editMode"
            />
          </fieldset>
          <fieldset class="form__fieldset">
            <label class="form__label">Last name:</label>
            <input
              class="form__input"
              v-model="form.last_name"
              :disabled="!editMode"
            />
          </fieldset>
          <fieldset class="form__fieldset">
            <label class="form__label">e-mail:</label>
            <input
              class="form__input"
              v-model="form.email"
              :disabled="!editMode"
            />
          </fieldset>
        </form>
      </div>

      <div class="modal-profile__action">
        <button
          class="modal-profile__btn"
          @click="onDeleteUser"
          v-if="!editMode"
        >
          Удалить
        </button>
        <button
          class="modal-profile__btn"
          @click="editMode = true"
          v-if="!editMode"
        >
          Редактировать
        </button>

        <button
          class="modal-profile__btn"
          @click="onClickCanselBtn"
          v-if="editMode"
        >
          Отмена
        </button>
        <button class="modal-profile__btn" @click="onEditUser" v-if="editMode">
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { IUser } from '@/types/IUser'

  export default defineComponent({
    name: 'ModalProfile',
    data(): { form: IUser; editMode: boolean } {
      return {
        form: {
          id: -1,
          first_name: '',
          last_name: '',
          email: '',
          avatar: '',
        },
        editMode: false,
      }
    },
    methods: {
      closeModal(): void {
        this.$emit('update:modelValue', false)
      },
      copyUser(): void {
        this.form = JSON.parse(JSON.stringify(this.user))
      },
      onClickCanselBtn(): void {
        this.copyUser()
        this.editMode = false
      },
      onDeleteUser(): void {
        this.$store.commit('DELETE_USER', this.form)
        this.closeModal()
      },
      onEditUser(): void {
        this.editMode = false
        this.$store.commit('EDIT_USER', this.form)
        this.closeModal()
      },
    },
    props: {
      user: {
        type: Object as PropType<IUser>,
        required: true,
      },
    },
    created() {
      this.copyUser()
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
    gap: 20px;

    &__close {
      position: absolute;
      width: 48px;
      height: 48px;
      right: -50px;
      top: -50px;
      cursor: pointer;
    }

    &__action {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: end;
      gap: 10px;
      min-height: 55px;
    }

    &__btn {
      border: 1px solid #090042;
      background: #fff;
      border-radius: 10px;
      padding: 15px 0;
      width: 30%;
      font-size: 18px;

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
      border-radius: 25px;
    }

    &__form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-size: 18px;
      flex: 1 0 70%;
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
      width: 20%;
    }

    &__input {
      border: 1px solid #090042;
      border-radius: 5px;
      padding: 5px 10px;
      flex: 1 0 auto;
      width: 50%;

      font-family: Rubik, sans-serif;
      font-size: 18px;
      color: #000;

      &:disabled {
        border: none;
        background: none;
      }
    }
  }

  .overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(2, 0, 15, 0.5);

    top: 0;
    left: 0;
  }
</style>
