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
    ...mapState('AppModule', ['navDrawerOpen', 'navItems']),
  },
});
</script>
