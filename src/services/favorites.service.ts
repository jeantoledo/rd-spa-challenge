import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable()
export class FavoritesService {
    private readonly favoritesKey = 'my-favorites-gbooks';
    
    constructor() {
        if(!localStorage) {
            throw "Your browser does not support localStorage";
        }
    }

    get(): Book[] {
        return JSON.parse(localStorage.getItem(this.favoritesKey));
    }

    getIds(): string[] {
        return this.get().map((i: Book) => i.id);
    }

    isFavorite(id: string): boolean {
        return this.getIds().indexOf(id) !== -1
    }

    toggleFavorite(book: Book) {
        let books = this.get();

        if(this.isFavorite(book.id)) {
            let index = this.getIds().indexOf(book.id);
            books.splice(index, 1);
        } else {
            books.push(book);
        }

        localStorage.setItem(this.favoritesKey, JSON.stringify(books));
    }
}