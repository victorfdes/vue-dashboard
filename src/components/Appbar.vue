<template>
  <v-app-bar app :dark="isDarkMode">
    <v-app-bar-nav-icon @click="toggleNavrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon class="mr-2"><v-icon>mdi-magnify</v-icon></v-btn>

    <v-badge
      :content="3"
      :value="3"
      color="green"
      overlap
      class="mr-5"
    >
      <v-icon>mdi-email-outline</v-icon>
    </v-badge>

    <v-badge
      :content="3"
      :value="3"
      color="green"
      overlap
      class="mr-5"
    >
      <v-icon>mdi-message-outline</v-icon>
    </v-badge>

    <v-badge
      :content="3"
      :value="3"
      color="green"
      overlap
      class="mr-5"
    >
      <v-icon>mdi-cart-outline</v-icon>
    </v-badge>

    <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
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
