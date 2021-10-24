import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/common/api.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    api: null,
  },
  mutations: {
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
    SET_API(state, data) {
      state.api = data;
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
