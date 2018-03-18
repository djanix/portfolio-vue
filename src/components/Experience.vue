<template>
  <section class="container experience">
    <h2>Experience</h2>

    <experience-item
      v-for="item in experience"
      :key="item.name"
      :item="item"
    ></experience-item>
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
          startDate: '01-08-2015',
          endDate: null,
          position: 'Fullstack Software Developer',
          status: 'senior / team lead',
          description: '',
        },
        {
          name: 'U92',
          image: 'logo_u92.jpg',
          startDate: '01-02-2015',
          endDate: '01-08-2015',
          position: 'Frontend Web Developer',
          status: 'senior',
          description: '',
        },
        {
          name: 'Sid Lee',
          image: 'logo_sidlee.jpg',
          startDate: '01-11-2011',
          endDate: '01-02-2015',
          position: 'Frontend Web Developer',
          status: 'senior',
          description: '',
        },
        {
          name: 'GolemLabs Studio',
          image: 'logo_golemlabs.jpg',
          startDate: '01-02-2011',
          endDate: '01-11-2011',
          position: 'Fullstack Web Developer',
          status: 'junior',
          description: '',
        },
        {
          name: 'Radium Multimedia',
          image: 'logo_radium.jpg',
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
