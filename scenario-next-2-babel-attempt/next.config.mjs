/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {

        if(options.dev){

            config.modules.rules.push({

            })
        }


        return config; 
    }
};

export default nextConfig;
