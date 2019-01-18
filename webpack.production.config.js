const Webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'docs', 'build');
const mainPath = path.resolve(__dirname, 'src', 'index.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: mainPath,
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: [nodeModulesPath],
      query:
      {
        presets:['react', 'es2015']
      }
    },
    {
      test: /\.scss|css$/,
      loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: [
        'file-loader?name=./images/[name].[ext]',
      ]
    },
    {
      test: /\.(otf|eot|svg|ttf|woff|woff2)$/i,
      loader: 'file-loader?name=./fonts/[name].[ext]',
      query: {
        limit: 10000
      }
    }]
  },
  devServer: {
    historyApiFallback: true,
    headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
 },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

module.exports = config;
