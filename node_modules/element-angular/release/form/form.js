import { Component } from '@angular/core';
import { ElFormProps } from './form.props';
export class ElForm extends ElFormProps {
    constructor() {
        super();
    }
}
ElForm.decorators = [
    { type: Component, args: [{
                selector: 'el-form',
                template: `
    <form [class]="'el-form ' + (labelPosition ? 'el-form--label-' + labelPosition : '')
      + (inline ? ' el-form--inline' : '')">
     <ng-content></ng-content>
    </form>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElForm.ctorParameters = () => [];
function ElForm_tsickle_Closure_declarations() {
    /** @type {?} */
    ElForm.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElForm.ctorParameters;
}
//# sourceMappingURL=form.js.map