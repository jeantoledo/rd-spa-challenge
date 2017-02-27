import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BookListResponse } from './bookListResponse';
import { Book } from '../shared/book';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GoogleBooksService {
    private readonly apiBaseUrl: string = 'https://www.googleapis.com/books/v1';

    constructor(private _http : Http) {}

    search(q: string, page: number, itemsPerPage: number) : Observable<BookListResponse> {
        let startIndex = (page - 1) * itemsPerPage;
        let apiFieldsFilter = 'fields=totalItems,items(id,volumeInfo/title,volumeInfo/subtitle,volumeInfo/authors,volumeInfo/description,volumeInfo/imageLinks/thumbnail)';

        return this._http.get(`${this.apiBaseUrl}/volumes?q=${q}&${apiFieldsFilter}&maxResults=${itemsPerPage}&startIndex=${startIndex}`)
            .map((response: Response) => {
                let json = response.json();
                let items = [];

                if(json.items) {
                    items = json.items.map(item => { 
                        return {
                            id : item.id,
                            thumbnail: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : '',
                            title: item.volumeInfo.title,
                            subtitle: item.volumeInfo.subtitle,
                            author: item.volumeInfo.authors ? item.volumeInfo.authors.join(", ") : ''
                        }
                    });
                }

                return {
                    totalItems: json.totalItems,
                    items: items,
                    searchTerm: q
                }
            })
            .catch(this.handleError);
    }

    get(id: string) : Observable<Book> {
        return this._http.get(`${this.apiBaseUrl}/volumes/${id}`)
            .map((response: Response) => {
                let json = response.json();

                return {
                    id: json.id,
                    thumbnail: json.volumeInfo.imageLinks && json.volumeInfo.imageLinks.thumbnail ? json.volumeInfo.imageLinks.thumbnail : '',
                    title: json.volumeInfo.title,
                    subtitle: json.volumeInfo.subtitle,
                    author: json.volumeInfo.authors ? json.volumeInfo.authors.join(", ") : '',
                    year: json.volumeInfo.publishedDate,
                    description: json.volumeInfo.description
                }
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server Error');
    }
}