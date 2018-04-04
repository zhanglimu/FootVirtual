import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElMessageContainer } from './message';
import { ElMessageService } from './message.service';
export class ElMessagesModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElMessagesModule, providers: [
                ElMessageService,
            ] };
    }
}
ElMessagesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElMessageContainer],
                exports: [ElMessageContainer],
                imports: [CommonModule],
                entryComponents: [ElMessageContainer],
            },] },
];
/**
 * @nocollapse
 */
ElMessagesModule.ctorParameters = () => [];
function ElMessagesModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMessagesModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMessagesModule.ctorParameters;
}
//# sourceMappingURL=module.js.map