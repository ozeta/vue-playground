import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    users
  },
  state: {
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People',
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
      },
    ],
    drawer_status: true
  },
  mutations: {
    mutate_drawer_status(state) {
      state.drawer_status = !state.drawer_status
    }
  },
  actions: {
    action_drawer_status(context) {
      context.commit('mutate_drawer_status')
    }
  },
  getters: {
    drawer_status(state) {
      return state.drawer_status;
    }
  }

})