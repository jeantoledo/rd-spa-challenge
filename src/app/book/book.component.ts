import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleBooksService } from '../../api/google-books.service';
import { Book } from '../../shared/book';

import './book.component.scss';

@Component({
    template: require('./book.component.html'),
})
export class BookComponent implements OnInit {
    private book: Book;

    constructor(private _route: ActivatedRoute, private _booksService: GoogleBooksService) { }

    // busca um livro especifico na api go goole books
    ngOnInit() {
        this._route.params.subscribe(params => {
            if (params['id']) {
                this._booksService.get(params['id']).subscribe((book: Book) => this.book = book);
            }
        });
    }
}
