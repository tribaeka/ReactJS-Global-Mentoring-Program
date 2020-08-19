const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const outputFileName = (extension = 'js') => isProd ? `[name].[chunkHash].${extension}` : `[name].${extension}`;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;

}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.tsx']
    },
    output: {
        filename: outputFileName('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            favicon: './assets/favicon.ico',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: outputFileName('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './index.html'),
        hot: isDev,
        port: 3000,
        publicPath: '/'
    },
    devtool: isDev ? 'source-map' : ''
}
