import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElCard } from './card';
export class ElCardsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElCardsModule, providers: [] };
    }
}
ElCardsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElCard],
                exports: [ElCard],
                imports: [CommonModule],
                entryComponents: [ElCard],
            },] },
];
/**
 * @nocollapse
 */
ElCardsModule.ctorParameters = () => [];
function ElCardsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCardsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCardsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map