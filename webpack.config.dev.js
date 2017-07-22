const path = require('path');

module.exports = {
    //debug settings
    devtool: 'inline-source-map',
    //webpack entry point
    entry: path.resolve(__dirname, './src/index'),
    target: 'web',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'app.bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    
    module: {
        rules: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            //bootstrap related
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};