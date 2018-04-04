import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElCollapse } from './collapse';
import { ElCollapseItem } from './collapse-item';
export class ElCollapseModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElCollapseModule, providers: [] };
    }
}
ElCollapseModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElCollapse, ElCollapseItem],
                exports: [ElCollapse, ElCollapseItem],
                imports: [CommonModule],
                entryComponents: [ElCollapse],
            },] },
];
/**
 * @nocollapse
 */
ElCollapseModule.ctorParameters = () => [];
function ElCollapseModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCollapseModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCollapseModule.ctorParameters;
}
//# sourceMappingURL=module.js.map