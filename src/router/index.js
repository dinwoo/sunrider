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
  {
    path: "/shop-pay",
    name: "ShopPay",
    meta: { title: "結帳", layout: "DefaultLayout" },
    component: () => import("../views/ShopPay.vue"),
  },
  {
    path: "/shopped",
    name: "Shopped",
    meta: { title: "完成購票", layout: "DefaultLayout" },
    component: () => import("../views/Shopped.vue"),
  },
  {
    path: "/ticket",
    name: "Ticket",
    meta: { title: "購票紀錄", layout: "DefaultLayout" },
    component: () => import("../views/Ticket.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
