const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const babelOptions = preset => {
    const options = {
        presets: [
            '@babel/preset-env'
        ]
    };

    if (preset) {
        options.presets.push(preset);
    }

    return options;
}

const host = process.env.HOST || 'localhost';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.jsx']
    },
    output: {
        filename: process.env.production ? '[name].[chunkHash].js' : '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            favicon: './assets/favicon.ico'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions()
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './index.html'),
        compress: true,
        hot: true,
        host,
        port: 3000,
        publicPath: '/'
    }
}
