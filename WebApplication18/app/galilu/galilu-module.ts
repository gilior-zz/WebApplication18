import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {GaliluCenterComponent} from './center/galilu-center.component'
import {GaliluHomeComponent} from './home/galilu-home.component'
import {GaliluPalletComponent} from './pallet/galilu-pallet.component'
import {GaliluRoutingModule} from './galilu-rounting.module'

@NgModule({
    imports: [
        CommonModule,
        GaliluRoutingModule
    ],
    declarations: [GaliluCenterComponent, GaliluCenterComponent, GaliluPalletComponent,GaliluHomeComponent]
})

export class GaliluModule { }