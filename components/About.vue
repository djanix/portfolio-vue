<template>
  <section class="about">
    <h2>{{ $t("about.name") }}</h2>

    <div class="picture">
      <img src="/images/me-400x400.jpg" alt="" height="400" width="400">
    </div>

    <h3 class="mb-4 px-3">{{ $t("about.title") }}</h3>

    <p class="px-3">{{ $t("about.description1") }}</p>
    <p class="px-3">{{ $t("about.description2") }}</p>
  </section>
</template>

<script>
  export default {
    name: 'About',
  };
</script>

<style scoped lang="scss">
  $border-size: 0px;

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
    width: 250px + $border-size;
    height: 250px + $border-size;
    border-radius: 50%;
    border: $border-size solid $primary-color;
    margin: 30px auto;
    overflow: hidden;
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
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
