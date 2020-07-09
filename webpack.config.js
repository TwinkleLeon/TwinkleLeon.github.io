const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "umd"
  },
  plugins: [new HtmlWebpackPlugin({ 
    filename: 'index.html',
    template: 'src/index.html'
  })]
}