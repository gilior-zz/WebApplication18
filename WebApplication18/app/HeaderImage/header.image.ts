import {Component, OnInit, ViewEncapsulation, Input } from '@angular/core'
import { DomSanitizer, SafeUrl, SafeResourceUrl, SafeScript, SafeStyle} from '@angular/platform-browser';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router'
import * as services from '../services/services'
import * as dal from '../dal/models'


@Component({
    selector: 'header-image',
    templateUrl: './header.image.html',
    moduleId: module.id,


})

export class HeaderImage implements OnInit {

    //ImageURL: string;
    //ImageURL: SafeUrl;
    constructor(private dataService: services.DataService, private logService: services.LogService, public sanitizer: DomSanitizer, public router: Router) {

    }
    active: boolean = true;
    ImageURL: string;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //this.active = false;
        //setTimeout(this.active = true, 0);
        return true;
    }



    @Input() pageName: string;
    safeImage: SafeStyle;
    ngOnInit() {
        this.logService.writeToLog('in ngOnInit');

        var req: dal.MenuImageRequest = { Language: dal.Language.Hebrew, PathName: this.pageName };

        this.dataService.ConnectToApiData(req, 'api/Data/GetImageForMenuItem').subscribe(
            (res: dal.MenuImageResponse) => {
                this.ImageURL = res.ImageURL; //console.log(this.ImageURL) }
                this.safeImage = this.sanitizer.bypassSecurityTrustStyle(`url('${this.ImageURL}')`);

            })
    }


}