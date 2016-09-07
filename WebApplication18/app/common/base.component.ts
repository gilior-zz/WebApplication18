import {Router} from '@angular/router'
import {OnInit, Injector} from '@angular/core'
import * as services from '../services/services'
import { Title }     from '@angular/platform-browser';

export class BaseComponent implements OnInit {
    public pageName: string;
    constructor(injector: Injector) {
        //console.debug('inside BaseComponent constructor');

        //let injector = ReflectiveInjector.resolveAndCreate([Router]);
        let titleService: Title = injector.get(Title);
        let routerService: Router = injector.get(Router);
        let translationService: services.TranslationService = injector.get(services.TranslationService);

        let l = routerService.routerState.snapshot.url.replace('/', '');
        let ll = translationService.TranlateItem(l);
        titleService.setTitle(ll);
    }
    ngOnInit() {
        //this.pageName = this.router.routerState.snapshot.url.replace('/', '');
        //console.debug('inside BaseComponent ngOnInit');
    }
}