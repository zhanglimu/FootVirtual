import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElRate } from './rate';
export class ElRateModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElRateModule, providers: [] };
    }
}
ElRateModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElRate],
                exports: [ElRate],
                imports: [CommonModule],
                entryComponents: [ElRate],
            },] },
];
/**
 * @nocollapse
 */
ElRateModule.ctorParameters = () => [];
function ElRateModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRateModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElRateModule.ctorParameters;
}
//# sourceMappingURL=module.js.map