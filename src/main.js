import Vue from 'vue';
import VueModalTor from 'vue-modaltor/dist/vue-modaltor.common';
import App from './App.vue';
import router from './router';
import 'vue-modaltor/dist/vue-modaltor.css';
// Vue.use(VueModalTor);
// or global config ...
Vue.use(VueModalTor);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
