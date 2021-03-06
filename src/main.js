import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import YmapPlugin from 'vue-yandex-maps'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false;

const mapsSettings = {
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
};

Vue.use(YmapPlugin, mapsSettings);
Vue.use(BootstrapVue);
Vue.use(VueResource);

new Vue({
  render: h => h(App),
  data: {
    layout: '<div>{{ properties.balloonContentHeader }}</div><div>{{ properties.balloonContentBody }}</div><div>{{ properties.balloonContentFooter }}</div>'
  }
}).$mount('#app');
