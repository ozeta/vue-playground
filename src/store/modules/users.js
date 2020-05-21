import axios from 'axios'
const users = {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    SET_USERS(state, data) {
      state.users = data
    }
  },
  actions: {
    loadUsers({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          commit('SET_USERS', res.data)
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    users(state) {
      return state.users;
    }
  }
}

export default users;