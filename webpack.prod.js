var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
var merge = require('webpack-merge');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    // 'react-hot-loader/patch',
    path.join(__dirname, 'source', 'index.js')
  ],
  output: {
    filename: 'build/index.js',
    chunkFilename: 'build/index.js',
    path: path.resolve(__dirname),
    publicPath: './'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            modules: false
          }], '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-async-to-generator', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-react-jsx-source', 'react-hot-loader/babel']
        }
      }, {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|gif|jpg|woff|woff2|svg|ttf)$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'build/images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['public'], { root: path.resolve(__dirname, '..'), verbose: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin({
      sourceMap: false
    }),
    new MiniCssExtractPlugin({
      filename: 'build/css/[name].css',
      chunkFilename: 'build/css/[id].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Fileops',
      template: 'source/index.html'
    }),
    new BundleAnalyzerPlugin()
  ],
  externals: [nodeExternals()],
  target: 'web'
};
