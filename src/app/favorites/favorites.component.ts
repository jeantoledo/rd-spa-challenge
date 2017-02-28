import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book';
import { FavoritesService } from '../../services/favorites.service';
import { Router } from '@angular/router';

import '../home/home.component.scss';

@Component({
    template: require('./favorites.component.html'),
})
export class FavoritesComponent implements OnInit { 
    private books: Book[];
    
    constructor(private _favoritesService: FavoritesService, private _router: Router) { }

    cardDetailClick(cardId: string) {
        this._router.navigate(['/book', cardId])
    }

    cardFavoriteClick(card: Book) {
        this._favoritesService.toggleFavorite(<Book> card);
    }

    isCardFavourited(cardId: string): boolean {
        return this._favoritesService.isFavorite(cardId);
    }

    ngOnInit() {
        this.books = this._favoritesService.get();
    }
}
