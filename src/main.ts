import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {enableProdMode} from '@angular/core';

if(ENV === 'production') {
    enableProdMode();
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);