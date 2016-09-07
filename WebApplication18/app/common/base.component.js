"use strict";
var router_1 = require('@angular/router');
var services = require('../services/services');
var platform_browser_1 = require('@angular/platform-browser');
var BaseComponent = (function () {
    function BaseComponent(injector) {
        //console.debug('inside BaseComponent constructor');
        //let injector = ReflectiveInjector.resolveAndCreate([Router]);
        var titleService = injector.get(platform_browser_1.Title);
        var routerService = injector.get(router_1.Router);
        var translationService = injector.get(services.TranslationService);
        var l = routerService.routerState.snapshot.url.replace('/', '');
        var ll = translationService.TranlateItem(l);
        titleService.setTitle(ll);
    }
    BaseComponent.prototype.ngOnInit = function () {
        //this.pageName = this.router.routerState.snapshot.url.replace('/', '');
        //console.debug('inside BaseComponent ngOnInit');
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map