import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from './card';

import './card.component.scss';

@Component({
    selector: 'rd-card',
    template: require('./card.component.html')
})
export class CardComponent { 
    @Input() card: Card; // Como o livro tem as propriedades semelhantes ao card, posso fazer equivalencia dos dois
    @Input() isFavourited: boolean;

    @Output() onFavoriteClick: EventEmitter<any> = new EventEmitter();
    @Output() onDetailClick: EventEmitter<any> = new EventEmitter();

    // quando o usuário clica em detalhes nesse card eu lanço um evento, assim quem utiliza esse componente pode fazer uma ação especifica
    // eu não poderia colocar aqui a lógica de redirecionar para a página de detalhes do livro, porque esse é um componente de card, o card
    // pode não ser um livro por exemplo
    onDetailClickEvent() {
        this.onDetailClick.emit(this.card.id);
    }

    onFavoriteClickEvent() { // quando o usuário favorita esse card eu lanço um evento, assim quem utiliza esse componente pode fazer uma ação especifica
        this.onFavoriteClick.emit(this.card);
    }
}
