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
var kids_art_center_component_1 = require('./center/kids-art-center.component');
var kids_art_home_component_1 = require('./home/kids-art-home.component');
var kids_art_platform_component_1 = require('./pallet/kids-art-platform.component');
var KidsArtRoutingModule = (function () {
    function KidsArtRoutingModule() {
    }
    KidsArtRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: 'kids-art',
                        component: kids_art_home_component_1.KidsArtHomeComponent,
                        children: [
                            {
                                path: '',
                                redirectTo: 'center'
                            },
                            {
                                path: 'center',
                                component: kids_art_center_component_1.KidsArtCenterComponent
                            },
                            {
                                path: 'platform',
                                component: kids_art_platform_component_1.KidsArtPalletComponent
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
    ], KidsArtRoutingModule);
    return KidsArtRoutingModule;
}());
exports.KidsArtRoutingModule = KidsArtRoutingModule;
//# sourceMappingURL=kids-art-rounting.module.js.map