const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    module: {
        rules: [
            {
                test : /\.css$/i,
                use : ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(tff)$/i,
                type: 'asset/resource',
            },
        ]
    }
}
