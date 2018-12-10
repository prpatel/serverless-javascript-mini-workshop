const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        `${__dirname}/index`
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    target: 'node',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // Useful to reduce the size of libraries
                NODE_ENV: JSON.stringify('production'),
            }
        }),
        // optimizations
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};