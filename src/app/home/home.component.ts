import { Component } from '@angular/core';
import { Card } from '../ui/card/card';
import { Http } from '@angular/http';
import { GoogleBooksService } from '../../api/googlebooks.service';

import './home.component.scss';

@Component({
    template: require('./home.component.html')
})
export class HomeComponent { 
    private readonly searchPlaceholder: string = 'find books...';

    searchTerm: string = '';
    searchTotalItems: number;
    cards: Card[]; 

    constructor(private _http : Http, private _booksService: GoogleBooksService) {}

    onSearchEnter(q: string) {
        this.searchTerm = q;

        this._booksService.search(q)
            .subscribe(response => { 
                this.searchTotalItems = response.totalItems
                this.cards = response.items
            })
    }
}