import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import * as services from '../services/services'
import * as dal from '../dal/models'
import {HeaderImage} from '../HeaderImage/header.image'

@Component({
    template: require("./biography.html!text"),
    directives: [HeaderImage]
})

export class Biography implements OnInit {
    cvs: dal.CV[];
    ImageURL: string;
    constructor(private dataService: services.DataService, private routeParams: RouteParams) {
        this.ImageURL = this.routeParams.get('ImageURL');
    }
    ngOnInit() {


        var req: dal.DataRequest = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetCV').subscribe(
            (res: dal.CVResponse) => { this.cvs = res.CVs },
            (err: dal.DataError) => { console.error('error in Biography in ngOnInit: ' + err.ErrorText); },
            () => { }
        )

    }
}