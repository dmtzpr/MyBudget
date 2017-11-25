const path = require('path');

module.exports = {
    entry: {
        app: ['./src/index.jsx'],
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/assets/',
        path: path.resolve(__dirname, 'build'),
    },
    //devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
            },
            ],
        },
        {
            test: /\.(css|less)$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader',
            ],
        },
        ],
    },
};
