import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElStep } from './step';
import { ElSteps } from './steps';
export class ElStepsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElStepsModule, providers: [] };
    }
}
ElStepsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElStep, ElSteps],
                exports: [ElStep, ElSteps],
                imports: [CommonModule],
                entryComponents: [ElStep, ElSteps],
            },] },
];
/**
 * @nocollapse
 */
ElStepsModule.ctorParameters = () => [];
function ElStepsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElStepsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElStepsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map