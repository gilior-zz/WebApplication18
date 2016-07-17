import {Component, OnInit, AfterViewInit} from 'angular2/core'
import {HeaderImage} from '../HeaderImage/header.image'
import {RouteParams} from 'angular2/router'
declare var youmax: any;
@Component({
    template: require("./videos.html!text"),
    directives: [HeaderImage]
})

export class Videos implements OnInit, AfterViewInit {
    youmaxObj: any;
    ImageURL: string;
    constructor(private routeParams: RouteParams) {
        this.ImageURL = this.routeParams.get('ImageURL');
    }

    ngAfterViewInit() {
        var options = {
            apiKey: "AIzaSyCveFKo8nQBAsJtrTyotXVx2wxqg5rHDBY",
            clientId: "32210824715-6kkbgjdro3468agc4e66erp7llv3kf8n.apps.googleusercontent.com",
            channel: "https://www.youtube.com/user/noyaschleien",
            youtube_channel_uploads: [
                {
                    name: "",
                    url: "https://www.youtube.com/user/noyaschleien",
                    selected: true
                },
            ],

            autoPlayVideo: true,
            displayFirstVideoOnLoad: true,
            autoLoadComments: true,
            hideNavigation: true,
        };

        this.youmaxObj = new youmax(options);
    }
    ngOnInit() {

    }
}