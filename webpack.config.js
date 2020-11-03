const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/scripts/index.js"),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist/assets/scripts"),
    filename: "app.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
  },
};
