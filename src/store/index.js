import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/common/api.service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("id_token") || "",
    isLineLogin: false,
    lineData: {
      lineId: "",
      name: "",
      profilePicUrl: "",
    },
    countDownTime: null,
    isLoading: false,
    showMenu: false,
    showShopCart: false,
    shopCartData: [],
    productList: {},
    orderList: {},
  },
  mutations: {
    SET_LINE_LOGIN(state, value) {
      state.isLineLogin = value;
    },
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
    SET_COUNT_DOWN_TIME(state, value) {
      state.countDownTime = value;
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
    CLEAR_SHOPCART_DATA(state) {
      // localStorage.setItem("shopCartData", JSON.stringify([]));
      state.shopCartData = [];
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
      window.localStorage.setItem("id_token", data);
      state.token = data;
    },
    SET_PRODUCT_LIST(state, data) {
      state.productList = data.items;
    },
    SET_ORDER_LIST(state, data) {
      state.orderList = data.items;
    },
    SET_LINE_PROFILE(state, profile) {
      console.log(profile);
      state.lineData.lineId = profile.userId;
      state.lineData.name = profile.displayName;
      state.lineData.profilePicUrl = profile.pictureUrl;
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
              context.commit("SET_TOKEN", data.item.token);
              resolve();
            } else {
              if (data.error.code == "userVerificationError") {
                context.commit("SET_TOKEN", "");
                reject("userVerificationError");
              } else {
                alert(data.error.message);
              }
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getCountDown(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get("countdown", "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.success) {
              context.commit("SET_COUNT_DOWN_TIME", data.item.countdownSeconds);
              resolve();
            } else {
              if (data.error.code == "userVerificationError") {
                context.commit("SET_TOKEN", "");
                reject("userVerificationError");
              } else {
                alert(data.error.message);
              }
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    checkLiveStatus(context) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("user/verification/check-active", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.success) {
              context.commit("SET_COUNT_DOWN_TIME", data.item.countdownSeconds);
              resolve(data.item);
            } else {
              if (data.error.code == "userVerificationError") {
                context.commit("SET_TOKEN", "");
                reject("userVerificationError");
              } else {
                alert(data.error.message);
              }
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
              if (data.error.code == "userVerificationError") {
                context.commit("SET_TOKEN", "");
                reject("userVerificationError");
              } else {
                alert(data.error.message);
              }
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    getOrder(context, refund) {
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.get(`order${refund ? "?refund=1" : ""}`, "", {})
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.success) {
              context.commit("SET_ORDER_LIST", data);
              resolve();
            } else {
              if (data.error.code == "userVerificationError") {
                context.commit("SET_TOKEN", "");
                reject("userVerificationError");
              } else {
                alert(data.error.message);
              }
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    postOrder(context, data) {
      const {
        amount,
        paidUserName,
        paidUserGender,
        paidUserPhone,
        paidUserEmail,
        paidMemberCode,
        items,
        frontendUrl,
      } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("checkout", {
          amount,
          paidUserName,
          paidUserGender,
          paidUserPhone,
          paidUserEmail,
          paidMemberCode,
          items,
          frontendUrl,
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.success) {
              // context.commit("SET_ORDER_LIST", data);
              resolve(data);
            } else {
              if (data.error.code == "userVerificationError") {
                context.commit("SET_TOKEN", "");
                reject("userVerificationError");
              } else {
                alert(data.error.message);
              }
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    postRefund(context, data) {
      const {
        amount,
        paidUserName,
        paidUserPhone,
        paidUserEmail,
        paidUserAddress,
        paidCardCode,
        items,
      } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("refund/create", {
          amount,
          paidUserName,
          paidUserPhone,
          paidUserEmail,
          paidUserAddress,
          paidCardCode,
          items,
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.success) {
              // context.commit("SET_ORDER_LIST", data);
              resolve(data);
            } else {
              if (data.error.code == "userVerificationError") {
                context.commit("SET_TOKEN", "");
                reject("userVerificationError");
              } else {
                alert(data.error.message);
              }
            }
          })
          .catch(({ response }) => {
            context.commit("SET_LOADING", false);
            console.log(response);
            reject();
          });
      });
    },
    postBinding(context, data) {
      const {
        code,
        bindingUserName,
        bindingUserPhone,
        bindingUserBirthday,
        bindingUserAddress,
        bindingMemberCode,
        bindingMemberRank,
      } = data;
      context.commit("SET_LOADING", true);
      return new Promise((resolve, reject) => {
        ApiService.post("ticket/binding", {
          code,
          bindingUserName,
          bindingUserPhone,
          bindingUserBirthday,
          bindingUserAddress,
          bindingMemberCode,
          bindingMemberRank,
        })
          .then(({ data }) => {
            context.commit("SET_LOADING", false);
            if (data.success) {
              // context.commit("SET_ORDER_LIST", data);
              resolve(data);
            } else {
              //
              if (data.error.code == "userVerificationError") {
                context.commit("SET_TOKEN", "");
                reject("userVerificationError");
              } else {
                alert(data.error.message);
              }
              console.log(data.error.message);
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
  getters: {
    totalPrice(state) {
      return state.shopCartData.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.num;
      }, 0);
    },
  },
  modules: {},
});
