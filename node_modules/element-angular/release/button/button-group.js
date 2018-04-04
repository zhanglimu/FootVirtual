import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
export class ElButtonGroup {
    constructor() {
        this.nativeClass = '';
    }
}
ElButtonGroup.decorators = [
    { type: Component, args: [{
                selector: 'el-button-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div [class]="'el-button-group ' + nativeClass">
      <ng-content></ng-content>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElButtonGroup.ctorParameters = () => [];
ElButtonGroup.propDecorators = {
    'nativeClass': [{ type: Input, args: ['class',] },],
};
function ElButtonGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    ElButtonGroup.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElButtonGroup.ctorParameters;
    /** @type {?} */
    ElButtonGroup.propDecorators;
    /** @type {?} */
    ElButtonGroup.prototype.nativeClass;
}
//# sourceMappingURL=button-group.js.map