import { Component, OnInit } from '@angular/core';
import { Card } from '../ui/card/card';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../../shared/book';
import { GoogleBooksService } from '../../api/google-books.service';
import { FavoritesService } from '../../services/favorites.service';
import { BookListResponse } from '../../api/book-list-response';

import './home.component.scss';

// Component Home, possui todas as propriedades e callbacks que serão utilizadas por todos os componentes que ela utiliza (search, card, pagination)

@Component({
    template: require('./home.component.html'),
})
export class HomeComponent implements OnInit { 
    private readonly searchPlaceholder: string = 'find books...';
    private readonly itemsPerPage: number = 12;

    private booksResponse: BookListResponse = new BookListResponse();
    private currentPage: number = 1;
    private searchTerm: string;

    constructor(private _http: Http, private _router: Router,  private _route: ActivatedRoute, 
        private _booksService: GoogleBooksService, private _favoritesService: FavoritesService) {}

    // Configurei a url de pesquisa para ajudar no SEO da aplicação, quando eu recebo o parametro de pesquisa já faço a pesquisa na hora
    // Outro passo seria configurar a de paginação também, porém não tive tempo para fazer isso   
    ngOnInit() {
        this._route.queryParams.subscribe(params => {
            if(params['q']) {
                this.search(params['q']);
            }
        });
    }

    searchEnter(searchTerm: string) {
        if(searchTerm && searchTerm != this.searchTerm) {
            this.currentPage = 1;
            this._router.navigate([''], { queryParams: { q: searchTerm }})
        }
    }

    search(searchTerm: string) {
        if(searchTerm) {
            this.searchTerm = searchTerm;
            this._booksService.search(this.searchTerm, this.currentPage, this.itemsPerPage)
                .subscribe((response) => this.booksResponse = response);
        }
    }

    // Quando a página é alterada refaço a pesquisa, esse evento é chamado pelo componente de search
    onPageChange(page: number) {
        let searchTerm = (<HTMLInputElement> document.getElementsByClassName('search-field-input')[0]).value;
        this.currentPage = page;
        this.search(searchTerm);
    }

    cardDetailClick(cardId: string) {
        this._router.navigate(['/book', cardId])
    }

    // Abaixo utilizo o serviço que criei para gerenciar os favoritos
    cardFavoriteClick(card: Card) {
        this._favoritesService.toggleFavorite(<Book> card);
    }

    isCardFavourited(cardId: string): boolean {
        return this._favoritesService.isFavorite(cardId);
    }
}
