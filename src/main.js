import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixinMethod from "@/mixins/index.js";
Vue.mixin(mixinMethod);

import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);

Vue.config.productionTip = false;

import "./plugins/axios";
// mock
import "./fake-db/index.js";

import VueSocketIO from "vue-socket.io";
Vue.use(
  new VueSocketIO({
    debug: true,
    connection: process.env.VUE_APP_SOCKET_DOMAIN,
    options: {
      autoConnect: false,
    },
  })
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
