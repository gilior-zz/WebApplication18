import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import * as services from '../services/services'
import * as dal from '../dal/models'
import {HeaderImage} from '../HeaderImage/header.image'
@Component({
    template: require("./programs.html!text"),
    directives: [HeaderImage]
})

export class Programs implements OnInit {
    programs: dal.Program[];
    ImageURL: string;
    constructor(private dataService: services.DataService, private routeParams: RouteParams) {
        this.ImageURL = this.routeParams.get('ImageURL');
    }
    ngOnInit() {
        var req: dal.DataRequest = { Language: dal.Language.Hebrew };
        this.dataService.ConnectToApiData(req, 'api/Data/GetPrograms').subscribe(
            (res: dal.ProgramResponse) => { this.programs = res.Programs },
            (err: dal.DataError) => { console.error('error in Programs in ngOnInit: ' + err.ErrorText); },
            () => { }
        )
    }
}