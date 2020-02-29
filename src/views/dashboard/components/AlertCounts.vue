<template>
  <v-row>
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
</template>
<script>
export default {
  name: 'DashboardAlertCounts',
};
</script>
