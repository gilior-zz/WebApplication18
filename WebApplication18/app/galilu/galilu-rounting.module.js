"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var galilu_center_component_1 = require('./center/galilu-center.component');
var galilu_home_component_1 = require('./home/galilu-home.component');
var galilu_pallet_component_1 = require('./pallet/galilu-pallet.component');
var GaliluRoutingModule = (function () {
    function GaliluRoutingModule() {
    }
    GaliluRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: 'galilu',
                        component: galilu_home_component_1.GaliluHomeComponent,
                        children: [
                            {
                                path: '',
                                redirectTo: 'center'
                            },
                            {
                                path: 'center',
                                component: galilu_center_component_1.GaliluCenterComponent
                            },
                            {
                                path: 'pallet',
                                component: galilu_pallet_component_1.GaliluPalletComponent
                            }
                        ]
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GaliluRoutingModule);
    return GaliluRoutingModule;
}());
exports.GaliluRoutingModule = GaliluRoutingModule;
//# sourceMappingURL=galilu-rounting.module.js.map