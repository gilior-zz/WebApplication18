import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import * as model from '../dal/models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export var CacheManager = (function () {
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
    CacheManager.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CacheManager.ctorParameters = [];
    return CacheManager;
}());
export var DataService = (function () {
    function DataService(http, CacheManager) {
        this.http = http;
        this.CacheManager = CacheManager;
    }
    //public ConnectToApiData(request: model.DataRequest, url: string): Promise<model.DataResponse> {
    //    let body = JSON.stringify({ request });
    //    let headers = new Headers({ 'Content-Type': 'application/json' });
    //    let options = new RequestOptions({ headers: headers });
    //    return this.http.post(url, body, options)
    //        .toPromise()
    //        .then(this.extractData)
    //        .catch(this.handleError);
    //}
    //private extractData(res: Response): model.DataResponse {
    //    if (res.status < 200 || res.status >= 300) {
    //        throw new Error('Bad response status: ' + res.status);
    //    }
    //    let body = res.json();
    //    return body;
    //}
    DataService.prototype.GetFileContent = function (filePath) {
        return this.http.get(filePath).map(function (res) { return res.json(); });
        //.do(data => //console.log(data)) // eyeball results in the console
        //.catch(this.handleError)
    };
    DataService.prototype.ConnectToApiData = function (request, url) {
        var lang = this.CacheManager.GetFromCache('lang', model.Language.Hebrew);
        request.Language = lang;
        var body = JSON.stringify({ request: request });
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    };
    DataService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataService.ctorParameters = [
        { type: Http, },
        { type: CacheManager, },
    ];
    return DataService;
}());
/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implemenation that doesn't use window.confirm
 */
export var DialogService = (function () {
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
    return DialogService;
}());
export var LogService = (function () {
    function LogService() {
    }
    LogService.prototype.writeToLog = function (msg) {
        //log.debug(msg, ['a','b','c']);
    };
    return LogService;
}());
export var TranslationService = (function () {
    function TranslationService(cacheManager) {
        this.cacheManager = cacheManager;
        this.translationFile = {
            "menu": "תפריט",
            "noya schleien": "נויה שליין",
            "marimba & percussion": "מרימבה וכלי הקשה",
            "home": "בית",
            "biography": "ביוגרפיה",
            "pictures": "תמונות",
            "videos": "וידאו",
            "programs": "תכניות",
            "links": "קישורים",
            "contact": "יצירת קשר",
            "hey noya, i would like to get some details about your concerts. please contact me": "שלום נויה, אנא צרי עמי קשר על מנת לקבל פרטים אודות קונצרט",
            "name": "שם",
            "email": "אי-מייל",
            "content": "תוכן",
            "order concert": "הזמנת קונצרט",
            "products": "חנות מוצרים",
            "kids art": "עולם הילדים",
            "coming soon...": "בקרוב...",
            "galilu": "גלילו",
            "custom designed products for toddlers": "מוצרים לקטנטנים בעיצוב אישי",
            "toddlers activity pallet": "משטח פעילות לקטנטנים",
            "toddlers activity books": "ספרי פעילות לקטנטנים",
            "toddlers lamps": "מנורות לקטנטנים",
            "toddlers bags": "תיקים לקטנטנים",
            "toddlers cushions": "כריות לקטנטנים",
            "to store": "לחנות",
            "back to previous page": "חזרה לעמוד קודם",
            "must select at leat 4 items (click om item to select/deselect item)": "יש לבחור לפחות 4 פריטים",
            "click on item to select/deselect item": "יש ללחוץ על פריט כדי לבחור / לבטל את בחירתו"
        };
    }
    TranslationService.prototype.TranlateItem = function (value) {
        if (!value)
            return;
        var lang = this.cacheManager.GetFromCache('lang', model.Language.Hebrew);
        if (lang == 0) {
            var translateItem = this.translationFile[value.toLowerCase()];
            if (!translateItem)
                return value;
            return translateItem;
        }
        if (lang == 1) {
            return value;
        }
    };
    TranslationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TranslationService.ctorParameters = [
        { type: CacheManager, },
    ];
    return TranslationService;
}());
//# sourceMappingURL=services.js.map