<template>
  <div class="home">
    Home
    <p>
    status: {{ drawer }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {};
  },
  computed: mapState({
    drawer: state => state.drawer_status
  })
}
</script>
