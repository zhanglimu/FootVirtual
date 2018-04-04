import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElTooltip } from './tooltip';
import { ElSharedModule } from '../shared/module';
/**
 * @return {?}
 */
export function getWindow() { return window; }
export class ElTooltipModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElTooltipModule, providers: [] };
    }
}
ElTooltipModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElTooltip],
                exports: [ElTooltip],
                imports: [CommonModule, ElSharedModule],
                entryComponents: [ElTooltip],
            },] },
];
/**
 * @nocollapse
 */
ElTooltipModule.ctorParameters = () => [];
function ElTooltipModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTooltipModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTooltipModule.ctorParameters;
}
//# sourceMappingURL=module.js.map