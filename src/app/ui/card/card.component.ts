import { Component, Input } from '@angular/core';
import './card.component.scss';
import { Card } from './card';

@Component({
    selector: 'rd-card',
    template: require('./card.component.html')
})
export class CardComponent { 
    @Input() card: Card;
}