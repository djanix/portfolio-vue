<template>
  <div class="hero" ref="hero">
    <div class="overlay"></div>

    <div class="text">
      <h1>Janic Beauchemin</h1>
      <h2>{{ $t("jobName") }}</h2>
    </div>

    <v-btn
      fab
      flat
      dark
      small
      absolute
      top
      left
      class="cta-locale"
      v-on:click.native="_updateLanguage($i18n.locale)">
      <div v-if="$i18n.locale === 'fr'">en</div>
      <div v-else>fr</div>
    </v-btn>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  // @ts-ignore
  import desktopImagePath from '../assets/moher_cliffs.jpg';
  // @ts-ignore
  import mobileImagePath from '../assets/moher_cliffs_mobile.jpg';

  export default Vue.extend({
    name: 'Hero',

    mounted() {
      window.addEventListener('load', () => this.loadImage());
      window.addEventListener('orientationchange', () => this.loadImage());
    },

    methods: {
      _updateLanguage(currentLocale: string): void {
        this.$i18n.locale = currentLocale === 'fr' ? 'en' : 'fr';
        localStorage.setItem('locale', this.$i18n.locale);
      },

      loadImage(): void {
        const heroObject = this.$refs.hero;
        const img = new Image();

        // setTimeout is needed here to give time to matchMedia to execute while changing the device orientation
        // makes it easier to test in chrome device simulation mode
        setTimeout(() => {
          const imageUrl = (window.matchMedia('(orientation: portrait)').matches) ? mobileImagePath : desktopImagePath;
          img.src = imageUrl;
          // @ts-ignore
          img.onload = () => heroObject.style.backgroundImage = `url(${imageUrl})`;
        });
      },
    },
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

    background: url('../assets/moher_cliffs_blur.jpg') top center / cover no-repeat;
    color: #effcd9;

    @media screen and (min-device-width: 1025px) {
      background-attachment: fixed;
    }

    @media screen and (orientation:portrait) {
      background-image: url('../assets/moher_cliffs_mobile_blur.jpg');
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

  .cta-locale {
    margin-top: 30px;
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
