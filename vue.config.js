// const webpack = require('webpack');
process.env.VUE_APP_VERSION = require("./package.json").version;
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  runtimeCompiler: true,
  publicPath: "/",
  devServer: {
    /* https option */
    // open: process.platform === 'darwin',
    // host: '0.0.0.0',
    // port: 9004 // CHANGE YOUR PORT HERE!
    // https: true,
    // hotOnly: false,
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"));
  },
};
