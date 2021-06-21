import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import JwPagination from 'jw-vue-pagination';
import Lingallery from 'lingallery';

Vue.component('lingallery', Lingallery);
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')