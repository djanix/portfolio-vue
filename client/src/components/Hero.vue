<template>
  <div class="hero">
    <div class="overlay"></div>

    <div class="text">
      <h1>Janic Beauchemin</h1>
      <h2>Web Developer</h2>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Hero',
  });
</script>

<style scoped lang="scss">
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    z-index: 1;

    background: fixed url('../assets/moher_cliffs.jpg') top center / cover no-repeat;
    color: #effcd9;

    @media screen and (orientation:portrait) {
      background-image: url('../assets/moher_cliffs_mobile.jpg');
    }
  }

  .overlay {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($primary-color, 0.75);
  }

  .text {
    position: relative;
    z-index: 3;
  }

  h1 {
    font-size: 8vw;
    font-weight: bold;
    margin: 0;
    text-transform: uppercase;

    @media (min-width: 1024px) {
      font-size: 5.7rem;
    }
  }

  h2 {
    color: #d5e9ba;
    font-size: 4vw;

    margin: 0;
    text-transform: none;

    &:after {
      display: none;
    }

    @media (min-width: 1024px) {
      font-size: 3.2rem;
    }

    @media (max-width: 600px) {
      font-size: 1.7rem;
    }
  }
</style>
