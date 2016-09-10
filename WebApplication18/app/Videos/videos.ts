import {Component, OnInit, AfterViewInit, Injector} from '@angular/core'
import {BaseComponent} from '../common/base.component'
import {Router} from '@angular/router'

declare var youmax: any;
@Component({
    templateUrl: "./videos.html",
    moduleId: module.id,

})

export class Videos extends BaseComponent implements OnInit, AfterViewInit {
    youmaxObj: any;
    ImageURL: string;
    timer: NodeJS.Timer;
    constructor(public router: Router, private injector: Injector) {
        super(injector);
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
            hideLoadMore: true,
            hideHeader: true
        };

        this.youmaxObj = new youmax(options);
        this.timer = setInterval(() => { this.clearStupidGPlus() }, 1000);


    }
    clearStupidGPlus() {
        if (!$(".gc-bubbleDefault").length) { clearInterval(this.timer); } $(".gc-bubbleDefault").parent().remove()
    }

    ngOnInit() {

    }
}