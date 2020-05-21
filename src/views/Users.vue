<template>
  <div class="Users">
    <h1 class="subheading grey--text text--darken-2">Users</h1>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" dark>
            <v-card-title class="headline">Users</v-card-title>
            <v-card-subtitle>*</v-card-subtitle>
            <v-card-actions></v-card-actions>
          </v-card>
        </v-col>

        <v-col v-for="(user) in users" :key="user.id" cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline">{{ user.name }}</v-card-title>
                <v-card-subtitle>{{ user.email }}</v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import { mapState } from "vuex";
// import { mapActions } from 'vuex'
export default {
  name: "Users",
  components: {},
  data() {
    return {};
  },
  computed:mapState({
      users: state => state.users
    })
  
};
</script>
