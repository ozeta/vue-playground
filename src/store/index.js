import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({

  state: {
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