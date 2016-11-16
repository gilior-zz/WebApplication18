import { Component } from '@angular/core';
import * as dal from '../dal/models';
import * as services from '../services/services';
export var Calendar = (function () {
    function Calendar(dataService, cacheService) {
        this.dataService = dataService;
        this.cacheService = cacheService;
    }
    Calendar.prototype.onLeft = function () {
        var _this = this;
        var lang = +this.cacheService.GetFromCache('lang', "0");
        switch (lang) {
            case dal.Language.Hebrew:
                var requiredData = dal.NextData.Next;
                break;
            case dal.Language.English:
                var requiredData = dal.NextData.Prev;
                break;
        }
        var req = { CurrentCalendarDate: this.dataDate, Language: dal.Language.Hebrew, NextData: requiredData };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').
            subscribe(function (res) {
            _this.dataDate = new Date(res.CalendarItem.DataDate.toString());
            _this.text = res.CalendarItem.Text;
            _this.cacheService.StoreInCache('currentDataDate', _this.dataDate);
        }, function (err) { });
    };
    Calendar.prototype.onRight = function () {
        var _this = this;
        var lang = +this.cacheService.GetFromCache('lang', "0");
        switch (lang) {
            case dal.Language.Hebrew:
                var requiredData = dal.NextData.Prev;
                break;
            case dal.Language.English:
                var requiredData = dal.NextData.Next;
                break;
        }
        this.dataDate = new Date((this.cacheService.GetFromCache('currentDataDate', new Date()).toString()));
        var req = { CurrentCalendarDate: this.dataDate, Language: dal.Language.Hebrew, NextData: requiredData };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').
            subscribe(function (res) {
            _this.dataDate = new Date(res.CalendarItem.DataDate.toString());
            _this.text = res.CalendarItem.Text;
            _this.cacheService.StoreInCache('currentDataDate', _this.dataDate);
        }, function (err) { });
    };
    Calendar.prototype.ngOnInit = function () {
        var _this = this;
        var nextData = dal.NextData.Currnet;
        this.dataDate = new Date((this.cacheService.GetFromCache('currentDataDate', new Date()).toString()));
        var req = { CurrentCalendarDate: this.dataDate, Language: dal.Language.Hebrew, NextData: nextData };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').
            subscribe(function (res) {
            _this.dataDate = new Date(res.CalendarItem.DataDate.toString());
            _this.text = res.CalendarItem.Text;
            _this.cacheService.StoreInCache('currentDataDate', _this.dataDate);
        }, function (err) { });
    };
    Calendar.decorators = [
        { type: Component, args: [{
                    selector: 'noya-calendar',
                    templateUrl: './calendar.html',
                    moduleId: module.id
                },] },
    ];
    /** @nocollapse */
    Calendar.ctorParameters = [
        { type: services.DataService, },
        { type: services.CacheManager, },
    ];
    return Calendar;
}());
//# sourceMappingURL=calendar.js.map