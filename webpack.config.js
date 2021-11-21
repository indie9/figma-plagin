const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
    mode: argv.mode === 'production' ? 'production' : 'development',

    devtool: argv.mode === 'production' ? false : 'inline-source-map',

    entry: {
        ui: './src/ui.js',
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules(?!\/ansi-regex)(?!\/strip-ansi)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/react',
                            {
                                plugins: ['@babel/plugin-proposal-class-properties'],
                            },
                        ],
                    },
                },
            },
            { test: /\.css$/, use: ['style-loader', { loader: 'css-loader' }] },
            { test: /\.(png|jpg|gif|webp|svg)$/, loader: 'url-loader' },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            }
        ],
    },

    resolve: {
        extensions: ['.jsx', '.js'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, ''),
        ],
    },

    output: {
        filename: '[name].js',
        publicPath: "/",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/ui.html",
            filename: "ui.html",
            inlineSource: ".(js)$",
            inject: "body",
        }),
        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/plugin.js',
                to: '',
            }, {
                from: './src/manifest.json',
                to: '',
            }],
        })
    ],
})