import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { FavoritesService } from '../../services/favorites.service';

import '../home/home.component.scss';


@Component({
    template: require('./favorites.component.html'),
})
export class FavoritesComponent implements OnInit { 
    private books: Book[];
    
    constructor(private _favoritesService: FavoritesService) { }

    isCardFavourited(cardId: string): boolean {
        return this._favoritesService.isFavorite(cardId);
    }

    ngOnInit() {
        this.books = this._favoritesService.get();
    }
}