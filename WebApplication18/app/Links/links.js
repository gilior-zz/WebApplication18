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
var router_1 = require('angular2/router');
var services = require('../services/services');
var dal = require('../dal/models');
var header_image_1 = require('../HeaderImage/header.image');
var Links = (function () {
    function Links(dataService, routeParams) {
        this.dataService = dataService;
        this.routeParams = routeParams;
        this.ImageURL = this.routeParams.get('ImageURL');
    }
    Links.prototype.ngOnInit = function () {
        var _this = this;
        var request = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(request, 'api/Data/GetLinks').subscribe(function (res) { _this.links = res.Links; }, function (error) { console.error('error in Links in ngOnInit: ' + error.ErrorText); });
    };
    Links = __decorate([
        core_1.Component({
            template: require("./links.html!text"),
            directives: [header_image_1.HeaderImage]
        }), 
        __metadata('design:paramtypes', [services.DataService, router_1.RouteParams])
    ], Links);
    return Links;
}());
exports.Links = Links;
//# sourceMappingURL=links.js.map