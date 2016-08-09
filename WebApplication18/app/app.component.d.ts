import { OnInit, AfterViewInit } from "angular2/core";
import * as services from "./services/services";
import * as dal from "./dal/models";
import { Router, CanDeactivate, ComponentInstruction } from "angular2/router";
export declare class AppComponent implements OnInit, CanDeactivate, AfterViewInit {
    private dataService;
    private router;
    private CacheManager;
    currentPathName: string;
    menuItems: dal.MenuItem[];
    currentView: string;
    constructor(dataService: services.DataService, router: Router, CacheManager: services.CacheManager);
    goToContact(): void;
    changeToEnglish(): void;
    changeToHebrew(): void;
    ngAfterViewInit(): void;
    ImageURL: string;
    setImage(menuItem: dal.MenuItem): void;
    log: string;
    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any;
    ngOnInit(): void;
}
