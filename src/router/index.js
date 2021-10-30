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
  {
    path: "/refund",
    name: "Refund",
    meta: { title: "退票頁面", layout: "DefaultLayout" },
    component: () => import("../views/Refund.vue"),
  },
  {
    path: "/refunded",
    name: "Refunded",
    meta: { title: "退票頁面", layout: "DefaultLayout" },
    component: () => import("../views/Refunded.vue"),
  },
  {
    path: "/exchange",
    name: "Exchange",
    meta: { title: "票券兌換", layout: "DefaultLayout" },
    component: () => import("../views/Exchange.vue"),
  },
  {
    path: "/wait-live",
    name: "WaitLive",
    meta: { title: "直播頁面", layout: "DefaultLayout" },
    component: () => import("../views/WaitLive.vue"),
  },
  {
    path: "/live",
    name: "Live",
    meta: { title: "直播頁面", layout: "DefaultLayout" },
    component: () => import("../views/Live.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
