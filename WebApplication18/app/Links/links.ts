import {Component, OnInit} from 'angular2/core'
import * as services from '../services/services'
import * as dal from '../dal/models'
@Component({
    template: require("./links.html!text")
})

export class Links implements OnInit {
    links: dal.Link[];
    constructor(private dataService: services.DataService) { }
    ngOnInit() {
        var request: dal.DataRequest = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(request, 'api/Data/GetLinks').then((res: dal.LinksResponse) => {  this.links = res.Links;  });
       

    }
}