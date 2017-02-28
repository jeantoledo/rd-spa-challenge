import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'), // 2 entry points vai fazer o webpack criar os chuncks separados
    main: path.resolve(__dirname, 'src/main') // é o start da nossa aplicação
  },
  resolve: {
    extensions: [ '.js', '.ts' ]
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), // a webpack de produção deve jogar os arquivos em dist
    publicPath: '/',
    filename: '[name].[chunkhash].js' // usa o plugin de hash para setar o filename
  },
  plugins: [
      new ExtractTextPlugin('[name].[contenthash].css'), // monta o arquivo de bundle usando o plugin abaixo
      new WebpackMd5Hash(), // esse plugin adiciona uma hash a cada arquivo de bundle, e uma nova hash é gerada quando o arquivo tem seu conteudo alterado, ou seja, podemos deixar todos os arquivos com cache infinito no navegador que quando eles forem alterados serão baixados novamente (ótimo para performance da aplicação)
      new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor' // Eu crio outro chunk do webpack só para os vendors, assim eu posso adiciona-los com cache "infinito" e aproveitar o uso do plugin acima
      }),
      new HtmlWebpackPlugin({ // Este plugin é utilizado pelo webpack para injetar no html o endereço do script gerado pelo webpack, facilita muito o desenvolvimento
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
      new webpack.optimize.DedupePlugin(), // Elimina pacotes duplicados no bundle
      new webpack.optimize.UglifyJsPlugin(), // Minifica o JS
      new webpack.DefinePlugin({ // Seta a variavel de ambiente via webpack, ela é usada para rodar o angular 2 em modo de produção ou não no main.ts
          ENV: JSON.stringify('production')
      })
  ],
  module: {
    rules: [
      { test: /\.html$/, exclude: /node_modules/, use: 'html-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.ts$/, exclude: /node_modules/, use: 'ts-loader' },
      { test: /\.scss$/, exclude: /node_modules/, use: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader') }, // configuração do sass para webpack 2
      { test: /\.(jpe?g|png|gif|svg)$/i, exclude: /node_modules/, use: "url-loader?limit=8192" } // O url-loader joga a imagem via base/64 caso o limite não seja atingido, senão ele gera uma imagem tradicional
    ]
  }
}
