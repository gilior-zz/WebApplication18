import {Component, OnInit} from 'angular2/core'


@Component({
    template: require("./videos.html!text")
})

export class Videos implements OnInit {
    constructor() {
        var req = require("../../youmax/loader.js");
        console.log(req);
    }
    ngOnInit() {

    }
}