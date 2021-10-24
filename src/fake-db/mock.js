import Vue from "vue";
const MockAdapter = require("axios-mock-adapter");
const mockAxios = new MockAdapter(Vue.axios); // This sets the mock adapter on the default instance

export const withDelay = (delay, response) => {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(response);
    }, delay);
  });
};

export default mockAxios;
