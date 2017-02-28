/* eslint-disable no-console */

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import chalk from 'chalk';

const app = express();
const compiler = webpack(config);

process.env.NODE_ENV = 'development';

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
 
app.use('*', (req, res, next) => {
  var filename = path.join(compiler.outputPath,'index.html');

  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(8080, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(chalk.green('Dev server running on port 8080...'));
        open('http://localhost:8080');
    }
});
