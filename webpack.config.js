const path = require('path');module.exports = {
    entry: {
        client: './src/client.js', // client side companion for SSR
        bundle: './src/bundle.js' // pure client side app
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}