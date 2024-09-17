/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {

        config.devServer.server = 'spdy';
        return config; 
    }
};

export default nextConfig;
