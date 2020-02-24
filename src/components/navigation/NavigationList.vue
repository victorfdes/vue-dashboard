<template>
  <div class="navigation-list">
    <v-list dense nav v-for="navItem in navItems" :key="navItem.id">
      <NavigationItem :navItem="navItem" v-if="navItem.children.length === 0" />
      <NavigationGroup :navItem="navItem" v-else/>
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import NavigationItem from './NavigationItem.vue';
import NavigationGroup from './NavigationGroup.vue';

export default Vue.extend({
  name: 'NavigationList',

  components: {
    NavigationItem,
    NavigationGroup,
  },

  computed: {
    ...mapState('AppModule', ['navItems']),
  },
});
</script>
