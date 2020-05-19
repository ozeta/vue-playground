<template>
  <v-app class="blue lighten-4">
    <Drawer />
    <Appbar />
    <Content />
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Appbar from '@/components/Appbar';
import Drawer from '@/components/Drawer';
import Content from '@/components/Content';

export default {
  name: 'App',

  components: {
    Drawer,
    Appbar,
    Content
  },

  data: () => ({
    //
  }),
};
</script>
