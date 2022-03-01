const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './project/index.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),   // dist folder in dirname.
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()],
    mode:'production'   //production level code.
}

//mode:development/production.
//production ::: compressed, minify, strict
//bundle.js :::: we can get the bundle.js in index.html