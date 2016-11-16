var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Router } from '@angular/router';
import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../common/base.component';
import * as services from '../services/services';
import * as dal from '../dal/models';
export var Links = (function (_super) {
    __extends(Links, _super);
    function Links(dataService, router, injector) {
        _super.call(this, injector);
        this.dataService = dataService;
        this.router = router;
        this.injector = injector;
    }
    Links.prototype.ngOnInit = function () {
        var _this = this;
        var request = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(request, 'api/Data/GetLinks').subscribe(function (res) { _this.links = res.Links; }, function (error) { console.error('error in Links in ngOnInit: ' + error.ErrorText); });
    };
    Links.decorators = [
        { type: Component, args: [{
                    templateUrl: "./links.html",
                    moduleId: module.id
                },] },
    ];
    /** @nocollapse */
    Links.ctorParameters = [
        { type: services.DataService, },
        { type: Router, },
        { type: Injector, },
    ];
    return Links;
}(BaseComponent));
//# sourceMappingURL=links.js.map