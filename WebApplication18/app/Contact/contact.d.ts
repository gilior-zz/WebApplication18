import { OnDestroy } from 'angular2/core';
import { CanDeactivate, ComponentInstruction, RouteParams } from 'angular2/router';
import * as services from '../services/services';
import * as dal from '../dal/models';
export declare class Contact implements OnDestroy, CanDeactivate {
    private dataservice;
    private dialogeService;
    private routeParams;
    displaySubmitError: boolean;
    isSubmitting: boolean;
    submitted: boolean;
    message: dal.Message;
    isOrderConcert: any;
    ImageURL: string;
    constructor(dataservice: services.DataService, dialogeService: services.DialogService, routeParams: RouteParams);
    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any;
    ngOnDestroy(): void;
    ngOnInit(): void;
    onSubmit(): void;
}
