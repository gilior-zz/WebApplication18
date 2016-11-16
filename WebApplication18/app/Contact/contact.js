var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../common/base.component';
import * as services from '../services/services';
import * as dal from '../dal/models';
export var Contact = (function (_super) {
    __extends(Contact, _super);
    function Contact(dataservice, dialogService, dialogeService, router, injector) {
        _super.call(this, injector);
        this.dataservice = dataservice;
        this.dialogService = dialogService;
        this.dialogeService = dialogeService;
        this.router = router;
        this.injector = injector;
    }
    Contact.prototype.canDeactivate = function () {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.isSubmitting)
            return true;
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Cancel submitting?');
    };
    Contact.prototype.ngOnDestroy = function () {
        this.submitted = false;
        this.displaySubmitError = false;
        this.isSubmitting = false;
    };
    Contact.prototype.ngOnInit = function () {
        this.submitted = false;
        this.displaySubmitError = false;
        this.isSubmitting = false;
        //this.message = { Content: 'sds', Date: new Date(), IP: '', Sender: { Email: 'sdsd@sdsd', Name: 'sdsd' } };
        this.message = { Content: '', Date: new Date(), IP: '', Sender: { Email: '', Name: '' } };
    };
    Contact.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitting = true;
        var req = { Message: this.message, Language: dal.Language.Hebrew };
        this.dataservice.ConnectToApiData(req, 'api/Data/SendMessage')
            .subscribe(function (res) {
            _this.submitted = true;
            _this.isSubmitting = false;
        }, function (err) {
            _this.displaySubmitError = true;
            _this.isSubmitting = false;
        });
    };
    Contact.decorators = [
        { type: Component, args: [{
                    templateUrl: "./contact.html",
                    moduleId: module.id,
                },] },
    ];
    /** @nocollapse */
    Contact.ctorParameters = [
        { type: services.DataService, },
        { type: services.DialogService, },
        { type: services.DialogService, },
        { type: Router, },
        { type: Injector, },
    ];
    return Contact;
}(BaseComponent));
//# sourceMappingURL=contact.js.map