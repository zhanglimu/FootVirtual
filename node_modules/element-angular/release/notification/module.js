import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElNotificationContainer } from './notification';
import { ElNotificationService } from './notification.service';
export class ElNotificationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElNotificationModule, providers: [
                ElNotificationService,
            ] };
    }
}
ElNotificationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElNotificationContainer],
                exports: [ElNotificationContainer],
                imports: [CommonModule],
                entryComponents: [ElNotificationContainer],
            },] },
];
/**
 * @nocollapse
 */
ElNotificationModule.ctorParameters = () => [];
function ElNotificationModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElNotificationModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElNotificationModule.ctorParameters;
}
//# sourceMappingURL=module.js.map