import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElContainer } from './container';
import { ElHeader, ElAside, ElMain, ElFooter } from './children/index';
export class ElContainerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElContainerModule, providers: [] };
    }
}
ElContainerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElContainer, ElHeader, ElAside, ElMain, ElFooter],
                exports: [ElContainer, ElHeader, ElAside, ElMain, ElFooter],
                imports: [CommonModule],
                entryComponents: [ElContainer],
            },] },
];
/**
 * @nocollapse
 */
ElContainerModule.ctorParameters = () => [];
function ElContainerModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElContainerModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElContainerModule.ctorParameters;
}
//# sourceMappingURL=module.js.map