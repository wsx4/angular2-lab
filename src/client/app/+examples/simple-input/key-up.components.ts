import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sd-key-up1',
    template: `
        <input #box 
               (keyup.enter)="values=box.value" 
               (blur)="values=box.value"
               placeholder="keyup version 1">
        <p>{{values}}</p>
    `
})
export class KeyUpComponent_v1 {
    values: string = '';
}

@Component({
    moduleId: module.id,
    selector: 'sd-key-up2',
    template: `
        <input #box 
               (keyup.enter)="onKey(box.value)" 
               (blur)="onKey(box.value)"
               placeholder="keyup version 2">
        <p>{{values}}</p>
    `
})
export class KeyUpComponent_v2 {
    values: string = '';
    onKey(value: string) {
        this.values = value;
    }
}

@Component({
  selector: 'sd-key-up-loop-back',
  template:`
    <input #box (keyup)="0" placeholder="keyup loop-back">
    <p>{{box.value}}</p>
  `
})
export class KeyUpLoopbackComponent { }