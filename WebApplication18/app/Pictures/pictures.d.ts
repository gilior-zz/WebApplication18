import { OnInit, AfterViewInit, OnDestroy } from 'angular2/core';
import * as dal from '../dal/models';
import * as services from '../services/services';
import { RouteParams } from 'angular2/router';
export declare class Pictures implements OnInit, AfterViewInit, OnDestroy {
    private dataService;
    private cacheManager;
    private routeParams;
    ImageURL: string;
    mainImagePath: string;
    images: dal.ImageGalleryItem[];
    imagesToolBarPathes: string[];
    isHebrew: boolean;
    isEnglish: boolean;
    example1SwipeOptions: any;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    onLeft(): void;
    onKeyUp(event: KeyboardEvent): void;
    LoadRequestedImage(nextData: dal.NextData): void;
    onRight(): void;
    onSelectedImage(img: dal.ImageGalleryItem): void;
    isSelected(img: dal.ImageGalleryItem): boolean;
    constructor(dataService: services.DataService, cacheManager: services.CacheManager, routeParams: RouteParams);
    ngOnInit(): void;
}
