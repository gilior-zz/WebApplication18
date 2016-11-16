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
export var Programs = (function (_super) {
    __extends(Programs, _super);
    function Programs(dataService, router, injector) {
        _super.call(this, injector);
        this.dataService = dataService;
        this.router = router;
        this.injector = injector;
    }
    Programs.prototype.ngOnInit = function () {
        var _this = this;
        var req = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetPrograms').subscribe(function (res) { _this.programs = res.Programs; }, function (err) { console.error('error in Programs in ngOnInit: ' + err.ErrorText); }, function () { });
    };
    Programs.decorators = [
        { type: Component, args: [{
                    templateUrl: "./programs.html",
                    moduleId: module.id,
                },] },
    ];
    /** @nocollapse */
    Programs.ctorParameters = [
        { type: services.DataService, },
        { type: Router, },
        { type: Injector, },
    ];
    return Programs;
}(BaseComponent));
//# sourceMappingURL=programs.js.map