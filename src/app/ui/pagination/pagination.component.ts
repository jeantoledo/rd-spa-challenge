/* Criei um componente para fazer paginação da lista de livros, claro que em um componente separado para poder ser reutilizado */

import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import './pagination.component.scss';

@Component({
    selector: 'rd-pagination',
    template: require('./pagination.component.html')
})
export class PaginationComponent implements OnChanges {
    @Input() itemsPerPage: number;
    @Input() currentPage: number;
    @Input() itemsCount: number;
    // Propriedades necessárias para o funcionamento do componente

    @Output() pageChanged: EventEmitter<any> = new EventEmitter();

    private pageCount: number;
    private currentPageOptions: number[];

    // Sempre que o número de items ou a página muda recalculamos as informações
    ngOnChanges(changes: SimpleChanges) {
        if (changes['itemsCount']) {
            this.calculatePageCount();
        }

        if (changes['itemsCount'] || changes['currentPage']) {
            this.calculateCurrentPageOptions();
        }
    }

    calculatePageCount() {
        this.pageCount = (this.itemsCount / this.itemsPerPage) | 0;

        if (this.itemsCount % this.itemsPerPage > 0) {
            this.pageCount = this.pageCount + 1;
        }
    }

    // Gera um array com as opções de paginação ex: [1, 2, 3, 4, 5], ele tem uma inteligencia para manter a página atual no centro do array
    calculateCurrentPageOptions() {
        let delta = 2,
            left = this.currentPage - delta,
            right = this.currentPage + delta + 1;

        this.currentPageOptions = Array.from({length: this.pageCount}, (v, k) => k + 1)
            .filter(i => i && i >= left && i < right);
    }

    previousPage() { // muda de página, recalculando assim as opções e renderizando novamente o componente
        if (this.currentPage > 1) {
            this.setPage(this.currentPage - 1);
        }
    }

    nextPage() { // muda de página, recalculando assim as opções e renderizando novamente o componente
        if (this.currentPage < this.pageCount) {
            this.setPage(this.currentPage + 1);
        }
    }

    setPage(page: number) { // seta a página, recalculando assim as opções e renderizando novamente o componente
        this.currentPage = page;
        this.calculateCurrentPageOptions();
        this.pageChanged.emit(page);
    }
}
