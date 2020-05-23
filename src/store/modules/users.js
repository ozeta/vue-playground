import axios from 'axios'

const users_module = {
  namespaced: true,
  state: {
    new_user: '',
    users: [{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }]
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
    action_add_user(context, state) {
      if (!state.new_user) {
        return
      }

      const user = {
        id: 333,
        name: "Marco",
        email: "ozeta86@gmail.com"
      }
      axios.post("/users", user).then(() => {
          context.commit('ADD_USER', user)
        })
    }
  },
  getters: {
    new_user: state => state.new_user,
    userss: state => state.users,
    filtered_users(state) {
      console.log("%cGetter invoked", "font-weight: bold;color:white; background: blue")
      return state.users.filter((obj) => obj.id > 3)
    }
  }
}

export default users_module