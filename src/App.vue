<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<style lang="scss">
  body {
    margin: 0;
    font-size: 20px;
    color: #74808a;
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
    color: #2c3e50;
    font-size: 3rem;
    font-weight: normal;
    margin-top: 1.3em;
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
</style>
