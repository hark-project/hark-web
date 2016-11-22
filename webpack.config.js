var path = require('path');
var webpack = require('webpack');

var mainPath = path.resolve(__dirname, 'src/js/main.js');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        mainPath
    ],
    devServer: {
        hot: true,
        contentBase: './public',
    },
    devtool: 'eval-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                //loader: 'babel',
                loaders: ['babel', 'eslint-loader?fix=true'],
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff",
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
                include: path.join(__dirname, 'src'),
            },
        ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
}
