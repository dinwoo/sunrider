import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "./plugins/axios";
// mock
import "./fake-db/index.js";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
