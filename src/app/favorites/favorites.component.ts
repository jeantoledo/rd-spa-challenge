import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../../shared/book';
import { FavoritesService } from '../../services/favorites.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../ui/alert/alert.component';

import '../home/home.component.scss';

// Um componente parecido com o de home, tirando o search e paginação, por isso nem criei outro arquivo scss
@Component({
    template: require('./favorites.component.html'),
})
export class FavoritesComponent implements OnInit { 
    private books: Book[];
    
    @ViewChild(AlertComponent) alert: AlertComponent;
    
    constructor(private _favoritesService: FavoritesService, private _router: Router) { }

    cardDetailClick(cardId: string) {
        this._router.navigate(['/book', cardId])
    }

    cardFavoriteClick(card: Book) {
        let isFavorite = this._favoritesService.toggleFavorite(<Book> card);

        let bookIcon = '<span class="glyphicon glyphicon-book" aria-hidden="true"></span>';
        if(isFavorite) {
            this.alert.success(`${bookIcon} The book '${card.title}' has been successfully added to favorites`);
        } else {
            this.alert.danger(`${bookIcon} The book '${card.title}' has been successfully removed from favorites`);
            this.removeBook(card.id);
        }
    }

    removeBook(bookId: string) {
        let ids = this.books.map((i: Book) => i.id);
        let index = ids.indexOf(bookId);
        this.books.splice(index, 1);
    }

    isCardFavourited(cardId: string): boolean {
        return this._favoritesService.isFavorite(cardId);
    }

    ngOnInit() {
        this.books = this._favoritesService.get();
    }
}
