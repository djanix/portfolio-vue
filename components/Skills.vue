<template>
  <section class="skills">
    <h2 class="mb-4">{{ $t("skills.name") }}</h2>

    <p class="mt-4 mb-5">{{ $t("skills.description") }}</p>

    <v-container fluid grid-list-sm>
      <v-layout row wrap align-center>
        <v-flex xs4 sm3 md2 v-for="item in skills" :key="item.name" class="list-item">
          <i :class="item.icon"></i>
          <p>{{ item.name }}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'Skills',

    data: () => ({
      skills: [
        {
          name: 'nodeJS',
          icon: 'devicon-nodejs-plain',
          category: 'language',
        },
        {
          name: 'react',
          icon: 'devicon-react-original',
          category: 'framework',
        },
        {
          name: 'vueJS',
          icon: 'devicon-vuejs-plain',
          category: 'framework',
        },
        {
          name: 'git',
          icon: 'devicon-git-plain',
          category: 'tool',
        },
        {
          name: 'express',
          icon: 'devicon-express-original',
          category: 'framework',
        },
        {
          name: 'docker',
          icon: 'devicon-docker-plain',
          category: 'tool',
        },
        {
          name: 'typescript',
          icon: 'devicon-typescript-plain',
          category: 'library',
        },
        {
          name: 'mongoDB',
          icon: 'devicon-mongodb-plain',
          category: 'language',
        },
        {
          name: 'postgreSQL',
          icon: 'devicon-postgresql-plain',
          category: 'language',
        },
        {
          name: 'webpack',
          icon: 'devicon-webpack-plain',
          category: 'tool',
        },
        {
          name: 'gulp',
          icon: 'devicon-gulp-plain',
          category: 'tool',
        },
        {
          name: 'sass',
          icon: 'devicon-sass-original',
          category: 'tool',
        },
        {
          name: 'photoshop',
          icon: 'devicon-photoshop-plain',
          category: 'tool',
        },
        {
          name: 'meteor',
          icon: 'devicon-meteor-plain',
          category: 'framework',
        },
        {
          name: 'jQuery',
          icon: 'devicon-jquery-plain',
          category: 'library',
        },
        {
          name: 'intellij',
          icon: 'devicon-intellij-plain',
          category: 'library',
        },
        // {
        //   name: 'polymer',
        //   icon: '',
        //   category: 'framework',
        // },
        // {
        //   name: 'redux',
        //   icon: '',
        //   category: 'library',
        // },
        // {
        //   name: 'lodash',
        //   icon: '',
        //   category: 'library',
        // },
        // {
        //   name: 'koa',
        //   icon: '',
        //   category: 'framework',
        // },
      ],
    }),
  };
</script>

<style scoped lang="scss">
  .list-item {
    transition: $transition;

    &:hover {
      color: $primary-color;
    }

    @media print {
      max-width: 20% !important;
    }

    i {
      font-size: 5rem;

      @media (min-width: 768px) {
        font-size: 7.1rem;
      }

      @media print {
        font-size: 4rem;
      }
    }
  }
</style>
