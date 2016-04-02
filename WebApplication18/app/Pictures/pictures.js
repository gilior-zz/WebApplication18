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
var dal = require('../dal/models');
var services = require('../services/services');
var Pictures = (function () {
    function Pictures(dataService, cacheManager) {
        this.dataService = dataService;
        this.cacheManager = cacheManager;
    }
    Pictures.prototype.ngOnDestroy = function () {
    };
    Pictures.prototype.ngAfterViewInit = function () {
    };
    Pictures.prototype.onLeft = function () {
        this.LoadRequestedImage(dal.NextData.Prev);
    };
    Pictures.prototype.onKeyUp = function (event) {
        console.log(event.keyCode);
        var nextData = event.keyCode == 39 ? dal.NextData.Next : dal.NextData.Prev;
        this.LoadRequestedImage(nextData);
    };
    Pictures.prototype.LoadRequestedImage = function (nextData) {
        var currentImageID = this.cacheManager.GetFromCache('currentImageID', 1);
        for (var i = 0; i < this.images.length; i++) {
            if (this.images[i].ID == currentImageID) {
                var currentIndex = i;
                var nextIndex = i + 1;
                var prevIndex = i - 1;
                var isLastImage = nextIndex == this.images.length;
                var isFirstImage = prevIndex == -1;
                break;
            }
        }
        switch (nextData) {
            case dal.NextData.Next:
                if (isLastImage) {
                    this.mainImagePath = '../Content/Images/Gallery/' + this.images[0].ImageName;
                    this.cacheManager.StoreInCache('currentImageID', this.images[0].ID);
                }
                else {
                    this.mainImagePath = '../Content/Images/Gallery/' + this.images[nextIndex].ImageName;
                    this.cacheManager.StoreInCache('currentImageID', this.images[nextIndex].ID);
                }
                break;
            case dal.NextData.Prev:
                if (isFirstImage) {
                    this.mainImagePath = '../Content/Images/Gallery/' + this.images[this.images.length - 1].ImageName;
                    this.cacheManager.StoreInCache('currentImageID', this.images[this.images.length - 1].ID);
                }
                else {
                    this.mainImagePath = '../Content/Images/Gallery/' + this.images[prevIndex].ImageName;
                    this.cacheManager.StoreInCache('currentImageID', this.images[prevIndex].ID);
                }
                break;
            case dal.NextData.Currnet:
                this.mainImagePath = '../Content/Images/Gallery/' + this.images[currentIndex].ImageName;
                this.cacheManager.StoreInCache('currentImageID', this.images[currentIndex].ID);
                break;
        }
    };
    Pictures.prototype.onRight = function () {
        this.LoadRequestedImage(dal.NextData.Next);
    };
    Pictures.prototype.onSelectedImage = function (img) {
        var currentImageID = img.ID;
        this.cacheManager.StoreInCache('currentImageID', currentImageID);
        this.LoadRequestedImage(dal.NextData.Currnet);
    };
    Pictures.prototype.isSelected = function (img) {
        return this.cacheManager.GetFromCache('currentImageID', -1) == img.ID;
    };
    Pictures.prototype.ngOnInit = function () {
        var _this = this;
        var currentImageID = this.cacheManager.GetFromCache('currentImageID', 1);
        var req = { CurrentImageID: currentImageID, Language: dal.Language.English, NextData: dal.NextData.Currnet, DataAmount: dal.DataAmount.Single };
        this.dataService.ConnectToApiData(req, 'api/Data/GetImages').subscribe(function (res) {
            _this.mainImagePath = 'Content/Images/Gallery/' + res.Image.ImageName;
            console.log(_this.mainImagePath);
            _this.cacheManager.StoreInCache('currentImageID', res.Image.ID);
        }, function (err) { console.log(err.ErrorText); });
        var req = { CurrentImageID: currentImageID, Language: dal.Language.English, NextData: dal.NextData.Currnet, DataAmount: dal.DataAmount.All };
        this.dataService.ConnectToApiData(req, 'api/Data/GetImages').subscribe(function (res) {
            _this.images = res.Images;
        }, function (err) { console.log(err.ErrorText); });
    };
    Pictures = __decorate([
        core_1.Component({
            template: require("./pictures.html!text"),
        }), 
        __metadata('design:paramtypes', [services.DataService, services.CacheManager])
    ], Pictures);
    return Pictures;
})();
exports.Pictures = Pictures;
//# sourceMappingURL=pictures.js.map