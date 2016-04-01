var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var HeaderImage = (function () {
    function HeaderImage(router) {
        var _this = this;
        this.router = router;
        router.subscribe(function (url) {
            // Current URL
            router.recognize(url).then(function (instruction) {
                var currentPathName = instruction.component.componentType.name;
                //console.log(currentPathName);
                _this.image = '../Content/Images/' + currentPathName + '.jpg';
            });
        });
    }
    HeaderImage = __decorate([
        core_1.Component({
            selector: 'header-image',
            template: require('./header.image.html!text')
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HeaderImage);
    return HeaderImage;
})();
exports.HeaderImage = HeaderImage;
//# sourceMappingURL=header.image.js.map