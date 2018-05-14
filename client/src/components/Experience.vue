<template>
  <section class="experience">
    <h2 class="mb-4">{{ $t("experience.name") }}</h2>

    <div class="experience-list">
      <experience-item
        v-for="item in experience"
        :key="item.name"
        :item="item"
      ></experience-item>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { format } from 'date-fns';
  import { isEmpty } from 'lodash';

  import ExperienceItem from '@/components/Experience-item.vue';

  export default Vue.extend({
    name: 'Experience',

    components: {
      ExperienceItem,
    },

    data: function() { /* tslint:disable-line:object-literal-shorthand */
      return {
        experience: [
          {
            name: 'SweetIQ',
            image: 'logo_sweetiq.jpg',
            startDate: '2015-08-01',
            endDate: null,
            position: this.$t('experience.fullStackSoft'),
            status: this.$t('experience.status.lead'),
            skills: [
              'nodeJs',
              'express',
              'typescript',
              'polymer',
              'vue',
              'mongo',
              'postreSQL',
              'docker',
              'gulp',
              'sumologic',
              'new relic',
              'circleCI',
              'rabbitMQ',
            ],
          },
          {
            name: 'U92',
            image: 'logo_u92.jpg',
            startDate: '2015-02-01',
            endDate: '2015-08-01',
            position: this.$t('experience.frontEndWeb'),
            status: this.$t('experience.status.senior'),
            skills: [
              'react',
              'flux',
              'gulp',
              '.NET',
            ],
          },
          {
            name: 'Sid Lee',
            image: 'logo_sidlee.jpg',
            startDate: '2011-11-01',
            endDate: '2015-02-01',
            position: this.$t('experience.frontEndWeb'),
            status: this.$t('experience.status.senior'),
            skills: [
              'angular',
              'vue',
              'meteor',
              'backbone',
              'jQuery',
              'nodeJs',
              'photoshop',
              'php',
              '.NET',
              'grunt',
            ],
          },
          {
            name: 'GolemLabs Studio',
            image: 'logo_golemlabs.jpg',
            startDate: '2011-02-01',
            endDate: '2011-11-01',
            position: this.$t('experience.fullStackWeb'),
            status: this.$t('experience.status.intermediate'),
            skills: [
              'javascript',
              'jQuery',
              'html',
              'css',
              'photoshop',
              'php',
            ],
          },
          {
            name: 'Radium Multimedia',
            image: 'logo_radium.jpg',
            startDate: '2009-01-01',
            endDate: '2011-02-01',
            position: this.$t('experience.fullStackWeb'),
            status: this.$t('experience.status.junior'),
            skills: [
              'javascript',
              'jQuery',
              'html',
              'css',
              'photoshop',
              'coldfusion',
            ],
          },
        ],
      };
    },

    methods: {
      formatDate(date: string): string {
        return isEmpty(date) ? 'Present' : format(new Date(date), 'MMM YYYY');
      },
    },
  });
</script>

<style scoped lang="scss">
  .experience-list {
    position: relative;
  }

  @media only screen and (min-width: 960px) {
    .experience-list:before {
      display: block;
      content: "";
      width: 2px;
      background: $primary-color linear-gradient(to bottom, transparent 90%, #BFE1CB) top repeat;
      position: absolute;
      top: 80px;
      bottom: 20px;
      left: calc(25% + 42px);
      z-index: 0;
    }
  }
</style>
