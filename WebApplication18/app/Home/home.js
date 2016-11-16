var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../common/base.component';
import { Router } from '@angular/router';
export var Home = (function (_super) {
    __extends(Home, _super);
    function Home(router, injector) {
        _super.call(this, injector);
        this.router = router;
        this.injector = injector;
    }
    Home.prototype.ngAfterViewInit = function () {
        //console.debug(this.pageName);
    };
    //public pageName
    //ngOnInit() {
    //    this.pageName
    //}
    Home.decorators = [
        { type: Component, args: [{
                    templateUrl: "./home.html",
                    moduleId: module.id,
                },] },
    ];
    /** @nocollapse */
    Home.ctorParameters = [
        { type: Router, },
        { type: Injector, },
    ];
    return Home;
}(BaseComponent));
//# sourceMappingURL=home.js.map