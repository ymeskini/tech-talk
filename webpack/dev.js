"use strict";

/* eslint-disable @typescript-eslint/no-var-requires */
const { commonConfig } = require("./common");
const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { DefinePlugin } = require("webpack");

const devConfig = {
  devServer: {
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  devtool: "inline-source-map",
  mode: "development",
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new DefinePlugin({
      API_URL: JSON.stringify("http://localhost:3000"),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
