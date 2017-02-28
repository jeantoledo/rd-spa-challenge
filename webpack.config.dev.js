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
    filename: 'bundle.js' // para o servidor de dev não precisamos de uma configuração grande do webpack, não precisamos separar os chunks, etc
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: 'src/index.html', // Este plugin é utilizado pelo webpack para injetar no html o endereço do script gerado pelo webpack, facilita muito o desenvolvimento
          inject: true
      }),
      new webpack.DefinePlugin({
          ENV: JSON.stringify('development') // Seta a variavel de ambiente via webpack, ela é usada para rodar o angular 2 em modo de produção ou não no main.ts
      })
  ],
  module: {
    rules: [
      { test: /\.html$/, exclude: /node_modules/, use: 'html-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.ts$/, exclude: /node_modules/, use: 'ts-loader' },
      { test: /\.scss$/,  exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // configuração do sass para webpack 2
      { test: /\.(jpe?g|png|gif|svg)$/i, exclude: /node_modules/, use: "url-loader?limit=8192" } // O url-loader joga a imagem via base/64 caso o limite não seja atingido, senão ele gera uma imagem tradicional
    ]
  }
}
