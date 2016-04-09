import {Component, OnInit, provide} from "angular2/core"
import * as services from "./services/services"
import * as dal from "./dal/models"
import {HTTP_PROVIDERS} from "angular2/http"
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, RouterLink, CanDeactivate, ComponentInstruction, LocationStrategy,
HashLocationStrategy } from "angular2/router";
import {Home} from "./Home/home"
import {Biography} from "./Biography/biography"
import {Links} from "./Links/links"
import {Contact} from "./Contact/contact"
import {Programs} from "./Programs/programs"
import {Pictures} from "./Pictures/pictures"
import {Videos} from "./Videos/videos"
import {HeaderImage} from "./HeaderImage/header.image"
//import * as blabla from './youmax/js/source_unpacked/jquery.youmax.js'

@Component({
    selector: "app",
    template: require("./app.component.html!text"),
    //template: '<h1>My First Angular 2 App</h1><div class="grid" [ngGrid]><div class="grid-item" [ngGridItem]></div></div>',

    directives: [ROUTER_DIRECTIVES, HeaderImage],
    providers: [ROUTER_PROVIDERS, services.DataService, HTTP_PROVIDERS, services.CacheManager, provide(LocationStrategy,
        { useClass: HashLocationStrategy })]
})

@RouteConfig([
    { path: "/home", component: Home, name: "Home", useAsDefault: true },
    { path: "/biography", component: Biography, name: "Biography" },
    { path: "/pictures", component: Pictures, name: "Pictures" },
    { path: "/videos", component: Videos, name: "Videos" },
    { path: "/programs", component: Programs, name: "Programs" },
    { path: "/links", component: Links, name: "Links" },
    { path: "/contact", component: Contact, name: "Contact" },


])
export class AppComponent implements OnInit, CanDeactivate {
    currentPathName: string;
    menuItems: dal.MenuItem[];
    currentView: string;
    constructor(private dataService: services.DataService, private router: Router) {
        router.subscribe((url) => {          
            // Current URL
            router.recognize(url).then((instruction) => {
                this.currentPathName = instruction.component.componentType.name;
                $('.btn-navbar').click(); //bootstrap 2.x
                $('.navbar-toggle').click() //bootstrap 3.x by Richard
            });

        });

        //$('.nav a').on('click', function () {
        //    //$('.btn-navbar').click(); //bootstrap 2.x
        //    $('.navbar-toggle').click() //bootstrap 3.x by Richard
        //});
    }

    log: string = '';
    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
        this.log = `Finished navigating from "${prev ? prev.urlPath : 'null'}" to "${next.urlPath}"`;
        console.log(this.log);
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

