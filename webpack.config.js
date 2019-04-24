const path = require("path");
const MODE = "development";

const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: "node",
    externals:[nodeExternals()],
    mode:MODE,
    devtool: "source-map",
    entry:{
        main:path.join(__dirname,"./src/main.js")
    },
    output:{
        path:path.join(__dirname,"/js"),
        filename: "dist.js"
    },
    
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader: "babel-loader",
                        options:{
                            presets:[
                                "@babel/preset-env"
                            ]
                        }
                    }
                ]
            },{
                test: /\.css|.scss/,
                use:[
                    "style-loader",
                    {
                        loader: "css-loader",
                        options:{
                            url:false,
                            sourceMap: true,
                            importLoaders:2
                        }
                    },{
                       loader:"postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins:[
                                require("autoprefixer")({
                                    grid:true
                                })
                            ]
                        }
                    },{
                        loader: "sass-loader",
                        options:{
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    }
};