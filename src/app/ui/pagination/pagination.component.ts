/* Criei um componente para fazer paginação da lista de livros, claro que em um componente separado para poder ser reutilizado */
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import './pagination.component.scss';

@Component({
    selector: 'rd-pagination',
    template: require('./pagination.component.html')
})
export class PaginationComponent implements OnInit {
    @Input() itemsPerPage: number; // required
    @Input() zeroBased: boolean = true;
    @Input() foundLastPage: boolean = false; //é a cargo de quem usa o componente dizer se chegou na última página
    @Output() pageChanged: EventEmitter<number> = new EventEmitter();

    private startIndex: number = 1;

    ngOnInit() {
        if (!this.itemsPerPage) // se o usuário não usou informou valor a propriedade itemsPerPage lança erro
            throw new Error("Pagination Component: 'itemsPerPage' is required");
    }

    emitPageChanged() {
        let _startIndex = this.startIndex + (this.zeroBased ? -1 : 0); //ajusta o startIndex se for zeroIndex
        this.pageChanged.emit(_startIndex);
    }

    get isFirstPage(): boolean { // usado para mostrar ou não a página de preview.
        return this.startIndex + (this.zeroBased ? -1 : 0) <= 0;
    }

    previousPage() { 
        this.startIndex -= this.itemsPerPage;
        this.emitPageChanged();
    }

    nextPage() { 
        this.startIndex += this.itemsPerPage;
        this.emitPageChanged();
    }
}
