import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ElPaginationSize {
    constructor() {
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.options = this.sizes.map(size => ({
            value: size,
            label: size + '条/页',
        }));
    }
}
ElPaginationSize.decorators = [
    { type: Component, args: [{
                selector: 'el-pagination-size',
                template: `
    <el-select [model]="model" (modelChange)="modelChange.emit($event)"
      popper-class="is-arrow-fixed">
      <el-option *ngFor="let item of options"
        [label]="item.label"
        [value]="item.value"></el-option>
    </el-select>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElPaginationSize.ctorParameters = () => [];
ElPaginationSize.propDecorators = {
    'model': [{ type: Input },],
    'sizes': [{ type: Input },],
    'modelChange': [{ type: Output },],
};
function ElPaginationSize_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPaginationSize.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElPaginationSize.ctorParameters;
    /** @type {?} */
    ElPaginationSize.propDecorators;
    /** @type {?} */
    ElPaginationSize.prototype.model;
    /** @type {?} */
    ElPaginationSize.prototype.sizes;
    /** @type {?} */
    ElPaginationSize.prototype.modelChange;
    /** @type {?} */
    ElPaginationSize.prototype.options;
}
//# sourceMappingURL=size.js.map