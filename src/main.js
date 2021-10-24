import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "./plugins/axios";
// mock
import "./fake-db/index.js";

// svg icon
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("@/assets/icon", true, /\.svg$/);
requireAll(req);
import SvgIcon from "@/components/common/SvgIcon";
Vue.component("SvgIcon", SvgIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
