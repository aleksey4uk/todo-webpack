const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",

    module: { 
        rules: [
            //обработка JS файлов и файлов react;
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                  }
            },
            //Обработка css файлов
            {
                test: /\.css$/,
                use: [
                    { loader: miniCssExtractPlugin.loader },
                    { loader: 'css-loader' }
                ]   
            }
        ]
    },
    
    plugins: [
        new htmlWebPackPlugin({
            template: 'public/index.html'
        }),
        new miniCssExtractPlugin({
            filename: '[name]-[hash:7].css'
        })
    ],
    
    devServer: {
        "open": true,
        host: 'localhost'
      }
}