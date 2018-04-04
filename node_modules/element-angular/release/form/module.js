import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElSharedModule } from '../shared/module';
import { ElButtonsModule } from '../button/module';
import { ElForm } from './form';
import { ElFormItem } from './form-item';
export class ElFormModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElFormModule, providers: [] };
    }
}
ElFormModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElForm, ElFormItem],
                exports: [ElForm, ElFormItem],
                imports: [CommonModule, ElButtonsModule, ElSharedModule],
                entryComponents: [ElForm],
            },] },
];
/**
 * @nocollapse
 */
ElFormModule.ctorParameters = () => [];
function ElFormModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElFormModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElFormModule.ctorParameters;
}
//# sourceMappingURL=module.js.map