import {Component, OnInit} from 'angular2/core'
import * as services from '../services/services'
import * as dal from '../dal/models'
@Component({
    template: require("./biography.html!text")
})

export class Biography implements OnInit {
    cvs: dal.CV[];
    constructor(private dataService: services.DataService) {
    }
    ngOnInit() {
        var req: dal.DataRequest = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCV').then((res: dal.CVResponse) => { this.cvs = res.CVs; });

    }
}