import { Component } from '@angular/core';
import { Language } from '../dal/models';
import { DataService } from '../services/services';
export var Updates = (function () {
    function Updates(dataService) {
        this.dataService = dataService;
    }
    Updates.prototype.ngOnInit = function () {
        var _this = this;
        var req = { Language: Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetUpdates').subscribe(function (res) { return _this.updates = res.Updates; });
    };
    Updates.decorators = [
        { type: Component, args: [{
                    selector: 'noya-updates',
                    templateUrl: './updates.html',
                    moduleId: module.id
                },] },
    ];
    /** @nocollapse */
    Updates.ctorParameters = [
        { type: DataService, },
    ];
    return Updates;
}());
//# sourceMappingURL=updates.js.map