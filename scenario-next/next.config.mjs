/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, options) => {

    //     config.devServer.server = 'spdy';
    //     return config; 
    // }

    experimental: {
        swcPlugins: [
            [
                "@swc/plugin-transform-imports",
                {
                  "lodash": {
                    "transform": "lodash/{{member}}"
                  }
                }
              ]
        ],
      },
};

export default nextConfig;
