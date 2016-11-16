import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as services from '../services/services';
export var TranslatePipe = (function () {
    function TranslatePipe(translationService, cacheManager) {
        this.translationService = translationService;
        this.cacheManager = cacheManager;
    }
    TranslatePipe.prototype.transform = function (value) {
        var res = this.translationService.TranlateItem(value);
        return res;
        //var lang = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew);
        //if (lang == 0) {
        //    return this.translationFile[value];
        //}
        //if (lang == 1) {
        //    return value;
        //}
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'translate',
                },] },
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = [
        { type: services.TranslationService, },
        { type: services.CacheManager, },
    ];
    return TranslatePipe;
}());
export var SafeResourcePipe = (function () {
    function SafeResourcePipe(dataService, cacheManager, sanitizer) {
        this.dataService = dataService;
        this.cacheManager = cacheManager;
        this.sanitizer = sanitizer;
    }
    SafeResourcePipe.prototype.transform = function (value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    SafeResourcePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'safeResource',
                },] },
    ];
    /** @nocollapse */
    SafeResourcePipe.ctorParameters = [
        { type: services.DataService, },
        { type: services.CacheManager, },
        { type: DomSanitizer, },
    ];
    return SafeResourcePipe;
}());
//# sourceMappingURL=pipes.js.map