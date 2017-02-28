/*neste diretório colocar todos os serviços internos da aplicação (que não consomem webservices)*/

import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

@Injectable()
export class FavoritesService { // Essa classe basicamente organiza todos os favoritos, ele será utilizado pelos componentes de Favoritos e Home
    private readonly favoritesKey = 'my-favorites-gbooks';
    
    constructor() {
        // O ideal aqui seria ter um fallback, utilizar os cookies por exemplo caso localStorage não estivesse disponivel
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
