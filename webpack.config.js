const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const browserConfig = {
    entry: "./src/browser/browser.js",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: "postcss-loader",
                options: {
                  plugins: [autoprefixer()]
                }
              }
            ]
          })
        }
      ],
  },
  plugins: [
      new webpack.DefinePlugin({
          __isBrowser__: 'true'
      })
  ]
}

const serverConfig = {
  entry: './src/server/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ["eslint-loader"]
      // },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader/locals'
          },
        ]
      }
    ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: 'false'
        })
    ]
}

module.exports = [browserConfig, serverConfig];
