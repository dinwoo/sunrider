import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/common/api.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    showMenu: false,
    showShopCart: false,
    api: null,
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
    SET_API(state, data) {
      state.api = data;
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
    getApi(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("api", "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.code == 200) {
              context.commit("SET_API", data.data);
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
