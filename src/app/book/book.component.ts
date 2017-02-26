import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBooksService } from '../../api/googleBooks.service';
import { Book } from '../../api/book';

import './book.component.scss';

@Component({
    template: require('./book.component.html'),
})
export class BookComponent implements OnInit { 
    private book: Book;

    constructor(private _route: ActivatedRoute, private _booksService: GoogleBooksService) {}

    ngOnInit() {
        this._route.params.subscribe(params => {
            if(params['id']) {
                this._booksService.get(params['id']).subscribe((book: Book) => this.book = book);
            }
        });
    }
}