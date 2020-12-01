require('./bootstrap');
window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from "./router/frontend";
import Toasted from "vue-toasted";
import config from "./constant/config";

Vue.use(VueRouter);
Vue.use(Toasted, {
  duration: 5000,
  size: "20",
  position: "top-right",
  action: {
    text: "X",
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    },
  },
});

Vue.component('navbarmenu', require('./components/employee/NavbarMenu.vue').default);
Vue.component('layouts', require('./components/Layouts.vue').default);

axios.defaults.baseURL = config.API_BASE_URL;
const router = new VueRouter({
  mode: "history",
  routes: routes,
});


const app = new Vue({
    el: '#app',
    router: router
});
