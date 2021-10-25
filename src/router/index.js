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
  {
    path: "/product",
    name: "Product",
    meta: { title: "購票", layout: "DefaultLayout" },
    component: () => import("../views/Product.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
