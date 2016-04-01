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
var services = require('../services/services');
var dal = require('../dal/models');
var Biography = (function () {
    function Biography(dataService) {
        this.dataService = dataService;
    }
    Biography.prototype.ngOnInit = function () {
        var _this = this;
        var req = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCV').subscribe(function (res) { _this.cvs = res.CVs; }, function (err) { console.error('error in Biography in ngOnInit: ' + err.ErrorText); }, function () { });
    };
    Biography = __decorate([
        core_1.Component({
            template: require("./biography.html!text")
        }), 
        __metadata('design:paramtypes', [services.DataService])
    ], Biography);
    return Biography;
})();
exports.Biography = Biography;
//# sourceMappingURL=biography.js.map