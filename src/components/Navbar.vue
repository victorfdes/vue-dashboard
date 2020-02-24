<template>
  <v-navigation-drawer app :mini-variant="navDrawerOpen">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Vue Dashboard
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon> item.icon </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>item.title </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'MainNavbar',

  computed: {
    ...mapState('AppModule', ['navDrawerOpen']),
  },
});
</script>
