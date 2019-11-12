var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/SFGrid.vue",

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "vue-sfgrid.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "./src")]
      },
      { test: /\.vue$/, loader: "vue" }
    ]
  },

  vue: {
    loaders: {
      scss: "vue-style!css!sass"
    }
  }
};
