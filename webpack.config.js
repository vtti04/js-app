const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        static: '/dist'
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    })],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            { test: /\.m?js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }


}