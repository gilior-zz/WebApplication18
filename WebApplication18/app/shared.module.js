import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from "./pipes/pipes";
export var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [TranslatePipe],
                    exports: [TranslatePipe, FormsModule]
                },] },
    ];
    /** @nocollapse */
    SharedModule.ctorParameters = [];
    return SharedModule;
}());
//# sourceMappingURL=shared.module.js.map