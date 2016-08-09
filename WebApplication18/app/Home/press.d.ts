import { OnInit } from 'angular2/core';
import * as dal from '../dal/models';
import * as services from '../services/services';
export declare class Press implements OnInit {
    private dataService;
    pressItems: dal.PressItem[];
    constructor(dataService: services.DataService);
    ngOnInit(): void;
}
