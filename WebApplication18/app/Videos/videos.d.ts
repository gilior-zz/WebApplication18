import { OnInit, AfterViewInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
export declare class Videos implements OnInit, AfterViewInit {
    private routeParams;
    youmaxObj: any;
    ImageURL: string;
    constructor(routeParams: RouteParams);
    ngAfterViewInit(): void;
    ngOnInit(): void;
}
