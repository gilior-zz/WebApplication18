import { Component } from '@angular/core';
import * as dal from '../dal/models';
import * as services from '../services/services';
export var Press = (function () {
    function Press(dataService) {
        this.dataService = dataService;
    }
    Press.prototype.ngOnInit = function () {
        var _this = this;
        var req = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetPress').subscribe(function (res) { return _this.pressItems = res.PressItems; });
    };
    Press.decorators = [
        { type: Component, args: [{
                    selector: 'noya-press',
                    templateUrl: './press.html',
                    moduleId: module.id
                },] },
    ];
    /** @nocollapse */
    Press.ctorParameters = [
        { type: services.DataService, },
    ];
    return Press;
}());
//# sourceMappingURL=press.js.map