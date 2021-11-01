import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/common/api.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    lineId: "test_lineId",
    displayName: "",
    profilePicUrl: "",
    isLoading: false,
    showMenu: false,
    showShopCart: false,
    shopCartData: [
      {
        title: "title1",
        name: "name1",
        num: 1,
        price: "1,800",
      },
      {
        title: "title2",
        name: "name2",
        num: 3,
        price: "2,800",
      },
    ],
    lineData: {},
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
    SET_TOKEN(state, data) {
      window.localStorage.setItem("id_token", data.token);
      state.token = data.token;
    },
    CHECK_LINE_LOGIN(state) {
      window.liff.init({ liffId: "1656566788-pwjew0yR" }).then(() => {
        window.liff.getProfile().then((profile) => {
          state.lineData = profile;
        });
      });
    },
  },
  actions: {
    getLoginToken(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("user/verification/login", {
          lineId: this.state.lineId,
          name: this.state.displayName,
          profilePicUrl: this.state.profilePicUrl,
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == "success") {
              context.commit("SET_TOKEN", data.item);
              resolve();
            } else {
              alert(data.msg);
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
        ApiService.get("product", "", { p: 1 })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == "success") {
              // context.commit("SET_TOKEN", data.item);
              resolve();
            } else {
              alert(data.msg);
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
