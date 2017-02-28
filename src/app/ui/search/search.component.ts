import { Component, Input, Output, EventEmitter } from '@angular/core';
import './search.component.scss';

@Component({
    selector: 'rd-search',
    template: require('./search.component.html') // Modo que o webpack usa para importar templates html para o componente angular 2
})
export class SearchComponent { 
    @Input() placeholder: string;
    @Input() value: string;
    @Output() onEnter: EventEmitter<any> = new EventEmitter();

    onEnterEvent() {
        let searchTerm = (<HTMLInputElement> document.getElementsByClassName('search-field-input')[0]).value;
        this.onEnter.emit(searchTerm);
    }
}

/* Separei a barra de search em um componente unico, assim podemos utilizar em outros projetos, os valores que precisamos receber para manter o 
   componente reutilizavel são: placeholder, value e um evento que será executado quando o usuário fizer o search por algum item */
