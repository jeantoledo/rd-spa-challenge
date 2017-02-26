import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from './card';

import './card.component.scss';

@Component({
    selector: 'rd-card',
    template: require('./card.component.html')
})
export class CardComponent { 
    @Input() card: Card;
    @Output() onDetailClick: EventEmitter<any> = new EventEmitter();

    onDetailClickEvent(cardId: string) {
        this.onDetailClick.emit(cardId);
    }
}