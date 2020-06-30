const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const buildDir = path.resolve(__dirname, 'build')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'client.bundle.js',
    path: buildDir,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    contentBase: buildDir,
    compress: true,
    port: 9000,
    proxy: [{
      context: ['/upload', '/search'],
      target: 'http://localhost:3000'
    }]
  },
}
