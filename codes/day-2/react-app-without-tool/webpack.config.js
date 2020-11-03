const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const configObject = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
        app: path.resolve(__dirname, './src/App.js'),
        welcome: path.resolve(__dirname, './src/Welcome.js'),
        description: path.resolve(__dirname, './src/Description.js'),
    },
    // entry: {
    //     main: { import: path.resolve(__dirname, './src/index.js'), dependOn: 'react-dom' },
    //     app: { import: path.resolve(__dirname, './src/App.js'), dependOn: 'react' },
    //     welcome: { import: path.resolve(__dirname, './src/Welcome.js'), dependOn: 'react' },
    //     description: { import: path.resolve(__dirname, './src/Description.js'), dependOn: 'react' }
    // },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devServer: {
        port: 8000,
        contentBase: path.resolve(__dirname, 'build')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: ['css-loader', 'style-loader']
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-loader'
            }
        ]
    }
}
module.exports = configObject