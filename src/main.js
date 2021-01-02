import Vue from 'vue';
import App from './App.vue';
import router from "./routes.js";
import { guest } from "./plugins/axios"

Vue.config.productionTip = false;

new Vue({
  router,
  guest,
  render: h => h(App),
}).$mount('#app')
