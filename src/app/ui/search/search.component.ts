import { Component, Input, Output, EventEmitter } from '@angular/core';
import './search.component.scss';

@Component({
    selector: 'rd-search',
    template: require('./search.component.html')
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