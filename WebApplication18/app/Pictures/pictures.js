var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Output, EventEmitter, Injector } from '@angular/core';
import * as dal from '../dal/models';
import * as services from '../services/services';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseComponent } from '../common/base.component';
import { Router } from '@angular/router';
export var Pictures = (function (_super) {
    __extends(Pictures, _super);
    function Pictures(sanitizer, dataService, cacheManager, router, injector) {
        _super.call(this, injector);
        this.sanitizer = sanitizer;
        this.dataService = dataService;
        this.cacheManager = cacheManager;
        this.router = router;
        this.injector = injector;
        this.isHebrew = false;
        this.isEnglish = false;
        this.headImageUpdate = new EventEmitter();
        this.mainImagePath = this.mainImagePath = this.sanitizer.bypassSecurityTrustStyle("Content/Sources/loading.gif");
        ;
        this.example1SwipeOptions = {
            slidesPerView: 4,
            loop: false,
            spaceBetween: 5
        };
    }
    Pictures.prototype.ngOnDestroy = function () {
    };
    Pictures.prototype.ngAfterViewInit = function () {
        var mySwiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            //pagination: '.swiper-pagination',
            //paginationClickable: true,
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazyLoading: true
        });
    };
    Pictures.prototype.onLeft = function () {
        this.LoadRequestedImage(dal.NextData.Prev);
    };
    Pictures.prototype.onKeyUp = function (event) {
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
                    this.mainImagePath = this.sanitizer.bypassSecurityTrustStyle("url('" + this.images[0].ImageURL + "')");
                    this.cacheManager.StoreInCache('currentImageID', this.images[0].ID);
                }
                else {
                    this.mainImagePath = this.sanitizer.bypassSecurityTrustStyle("url('" + this.images[nextIndex].ImageURL + "')");
                    this.cacheManager.StoreInCache('currentImageID', this.images[nextIndex].ID);
                }
                break;
            case dal.NextData.Prev:
                if (isFirstImage) {
                    this.mainImagePath = this.sanitizer.bypassSecurityTrustStyle("url('" + this.images[this.images.length - 1].ImageURL + "')");
                    this.cacheManager.StoreInCache('currentImageID', this.images[this.images.length - 1].ID);
                }
                else {
                    this.mainImagePath = this.sanitizer.bypassSecurityTrustStyle("url('" + this.images[prevIndex].ImageURL + "')");
                    this.cacheManager.StoreInCache('currentImageID', this.images[prevIndex].ID);
                }
                break;
            case dal.NextData.Currnet:
                this.mainImagePath = this.sanitizer.bypassSecurityTrustStyle("url('" + this.images[currentIndex].ImageURL + "')");
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
        this.headImageUpdate.emit('aaaaa');
        var lang = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew);
        this.isEnglish = lang == dal.Language.English;
        this.isHebrew = lang == dal.Language.Hebrew;
        var currentImageID = this.cacheManager.GetFromCache('currentImageID', 1);
        var req = { CurrentImageID: currentImageID, Language: dal.Language.Hebrew, NextData: dal.NextData.Currnet, DataAmount: dal.DataAmount.Single };
        this.dataService.ConnectToApiData(req, 'api/Data/GetImages').subscribe(function (res) {
            _this.mainImagePath = _this.sanitizer.bypassSecurityTrustStyle("url('" + res.Image.ImageURL + "')");
            _this.cacheManager.StoreInCache('currentImageID', res.Image.ID);
        }, function (err) { });
        var req = { CurrentImageID: currentImageID, Language: dal.Language.Hebrew, NextData: dal.NextData.Currnet, DataAmount: dal.DataAmount.All };
        this.dataService.ConnectToApiData(req, 'api/Data/GetImages').subscribe(function (res) {
            _this.images = res.Images;
        }, function (err) { });
    };
    Pictures.decorators = [
        { type: Component, args: [{
                    templateUrl: "./pictures.html",
                    moduleId: module.id,
                },] },
    ];
    /** @nocollapse */
    Pictures.ctorParameters = [
        { type: DomSanitizer, },
        { type: services.DataService, },
        { type: services.CacheManager, },
        { type: Router, },
        { type: Injector, },
    ];
    Pictures.propDecorators = {
        'headImageUpdate': [{ type: Output },],
    };
    return Pictures;
}(BaseComponent));
//# sourceMappingURL=pictures.js.map