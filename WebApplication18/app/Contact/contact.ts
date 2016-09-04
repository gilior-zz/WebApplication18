import {Component, OnDestroy, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {BaseComponent} from '../common/base.component'
import {NgForm} from 'angular2/common'
import * as services from '../services/services'
import * as dal from '../dal/models'

import * as pipes from '../pipes/pipes'

@Component({
    templateUrl: "./contact.html",   
    moduleId: module.id,
})

export class Contact extends BaseComponent implements OnDestroy {
    displaySubmitError: boolean;
    isSubmitting: boolean;
    submitted: boolean;
    message: dal.Message;


    constructor(private dataservice: services.DataService, private dialogeService: services.DialogService, public router: Router) {
        super(router);


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