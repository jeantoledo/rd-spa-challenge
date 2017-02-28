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

    @Output() pageChanged: EventEmitter<any> = new EventEmitter();

    private pageCount: number;
    private currentPageOptions: number[];

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

    calculateCurrentPageOptions() {
        let delta = 2,
            left = this.currentPage - delta,
            right = this.currentPage + delta + 1;

        this.currentPageOptions = Array.from({length: this.pageCount}, (v, k) => k + 1)
            .filter(i => i && i >= left && i < right);
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.setPage(this.currentPage - 1);
        }
    }

    nextPage() {
        if (this.currentPage < this.pageCount) {
            this.setPage(this.currentPage + 1);
        }
    }

    setPage(page: number) {
        this.currentPage = page;
        this.calculateCurrentPageOptions();
        this.pageChanged.emit(page);
    }
}
