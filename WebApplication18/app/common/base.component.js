"use strict";
var BaseComponent = (function () {
    function BaseComponent(router) {
        this.router = router;
    }
    BaseComponent.prototype.ngOnInit = function () {
        //this.pageName = this.router.routerState.snapshot.url.replace('/', '');
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map