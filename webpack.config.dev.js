import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/main')
  ],
  resolve: {
    extensions: [ '.js', '.ts' ]
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
      // Create Html that included reference to bundled JS
      new HtmlWebpackPlugin({
          template: 'src/index.html',
          inject: true
      }),
      new webpack.DefinePlugin({
          ENV: JSON.stringify('development')
      })
  ],
  module: {
    rules: [
      { test: /\.html$/, exclude: /node_modules/, use: 'html-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.ts$/, exclude: /node_modules/, use: 'ts-loader' },
      { test: /\.scss$/,  exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpe?g|png|gif|svg)$/i, exclude: /node_modules/, use: "url-loader?limit=8192" }
    ]
  }
}
