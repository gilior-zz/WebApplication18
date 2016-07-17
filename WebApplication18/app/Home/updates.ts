import {Component, OnInit} from 'angular2/core'
import * as dal from '../dal/models'
import * as services from '../services/services'
@Component({
    selector: 'noya-updates',
    template: require('./updates.html!text')
})

export class Updates implements OnInit {
    updates: dal.Update[];
    constructor(private dataService: services.DataService) { }
    ngOnInit() {
        var req: dal.DataRequest = { Language: dal.Language.Hebrew }
        this.dataService.ConnectToApiData(req, 'api/Data/GetUpdates').subscribe(
            (res: dal.UpdatesRsponse) => this.updates = res.Updates,
            (err: dal.DataError) => console.log(err.ErrorText)
        )
    }
}