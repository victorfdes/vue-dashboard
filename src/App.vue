<template>
  <v-app>
    <MainNavbar />
    <MainAppbar />
    <v-content>
      <div :class="pageContentClass" style="height: 100%">
        <router-view></router-view>
      </div>
      <MainFooter />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
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

  computed: {
    ...mapState('AppModule', [
      'isDarkMode',
    ]),

    pageContentClass() {
      return ({
        'grey darken-4': this.isDarkMode,
        'pa-4': true,
        'pb-12': true,
      });
    },
  },

});
</script>
<style lang="scss" scoped>

</style>
