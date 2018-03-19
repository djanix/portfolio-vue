<template>
  <section class="experience">
    <h2 class="mb-5">Experience</h2>

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

    data: () => ({
      experience: [
        {
          name: 'SweetIQ',
          image: 'logo_sweetiq.jpg',
          startDate: '2015-08-01',
          endDate: null,
          position: 'Fullstack Software Developer',
          status: 'senior / team lead',
          description: '',
        },
        {
          name: 'U92',
          image: 'logo_u92.jpg',
          startDate: '2015-02-01',
          endDate: '2015-08-01',
          position: 'Frontend Web Developer',
          status: 'senior',
          description: '',
        },
        {
          name: 'Sid Lee',
          image: 'logo_sidlee.jpg',
          startDate: '2011-11-01',
          endDate: '2015-02-01',
          position: 'Frontend Web Developer',
          status: 'senior',
          description: '',
        },
        {
          name: 'GolemLabs Studio',
          image: 'logo_golemlabs.jpg',
          startDate: '2011-02-01',
          endDate: '2011-11-01',
          position: 'Fullstack Web Developer',
          status: 'junior',
          description: '',
        },
        {
          name: 'Radium Multimedia',
          image: 'logo_radium.jpg',
          startDate: '2009-01-01',
          endDate: '2011-02-01',
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
  .experience-list {
    position: relative;
  }

  @media only screen and (min-width: 960px) {
    .experience-list:before {
      display: block;
      content: "";
      width: 3px;
      background-color: $primary-color;
      position: absolute;
      top: 40px;
      bottom: 50px;
      left: 29.4%;
      z-index: 0;
    }
  }
</style>
