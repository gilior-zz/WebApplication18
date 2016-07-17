import {Component, OnDestroy, OnInit} from 'angular2/core'
import {CanDeactivate, ComponentInstruction, RouteParams} from 'angular2/router';
import {NgForm} from 'angular2/common'
import * as services from '../services/services'
import * as dal from '../dal/models'
import {HeaderImage} from '../HeaderImage/header.image'
import * as pipes from '../pipes/pipes'

@Component({
    template: require("./contact.html!text"),
    providers: [services.DialogService],
    directives: [HeaderImage],
    pipes: [pipes.TranslatePipe]
})

export class Contact implements OnDestroy, CanDeactivate {
    displaySubmitError: boolean;
    isSubmitting: boolean;
    submitted: boolean;
    message: dal.Message;
    isOrderConcert;
    ImageURL: string;
    constructor(private dataservice: services.DataService, private dialogeService: services.DialogService, private routeParams: RouteParams) {

        this.ImageURL = this.routeParams.get('ImageURL');
        this.isOrderConcert = this.routeParams.get('OrderConcert');
    }

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
        if (!this.isSubmitting) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogeService.confirm('Cancel submission?');
    }

    ngOnDestroy(): void {

        this.submitted = false;
        this.displaySubmitError = false;
        this.isSubmitting = false;
    }

    ngOnInit() {
        this.submitted = false;
        this.displaySubmitError = false;
        this.isSubmitting = false;
        //this.message = { Content: 'sds', Date: new Date(), IP: '', Sender: { Email: 'sdsd@sdsd', Name: 'sdsd' } };
        this.message = { Content: '', Date: new Date(), IP: '', Sender: { Email: '', Name: '' } };

    }

    onSubmit() {
        this.isSubmitting = true;
        var req: dal.MessageRequest = { Message: this.message, Language: dal.Language.Hebrew };
        this.dataservice.ConnectToApiData
            (req, 'api/Data/SendMessage')
            .subscribe
            (
            (res: dal.MessageResponse) => {
                this.submitted = true;
                this.isSubmitting = false;
            },
            (err: dal.DataError) => {
                this.displaySubmitError = true;
                this.isSubmitting = false;
            }
            )
    }
}