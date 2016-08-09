import { OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import * as services from '../services/services';
export declare class HeaderImage implements OnInit {
    private router;
    private dataService;
    ImageURL: string;
    constructor(router: Router, dataService: services.DataService);
    ngOnInit(): void;
}
