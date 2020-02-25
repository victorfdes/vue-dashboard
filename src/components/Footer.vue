<template>
  <v-footer absolute :dark="isDarkMode">
    Vue Dashboard &middot; &copy; 2020 &middot; Created by Victor Fernandes
    <v-btn icon href="https://victor-fernandes.com" target="_blank">
      <v-icon small>mdi-open-in-new</v-icon>
    </v-btn>
  </v-footer>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'MainFooter',

  computed: {
    ...mapState('AppModule', [
      'isDarkMode',
    ]),
  },

});
</script>
