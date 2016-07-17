import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {Calendar} from './calendar'
import {Updates} from './updates'
import {Press} from './press'
import {HeaderImage} from '../HeaderImage/header.image'


@Component({
    template: require("./home.html!text"),
    directives: [Calendar, Updates, Press, HeaderImage],
   
})

export class Home implements OnInit {
    ImageURL: string;
    constructor(private routeParams: RouteParams) {
        this.ImageURL = this.routeParams.get('ImageURL');
    }
    ngOnInit() {

    }
}