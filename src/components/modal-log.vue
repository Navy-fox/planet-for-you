<template>
  <div class="overlay">
    <div class="modal-body">
      <img
        src="@/assets/img/mdi_close-circle-outline.svg"
        alt=""
        class="modal-body__close"
        @click="closeModal"
      />
      <div class="modal-log">
        <table>
          <tr>
            <th>Время</th>
            <th>Id пользователя</th>
            <th>Действие</th>
            <th>Сообщение</th>
          </tr>
          <tr v-for="(log, key) in logs" :key="key">
            <td v-for="(i, k) in log" :key="k">{{ i }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ModalLog',
    methods: {
      closeModal(): void {
        this.$emit('update:modelValue')
      },
    },
    computed: {
      logs() {
        return this.$store.state.logs.reverse()
      },
    },
  })
</script>

<style lang="scss">
  .modal-log {
    max-width: 100%;
    height: 300px;
    overflow-y: auto;

    table {
      width: 100%;

      th {
        text-align: left;
      }
      td {
        padding: 5px 0;
      }
    }
  }
</style>
