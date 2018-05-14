<template>
  <v-container fluid grid-list-lg class="experience-item">
    <v-layout row wrap align-top>
      <v-flex xs8 md3 order-xs2 order-md1 class="text-xs-left text-md-right mt-4">
        {{ formatDate(item.startDate) }} - {{ formatDate(item.endDate) }}
         <div class="subheading grey--text">{{ calculateDuration(item.startDate, item.endDate) }}</div>
      </v-flex>

      <v-flex order-xs1 order-md2 class="mt-4 logo">
        <img :src="require(`@/assets/${item.image}`)" alt="">
      </v-flex>

      <v-flex order-xs3 class="description">
        <v-card class="text-xs-left">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ item.name }}</h3>
              <h4 class="title primary--text mb-4">{{ item.position }}</h4>

              <div>
                <v-chip
                  disabled
                  outline
                  color="grey"
                  v-for="skill in item.skills"
                  :key="skill"
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
  import en from 'date-fns/locale/en';
  import fr from 'date-fns/locale/fr';
  import { isEmpty } from 'lodash';

  export default Vue.extend({
    name: 'ExperienceItem',

    props: [
      'item',
    ],

    methods: {
      formatDate(date: string) {
        return isEmpty(date) ? this.$t('experience.now') : format(new Date(date), 'MMM YYYY');
      },

      calculateDuration(start: string, end: string): string {
        return distanceInWords(end ? new Date(end) : new Date(), new Date(start), { locale: en });
      },
    },
  });
</script>

<style scoped lang="scss">
  .logo {
    width: 80px;
    flex: none;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid $primary-color;
  }

  .experience-item {
    position: relative;
    z-index: 1;

    @media print {
      page-break-inside: avoid;
    }
  }

  .description {
    flex: 1;
    min-width: 300px;
  }
</style>
