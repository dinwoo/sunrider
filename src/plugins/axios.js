"use strict"

import Vue from "vue"
import axios from "axios"
// import store from "@/store"
// import { UPDATE_TOKEN } from "@/store/actions.type"
// import { PURGE_AUTH } from "@/store/mutations.type"

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.VUE_APP_API_BASE_DOMAIN || "",
  timeout: 60 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    if (response.headers && response.headers.authorization) {
      console.lof(response.headers.authorization)
      // store.dispatch(`auth/${UPDATE_TOKEN}`, response.headers.authorization)
    }
    return response
  },
  function(error) {
    // permission deny
    if (error.response && error.response.status === 401) {
      console.log(error)
      // store.commit(`auth/${PURGE_AUTH}`)
    }
    // Do something with response error
    return Promise.reject(error)
  }
)

Plugin.install = function(Vue) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios
      }
    },
    $axios: {
      get() {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
