import { createStore, Store } from 'vuex'
import User from '@/classes/User'
import createPersistedState from 'vuex-persistedstate'
import { loadUsers } from '@/api'
import { IUser } from '@/types/IUser'

declare module '@vue/runtime-core' {
  // declare your own store states

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<any>
  }
}

interface State {
  users: User[]
}

const store = createStore<State>({
  plugins: [createPersistedState()],
  state: {
    users: [],
  },
  actions: {
    async LOAD_USERS(context) {
      if (context.state.users.length) {
        return
      }
      //получить пользователей
      const users = await loadUsers()
      //вызвать мутацию, которая добавит пользователей в state
      context.commit('ADD_USERS', users)
    },
    async UPDATE_USERS(context) {
      const users = await loadUsers()
      context.commit('ADD_USERS', users)
    },
  },
  mutations: {
    //добавить пользователей в state
    ADD_USERS(state, payload: IUser[]) {
      state.users = payload.filter((i: IUser) => {
        try {
          return new User(i)
        } catch (e) {
          console.error(e)
          return false
        }
      })
    },
    EDIT_USER(state, payload: IUser) {
      let userIndex: number = state.users.findIndex(
        (user: IUser) => user.id === payload.id
      )
      if (state.users[userIndex]) {
        // @ts-ignore
        state.users[userIndex] = payload
      }
    },
    DELETE_USER(state, payload: IUser) {
      let userIndex: number = state.users.findIndex(
        (user: IUser) => user.id === payload.id
      )
      state.users.splice(userIndex, 1)
    },
  },
})

export { store }
