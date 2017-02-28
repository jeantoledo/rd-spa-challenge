import { Component } from '@angular/core';

import './app.component.scss'; // com o webpack importamos o css assim

@Component({
    selector: 'app',
    template: require('./app.component.html')
})
export class AppComponent { }

/* Component principal da aplicação, estou seguindo o padrão de arquitetura indicado pelo angular 2, 
   ou seja manter todos os arquivos de mesma feature na mesma pasta */
