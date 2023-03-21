const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/header/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "header-app",
      filename: "remoteEntry.js",
      exposes: {
        "./HeaderApp": `./src/bootstrap`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
