<template>
  <v-navigation-drawer app :mini-variant="navDrawerOpen" :dark="isDarkMode">
    <div class="title d-flex align-center justify-center">Vue Dashboard</div>

    <v-divider></v-divider>

    <NavigationList />
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import NavigationList from './navigation/NavigationList.vue';

export default Vue.extend({
  name: 'MainNavbar',

  components: {
    NavigationList,
  },

  computed: {
    ...mapState('AppModule', [
      'navDrawerOpen',
      'navItems',
      'isDarkMode',
    ]),
  },
});
</script>
<style lang="scss" scoped>
.title {
  height: 64px;
}
</style>
