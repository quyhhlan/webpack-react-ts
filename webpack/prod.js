// production config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const { resolve } = require("path");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
});
