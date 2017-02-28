// Ponto de entrada da aplicação angular 2

import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {enableProdMode} from '@angular/core';

if(ENV === 'production') { // Aqui utilizo a variavel que o webpack seta quando é executado
    enableProdMode();
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
