"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var header_image_1 = require('../HeaderImage/header.image');
var router_1 = require('angular2/router');
var Videos = (function () {
    function Videos(routeParams) {
        this.routeParams = routeParams;
        this.ImageURL = this.routeParams.get('ImageURL');
    }
    Videos.prototype.ngAfterViewInit = function () {
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
            hideLoadMore: true
        };
        this.youmaxObj = new youmax(options);
    };
    Videos.prototype.ngOnInit = function () {
    };
    Videos = __decorate([
        core_1.Component({
            template: require("./videos.html!text"),
            directives: [header_image_1.HeaderImage]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams])
    ], Videos);
    return Videos;
}());
exports.Videos = Videos;
//# sourceMappingURL=videos.js.map