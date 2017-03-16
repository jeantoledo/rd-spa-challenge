import { Component, Input } from '@angular/core';

@Component({
    selector: 'rd-alert',
    template: require('./alert.component.html')
})
export class AlertComponent {
    private message: string = ""; // mensagem que será mostrada no alert
    private type: string = ""; // tipo do alerta a ser mostrado, opções válidas são: success, info, warning, or danger
    private isHidden: boolean = true; // bind de visibilidade do componente
    private interval; // usado o "count" anterior antes de começar uma nova

    success(message: string): void {
        this.type = "success";
        this.show(message);
    }

    info(message: string): void {
        this.type = "info";
        this.show(message);
    }

    warning(message: string): void {
        this.type = "warning";
        this.show(message);
    }

    danger(message: string): void {
        this.type = "danger";
        this.show(message);
    }

    private show(message: string): void {
        this.message = message;
        this.isHidden = false;
        this.closeAfter3Seconds();
    }

    private closeAfter3Seconds(): void {
        clearTimeout(this.interval);

        this.interval = setTimeout(() => {
            this.isHidden = true;
        }, 3000);
    }
}
