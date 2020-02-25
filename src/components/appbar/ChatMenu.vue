<template>
  <v-menu
    v-model="menu"
    left offset-y
    :close-on-content-click="false"
    :nudge-width="200"
  >
    <template v-slot:activator="{ on }">

      <v-btn icon v-on="on" class="mr-5">
        <v-badge
          :content="3"
          :value="3"
          color="green"
          overlap
          v-on="on"
        >
          <v-icon>mdi-message-outline</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-card :width="400" :dark="isDarkMode">
      <v-card-title>Messages</v-card-title>
      <v-divider></v-divider>

      <v-list>
        <v-list-item three-line v-for="chatItem in chats" :key="chatItem.id">
          <v-list-item-avatar>
            <v-img :src="chatItem.senderPicture"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span>{{ chatItem.sender }}</span>
              <span class="caption ml-3">{{ chatItem.timeStamp.format('MMMM Do') }}</span>
            </v-list-item-title>
            <v-list-item-subtitle>
              Secondary line text Lorem ipsum dolor sit amet,
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              consectetur adipiscing elit.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-card-actions class="d-flex justify-center">
        <v-btn text @click="menu = false">View All</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'ChatMenu',

  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),

  computed: {
    ...mapState('AppModule', [
      'chats',
      'isDarkMode',
    ]),
  },

});
</script>
