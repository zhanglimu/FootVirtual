import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Elprogress } from './progress';
export class ElProgressModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElProgressModule, providers: [] };
    }
}
ElProgressModule.decorators = [
    { type: NgModule, args: [{
                declarations: [Elprogress],
                exports: [Elprogress],
                imports: [CommonModule],
                entryComponents: [Elprogress],
            },] },
];
/**
 * @nocollapse
 */
ElProgressModule.ctorParameters = () => [];
function ElProgressModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElProgressModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElProgressModule.ctorParameters;
}
//# sourceMappingURL=module.js.map