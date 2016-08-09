import { OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
export declare class Home implements OnInit {
    private routeParams;
    ImageURL: string;
    constructor(routeParams: RouteParams);
    ngOnInit(): void;
}
