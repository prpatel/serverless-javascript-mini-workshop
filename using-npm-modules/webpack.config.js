const path = require("path");

module.exports = {
    entry: "./index.js",
    target: "node",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },
    mode: 'production',
    // module: {
    //     rules: [
    //         {
    //             test: /\.tsx?$/,
    //             use: 'ts-loader',
    //             exclude: /node_modules/
    //         }
    //     ]
    // },
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
}