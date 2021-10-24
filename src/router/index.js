import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "首頁", layout: "DefaultLayout" },
    component: () => import("../views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
