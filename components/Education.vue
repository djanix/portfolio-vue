<template>
  <section class="education">
    <h2 class="mb-4">{{ $t("education.name") }}</h2>

    <v-card class="ma-3 text-xs-left" v-for="item in education" :key="item.name">
      <v-card-title primary-title>
        <v-container class="pa-0">
          <v-layout row wrap>
            <v-flex xs12 sm9>
              <h3 class="headline mb-0">{{ item.name }}</h3>
              <h4 class="title primary--text" v-t="item.program"></h4>
            </v-flex>

            <v-flex xs12 sm3 class="text-sm-right">
              <div class="title grey--text mt-2">{{ formatDate(item.startDate) }} - {{ formatDate(item.endDate) }}</div>
            </v-flex>
          </v-layout>

          <p class="subheading mt-3 mb-0 grey--text" v-t="item.description"></p>
        </v-container>
      </v-card-title>
    </v-card>
  </section>
</template>

<script>
  import { format } from 'date-fns';

  export default {
    name: 'Education',

    data() {
      return {
        education: [
          {
            name: 'Université du Québec en Abitibi-Témiscamingue',
            program: 'education.newMedia',
            startDate: '2007-09-01',
            endDate: '2010-05-01',
            description: 'education.newMediaDesc',
          },
          {
            name: 'Cégep de l\'Abitibi-Témiscamingue',
            program: 'education.computerScience',
            startDate: '2004-09-01',
            endDate: '2007-05-01',
            description: 'education.computerScienceDesc',
          },
        ],
      };
    },

    methods: {
      formatDate(date) {
        return format(new Date(date), 'YYYY');
      },
    },
  };
</script>

<style scoped lang="scss">
  .education {
    max-width: 800px;
  }
</style>
