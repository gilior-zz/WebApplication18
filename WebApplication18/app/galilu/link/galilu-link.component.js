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
var router_1 = require('@angular/router');
var services_1 = require('../../services/services');
var models_1 = require("../../dal/models");
var page_name_service_1 = require('../../services/page-name.service');
var GaliluLink = (function () {
    function GaliluLink(cacheManager, router, pn) {
        this.cacheManager = cacheManager;
        this.router = router;
        this.pn = pn;
    }
    GaliluLink.prototype.changeMode = function () {
        if (this.pn.currentPageName.includes('galilu'))
            this.router.navigate(['/home']);
        else
            this.router.navigate(['galilu']);
    };
    GaliluLink.prototype.ngOnInit = function () {
        //this.float=
    };
    Object.defineProperty(GaliluLink.prototype, "galiluMessage", {
        get: function () { return this.pn.currentPageName.includes('galilu') ? 'Noya Schleien' : 'To store'; },
        enumerable: true,
        configurable: true
    });
    //@HostListener('mouseenter') onMouseEnter() {
    //    this.kidsArtMessage = 'Coming Soon...';
    //}
    //@HostListener('mouseleave') onMouseLeave() {
    //    this.kidsArtMessage = 'Kids Art';
    //}
    GaliluLink.prototype.onscroll = function () {
        this.resetStyleVariables();
        if ($('.fixed-button').offset().top + $('.fixed-button').height()
            >= $('#footer').offset().top) {
            this.position = "absolute";
            this.bottom = $('#footer').height() + "px";
            this.isAbsolute = true;
        }
        if ($(document).scrollTop() + window.innerHeight < $('#footer').offset().top) {
            this.position = "fixed";
            this.bottom = '0px';
            this.isFixed = true;
        }
        this.setClasses();
    };
    GaliluLink.prototype.resetStyleVariables = function () {
        this.isAbsolute = false;
        this.isFixed = false;
        //this.isHebrew = false;
        //this.isEnglish = false;
    };
    GaliluLink.prototype.setClasses = function () {
        //console.log(this.isFixed)
        //console.log(this.isAbsolute)
        var classes = {
            //'non-footer-mode': this.isFixed,
            //'footer-mode': !this.isAbsolute,
            'hebrew-mode': this.isHebrew,
            'english-mode': !this.isHebrew,
        };
        return classes;
    };
    Object.defineProperty(GaliluLink.prototype, "float", {
        get: function () {
            if (this.isHebrew)
                return 'left';
            return 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaliluLink.prototype, "isEnglish", {
        get: function () { return !this.isHebrew; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GaliluLink.prototype, "isHebrew", {
        get: function () {
            var l = this.cacheManager.GetFromCache('lang', models_1.Language.Hebrew) == models_1.Language.Hebrew;
            return l;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostListener('document:scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], GaliluLink.prototype, "onscroll", null);
    GaliluLink = __decorate([
        core_1.Component({
            selector: 'galilu-link',
            moduleId: module.id,
            templateUrl: 'galilu-link.component.html',
            styleUrls: ['./galilu-link.component.css']
        }), 
        __metadata('design:paramtypes', [services_1.CacheManager, router_1.Router, page_name_service_1.pageNameService])
    ], GaliluLink);
    return GaliluLink;
}());
exports.GaliluLink = GaliluLink;
//# sourceMappingURL=galilu-link.component.js.map