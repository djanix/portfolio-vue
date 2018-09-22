module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Janic Beauchemin portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'msapplication-TileColor', content: '#1B5E20' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { hid: 'description', name: 'description', content: 'Welcome to Janic Beauchemin portfolio. I\'m a fullstack software developer based in Montreal, Canada' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    //'bulma',
    '@/assets/css/normalize.css',
    '@/assets/css/h5bp.css',
    '@/assets/css/font.css',
    'vuetify/dist/vuetify.min.css',
  ],
  router: {
    middleware: 'i18n',
  },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/i18n.js'
  ],
  generate: {
    routes: ['/', '/fr'],
  },
  modules: [
    [
      'nuxt-sass-resources-loader',
      '@/assets/css/variables.scss',
    ]
  ]
};
