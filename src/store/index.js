import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({

  state: {
    drawer_status: true
  },
  mutations: {
    switch_drawer_status(state) {
      state.drawer_status = !state.drawer_status
    }
  },
  actions: {
    switch_drawer_status(context) {
      context.commit('switch_drawer_status')
    }
  },
  getters: {
    drawer_status(state) {
      return state.drawer_status;
    }
  }

})