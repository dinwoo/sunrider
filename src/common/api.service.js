import Vue from "vue"
import JwtService from "@/common/jwt.service"

const ApiService = {
  setAuth() {
    Vue.axios.defaults.headers.common["Authorization"] = JwtService.getToken()
  },

  removeAuth() {
    delete Vue.axios.defaults.headers.common["Authorization"]
  },

  query(resource, params) {
    return Vue.axios.get(resource, { params: params })
  },

  get(resource, slug = "", params) {
    const route = slug ? `${resource}/${slug}` : `${resource}`
    return Vue.axios.get(route, { params: params })
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  update(resource, slug, params) {
    const route = slug ? `${resource}/${slug}` : `${resource}`
    return Vue.axios.put(route, params)
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params)
  },

  delete(resource, slug = "", params) {
    const route = slug ? `${resource}/${slug}` : `${resource}`
    return Vue.axios.delete(route, { params: params })
  }
}

export default ApiService
