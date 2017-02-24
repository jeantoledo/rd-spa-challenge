import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BookListResponse } from './booklist.response';
import { Rx } from 'rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GoogleBooksService {
    private readonly apiBaseUrl: string = 'https://www.googleapis.com/books/v1';
    private readonly itemsPerPage: number = 12;

    constructor(private _http : Http) { }

    search(q: string) : Observable<BookListResponse> {
        return this._http.get(`${this.apiBaseUrl}/volumes?q=${q}&max-results=${this.itemsPerPage}`)
            .map(response => {
                let json = response.json();
                let items = [];

                if(json.items) {
                    items = json.items.map(item => { 
                        return {
                            id : item.id,
                            thumbnail: 
                                item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : '',
                            title: item.volumeInfo.title,
                            subtitle: item.volumeInfo.subtitle,
                            author: item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : ''
                        }
                    });
                }

                return {
                    totalItems: json.totalItems,
                    items: items
                }
            })
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}