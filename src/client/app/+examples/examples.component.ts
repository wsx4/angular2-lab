import { Component, OnInit } from '@angular/core';

import { ClickMeComponent, KeyUpComponent_v1, KeyUpComponent_v2, KeyUpLoopbackComponent } from './simple-input/index';

@Component({
    moduleId: module.id,
    selector: 'sd-examples',
    templateUrl: 'examples.component.html',
    styleUrls: ['examples.component.css'],
    directives: [ClickMeComponent, KeyUpComponent_v1 , KeyUpComponent_v2, KeyUpLoopbackComponent]
})
export class ExamplesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}