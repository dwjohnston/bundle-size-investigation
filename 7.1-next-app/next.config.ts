import type { NextConfig } from "next";
import { NextJsWebpackConfig, WebpackConfigContext } from "next/dist/server/config-shared";
import webpack from 'webpack';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  "webpack": (config : webpack.WebpackOptionsNormalized, { isServer }) => {

    config.optimization = {
      ...config.optimization, 
      splitChunks: {
        ...config.optimization.splitChunks, 
        cacheGroups: {
          //@ts-ignore
          ...(config.optimization.splitChunks?.cacheGroups ?? {}),
          sentry: {
            test: /[\\/]node_modules[\\/]@sentry[\\/]/,
            name: 'sentry',
            chunks: 'all',
          },
        }
      }
    }


    // config.optimization.splitChunks={
    //   chunks: "all",
    // }

    // config.optimization.splitChunks={
    //   cacheGroups: {
    //     sentry: {
    //       test: /[\\/]node_modules[\\/]@sentry[\\/]/,
    //       name: 'sentry',
    //       chunks: 'all',
    //     },
    //   }
    // }
    // config.optimization.splitChunks = {
    //   cacheGroups: {
    //     commons: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       chunks: 'all',
    //     },
    //   },
    // }
    return config;
  }
};

export default nextConfig;
