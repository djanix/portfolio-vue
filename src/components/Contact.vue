<template>
  <section class="contact">
    <h2>Contact</h2>

    <div id="icon-container" class="text-xs-center mt-5">
      <v-btn
        v-for="item in contacts"
        fab
        large
        color="grey lighten-3"
        target="_blank"
        :href="item.link"
        class="ml-4 mr-4"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'Contact',

    data: () => ({
      contacts: [
        {
          name: 'github',
          icon: 'devicon-github',
          link: 'https://github.com/djanix',
        },
        {
          name: 'linkedIn',
          icon: 'devicon-linkedin2',
          link: 'https://www.linkedin.com/in/janic-beauchemin',
        },
        {
          name: 'email',
          icon: 'devicon-mail',
          link: 'mailto:jbeauchemin33@gmail.com',
        },
      ],
    }),
  });
</script>

<style scoped lang="scss">

</style>
