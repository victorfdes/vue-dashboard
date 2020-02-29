<template>
  <v-list-item link :to="getRoute">
    <v-list-item-icon v-if="hasIcon">
    <v-icon>{{ navItem.icon }}</v-icon>
   </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ navItem.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script lang="ts">
import Vue from 'vue';
import NavigationItem from '@/types/NavigationItem';

export default Vue.extend({
  name: 'NavigationItem',

  props: {
    navItem: {
      type: Object,
      default: () => new NavigationItem(),
      required: true,
    },
  },

  computed: {
    hasIcon() {
      return !!this.navItem.icon;
    },

    getRoute() {
      return this.navItem.route ? this.navItem.route : null;
    },
  },
});
</script>
