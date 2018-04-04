import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElSwitch } from './switch';
import { FormsModule } from '@angular/forms';
export class ElSwitchModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElSwitchModule, providers: [] };
    }
}
ElSwitchModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElSwitch],
                exports: [ElSwitch],
                imports: [CommonModule, FormsModule],
                entryComponents: [ElSwitch],
            },] },
];
/**
 * @nocollapse
 */
ElSwitchModule.ctorParameters = () => [];
function ElSwitchModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSwitchModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSwitchModule.ctorParameters;
}
//# sourceMappingURL=module.js.map