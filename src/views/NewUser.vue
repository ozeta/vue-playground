<template>
  <div class="Users">
    <h1 class="subheading grey--text text--darken-2">New user</h1>
    <v-container>
      <v-form v-model="valid" class="mx-4">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="user.firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="user.lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="user.email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">First N: {{ user.firstname }}</v-col>
            <v-col cols="12" md="4">Last N: {{ user.lastname }}</v-col>
            <v-col cols="12" md="4">email: {{ user.email }}</v-col>
          </v-row>
        </v-container>
        <v-btn text @click="action_add_user(user)">
          <span>Save</span>
          <v-icon>mdi-save</v-icon>
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "NewUser",
  data: () => ({
    valid: false,
    user : {firstname: "",
    lastname: "",
    email: ""},
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  components: {},
  methods: {
    ...mapActions({

      action_add_user: "users_module/action_add_user"
    })
  }
};
</script>