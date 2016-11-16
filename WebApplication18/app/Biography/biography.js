var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../common/base.component';
import { Router } from '@angular/router';
import * as services from '../services/services';
import * as dal from '../dal/models';
export var Biography = (function (_super) {
    __extends(Biography, _super);
    function Biography(dataService, router, injector) {
        _super.call(this, injector);
        this.dataService = dataService;
        this.router = router;
        this.injector = injector;
    }
    Biography.prototype.ngOnInit = function () {
        var _this = this;
        var req = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCV').subscribe(function (res) { _this.cvs = res.CVs; }, function (err) { console.error('error in Biography in ngOnInit: ' + err.ErrorText); }, function () { });
    };
    Biography.decorators = [
        { type: Component, args: [{
                    templateUrl: "./biography.html",
                    moduleId: module.id,
                },] },
    ];
    /** @nocollapse */
    Biography.ctorParameters = [
        { type: services.DataService, },
        { type: Router, },
        { type: Injector, },
    ];
    return Biography;
}(BaseComponent));
//# sourceMappingURL=biography.js.map