import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {

  entry: './src/index.mjs',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('dist'),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 50000,
    },
  },
};