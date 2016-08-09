import { OnInit } from 'angular2/core';
import * as services from '../services/services';
export declare class Calendar implements OnInit {
    private dataService;
    private cacheService;
    dataDate: Date;
    text: string;
    month: number;
    year: number;
    constructor(dataService: services.DataService, cacheService: services.CacheManager);
    onLeft(): void;
    onRight(): void;
    ngOnInit(): void;
}
