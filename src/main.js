import Vue from 'vue'
import App from './App.vue'
import VueRouter from  'vue-router';


import {routes} from  './routes';
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
});


import Vuex from 'vuex'
Vue.use(Vuex)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import store from  './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
