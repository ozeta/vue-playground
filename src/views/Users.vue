<template>
  <div class="Users">
    <h1 class="subheading grey--text text--darken-2">Users</h1>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" dark>
            <v-card-title class="headline">Users</v-card-title>
            <v-card-subtitle>*</v-card-subtitle>
            <v-card-actions>
              <v-btn text @click="action_load_users">Load users</v-btn>
              <v-btn absolute dark fab bottom right color="pink" link :to="item.link">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col v-for="(user) in users" :key="user.id" cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline">{{ user.name }}</v-card-title>
                <v-card-subtitle>{{ user.id }} @ {{ user.email }}</v-card-subtitle>
                <v-card-text class="text--primary">
                  {{ user.address.city }}
                  ({{ user.address.zipcode }}) -
                  {{ user.address.street }},
                  {{ user.address.suite }}
                </v-card-text>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Users",
  components: {},
  data() {
    return {
      item: {
        link: '/new_user'
      }
    };
  },
  methods: {
    ...mapActions({
      action_load_users: "users_module/action_load_users"
    })
  },
  created() {
    this.$store.dispatch("users_module/action_load_users");
  },
  computed: {
    ...mapGetters({
      // getter_filter_users: "users_module/filtered_users"
    }),
    ...mapState({
      users: state => state.users_module.users
    })
  }
};
</script>
