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
var core_1 = require("@angular/core");
var services = require("./services/services");
var dal = require("./dal/models");
var router_1 = require('@angular/router');
//import * as blabla from './youmax/js/source_unpacked/jquery.youmax.js' 
var AppComponent = (function () {
    function AppComponent(dataService, CacheManager, router) {
        this.dataService = dataService;
        this.CacheManager = CacheManager;
        this.router = router;
    }
    AppComponent.prototype.UpdateImage = function (imageUrl) {
        //console.log(imageUrl);
    };
    AppComponent.prototype.goToContact = function () {
        this.router.navigate(['/contact']);
    };
    AppComponent.prototype.changeToEnglish = function () {
        this.CacheManager.StoreInCache("lang", dal.Language.English);
        document.location.reload();
    };
    AppComponent.prototype.changeToHebrew = function () {
        this.CacheManager.StoreInCache("lang", dal.Language.Hebrew);
        document.location.reload();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var req = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, "api/Data/GetMenuItems").
            subscribe(function (dataresponse) {
            _this.menuItems = dataresponse.MenuItems;
        }, function (error) { return console.error(error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./app.component.html",
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [services.DataService, services.CacheManager, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map