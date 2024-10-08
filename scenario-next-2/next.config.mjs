/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, options) => {

    //     if(options.dev){
        
    //     //     console.log(JSON.stringify(config.module.rules, null, 2));
    //     //     console.log(config.module.rules.length);

    //     //     config.module.rules.forEach((v) => {
    //     //         if(Array.isArray(v.use) && v.use.some((w) => {
    //     //             console.log(w); 
    //     //         })); 
    //     //     }
    //     // ); 
        
    //         // config.module.rules.push({
    //         //     test: /\.ts/,
    //         //     use: {
    //         //         loader: 'babel-loader',
    //         //         options: {
    //         //             // plugins: [
    //         //             //     [
    //         //             //       'resolve-barrel-files',
    //         //             //       {
    //         //             //         'a': {
    //         //             //           moduleType: 'esm', // or 'esm'
    //         //             //           barrelFilePath: 'src/services/a/index.ts',
    //         //             //           // if you want to debug this plugin
    //         //             //           logLevel: "debug"
    //         //             //         },
    //         //             //       },
    //         //             //     ]
    //         //             //   ]
    //         //         }
             
    //         //       },
                
    //         //   })

    //     }

    //     return config; 



    // }
};

export default nextConfig;
