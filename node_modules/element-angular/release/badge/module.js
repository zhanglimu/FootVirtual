import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElBadge } from './badge';
export class ElBadgesModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElBadgesModule, providers: [] };
    }
}
ElBadgesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElBadge],
                exports: [ElBadge],
                imports: [CommonModule],
                entryComponents: [ElBadge],
            },] },
];
/**
 * @nocollapse
 */
ElBadgesModule.ctorParameters = () => [];
function ElBadgesModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElBadgesModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElBadgesModule.ctorParameters;
}
//# sourceMappingURL=module.js.map