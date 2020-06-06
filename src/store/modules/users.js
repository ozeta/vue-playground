import axios from 'axios'

const users_module = {
  namespaced: true,
  state: {
    new_user: '',
    users: []
  },
  mutations: {
    ADD_USER(state, data) {
      state.users.push(data)
    },
    SET_USERS(state, data) {
      state.users = data
    }
  },
  actions: {
    action_load_users(context) {
      console.log("getting users")
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          context.commit('SET_USERS', res.data)
          console.log("%cdata received", "font-weight: bold;color:white; background: blue")
          console.log(res.data)
        })
        .catch(error => console.log(error))
    },
    action_add_user({ commit, state }, user) {
      console.log("%cAction: add user", "font-weight: bold;color:white; background: blue")

      commit('ADD_USER', user)
      console.log(state)
      console.log("user:" +  user.firstname)
      // axios.post("/users", user).then(() => {
      //     context.commit('ADD_USER', user)
      //   })
    }
  },
  getters: {
    new_user: state => state.new_user,
    users: state => state.users,
    filtered_users(state) {
      console.log("%cGetter invoked", "font-weight: bold;color:white; background: blue")
      return state.users.filter((obj) => obj.id > 3)
    }
  }
}

export default users_module