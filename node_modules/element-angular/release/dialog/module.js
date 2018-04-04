import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElSharedModule } from '../shared/module';
import { ElDialog } from './dialog';
/**
 * @return {?}
 */
export function getDocument() { return document; }
/**
 * @return {?}
 */
export function getWindow() { return window; }
export class ElDialogModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElDialogModule, providers: [] };
    }
}
ElDialogModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElDialog],
                exports: [ElDialog],
                imports: [CommonModule, ElSharedModule],
                entryComponents: [ElDialog],
            },] },
];
/**
 * @nocollapse
 */
ElDialogModule.ctorParameters = () => [];
function ElDialogModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDialogModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDialogModule.ctorParameters;
}
//# sourceMappingURL=module.js.map