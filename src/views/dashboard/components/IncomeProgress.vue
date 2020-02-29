<template>
  <div class="income-progres mt-4">
    <div class="progress-container d-flex justify-space-between mb-2">
      <div class="progress-title">{{ title }}</div>
      <div class="value">{{ value }}%</div>
    </div>
    <v-progress-linear :value="value"></v-progress-linear>
  </div>
</template>
<script>
export default {
  name: 'DashboardIncomeProgress',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
      required: true,
      validator: (value) => value <= 100 && value >= 0,
    },
  },
};
</script>
