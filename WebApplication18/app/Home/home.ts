import {Component, OnInit} from 'angular2/core'
import {Calendar} from './calendar'
import {Updates} from './updates'
import {Press} from './press'


@Component({
    template: require("./home.html!text"),
    directives: [Calendar,Updates,Press]
})

export class Home implements OnInit {

    constructor() {

    }
    ngOnInit() {

    }
}