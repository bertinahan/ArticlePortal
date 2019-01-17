const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill",'./application/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {test: /\.css$/, use: 'css-loader', exclude: /node_modules/},
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]"
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'app.bundle.[hash].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./application/index.html",
      filename: "./index.html"
    })
  ]
};
