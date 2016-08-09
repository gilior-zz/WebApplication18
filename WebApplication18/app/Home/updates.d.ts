import { OnInit } from 'angular2/core';
import * as dal from '../dal/models';
import * as services from '../services/services';
export declare class Updates implements OnInit {
    private dataService;
    updates: dal.Update[];
    constructor(dataService: services.DataService);
    ngOnInit(): void;
}
