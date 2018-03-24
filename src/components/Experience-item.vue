<template>
  <v-container fluid grid-list-lg class="experience-item">
    <v-layout row wrap align-center>
      <v-flex xs12 md3 class="text-xs-center text-md-right">
        {{ formatDate(item.startDate) }} - {{ formatDate(item.endDate) }}
         <div class="subheading grey--text">{{ calculateDuration(item.startDate, item.endDate) }}</div>
      </v-flex>

      <v-flex xs12 md1>
        <img :src="require(`@/assets/${item.image}`)" alt="">
      </v-flex>

      <v-flex>
        <v-card class="text-xs-left">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ item.name }}</h3>
              <h4 class="title primary--text">{{ item.position }}</h4>

              <div>
                <v-chip
                  disabled
                  outline
                  color="grey"
                  v-for="skill in item.skills"
                  :key="skill"
                  class="mt-4"
                >
                  {{ skill }}
                </v-chip>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { format, distanceInWords } from 'date-fns';
  import { isEmpty } from 'lodash';

  export default Vue.extend({
    name: 'ExperienceItem',

    props: [
      'item',
    ],

    methods: {
      formatDate(date: string): string {
        return isEmpty(date) ? 'Present' : format(new Date(date), 'MMM YYYY');
      },

      calculateDuration(start: string, end: string): string {
        return distanceInWords(end ? new Date(end) : new Date(), new Date(start));
      },
    },
  });
</script>

<style scoped lang="scss">
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid $primary-color;
  }

  .experience-item {
    position: relative;
    z-index: 1;
  }
</style>
