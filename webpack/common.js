"use strict";

/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebbackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

const commonConfig = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebbackPlugin({
      template: resolve(__dirname, "./index.html"),
    }),
  ],
};

module.exports = { commonConfig };
