<template>
  <v-app id="app">
    <router-view/>

    <v-footer height="auto" class="grey darken-4">
      <v-layout row wrap justify-center>
        <v-flex xs12 py-3 text-xs-center white--text class="caption">
          &copy;{{ currentYear }} - <strong>Janic Beauchemin</strong> - <a href="mailto:jbeauchemin33@gmail.com">jbeauchemin33@gmail.com</a>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';


  export default Vue.extend({
    name: 'app',

    data: () => ({
      currentYear: new Date().getFullYear(),
    }),
  });
</script>

<style lang="scss">
  body {
    font-size: 20px;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  h2 {
    font-size: 3rem;
    font-weight: normal;
    margin-top: 4rem;
    display: inline-block;

    &:after {
      display: block;
      content: "";
      margin: 0 auto;
      width: 45%;
      height: 1px;
      background: $primary-color linear-gradient(to right, #BFE1CB, transparent, #BFE1CB) left repeat;
    }
  }

  section {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer a {
    color: white;
    text-decoration: none;
  }

  @media print {
    section {
      page-break-after: always;
    }

    .footer {
      display: none;
    }
  }
</style>
