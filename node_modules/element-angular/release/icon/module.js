import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElIcon } from './icon';
export class ElIconsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElIconsModule, providers: [] };
    }
}
ElIconsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElIcon],
                exports: [ElIcon],
                imports: [CommonModule],
                entryComponents: [ElIcon],
            },] },
];
/**
 * @nocollapse
 */
ElIconsModule.ctorParameters = () => [];
function ElIconsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElIconsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElIconsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map