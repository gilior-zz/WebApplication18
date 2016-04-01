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
var Contact = (function () {
    function Contact(dataservice, dialogeService) {
        this.dataservice = dataservice;
        this.dialogeService = dialogeService;
    }
    Contact.prototype.routerCanDeactivate = function (next, prev) {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
        if (!this.isSubmitting) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogeService.confirm('Cancel submission?');
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
    Contact = __decorate([
        core_1.Component({
            template: require("./contact.html!text"),
            providers: [services.DialogService]
        }), 
        __metadata('design:paramtypes', [services.DataService, services.DialogService])
    ], Contact);
    return Contact;
})();
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map