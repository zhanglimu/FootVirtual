import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElInput } from './input';
import { FormsModule } from '@angular/forms';
import { ElFormItem } from '../form/form-item';
export class ElInputsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElInputsModule, providers: [ElFormItem] };
    }
}
ElInputsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElInput],
                exports: [ElInput],
                imports: [CommonModule, FormsModule],
                entryComponents: [ElInput],
            },] },
];
/**
 * @nocollapse
 */
ElInputsModule.ctorParameters = () => [];
function ElInputsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElInputsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElInputsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map