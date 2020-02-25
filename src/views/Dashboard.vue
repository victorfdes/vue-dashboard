<template>
  <div class="">
    <v-row v-for="item in [1,2,3,4,5,6,7,8,9,0]" :key="item">
      <v-col>
        <v-alert color="deep-purple darken-1" dark prominent icon="mdi-email-outline">
          <div class="count">210</div>
          <div class="label">Unread Email</div>
        </v-alert>
      </v-col>
      <v-col>
        <v-alert color="blue darken-1" dark prominent icon="mdi-email-outline">
          <div class="count">210</div>
          <div class="label">Image Upload</div>
        </v-alert>
      </v-col>
      <v-col>
        <v-alert color="light-green darken-1" dark prominent icon="mdi-email-outline">
          <div class="count">210</div>
          <div class="label">Total Message</div>
        </v-alert>
      </v-col>
      <v-col>
        <v-alert color="orange darken-1" dark prominent icon="mdi-email-outline">
          <div class="count">210</div>
          <div class="label">Orders Post</div>
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Dashboard',
});
</script>
