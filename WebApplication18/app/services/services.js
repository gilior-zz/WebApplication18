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
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var CacheManager = (function () {
    function CacheManager() {
    }
    CacheManager.prototype.StoreInCache = function (key, value) {
        sessionStorage.setItem(key, value);
    };
    CacheManager.prototype.GetFromCache = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var retVal = sessionStorage.getItem(key);
        if (!retVal && defaultValue != null)
            retVal = defaultValue;
        return retVal;
    };
    CacheManager.prototype.RemoveFromCache = function (key) {
        sessionStorage.removeItem(key);
    };
    CacheManager.prototype.ClearCache = function () {
        sessionStorage.clear();
    };
    CacheManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CacheManager);
    return CacheManager;
})();
exports.CacheManager = CacheManager;
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.ConnectToApiData = function (request, url) {
        var body = JSON.stringify({ request: request });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(url, body, options).map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
})();
exports.DataService = DataService;
/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implemenation that doesn't use window.confirm
 */
var DialogService = (function () {
    function DialogService() {
    }
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns promise resolving to `true`=confirm or `false`=cancel
     */
    DialogService.prototype.confirm = function (message) {
        return new Promise(function (resolve, reject) {
            return resolve(window.confirm(message || 'Is it OK?'));
        });
    };
    ;
    DialogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DialogService);
    return DialogService;
})();
exports.DialogService = DialogService;
//# sourceMappingURL=services.js.map