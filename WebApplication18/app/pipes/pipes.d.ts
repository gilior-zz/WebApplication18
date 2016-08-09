import { PipeTransform } from 'angular2/core';
import * as services from '../services/services';
export declare class TranslatePipe implements PipeTransform {
    private dataService;
    private cacheManager;
    translationFile: {
        "Noya Schleien": string;
        "Marimba & Percussion": string;
        "Home": string;
        "Biography": string;
        "Pictures": string;
        "Videos": string;
        "Programs": string;
        "Links": string;
        "Contact": string;
        "Hey Noya, I would like to get some details about your concerts. Please contact me": string;
        "Name": string;
        "Email": string;
        "Content": string;
    };
    constructor(dataService: services.DataService, cacheManager: services.CacheManager);
    transform(value: string): string;
}
