import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CacheManager } from '../../services/services';
import { Language } from "../../dal/models";
import { pageNameService } from '../../services/page-name.service';
export var GaliluLink = (function () {
    function GaliluLink(cacheManager, router, pn) {
        this.cacheManager = cacheManager;
        this.router = router;
        this.pn = pn;
        //get galiluMessage(): string { return this.pn.currentPageName.includes('galilu') ? 'Noya Schleien' : 'To store' }
        this.galiluMessage = "To store";
    }
    GaliluLink.prototype.changeMode = function () {
        //if (this.pn.currentPageName.includes('galilu'))
        //    this.router.navigate(['/home']);
        //else
        //    this.router.navigate(['galilu']);
    };
    GaliluLink.prototype.ngOnInit = function () {
        //this.float=
    };
    GaliluLink.prototype.onMouseEnter = function () {
        this.galiluMessage = 'Coming Soon...';
    };
    GaliluLink.prototype.onMouseLeave = function () {
        this.galiluMessage = 'To store';
    };
    GaliluLink.prototype.onscroll = function () {
        //this.resetStyleVariables();
        //if ($('.fixed-button').offset().top + $('.fixed-button').height()
        //    >= $('#footer').offset().top) {
        //    this.position = `absolute`;
        //    this.bottom = `${$('#footer').height()}px`;
        //    this.isAbsolute = true;
        //}
        //if ($(document).scrollTop() + window.innerHeight < $('#footer').offset().top) {
        //    this.position = `fixed`;
        //    this.bottom = '0px';
        //    this.isFixed = true;
        //}
        //this.setClasses();
    };
    GaliluLink.prototype.resetStyleVariables = function () {
        this.isAbsolute = false;
        this.isFixed = false;
        //this.isHebrew = false;
        //this.isEnglish = false;
    };
    GaliluLink.prototype.setClasses = function () {
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
            var l = this.cacheManager.GetFromCache('lang', Language.Hebrew) == Language.Hebrew;
            return l;
        },
        enumerable: true,
        configurable: true
    });
    GaliluLink.decorators = [
        { type: Component, args: [{
                    selector: 'galilu-link',
                    moduleId: module.id,
                    templateUrl: 'link.component.html',
                    styleUrls: ['./link.component.css']
                },] },
    ];
    /** @nocollapse */
    GaliluLink.ctorParameters = [
        { type: CacheManager, },
        { type: Router, },
        { type: pageNameService, },
    ];
    GaliluLink.propDecorators = {
        'onMouseEnter': [{ type: HostListener, args: ['mouseenter',] },],
        'onMouseLeave': [{ type: HostListener, args: ['mouseleave',] },],
        'onscroll': [{ type: HostListener, args: ['document:scroll',] },],
    };
    return GaliluLink;
}());
//# sourceMappingURL=link.component.js.map