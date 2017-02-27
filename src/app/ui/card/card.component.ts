import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from './card';

import './card.component.scss';

@Component({
    selector: 'rd-card',
    template: require('./card.component.html')
})
export class CardComponent { 
    @Input() card: Card;
    @Input() isFavourited: boolean;

    @Output() onFavoriteClick: EventEmitter<any> = new EventEmitter();
    @Output() onDetailClick: EventEmitter<any> = new EventEmitter();

    onDetailClickEvent() {
        this.onDetailClick.emit(this.card.id);
    }

    onFavoriteClickEvent() {
        this.onFavoriteClick.emit(this.card);
    }
}