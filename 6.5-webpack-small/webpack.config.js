import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {

  entry: './src/foo.mjs',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('dist'),
    clean: true,

  },

  plugins: [new HtmlWebpackPlugin()],
  optimization: {
    minimize: false, // Disable minification

    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        bar: {
          test: /[\\/]bar\.mjs$/,
          name: 'bar',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};