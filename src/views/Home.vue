<template>
  <div class="home">
    <Hero/>
    <About/>
    <Experience/>
    <Skills/>
    <Education/>
    <Contact/>
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
  });
</script>
