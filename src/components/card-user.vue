<template>
  <div class="card-user" @click.stop="openModal">
    <img :src="user.avatar" alt="" class="card-user__img" />
    <div class="card-user__info info">
      <p class="info__name">{{ user.first_name }}</p>
      <p class="info__email">{{ user.email }}</p>
    </div>
  </div>

  <teleport to="#app">
    <transition name="modal" appear>
      <ModalProfile v-model="modal.open" v-if="modal.open" :user="user" />
    </transition>
  </teleport>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import ModalProfile from '@/components/modal-profile.vue'
  import { IUser } from '@/types/IUser'

  export default defineComponent({
    name: 'CardUser',
    components: { ModalProfile },
    props: {
      user: {
        type: Object as PropType<IUser>,
        required: true,
      },
    },
    methods: {
      openModal() {
        this.modal.open = true
      },
    },
    data: () => ({
      modal: {
        open: false,
      },
    }),
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

    cursor: pointer;

    &__img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
    }

    &__info {
      font-size: 18px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
