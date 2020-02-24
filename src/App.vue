<template>
  <v-app>
    <MainNavbar />
    <MainAppbar />
    <v-content>
      <router-view></router-view>
      <MainFooter />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import MainFooter from '@/components/Footer.vue';
import MainNavbar from '@/components/Navbar.vue';
import MainAppbar from '@/components/Appbar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    MainFooter,
    MainNavbar,
    MainAppbar,
  },

  data: () => ({
    //
  }),
});
</script>
