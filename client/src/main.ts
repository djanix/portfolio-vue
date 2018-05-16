import Vue from 'vue';
import Vuetify from 'vuetify';
import VueI18n from 'vue-i18n';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import locales from './locales';
import './assets/normalize.css';
import './assets/main.css';
import './assets/font.css';

import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: colors.green.darken3,
  },
});

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages: locales,
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
