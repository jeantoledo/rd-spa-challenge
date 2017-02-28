import express from 'express';
import path from 'path';
import compression from 'compression';
import fs from 'fs';

const app = express();

app.set('port', 8080);

app.use(compression()); // liga o gzip

// Configuração de performance para cache "infinito"
app.use((req, res, next) => { 
    if (req.url.match(/.\.(css|js|woff|woff2|eot)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
    next();
});

app.use(express.static('dist')); // serve de forma estática o diretório gerado pela build de produção

// Como estou usando o express para servir a aplicação angular, essa configuração é necessária
app.use('*', (req, res, next) => {
    fs.readFile(path.join(__dirname, '../dist/index.html'), 'utf8', (err, result) => {
        if (err) {
            return next(err);
        }

        res.set('content-type','text/html');
        res.send(result);
        res.end();
    });
});

app.listen(app.get('port'), (err) => {
    console.log(err || 'Production server running on port 8080...');
});
