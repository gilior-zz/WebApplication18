import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as services from '../services/services';
import { pageNameService } from '../services/page-name.service';
export var HeaderImage = (function () {
    //ImageURL: string;
    //ImageURL: SafeUrl;
    function HeaderImage(pn, dataService, logService, sanitizer, router) {
        this.pn = pn;
        this.dataService = dataService;
        this.logService = logService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.active = true;
        this.mainImage = 'http://res.cloudinary.com/lior/image/upload/v1468953847/home_pic.jpg';
        this.kidsImage = 'http://res.cloudinary.com/lior/image/upload/v1478964869/galilu-home-image.png';
        this.safeMainImage = this.sanitizer.bypassSecurityTrustStyle("url('" + this.mainImage + "')");
        this.safeKidsImage = this.sanitizer.bypassSecurityTrustStyle("url('" + this.kidsImage + "')");
    }
    HeaderImage.prototype.canActivate = function (route, state) {
        //this.active = false;
        //setTimeout(this.active = true, 0);
        return true;
    };
    Object.defineProperty(HeaderImage.prototype, "Title", {
        get: function () { return this.pn.currentUrl.includes('galilu') ? 'Galilu' : 'Noya Schleien'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderImage.prototype, "Subject", {
        get: function () { return this.pn.currentUrl.includes('galilu') ? 'Custom designed products for toddlers' : 'Marimba & Percussion'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderImage.prototype, "safeImage", {
        get: function () { return this.pn.currentUrl.includes('galilu') ? this.safeKidsImage : this.safeMainImage; },
        enumerable: true,
        configurable: true
    });
    HeaderImage.prototype.ngOnInit = function () {
        //this.logService.writeToLog('in ngOnInit');
        //var req: dal.MenuImageRequest = { Language: dal.Language.Hebrew, PathName: this.pageName };
        //this.dataService.ConnectToApiData(req, 'api/Data/GetImageForMenuItem').subscribe(
        //    (res: dal.MenuImageResponse) => {
        //        this.ImageURL = res.ImageURL; //console.log(this.ImageURL) }
        //        this.safeImage = this.sanitizer.bypassSecurityTrustStyle(`url('${this.ImageURL}')`);
        //    })
    };
    HeaderImage.decorators = [
        { type: Component, args: [{
                    selector: 'header-image',
                    templateUrl: './header.image.html',
                    moduleId: module.id,
                },] },
    ];
    /** @nocollapse */
    HeaderImage.ctorParameters = [
        { type: pageNameService, },
        { type: services.DataService, },
        { type: services.LogService, },
        { type: DomSanitizer, },
        { type: Router, },
    ];
    HeaderImage.propDecorators = {
        'pageName': [{ type: Input },],
    };
    return HeaderImage;
}());
//# sourceMappingURL=header.image.js.map