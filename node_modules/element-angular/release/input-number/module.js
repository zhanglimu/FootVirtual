import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ElInputNumber } from './input-number';
export class ElInputNumberModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElInputNumberModule, providers: [] };
    }
}
ElInputNumberModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElInputNumber],
                exports: [ElInputNumber],
                imports: [CommonModule, FormsModule],
                entryComponents: [ElInputNumber],
            },] },
];
/**
 * @nocollapse
 */
ElInputNumberModule.ctorParameters = () => [];
function ElInputNumberModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElInputNumberModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElInputNumberModule.ctorParameters;
}
//# sourceMappingURL=module.js.map