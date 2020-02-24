<template>
  <v-list-group
    no-action
    value="true"
  >
    <template v-slot:activator>
      <v-list-item-icon>
        <v-icon>{{ navItem.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ navItem.title }}</v-list-item-title>
      </v-list-item-content>
    </template>
    <NavigationItem v-for="child in navItem.children" :key="child.id" :navItem="child"/>
  </v-list-group>
</template>
<script lang="ts">
import Vue from 'vue';
import NavigationItem from './NavigationItem.vue';

export default Vue.extend({
  name: 'NavigationGroup',

  components: {
    NavigationItem,
  },

  props: {
    navItem: {
      type: Object,
      default: () => new NavigationItem(),
      required: true,
    },
  },

  computed: {
    buildNavItem() {
      const navItem = {
        ...this.navItem,
      };
      navItem.children = [];
      return navItem;
    },
  },
});
</script>
