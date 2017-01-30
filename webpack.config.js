const webpack = require('webpack');
const Path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const SRC_DIR = Path.join(__dirname, "src");
const NODE_MODULES = Path.join(__dirname, "node_modules");

const config = {
  context: __dirname,
  entry: "./src/app.js",
  output: {
    path: Path.join(__dirname, "public/"),
    publicPath: "/",
    filename: "js/bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/},

      // CSS: https://github.com/webpack/css-loader
      {test: /\.(css(\?.*)?)$/, loader: ExtractTextPlugin.extract('style', 'css')},

      // LESS: https://github.com/webpack/less-loader
      {test: /\.(less(\?.*)?)$/, loader: ExtractTextPlugin.extract('style', 'css!less')},

      // JSON
      {test: /\.(json(\?.*)?)$/,  loaders: ["json-loader"]},
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public'], {
      root: Path.join(__dirname, "/"),
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([
      {from: SRC_DIR + "/data/media", to:  "media"},
      {from: SRC_DIR + "/data/images", to:  "images"},
      {from: NODE_MODULES + "/jquery/dist/", to:  "js/scripts"},
      {from: SRC_DIR + "/ga.js", to:  "js/scripts"},
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify("production")
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
    new ExtractTextPlugin("style.css"),
  ]
};

module.exports = config;
