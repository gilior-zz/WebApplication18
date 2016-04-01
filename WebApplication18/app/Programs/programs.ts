import {Component, OnInit} from 'angular2/core'
import * as services from '../services/services'
import * as dal from '../dal/models'
@Component({
    template: require("./programs.html!text")
})

export class Programs implements OnInit {
    programs: dal.Program[];
    constructor(private dataService: services.DataService) {
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