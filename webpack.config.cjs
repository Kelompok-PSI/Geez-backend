const path = require("path");
const nodeExtertnals = require("webpack-node-externals");
module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "final.cjs",
  },
  target: "node",
  externals: [nodeExtertnals()],
};
