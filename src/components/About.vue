<template>
  <section class="about">
    <h2>About Me</h2>

    <div class="picture">
      <img src="../assets/me-400x400.jpg" alt="">
    </div>

    <p>Welcome to my Portfolio!</p>
    <p>I am a fullstack web developer based in Montreal, Canada.</p>

    <p>
      I am a big fan of functional programming and everything javascript related.
      I'm currently working as a team lead at SweetIQ and I use creativity blended with technology to deliver cutting edge work.
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
  .about {
    position: relative;
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
