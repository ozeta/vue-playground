<template>
  <nav>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="action_drawer_status"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <span>Sign out</span>
        <v-btn icon>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["action_drawer_status"])
  },
  computed: {
    ...mapState({
      drawer: state => state.drawer_status
    })
  }
};
</script>