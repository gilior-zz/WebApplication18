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
var services_1 = require('../services/services');
var models_1 = require("../dal/models");
var KidsArt = (function () {
    function KidsArt(cacheManager, router) {
        this.cacheManager = cacheManager;
        this.router = router;
        this.kidsArtMessage = 'Kids Art';
    }
    KidsArt.prototype.goToKidsArt = function () { };
    KidsArt.prototype.ngOnInit = function () {
        //this.float=
    };
    KidsArt.prototype.onMouseEnter = function () {
        this.kidsArtMessage = 'Coming Soon...';
    };
    KidsArt.prototype.onMouseLeave = function () {
        this.kidsArtMessage = 'Kids Art';
    };
    KidsArt.prototype.onscroll = function () {
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
    KidsArt.prototype.resetStyleVariables = function () {
        this.isAbsolute = false;
        this.isFixed = false;
        //this.isHebrew = false;
        //this.isEnglish = false;
    };
    KidsArt.prototype.setClasses = function () {
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
    Object.defineProperty(KidsArt.prototype, "float", {
        get: function () {
            if (this.isHebrew)
                return 'left';
            return 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KidsArt.prototype, "isEnglish", {
        get: function () { return !this.isHebrew; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KidsArt.prototype, "isHebrew", {
        get: function () {
            var l = this.cacheManager.GetFromCache('lang', models_1.Language.Hebrew) == models_1.Language.Hebrew;
            return l;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], KidsArt.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], KidsArt.prototype, "onMouseLeave", null);
    __decorate([
        core_1.HostListener('document:scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], KidsArt.prototype, "onscroll", null);
    KidsArt = __decorate([
        core_1.Component({
            selector: 'kids-art',
            moduleId: module.id,
            templateUrl: 'kids-art.component.html',
            styleUrls: ['./kids-art.component.css']
        }), 
        __metadata('design:paramtypes', [services_1.CacheManager, router_1.Router])
    ], KidsArt);
    return KidsArt;
}());
exports.KidsArt = KidsArt;
//# sourceMappingURL=kids-art.component.js.map