import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { Store } from 'vuex'
import { loadUsers } from '@/api'
import { User } from '@/types/User'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<any>
  }
}

const store = createStore({
  state: {
    users: [],
  },
  actions: {
    async LOAD_USERS(context) {
      //получить пользователей
      const users = await loadUsers()
      //вызвать мутацию, которая добавит пользователей в state
      context.commit('ADD_USERS', users)
    },
  },
  mutations: {
    //добавить пользователей в state
    ADD_USERS(state, payload: []) {
      state.users = payload
    },
    EDIT_USER(state, payload: User) {
      let userIndex: number = state.users.findIndex(
        (user: User) => user.id === payload.id
      )
      if (state.users[userIndex]) {
        // @ts-ignore
        state.users[userIndex] = payload
      }
    },
    DELETE_USER(state, payload: User) {
      let userIndex: number = state.users.findIndex(
        (user: User) => user.id === payload.id
      )
      state.users.splice(userIndex, 1)
    },
  },
})

const app = createApp(App)
app.use(store)
app.mount('#app')
