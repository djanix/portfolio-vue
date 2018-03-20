<template>
  <section class="contact">
    <h2>Contact</h2>

    <p>
      <i class="devicon-github"></i>
      <i class="devicon-linkedin2"></i>
      <i class="devicon-mail"></i>
    </p>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Contact',
  });
</script>

<style scoped lang="scss">
  p {
    margin-top: 40px;
  }

  i {
    font-size: 80px;
    padding: 20px;
  }
</style>
