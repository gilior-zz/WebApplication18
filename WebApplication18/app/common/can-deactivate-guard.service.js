import { Injectable } from '@angular/core';
export var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CanDeactivateGuard.ctorParameters = [];
    return CanDeactivateGuard;
}());
//# sourceMappingURL=can-deactivate-guard.service.js.map