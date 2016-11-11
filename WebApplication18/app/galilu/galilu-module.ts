import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {CenterComponent} from './center/center.component'
import {HomeComponent} from './home/home.component'
import {GaliluRoutingModule} from './galilu-rounting.module'
import {TranslatePipe}  from "../pipes/pipes"
import {PalletComponent} from './pallet/pallet.component'
import {BagsComponent} from './bags/bags.component'
import {CushionsComponent} from './cushions/cushions.component'
import {LampsComponent} from './lamps/lamps.component'
import {BooksComponent} from './books/books.component'

@NgModule({
    imports: [
        CommonModule,
        GaliluRoutingModule,

    ],
    declarations: [TranslatePipe, CenterComponent, CenterComponent, PalletComponent, HomeComponent, BagsComponent, CushionsComponent, LampsComponent, BooksComponent],
    exports: [TranslatePipe]

})

export class GaliluModule { }