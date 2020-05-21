<template>
  <!-- <v-navigation-drawer v-model="drawer_status" app> -->
  <v-navigation-drawer :value="drawer_status" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">Application</v-list-item-title>
        <v-list-item-subtitle>Drawer {{ drawer_status }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.link" :href="item.href">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
        items: [
          { title: 'Google', icon: 'mdi-magnify', href: 'https://google.com' },
          { title: 'Home', icon: 'mdi-image', link: '/' },
          { title: 'Users', icon: 'mdi-user', link: '/users' },
          { title: 'About', icon: 'mdi-help-box', link: '/about' },
        ]
    };
  },
  computed: {
    ...mapGetters([
      'drawer_status'
    ])
  }
};
</script>