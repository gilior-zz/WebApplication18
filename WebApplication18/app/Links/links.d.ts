import { OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import * as services from '../services/services';
import * as dal from '../dal/models';
export declare class Links implements OnInit {
    private dataService;
    private routeParams;
    links: dal.Link[];
    ImageURL: string;
    constructor(dataService: services.DataService, routeParams: RouteParams);
    ngOnInit(): void;
}
