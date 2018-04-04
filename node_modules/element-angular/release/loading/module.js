import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElSharedModule } from '../shared/module';
import { ElLoadingDirective } from './loading.directive';
export class ElLoadingModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElLoadingModule, providers: [] };
    }
}
ElLoadingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElLoadingDirective],
                exports: [ElLoadingDirective],
                imports: [CommonModule, ElSharedModule],
                entryComponents: [],
            },] },
];
/**
 * @nocollapse
 */
ElLoadingModule.ctorParameters = () => [];
function ElLoadingModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElLoadingModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElLoadingModule.ctorParameters;
}
//# sourceMappingURL=module.js.map