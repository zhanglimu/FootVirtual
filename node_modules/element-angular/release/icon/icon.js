import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class ElIcon {
    constructor() {
    }
}
ElIcon.decorators = [
    { type: Component, args: [{
                selector: 'el-icon',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i [class]="iconName ? 'el-icon-' + iconName : ''"></i>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElIcon.ctorParameters = () => [];
ElIcon.propDecorators = {
    'iconName': [{ type: Input, args: ['name',] },],
};
function ElIcon_tsickle_Closure_declarations() {
    /** @type {?} */
    ElIcon.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElIcon.ctorParameters;
    /** @type {?} */
    ElIcon.propDecorators;
    /** @type {?} */
    ElIcon.prototype.iconName;
}
//# sourceMappingURL=icon.js.map