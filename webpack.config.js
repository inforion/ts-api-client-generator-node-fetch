const path = require('path');

module.exports = {
    mode: 'production',
    target: 'node',
    devtool: false,
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        'node-fetch': 'commonjs node-fetch',
        'ts-api-client-generator': 'commonjs ts-api-client-generator'
    }
};