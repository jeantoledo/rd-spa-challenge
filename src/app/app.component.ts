import { Component, OnInit } from '@angular/core';
import { ChuckNorrisJokesService } from '.././api/chuckNorrisJokes.service';
import './app.component.scss';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})
export class AppComponent implements OnInit { 
    joke: string = '';
    errorMessage: string = '';

    constructor(private _chuckNorrisJokesService : ChuckNorrisJokesService) { }

    ngOnInit() : void {
        this._chuckNorrisJokesService.getRandomJoke().subscribe(
            joke => this.joke = joke,
            error => this.errorMessage = <any>error);
    }
}