<template>
  <v-card class="pa-4" :dark="isDarkMode">
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">First Name</th>
            <th class="text-left">Last Name</th>
            <th class="text-left">City</th>
            <th class="text-left">Street</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sales" :key="item.fname + item.lname">
            <td>{{ item.fname }}</td>
            <td>{{ item.lname }}</td>
            <td>{{ item.city }}</td>
            <td>{{ item.street }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    sales: [
      {
        fname: 'Barbara',
        lname: 'Anderson',
        city: 'Wichita Falls',
        street: '1564 Lunetta Street',
      },
      {
        fname: 'Natasha',
        lname: 'Caggiano',
        city: 'El Paso',
        street: '4633 Ward Road',
      },
      {
        fname: 'Laurie',
        lname: 'Stabler',
        city: 'Denver',
        street: '2487 Snider Street',
      },
      {
        fname: 'Marcus',
        lname: 'Cox',
        city: 'Fedscreek',
        street: '482 North Bend River Road',
      },
    ],
  }),

  computed: {
    ...mapState('AppModule', [
      'isDarkMode',
    ]),
  },
};
</script>
