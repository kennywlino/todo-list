const path = require('path');
const { CleanPlugin } = require('webpack');

module.exports = { 
    mode: 'development',
    entry: './src/index.js',
    output: { 
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "assets/[name][ext]",
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          }
        ],
      },
};