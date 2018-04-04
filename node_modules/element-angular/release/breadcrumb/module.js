import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElBreadcrumb } from './breadcrumb';
import { ElBreadcrumbItem } from './breadcrumb-item';
export class ElBreadcrumbsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElBreadcrumbsModule, providers: [] };
    }
}
ElBreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElBreadcrumb, ElBreadcrumbItem],
                exports: [ElBreadcrumb, ElBreadcrumbItem],
                imports: [CommonModule],
                entryComponents: [ElBreadcrumb],
            },] },
];
/**
 * @nocollapse
 */
ElBreadcrumbsModule.ctorParameters = () => [];
function ElBreadcrumbsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElBreadcrumbsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElBreadcrumbsModule.ctorParameters;
}
//# sourceMappingURL=module.js.map