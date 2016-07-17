import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import * as services from '../services/services'
import * as dal from '../dal/models'
import {HeaderImage} from '../HeaderImage/header.image'
@Component({
    template: require("./links.html!text"),
    directives: [HeaderImage]
})

export class Links implements OnInit {
    links: dal.Link[];
    ImageURL: string;
    constructor(private dataService: services.DataService, private routeParams: RouteParams) {
        this.ImageURL = this.routeParams.get('ImageURL');
    }
    ngOnInit() {
        var request: dal.DataRequest = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(request, 'api/Data/GetLinks').subscribe((res: dal.LinksResponse) => { this.links = res.Links }, (error: dal.DataError) => { console.error('error in Links in ngOnInit: ' + error.ErrorText); });
    }
}