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
var common_1 = require('@angular/common');
var galilu_center_component_1 = require('./center/galilu-center.component');
var galilu_home_component_1 = require('./home/galilu-home.component');
var galilu_pallet_component_1 = require('./pallet/galilu-pallet.component');
var galilu_rounting_module_1 = require('./galilu-rounting.module');
var GaliluModule = (function () {
    function GaliluModule() {
    }
    GaliluModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                galilu_rounting_module_1.GaliluRoutingModule
            ],
            declarations: [galilu_center_component_1.GaliluCenterComponent, galilu_center_component_1.GaliluCenterComponent, galilu_pallet_component_1.GaliluPalletComponent, galilu_home_component_1.GaliluHomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], GaliluModule);
    return GaliluModule;
}());
exports.GaliluModule = GaliluModule;
//# sourceMappingURL=galilu-module.js.map