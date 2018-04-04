import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
export class ElBreadcrumb {
    constructor() {
        this.separator = '/';
        this.prevent = false;
        this.next = new EventEmitter();
    }
    /**
     * @param {?} path
     * @return {?}
     */
    itemHandle(path) {
        this.next.emit(path);
    }
}
ElBreadcrumb.decorators = [
    { type: Component, args: [{
                selector: 'el-breadcrumb',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="el-breadcrumb" aria-label="Breadcrumb" role="navigation">
      <ng-content></ng-content>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElBreadcrumb.ctorParameters = () => [];
ElBreadcrumb.propDecorators = {
    'separator': [{ type: Input },],
    'separatorClass': [{ type: Input, args: ['separator-class',] },],
    'prevent': [{ type: Input },],
    'next': [{ type: Output, args: ['next',] },],
};
function ElBreadcrumb_tsickle_Closure_declarations() {
    /** @type {?} */
    ElBreadcrumb.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElBreadcrumb.ctorParameters;
    /** @type {?} */
    ElBreadcrumb.propDecorators;
    /** @type {?} */
    ElBreadcrumb.prototype.separator;
    /** @type {?} */
    ElBreadcrumb.prototype.separatorClass;
    /** @type {?} */
    ElBreadcrumb.prototype.prevent;
    /** @type {?} */
    ElBreadcrumb.prototype.next;
}
//# sourceMappingURL=breadcrumb.js.map