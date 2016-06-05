import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sd-click-me',
    template: `
    <button (click)="onClickMe()" [ngClass]="setBtnClasses()">{{clickMessage}}</button>`,
    styles: [`
        button {
            width: 150px;
        }
        .btn-click-me-on {
            background: green;
        }
    `]
})
export class ClickMeComponent {
    clickMessage: string = 'isOn: false';
    isOn: boolean = false;
    
    onClickMe() {
        this.isOn = !this.isOn;
        this.clickMessage = `isOn: ${this.isOn}`;
    }

    setBtnClasses() {
        let classes = {
            'btn-click-me-on': this.isOn
        };
        return classes;
    }
}