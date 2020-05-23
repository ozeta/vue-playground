<template>
  <div class="Users">
    <h1 class="subheading grey--text text--darken-2">New user</h1>
    <v-container>
      <v-form v-model="valid" class="mx-4">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-btn text>
          <span>Save</span>
          <v-icon>mdi-save </v-icon>
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import { mapState } from "vuex";
// import { mapActions } from "vuex";
export default {
  name: "NewUser",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  components: {}
};
</script>