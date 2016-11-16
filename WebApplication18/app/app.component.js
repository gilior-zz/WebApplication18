var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Injector, HostListener } from "@angular/core";
import * as services from "./services/services";
import * as dal from "./dal/models";
import { Router } from '@angular/router';
import { BaseComponent } from './common/base.component';
import { pageNameService } from './services/page-name.service';
//import * as blabla from './youmax/js/source_unpacked/jquery.youmax.js' 
export var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(dataService, cacheManager, router, injector, pn) {
        _super.call(this, injector);
        this.dataService = dataService;
        this.cacheManager = cacheManager;
        this.router = router;
        this.injector = injector;
        this.pn = pn;
        //get galiluMessage(): string {
        //    return this.pn.currentPageName.includes('galilu') ? 'Noya Schleien' : 'To store'
        //}
        //set galiluMessage(value: string) { }
        this.galiluMessage = "To store";
    }
    AppComponent.prototype.UpdateImage = function (imageUrl) {
    };
    AppComponent.prototype.goToContact = function () {
        this.router.navigate(['/contact']);
    };
    AppComponent.prototype.changeMode = function () {
        //if (this.pn.currentPageName.includes('galilu'))
        //    this.router.navigate(['/home']);
        //else
        //    this.router.navigate(['galilu']);
    };
    Object.defineProperty(AppComponent.prototype, "isHebrew", {
        get: function () {
            var l = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew) == dal.Language.Hebrew;
            return l;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onMouseEnter = function () {
        this.galiluMessage = 'Coming Soon...';
    };
    AppComponent.prototype.onMouseLeave = function () {
        this.galiluMessage = 'To store';
    };
    Object.defineProperty(AppComponent.prototype, "pageName", {
        get: function () { return this.pn.currentPageName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "displayMenu", {
        get: function () {
            return !this.pn.currentUrl.includes('galilu');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.changeToEnglish = function () {
        this.cacheManager.StoreInCache("lang", dal.Language.English);
        document.location.reload();
    };
    AppComponent.prototype.changeToHebrew = function () {
        this.cacheManager.StoreInCache("lang", dal.Language.Hebrew);
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
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: "my-app",
                    templateUrl: "./app.component.html",
                    styleUrls: ['./app.component.css'],
                    moduleId: module.id
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: services.DataService, },
        { type: services.CacheManager, },
        { type: Router, },
        { type: Injector, },
        { type: pageNameService, },
    ];
    AppComponent.propDecorators = {
        'onMouseEnter': [{ type: HostListener, args: ['mouseenter',] },],
        'onMouseLeave': [{ type: HostListener, args: ['mouseleave',] },],
    };
    return AppComponent;
}(BaseComponent));
//# sourceMappingURL=app.component.js.map