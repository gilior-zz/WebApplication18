import {Router} from '@angular/router'
import {OnInit} from '@angular/core'
import * as services from '../services/services'
export class BaseComponent implements OnInit {
    public pageName: string;
    constructor(public router: Router) {

    }
    ngOnInit() {
        //this.pageName = this.router.routerState.snapshot.url.replace('/', '');
    }
}