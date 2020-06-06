import Vue from 'vue'
import Vuex from 'vuex'
import users_module from './modules/users'
Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    users_module
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
    drawer_status: false
  },
  mutations: {
    mutate_drawer_status(state) {
      console.log("mutate_drawer_status")
      state.drawer_status = !state.drawer_status
    },
    mutate_show_drawer_status(state, show_drawer) {
      console.log("shutting off drawer")
      state.drawer_status = show_drawer
    },
  },
  actions: {
    action_drawer_status(context) {
      console.log("action_drawer_status")
      context.commit('mutate_drawer_status')
    },

    action_hide_drawer_status(context) {
      console.log("action_drawer_status")
      context.commit('mutate_show_drawer_status', false)
    },
    action_show_drawer_status({commit}, flag) {
      console.log("action_drawer_status")
      commit('mutate_show_drawer_status', flag)
    }    
  },
  getters: {
    drawer_status(state) {
      console.log("drawer: " + state.drawer_status)
      return state.drawer_status
    }
  }

})