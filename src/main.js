import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import JwPagination from 'jw-vue-pagination';
import Lingallery from 'lingallery';
import {
  BootstrapVueIcons
} from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVueIcons)

Vue.component('lingallery', Lingallery);
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')