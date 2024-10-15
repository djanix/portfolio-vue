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

<script>
  import ExperienceItem from '~/components/Experience-item.vue';

  export default {
    name: 'Experience',

    components: {
      ExperienceItem,
    },

    data() {
      return {
        experience: [
          {
            name: 'Zinnia (formerly Breathe Life)',
            image: 'logo_zinnia.jpg',
            startDate: '2022-09-01',
            endDate: null,
            position: 'experience.manager',
            status: 'experience.status.senior',
            skills: [
              '.net',
              'angular',
              'kafka',
              'opsGenie',
              'aws',
              'mssql',
              'mongo',
              'tfs'
            ],
          },
          {
            name: 'BreatheLife',
            image: 'logo_breathelife.jpg',
            startDate: '2018-11-19',
            endDate: '2022-09-01',
            position: 'experience.directorLeadDev',
            status: 'experience.status.lead',
            skills: [
              'nodeJs',
              'express',
              'feathersJs',
              'typescript',
              'react',
              'redux',
              'postreSQL',
              'docker',
              'golang',
              'terraform',
              'git'
            ],
          },
          {
            name: 'SweetIQ',
            image: 'logo_sweetiq.jpg',
            startDate: '2015-08-01',
            endDate: '2018-11-16',
            position: 'experience.leadDev',
            status: 'experience.status.lead',
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
            position: 'experience.frontEndWeb',
            status: 'experience.status.senior',
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
            position: 'experience.frontEndWeb',
            status: 'experience.status.senior',
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
            position: 'experience.fullStackWeb',
            status: 'experience.status.intermediate',
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
            position: 'experience.fullStackWeb',
            status: 'experience.status.junior',
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
  };
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
