<template>
  <section class="container experience">
    <h2>Experience</h2>

    <v-card v-for="item in experience">
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs2>
            {{ formatDate(item.startDate) }} - {{ formatDate(item.endDate) }}
          </v-flex>

          <v-flex xs1>
            <v-card-media
              v-bind:src="item.image"
              height="125px"
              contain
            ></v-card-media>
          </v-flex>

          <v-flex xs5>
            {{ item.name }}<br>
            {{ item.position }}
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { format } from 'date-fns';
  import { isEmpty } from 'lodash';

  export default Vue.extend({
    name: 'Experience',

    data: () => ({
      experience: [
        {
          name: 'SweetIQ',
          image: '',
          startDate: '01-08-2015',
          endDate: null,
          position: 'Fullstack Software Developer',
          status: 'senior / team lead',
          description: '',
        },
        {
          name: 'U92',
          image: '',
          startDate: '01-02-2015',
          endDate: '01-08-2015',
          position: 'Frontend Web Developer',
          status: 'senior',
          description: '',
        },
        {
          name: 'Sid Lee',
          image: '',
          startDate: '01-11-2011',
          endDate: '01-02-2015',
          position: 'Frontend Web Developer',
          status: 'senior',
          description: '',
        },
        {
          name: 'GolemLabs Studio',
          image: '',
          startDate: '01-02-2011',
          endDate: '01-11-2011',
          position: 'Fullstack Web Developer',
          status: 'junior',
          description: '',
        },
        {
          name: 'Radium Multimedia',
          image: '',
          startDate: '01-01-2009',
          endDate: '01-02-2011',
          position: 'Fullstack Web Developer',
          status: 'junior',
          description: '',
        },
      ],
    }),

    methods: {
      formatDate(date: string): string {
        return isEmpty(date) ? 'Present' : format(new Date(date), 'MMM YYYY');
      },
    },
  });
</script>

<style scoped lang="scss">

</style>
