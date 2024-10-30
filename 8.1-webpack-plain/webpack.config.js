const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { optimize } = require('webpack');

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devServer: {
    static: './dist',
    headers: (...args) => {
        console.log(args)
        return [{
            key: "foo", value: 'bar'
        }]
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,

  },
};