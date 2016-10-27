import {Component, OnInit, AfterViewInit, Injector, HostListener} from "@angular/core"

import * as services from "./services/services"
import * as dal from "./dal/models"

import {Router} from '@angular/router'
import {BaseComponent} from './common/base.component'




//import * as blabla from './youmax/js/source_unpacked/jquery.youmax.js' 

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    moduleId: module.id
})


export class AppComponent extends BaseComponent implements OnInit, AfterViewInit {
    currentPathName: string;
    menuItems: dal.MenuItem[];
    currentView: string;
    headerImage: string;
    constructor(private dataService: services.DataService, private cacheManager: services.CacheManager, private router: Router, private injector: Injector) {
        super(injector);
    }
    public UpdateImage(imageUrl: string) {

    }
    goToContact() {
        this.router.navigate(['/contact']);
    }

    goToKidsArt() {

    }

    get isHebrew(): boolean {
        let l = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew) == dal .Language.Hebrew;
        return l;
    }
    kidsArtMessage: string = 'Kids Art';
    @HostListener('mouseenter') onMouseEnter() {
        this.kidsArtMessage = 'Coming Soon...';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.kidsArtMessage = 'Kids Art';
    }



    changeToEnglish() {
        this.cacheManager.StoreInCache("lang", dal.Language.English);
        document.location.reload();
    }
    changeToHebrew() {
        this.cacheManager.StoreInCache("lang", dal.Language.Hebrew);
        document.location.reload();
    }

    ngAfterViewInit() {

    }









    ngOnInit() {
        var req: dal.DataRequest = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, "api/Data/GetMenuItems").
            subscribe(
            (dataresponse: dal.MenuResponse) => {

                this.menuItems = dataresponse.MenuItems
            },
            (error: dal.DataError) => console.error(error));

    }


}

