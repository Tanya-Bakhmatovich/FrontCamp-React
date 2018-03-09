const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const browserConfig = {
    entry: "./src/browser/browser.js",
    node: {
        fs: 'empty',
        tls: 'empty',
        net: 'empty',
   },
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
    }
}

const serverConfig = {
  entry: "./src/server/server.js",
  target: "node",
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
},
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
  }
}

module.exports = [browserConfig, serverConfig];
