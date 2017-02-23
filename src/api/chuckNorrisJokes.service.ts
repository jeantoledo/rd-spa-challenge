import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChuckNorrisJokesService {
    constructor(private _http : Http) { }

    getRandomJoke() : Observable<string> {
        return this._http.get('https://api.icndb.com/jokes/random')
            .map((response: Response) => <string> response.json().value.joke)
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error');
    }
}