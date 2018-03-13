<template>
  <section class="about">
    <div class="stripes">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="content">
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
    </div>
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
    background: linear-gradient(100grad,#fff 50%,hsla(0,0%,100%,0));
    grid-row: 4;
    grid-column: span 5;
  }

  .stripes :nth-child(4) {
    background: linear-gradient(100grad, rgba(11, 204, 108, 0) 10%, rgba(0, 204, 72, 0.05));
    grid-area: 4/span 5/auto/-1;
  }

  .stripes :nth-child(5) {
    grid-area: auto/1/-1/-1;
    background: linear-gradient(100grad,#fff 80%, #f9fdfb);
  }

  .content {
    max-width: 700px;
    margin: 0 auto;
  }

  img {
    border-radius: 50%;
    border: 5px solid $primary-color;
    width: 250px;
    height: 250px;
  }
</style>
