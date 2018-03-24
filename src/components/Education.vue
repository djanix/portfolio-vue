<template>
  <section class="education">
    <h2 class="mb-4">Education</h2>

    <v-card class="mt-4 mb-4 text-xs-left" v-for="item in education" :key="item.name">
      <v-card-title primary-title>
        <v-container class="pa-0">
          <v-layout row>
            <v-flex xs12 sm9>
              <h3 class="headline mb-0">{{ item.name }}</h3>
              <h4 class="title primary--text">{{ item.program }}</h4>
            </v-flex>

            <v-flex xs12 sm3 class="text-sm-right">
              <div class="title grey--text mt-2">{{ formatDate(item.startDate) }} - {{ formatDate(item.endDate) }}</div>
            </v-flex>
          </v-layout>

          <p class="subheading mt-3 mb-0 grey--text">{{ item.description }}</p>
        </v-container>
      </v-card-title>
    </v-card>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { format } from 'date-fns';

  export default Vue.extend({
    name: 'Education',

    data: () => ({
      education: [
        {
          name: 'Université du Québec en Abitibi-Témiscamingue',
          program: 'Creation and New Media',
          startDate: '2007-09-01',
          endDate: '2010-05-01',
          description: 'A three years bachelor degree consisting of web / design / programming / video / 3d.',
        },
        {
          name: 'Cégep de l\'Abitibi-Témiscamingue',
          program: 'Computer science technology',
          startDate: '2004-09-01',
          endDate: '2007-05-01',
          description: 'A three years college degree focusing on computer theory, computing problems and solutions, ' +
          'and the design of computer systems and user interfaces.',
        },
      ],
    }),

    methods: {
      formatDate(date: string): string {
        return format(new Date(date), 'YYYY');
      },
    },
  });
</script>

<style scoped lang="scss">
  .education {
    max-width: 800px;
  }
</style>
