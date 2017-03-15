import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingComponent } from '../ui/loading/loading.component';
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
    private nextBooksResponse: BookListResponse = null; // usado para determinar quando chegamos na ultima página

    @ViewChild(LoadingComponent) loading: LoadingComponent;
    
    get isLastPage(): boolean { // usado para mostrar ou não a página de preview.
        return this.nextBooksResponse == null || !this.nextBooksResponse || !this.nextBooksResponse.items.length;
    }

    private searchTerm: string;

    constructor(private _http: Http, private _router: Router, private _route: ActivatedRoute,
        private _booksService: GoogleBooksService, private _favoritesService: FavoritesService) { }

    // Configurei a url de pesquisa para ajudar no SEO da aplicação, quando eu recebo o parametro de pesquisa já faço a pesquisa na hora
    // Outro passo seria configurar a de paginação também, porém não tive tempo para fazer isso   
    ngOnInit() {
        this._route.queryParams.subscribe(params => {
            if (params['q']) {
                this.search(0, params['q']);
            }
        });
    }

    searchEnter(searchTerm: string) {
        if (searchTerm) {
            this._router.navigate([''], { queryParams: { q: searchTerm } })
        }
    }

    search(startIndex: number, searchTerm: string) {
        if (searchTerm) {
            this.loading.show();
            
            this.searchTerm = searchTerm;
            this._booksService.search(searchTerm, startIndex, this.itemsPerPage)
                .subscribe((response) => {
                    this.booksResponse = response;
                    this.loading.hide();
                    this.searchNexPage(startIndex + this.itemsPerPage, searchTerm);
                });
        }
    }

    searchNexPage(startIndex: number, searchTerm: string) {
        this._booksService.search(searchTerm, startIndex, this.itemsPerPage)
            .subscribe((response) => {
                if (!response || !response.items.length) {
                    this.nextBooksResponse = null;
                }
                else {
                    this.nextBooksResponse = response;
                }
            });
    }

    // Quando a página é alterada refaço a pesquisa, esse evento é chamado pelo componente de search
    onPageChange(startIndex: number) {
        let searchTerm = (<HTMLInputElement> document.getElementsByClassName('search-field-input')[0]).value;
        this.search(startIndex, searchTerm);
    }

    cardDetailClick(cardId: string) {
        this._router.navigate(['/book', cardId])
    }

    // Abaixo utilizo o serviço que criei para gerenciar os favoritos
    cardFavoriteClick(card: Card) {
        this._favoritesService.toggleFavorite(<Book>card);
    }

    isCardFavourited(cardId: string): boolean {
        return this._favoritesService.isFavorite(cardId);
    }
}
