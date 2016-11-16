var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../common/base.component';
import { Router } from '@angular/router';
export var Videos = (function (_super) {
    __extends(Videos, _super);
    function Videos(router, injector) {
        _super.call(this, injector);
        this.router = router;
        this.injector = injector;
    }
    Videos.prototype.ngAfterViewInit = function () {
        var _this = this;
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
        this.timer = setInterval(function () { _this.clearStupidGPlus(); }, 1000);
    };
    Videos.prototype.clearStupidGPlus = function () {
        console.debug("in clearStupidGPlus");
        //$("   ").parent().remove();
    };
    Videos.prototype.ngOnInit = function () {
    };
    Videos.decorators = [
        { type: Component, args: [{
                    templateUrl: "./videos.html",
                    moduleId: module.id,
                    styleUrls: ['./videos.css']
                },] },
    ];
    /** @nocollapse */
    Videos.ctorParameters = [
        { type: Router, },
        { type: Injector, },
    ];
    return Videos;
}(BaseComponent));
//# sourceMappingURL=videos.js.map