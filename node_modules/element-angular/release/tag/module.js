import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElTag } from './tag';
export class ElTagsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElTagsModule, providers: [] };
    }
}
ElTagsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElTag],
                exports: [ElTag],
                imports: [CommonModule],
                entryComponents: [ElTag],
            },] },
];
/**
 * @nocollapse
 */
ElTagsModule.ctorParameters = () => [];
function ElTagsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTagsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTagsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map