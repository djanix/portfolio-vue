<template>
  <section class="about">
    <h2>About Me</h2>

    <div class="picture">
      <img src="../assets/me-400x400.jpg" alt="" height="400" width="400">
    </div>

    <h3 class="mb-4 px-3">Welcome to my Portfolio!</h3>

    <p class="px-3">I'm Janic Beauchemin, a fullstack software developer based in Montreal, Canada.</p>

    <p class="px-3">
      I am a big fan of everything web related, from functional programming to web design to performance optimization.
      What I love about web development is that everything is in constant evolution. There's always something new to
      try and different ways to become a better developer. I'm currently working as a team lead at SweetIQ and I use
      creativity blended with technology to deliver cutting edge work.
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

  @media print {
    h3 {
      display: none;
    }
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
