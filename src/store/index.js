import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/common/api.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("id_token") || "",
    lineData: {
      lineId: "test_lineId",
      name: "",
      profilePicUrl: "",
    },
    isLoading: false,
    showMenu: false,
    showShopCart: false,
    shopCartData: [],
    productList: {},
    orderList: {},
  },
  mutations: {
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
    SET_MENU(state, value) {
      state.showMenu = value;
    },
    SET_SHOPCART(state, value) {
      state.showShopCart = value;
    },
    SET_SHOPCART_DATA(state, value) {
      state.shopCartData = value;
    },
    ADD_SHOPCART_DATA(state, data) {
      let existData = state.shopCartData.find((item) => {
        return item.id == data.id;
      });
      if (existData) {
        existData.num = data.num;
      } else {
        state.shopCartData.push(data);
      }
    },
    REMOVE_SHOPCART_DATA(state, id) {
      state.shopCartData.forEach((item, index) => {
        if (item.id == id) {
          state.shopCartData.splice(index, 1);
        }
      });
    },
    SET_TOKEN(state, data) {
      window.localStorage.setItem("id_token", data.token);
      state.token = data.token;
    },
    SET_PRODUCT_LIST(state, data) {
      state.productList = data.items;
    },
    SET_ORDER_LIST(state, data) {
      state.orderList = data;
    },
    CHECK_LINE_LOGIN(state) {
      window.liff.init({ liffId: "1656566788-pwjew0yR" }).then(() => {
        window.liff.getProfile().then((profile) => {
          state.lineData.lineId = profile.userId;
          state.lineData.name = profile.displayName;
          state.lineData.profilePicUrl = profile.pictureUrl;
        });
      });
    },
  },
  actions: {
    getLoginToken(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("user/verification/login", {
          lineId: this.state.lineData.lineId,
          name: this.state.lineData.name,
          profilePicUrl: this.state.lineData.profilePicUrl,
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.success) {
              context.commit("SET_TOKEN", data.item);
              resolve();
            } else {
              alert(data.error.message);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getProduct(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("product", "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.success) {
              // context.commit("SET_PRODUCT_LIST", data);
              resolve(data);
            } else {
              alert(data.error.message);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getOrder(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("order", "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.success) {
              context.commit("SET_ORDER_LIST", data);
              resolve();
            } else {
              alert(data.error.message);
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
  },
  modules: {},
});
