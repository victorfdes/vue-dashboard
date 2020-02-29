<template>
  <div class="">
    <v-container fluid>
    <v-row>
      <v-col :cols="4">
        <v-card class="pa-4" :dark="isDarkMode">
          <div class="title mb-2">Income</div>
          <DashboardIncomeProgress :value="50" title="Marketing"/>
          <DashboardIncomeProgress :value="80" title="Advertisement"/>
          <DashboardIncomeProgress :value="50" title="Consulting"/>
          <DashboardIncomeProgress :value="50" title="Engineering"/>
        </v-card>
      </v-col>
      <v-col>
        <SalesPreviewTable />
      </v-col>
    </v-row>
    <DashboardAlertCounts />
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import DashboardComponents from './components';

export default Vue.extend({
  name: 'Dashboard',

  components: {
    ...DashboardComponents,
  },

  computed: {
    ...mapState('AppModule', [
      'isDarkMode',
    ]),
  },

});
</script>
