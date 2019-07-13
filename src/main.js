import Vue from 'vue'
import App from './App.vue'
import { plugin } from 'vue-function-api'

import store from './store';
import router from './utils/routes';

Vue.use(plugin);
Vue.config.productionTip = false;



new Vue({
    store,
    router,
  render: h => h(App),
}).$mount('#app');
