import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElRowDirective } from './row.directive';
export class ElRowModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElRowModule, providers: [] };
    }
}
ElRowModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElRowDirective],
                exports: [ElRowDirective],
                imports: [CommonModule],
                entryComponents: [],
            },] },
];
/**
 * @nocollapse
 */
ElRowModule.ctorParameters = () => [];
function ElRowModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRowModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElRowModule.ctorParameters;
}
//# sourceMappingURL=module.js.map