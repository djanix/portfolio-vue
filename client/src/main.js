import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import './assets/font.css';
Vue.config.productionTip = false;
Vue.use(Vuetify, {
    theme: {
        primary: colors.green.darken3,
    },
});
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map