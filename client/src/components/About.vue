<template>
  <section class="about">
    <h2>About Me</h2>

    <div class="picture">
      <img src="../assets/me-400x400.jpg" alt="">
    </div>

    <h3 class="mb-4">Welcome to my Portfolio!</h3>

    <p>I'm Janic Beauchemin, a fullstack software developer based in Montreal, Canada.</p>

    <p>
      What I love about web development is that everything is in constant evolution, there's always something new to
      try and different ways to become a better developer. I am a big fan of functional programming and everything
      javascript related. I'm currently working as a team lead at SweetIQ and I use creativity blended with technology
      to deliver cutting edge work.
    </p>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'About',
  });
</script>

<style scoped lang="scss">
  h2:after {
    display: none;
  }

  .about {
    position: relative;
    margin: 0 auto;
    max-width: 850px;
  }

  .picture {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 5px solid $primary-color;
    margin: 30px auto;
    overflow: hidden;
  }

  img {
    width: 250px;
    height: 250px;
    filter: sepia(0);
    transition: $transition;

    &:hover {
      filter: sepia(20%);
      transform: scale(1.05);
    }
  }
</style>
