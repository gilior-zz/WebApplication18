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
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var home_1 = require("./Home/home");
var calendar_1 = require('./Home/calendar');
var press_1 = require('./Home/press');
var biography_1 = require("./Biography/biography");
var links_1 = require("./Links/links");
var contact_1 = require("./Contact/contact");
var programs_1 = require("./Programs/programs");
var pictures_1 = require("./Pictures/pictures");
var videos_1 = require("./Videos/videos");
var kids_art_component_1 = require('./kids-art/kids-art.component');
var header_image_1 = require("./HeaderImage/header.image");
var pipes = require('./pipes/pipes');
var services = require("./services/services");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, home_1.Home, biography_1.Biography, links_1.Links, contact_1.Contact, programs_1.Programs, pictures_1.Pictures, videos_1.Videos, header_image_1.HeaderImage, pipes.TranslatePipe, calendar_1.Calendar, press_1.Press, press_1.Press, pipes.SafeResourcePipe, kids_art_component_1.KidsArt],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routes_1.AppRoutingModule
            ],
            providers: [services.CacheManager, services.DataService, services.DialogService, services.LogService, services.TranslationService, platform_browser_1.Title],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map