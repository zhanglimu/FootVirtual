import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElColDirective } from './col.directive';
export class ElColModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElColModule, providers: [] };
    }
}
ElColModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElColDirective],
                exports: [ElColDirective],
                imports: [CommonModule],
                entryComponents: [],
            },] },
];
/**
 * @nocollapse
 */
ElColModule.ctorParameters = () => [];
function ElColModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElColModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElColModule.ctorParameters;
}
//# sourceMappingURL=module.js.map