import { Router } from '@angular/router';
import * as services from '../services/services';
import { Title } from '@angular/platform-browser';
export var BaseComponent = (function () {
    function BaseComponent(injector) {
        var titleService = injector.get(Title);
        var routerService = injector.get(Router);
        var translationService = injector.get(services.TranslationService);
        var url = routerService.routerState.snapshot.url.replace('/', '');
        var tranlatedItem = translationService.TranlateItem(url);
        titleService.setTitle(tranlatedItem);
        //$(".pageName").text(tranlatedItem);
    }
    BaseComponent.prototype.ngOnInit = function () {
    };
    return BaseComponent;
}());
//# sourceMappingURL=base.component.js.map