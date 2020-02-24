<template>
  <v-app-bar app :dark="isDarkMode">
    <v-btn icon @click="toggleNavrawer"><v-icon>mdi-menu</v-icon></v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapMutations, mapState } from 'vuex';

export default Vue.extend({
  name: 'MainAppbar',

  computed: {
    ...mapState('AppModule', [
      'navDrawerOpen',
      'isDarkMode',
    ]),
  },

  methods: {
    ...mapMutations('AppModule', ['toggleNavrawer']),
  },
});
</script>
