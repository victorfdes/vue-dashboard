<template>
  <v-menu
    v-model="menu"
    left offset-y
    :close-on-content-click="false"
    :nudge-width="200"
  >
    <template v-slot:activator="{ on }">

      <v-btn icon v-on="on" class="mr-5">
        <v-avatar>
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            alt="John"
          >
        </v-avatar>
      </v-btn>
    </template>

    <v-card :width="400" :dark="isDarkMode">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Victor Fernandes">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Victor Fernandes
            </v-list-item-title>
            <v-list-item-subtitle>Fullstack Engineer</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on"><v-icon>mdi-logout-variant</v-icon></v-btn>
              </template>
              <span>Logout</span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch :value="isDarkMode" @change="toggleDarkMode"></v-switch>
          </v-list-item-action>
          <v-list-item-title>Dark Mode</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapMutations, mapState } from 'vuex';

export default Vue.extend({
  name: 'UserMenu',

  data: () => ({
    menu: false,
  }),

  computed: {
    ...mapState('AppModule', [
      'isDarkMode',
    ]),
  },

  methods: {
    ...mapMutations('AppModule', ['toggleDarkMode']),
  },
});
</script>
