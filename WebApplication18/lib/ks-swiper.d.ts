import { ElementRef } from 'angular2/core';
export declare class KSSwiperContainer {
    private elementRef;
    pager: any;
    options: any;
    swiper: any;
    showPager: boolean;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    update(): void;
}
export declare class KSSwiperSlide {
    private ele;
    constructor(elementRef: ElementRef, swiper: KSSwiperContainer);
}
