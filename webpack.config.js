var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            "es6-promise",
            "material-ui",
            "react-redux",
            "react-router",
            "react-router-redux",
            "react-tap-event-plugin",
            "redux",
            "redux-thunk",
            "whatwg-fetch"
        ],
        index: './src/index.tsx',
    },

    output: {
        path: path.join(__dirname, './assets'),
        filename: '[name].js',
        publicPath: "/assets/",
    },

    cache: true,
    watch: true,

    resolve: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx']
    },

    module: {
        loaders:  [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },

    plugins: [
        new CommonsChunkPlugin({name: "vendor", minChunks: Infinity}),
        new HtmlWebpackPlugin({
            title: 'test',
            filename: 'index.html',		//生成的html存放路径
            template: './index.html',	//html模板路径
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            }
        }),
    ]
};
