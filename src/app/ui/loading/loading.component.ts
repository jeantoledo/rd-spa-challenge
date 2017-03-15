import { Component } from '@angular/core';

import './loading.component.scss';

@Component({
    selector: 'rd-loading',
    template: require('./loading.component.html')
})
export class LoadingComponent { 
    show() : void {
        this.setWidth(100);
    }

    hide(): void {
        this.setWidth(0);
    }

    private setWidth(width: number) {
        (<HTMLElement> document.getElementsByClassName("overlay")[0]).style.width = width + "%";
    }
}
