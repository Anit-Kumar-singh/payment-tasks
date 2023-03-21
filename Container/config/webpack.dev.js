const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpack = require("webpack");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        paymentOptions: "payment@http://localhost:8082/remoteEntry.js",
        // header: "header-app@http://localhost:8084/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
