import { createStore, Store } from 'vuex'
import User from '@/classes/User'
import createPersistedState from 'vuex-persistedstate'
import { loadUsers } from '@/api'
import { IUser } from '@/types/IUser'
import { IUserLog } from '@/types/IUserLog'
import { UserLog } from '@/classes/UserLog'
import { LogTypeUser } from '@/types/LogTypeUser'

declare module '@vue/runtime-core' {
  // declare your own store states
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<any>
  }
}

interface State {
  users: User[]
  logs: IUserLog[]
}

const store = createStore<State>({
  plugins: [createPersistedState()],
  state: {
    users: [],
    logs: [],
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
          const user = new User(i)
          // @ts-ignore
          this.commit('ADD_LOG', new UserLog(i.id, LogTypeUser.CREATE))
          return user
        } catch (error) {
          console.error(error)
          // @ts-ignore
          this.commit('ADD_LOG', new UserLog(i.id, LogTypeUser.ERROR, error))
          return false
        }
      })
    },
    EDIT_USER(state, payload: IUser) {
      let userIndex: number = state.users.findIndex(
        (user: IUser) => user.id === payload.id
      )
      if (state.users[userIndex]) {
        state.users[userIndex] = payload
        // @ts-ignore
        this.commit('ADD_LOG', new UserLog(payload.id, LogTypeUser.UPDATE))
      }
    },
    DELETE_USER(state, payload: IUser) {
      let userIndex: number = state.users.findIndex(
        (user: IUser) => user.id === payload.id
      )
      state.users.splice(userIndex, 1)

      // @ts-ignore
      this.commit('ADD_LOG', new UserLog(payload.id, LogTypeUser.DELETE))
    },

    ADD_LOG(state, payload: IUserLog) {
      state.logs.push(payload)
    },
  },
})

export { store }
