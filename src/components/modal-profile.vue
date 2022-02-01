<template>
  <div class="overlay">
    <div class="modal-body modal-profile">
      <img
        src="@/assets/img/mdi_close-circle-outline.svg"
        alt=""
        class="modal-body__close"
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
              placeholder="Введите имя"
            />
          </fieldset>
          <fieldset class="form__fieldset">
            <label class="form__label">Last name:</label>
            <input
              class="form__input"
              v-model="form.last_name"
              :disabled="!editMode"
              placeholder="Введите фамилию"
            />
          </fieldset>
          <fieldset class="form__fieldset">
            <label class="form__label">e-mail:</label>
            <input
              class="form__input"
              v-model="form.email"
              :disabled="!editMode"
              placeholder="Введите email"
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
        <button
          class="modal-profile__btn"
          @click="onEditUser"
          v-if="editMode"
          :disabled="v$.$invalid"
        >
          Сохранить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { IUser } from '@/types/IUser'
  import useValidate from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'

  type Data = {
    form: IUser
    editMode: boolean
    v$: any
  }

  export default defineComponent({
    name: 'ModalProfile',
    data(): Data {
      return {
        form: {
          id: -1,
          first_name: '',
          last_name: '',
          email: '',
          avatar: '',
        },
        editMode: false,
        v$: useValidate(),
      }
    },

    validations: () => ({
      form: {
        email: { required, email },
        first_name: { required },
        last_name: { required },
      },
    }),
    methods: {
      closeModal(): void {
        this.$emit('update:modelValue')
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
</style>
