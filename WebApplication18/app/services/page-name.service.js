import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
export var pageNameService = (function () {
    function pageNameService(router) {
        this.router = router;
        this.pageNameSubject = new Subject();
        this.pageNameEvent$ = this.pageNameSubject.asObservable();
        //this.router.events.subscribe(event => {
        //    if (event instanceof NavigationEnd) {
        //        this.UpdatePageName();
        //        this.firePageNameChanged();
        //    }
        //}
        //)
    }
    pageNameService.prototype.UpdatePageName = function () {
        var url = this.router.routerState.snapshot.url;
        //let urlItems = url.split("/");
        //let p_name = urlItems[2];
        //this.pageName = p_name;
    };
    pageNameService.prototype.firePageNameChanged = function () {
        this.pageNameSubject.next();
    };
    Object.defineProperty(pageNameService.prototype, "currentPageName", {
        get: function () {
            var urlItems = this.router.routerState.snapshot.url.split("/");
            var lastItem = urlItems[urlItems.length - 1];
            return lastItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pageNameService.prototype, "currentUrl", {
        get: function () { return this.router.routerState.snapshot.url; },
        enumerable: true,
        configurable: true
    });
    pageNameService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    pageNameService.ctorParameters = [
        { type: Router, },
    ];
    return pageNameService;
}());
//# sourceMappingURL=page-name.service.js.map