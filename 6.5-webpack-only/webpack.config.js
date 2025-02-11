import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  
  entry: './src/index.mjs',
  experiments: {
    outputModule: true,
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
    library: {
      type: "module",
    },
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