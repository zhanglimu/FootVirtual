import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ElPaginationJump {
    constructor() {
        this.next = new EventEmitter();
    }
    /**
     * @param {?} page
     * @param {?} max
     * @return {?}
     */
    static nextPageNumber(page, max) {
        if (page <= 1)
            return 1;
        if (page >= max)
            return max;
        return page;
    }
    /**
     * @param {?} nextValue
     * @return {?}
     */
    changeHandle(nextValue) {
        if (Number.isNaN(+nextValue))
            return;
        const /** @type {?} */ next = ElPaginationJump.nextPageNumber(+nextValue, this.max);
        const /** @type {?} */ pre = this.model;
        this.model = Math.round(next);
        this.next.emit(this.model - pre);
    }
}
ElPaginationJump.decorators = [
    { type: Component, args: [{
                selector: 'el-pagination-jump',
                template: `
    <span class="el-pagination__jump">
      前往
    <div class="el-input el-pagination__editor is-in-pagination">
      <input class="el-input__inner" type="number" #input
        autocomplete="off" rows="2"
        [min]="1" [max]="max" [ngModel]="model"
        (keyup.enter)="changeHandle(input.value)" (blur)="changeHandle(input.value)"/>
    </div>
      页
    </span>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElPaginationJump.ctorParameters = () => [];
ElPaginationJump.propDecorators = {
    'model': [{ type: Input },],
    'max': [{ type: Input },],
    'next': [{ type: Output },],
};
function ElPaginationJump_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPaginationJump.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElPaginationJump.ctorParameters;
    /** @type {?} */
    ElPaginationJump.propDecorators;
    /** @type {?} */
    ElPaginationJump.prototype.model;
    /** @type {?} */
    ElPaginationJump.prototype.max;
    /** @type {?} */
    ElPaginationJump.prototype.next;
}
//# sourceMappingURL=jump.js.map