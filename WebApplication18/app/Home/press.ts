import {Component, OnInit} from 'angular2/core'
import * as dal from '../dal/models'
import * as services from '../services/services'
@Component({
    selector: 'noya-press',
    template: require('./press.html!text')
})

export class Press implements OnInit {
    pressItems: dal.PressItem[];
    constructor(private dataService: services.DataService) { }
    ngOnInit() {
        var req: dal.DataRequest = { Language: dal.Language.Hebrew }
        this.dataService.ConnectToApiData(req, 'api/Data/GetPress').subscribe(
            (res: dal.PressResponse) => this.pressItems = res.PressItems,
            (err: dal.DataError) => console.log(err.ErrorText)
        )
    }
}