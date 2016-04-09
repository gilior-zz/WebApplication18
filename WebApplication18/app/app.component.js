var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var services = require("./services/services");
var dal = require("./dal/models");
var http_1 = require("angular2/http");
var router_1 = require("angular2/router");
var home_1 = require("./Home/home");
var biography_1 = require("./Biography/biography");
var links_1 = require("./Links/links");
var contact_1 = require("./Contact/contact");
var programs_1 = require("./Programs/programs");
var pictures_1 = require("./Pictures/pictures");
var videos_1 = require("./Videos/videos");
var header_image_1 = require("./HeaderImage/header.image");
//import * as blabla from './youmax/js/source_unpacked/jquery.youmax.js'
var AppComponent = (function () {
    function AppComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.log = '';
        router.subscribe(function (url) {
            // Current URL
            router.recognize(url).then(function (instruction) {
                _this.currentPathName = instruction.component.componentType.name;
                $('.btn-navbar').click(); //bootstrap 2.x
                $('.navbar-toggle').click(); //bootstrap 3.x by Richard
            });
        });
        //$('.nav a').on('click', function () {
        //    //$('.btn-navbar').click(); //bootstrap 2.x
        //    $('.navbar-toggle').click() //bootstrap 3.x by Richard
        //});
    }
    AppComponent.prototype.routerCanDeactivate = function (next, prev) {
        this.log = "Finished navigating from \"" + (prev ? prev.urlPath : 'null') + "\" to \"" + next.urlPath + "\"";
        console.log(this.log);
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
            selector: "app",
            template: require("./app.component.html!text"),
            //template: '<h1>My First Angular 2 App</h1><div class="grid" [ngGrid]><div class="grid-item" [ngGridItem]></div></div>',
            directives: [router_1.ROUTER_DIRECTIVES, header_image_1.HeaderImage],
            providers: [router_1.ROUTER_PROVIDERS, services.DataService, http_1.HTTP_PROVIDERS, services.CacheManager, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]
        }),
        router_1.RouteConfig([
            { path: "/home", component: home_1.Home, name: "Home", useAsDefault: true },
            { path: "/biography", component: biography_1.Biography, name: "Biography" },
            { path: "/pictures", component: pictures_1.Pictures, name: "Pictures" },
            { path: "/videos", component: videos_1.Videos, name: "Videos" },
            { path: "/programs", component: programs_1.Programs, name: "Programs" },
            { path: "/links", component: links_1.Links, name: "Links" },
            { path: "/contact", component: contact_1.Contact, name: "Contact" },
        ]), 
        __metadata('design:paramtypes', [services.DataService, router_1.Router])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map