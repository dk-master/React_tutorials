const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool : 'eval', //hidden-source-map
    resolve : {
        extensions: ['.jsx', '.js'],
    },

    entry: {
        app : './client',
    },

    module: {
        rules:[{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [],
            }

        }],
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({debug: true}), //추가적으로 하고싶은 작업들 plugins 
    ],
    output: {
        path : path.join(__dirname, 'dist'),
        filename : 'app.js',

    },

}