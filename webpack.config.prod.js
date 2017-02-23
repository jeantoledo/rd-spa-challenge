import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/main')
  },
  resolve: {
    extensions: [ '.js', '.ts' ]
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
      // Generate an external css file with a hash in the filename
      new ExtractTextPlugin('[name].[contenthash].css'),
      // Hash the files names using MD5 so that their names change when the file content changes
      new WebpackMd5Hash(),
      // Use CommonsChunkPlugin to create a separate bundle 
      // of vendor libraries so that they're cached separately
      new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'
      }),
      // Create Html that included reference to bundled JS
      new HtmlWebpackPlugin({
          template: 'src/index.html',
          inject: true,
          minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true
          }
      }),
      // Eliminate duplicate packages when bundling
      new webpack.optimize.DedupePlugin(),
      // Minify JS
      new webpack.optimize.UglifyJsPlugin(),
      // Set ENV constant
      new webpack.DefinePlugin({
          ENV: JSON.stringify('production')
      })
  ],
  module: {
    rules: [
      { test: /\.html$/, exclude: /node_modules/, use: 'html-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.ts$/, exclude: /node_modules/, use: 'ts-loader' },
      { test: /\.scss$/, exclude: /node_modules/, use: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader') },
      { test: /\.(jpe?g|png|gif|svg)$/i, exclude: /node_modules/, use: "url-loader?limit=8192" }
    ]
  }
}
