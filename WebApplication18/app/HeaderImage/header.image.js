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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var services = require('../services/services');
var dal = require('../dal/models');
var HeaderImage = (function () {
    //ImageURL: string;
    //ImageURL: SafeUrl;
    function HeaderImage(dataService, logService, sanitizer, router) {
        this.dataService = dataService;
        this.logService = logService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.active = true;
    }
    HeaderImage.prototype.canActivate = function (route, state) {
        //this.active = false;
        //setTimeout(this.active = true, 0);
        return true;
    };
    HeaderImage.prototype.ngOnInit = function () {
        var _this = this;
        this.logService.writeToLog('in ngOnInit');
        var req = { Language: dal.Language.Hebrew, PathName: this.pageName };
        this.dataService.ConnectToApiData(req, 'api/Data/GetImageForMenuItem').subscribe(function (res) {
            _this.ImageURL = res.ImageURL; //console.log(this.ImageURL) }
            _this.safeImage = _this.sanitizer.bypassSecurityTrustStyle("url('" + _this.ImageURL + "')");
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HeaderImage.prototype, "pageName", void 0);
    HeaderImage = __decorate([
        core_1.Component({
            selector: 'header-image',
            templateUrl: './header.image.html',
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [services.DataService, services.LogService, platform_browser_1.DomSanitizer, router_1.Router])
    ], HeaderImage);
    return HeaderImage;
}());
exports.HeaderImage = HeaderImage;
//# sourceMappingURL=header.image.js.map