var path = require('path');

module.exports = {
    entry: './pages/_app.js',
    devtool: 'source-map',
    cache: false,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [ "@babel/preset-react"]
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', 'cjs'],
      }
};