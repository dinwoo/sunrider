"use strict";

import Vue from "vue";
import axios from "axios";
// import store from "@/store"
// import { UPDATE_TOKEN } from "@/store/actions.type"
// import { PURGE_AUTH } from "@/store/mutations.type"

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// axios.defaults.headers.common["x-user-token"] = window.localStorage.getItem(
//   "id_token"
// );
axios.defaults.headers.post["Content-Type"] = "application/json";

let config = {
  baseURL: process.env.VUE_APP_API_BASE_DOMAIN || "",
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.log(window.localStorage.getItem("id_token"));
    const token = window.localStorage.getItem("id_token");
    axios.defaults.headers.common["x-user-token"] = token;
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    if (response.headers && response.headers.authorization) {
      console.log(response.headers.authorization);
      // store.dispatch(`auth/${UPDATE_TOKEN}`, response.headers.authorization)
    }
    return response;
  },
  function(error) {
    // permission deny
    if (error.response && error.response.status === 401) {
      console.log(error);
      // store.commit(`auth/${<PUR>ㄋ</PUR>GE_AUTH}`)
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
