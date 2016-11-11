import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {GaliluCenterComponent} from './center/galilu-center.component'
import {GaliluHomeComponent} from './home/galilu-home.component'
import {GaliluPalletComponent} from './pallet/galilu-pallet.component'
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'galilu',
                component: GaliluHomeComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'center'
                    },
                    {
                        path: 'center',
                        component: GaliluCenterComponent
                    },
                    {
                        path: 'pallet',
                        component: GaliluPalletComponent
                    }
                ]

            }
        ])


    ],
    exports: [
        RouterModule
    ]
})
export class GaliluRoutingModule { }