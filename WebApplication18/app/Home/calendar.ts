import {Component, OnInit} from 'angular2/core'
import * as dal from '../dal/models'
import * as services from '../services/services'
@Component({
    selector: 'noya-calendar',
    template: require('./calendar.html!text')
})
export class Calendar implements OnInit {
    dataDate: Date;
    text: string;
    month: number;
    year: number;
    constructor(private dataService: services.DataService, private cacheService: services.CacheManager) {
    }

    onLeft(): void {
        var nextData = dal.NextData.Prev
        this.dataDate = new Date((this.cacheService.GetFromCache('currentDataDate', new Date()).toString()));

        var req: dal.CalendarRequest = { CurrentCalendarDate: this.dataDate, Language: dal.Language.English, NextData: nextData };

        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').then((res: dal.CalendarResponse) => {
            this.dataDate = new Date(res.CalendarItem.DataDate.toString());
            this.text = res.CalendarItem.Text;
            this.cacheService.StoreInCache('currentDataDate', this.dataDate);
        });


    }
    onRight(): void {
        var nextData = dal.NextData.Next
        this.dataDate = new Date((this.cacheService.GetFromCache('currentDataDate', new Date()).toString()));

        var req: dal.CalendarRequest = { CurrentCalendarDate: this.dataDate, Language: dal.Language.English, NextData: nextData };

        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').then((res: dal.CalendarResponse) => {
            this.dataDate = new Date(res.CalendarItem.DataDate.toString());
            this.text = res.CalendarItem.Text;
            this.cacheService.StoreInCache('currentDataDate', this.dataDate);
        });


    }
    ngOnInit() {
        var nextData = dal.NextData.Currnet
        this.dataDate = new Date((this.cacheService.GetFromCache('currentDataDate', new Date()).toString()));

        var req: dal.CalendarRequest = { CurrentCalendarDate: this.dataDate, Language: dal.Language.English, NextData: nextData };

        this.dataService.ConnectToApiData(req, 'api/Data/GetCalendar').then((res: dal.CalendarResponse) => {
            this.dataDate = new Date(res.CalendarItem.DataDate.toString());
            this.text = res.CalendarItem.Text;
            this.cacheService.StoreInCache('currentDataDate', this.dataDate);
        });



    }
}