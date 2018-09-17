<template>
  <section class="contact">
    <h2 class="mb-4">{{ $t("contact.name") }}</h2>

    <div id="icon-container" class="text-xs-center mt-4">
      <v-btn
        v-for="item in contacts"
        :key="item.name"
        fab
        large
        color="grey lighten-3"
        target="_blank"
        :href="item.link"
        class="ml-3 mr-3"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </div>
  </section>
</template>

<script>
  export default {
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
  };
</script>

<style scoped lang="scss">
  @media print {
    a {
      background-color: #fff !important;
      display: block !important;
      margin: 0 0 40px 0 !important;
      width: 100% !important;
    }
  }
</style>
