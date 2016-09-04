import {Component, OnInit} from '@angular/core'
import {BaseComponent} from '../common/base.component'
import {Router} from '@angular/router'
@Component({
    templateUrl: "./home.html",
    moduleId: module.id,

})

export class Home extends BaseComponent implements OnInit {

    constructor(public router: Router) {
        super(router);

    }
    //public pageName
    //ngOnInit() {
    //    this.pageName
    //}
}