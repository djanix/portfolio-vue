<template>
  <div class="home">
    <hero/>

    <v-btn
      fab
      color="white"
      class="print hidden-md-and-down mt-2 mr-2"
      fixed
      top
      right
      v-on:click.native="_print"
    >
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="#000000" d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" />
      </svg>
    </v-btn>

    <div class="wrapper">
      <div class="stripes">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="pb-5">
        <about/>
      </div>

      <div class="pb-5 grey lighten-3">
        <experience/>
      </div>

      <div class="pb-5">
        <skills/>
      </div>

      <div class="pb-5 grey lighten-3">
        <education/>
      </div>

      <div class="pb-5">
        <contact/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Hero from '@/components/Hero.vue';
  import About from '@/components/About.vue';
  import Experience from '@/components/Experience.vue';
  import Skills from '@/components/Skills.vue';
  import Education from '@/components/Education.vue';
  import Contact from '@/components/Contact.vue';

  export default Vue.extend({
    name: 'home',

    components: {
      Hero,
      About,
      Experience,
      Skills,
      Education,
      Contact,
    },

    methods: {
      _print() {
        window.print();
      },
    },
  });
</script>

<style scoped lang="scss">
  .stripes {
    display: grid;
    grid: repeat(5,200px)/repeat(10,1fr);
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;

    transform: skewY(-12deg);
    transform-origin: 0;
    background: linear-gradient(#4f9155, #68b17d 10%, #d5f0e1 38%, #e6f2f0 48%,#f6f9fc 62%);
  }

  .stripes :nth-child(1) {
    grid-column: span 3;
    background: linear-gradient(100grad, rgba(229, 243, 232, 0.4), rgba(203, 214, 207, 0.15) 20%, rgba(205, 216, 213, 0));
  }

  .stripes :nth-child(2) {
    background: linear-gradient(100grad, rgba(15, 172, 102, 0), rgba(3, 175, 58, 0.05) 40%, rgba(0, 174, 45, 0.35));
    grid-area: 3/span 3/auto/-1;
  }

  .stripes :nth-child(3) {
    background: linear-gradient(100grad,#FAFAFA 50%,hsla(0,0%,100%,0));
    grid-row: 4;
    grid-column: span 5;
  }

  .stripes :nth-child(4) {
    background: linear-gradient(100grad, rgba(11, 204, 108, 0) 10%, rgba(0, 204, 72, 0.05));
    grid-area: 4/span 5/auto/-1;
  }

  .stripes :nth-child(5) {
    grid-area: auto/1/-1/-1;
    background: linear-gradient(100grad,#FAFAFA 80%, #f9fdfb);
  }

  .wrapper {
    overflow: hidden;
    position: relative;
    z-index: 2;
  }

  .print {
    opacity: 0.85;
    z-index: 10;
  }
</style>
