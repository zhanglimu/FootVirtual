import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, } from '@angular/core';
import { removeNgTag } from '../../shared/utils/index';
export class ElPaginationButton {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.disabled = false;
        this.next = new EventEmitter();
    }
    /**
     * @param {?} step
     * @return {?}
     */
    clickHandle(step) {
        if (this.disabled)
            return;
        this.next.emit(step);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        removeNgTag(this.el.nativeElement);
    }
}
ElPaginationButton.decorators = [
    { type: Component, args: [{
                selector: 'el-pagination-btn',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button type="button" class="btn-prev"
      *ngIf="dir === 'left'"
      [class.disabled]="disabled"
      (click)="clickHandle(-1)">
      <i class="el-icon el-icon-arrow-left"></i>
    </button>
    <button type="button" class="btn-next"
      *ngIf="dir === 'right'"
      [class.disabled]="disabled"
      (click)="clickHandle(1)">
    <i class="el-icon el-icon-arrow-right"></i>
    </button>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElPaginationButton.ctorParameters = () => [
    { type: ElementRef, },
];
ElPaginationButton.propDecorators = {
    'dir': [{ type: Input },],
    'disabled': [{ type: Input },],
    'next': [{ type: Output },],
};
function ElPaginationButton_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPaginationButton.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElPaginationButton.ctorParameters;
    /** @type {?} */
    ElPaginationButton.propDecorators;
    /** @type {?} */
    ElPaginationButton.prototype.dir;
    /** @type {?} */
    ElPaginationButton.prototype.disabled;
    /** @type {?} */
    ElPaginationButton.prototype.next;
    /** @type {?} */
    ElPaginationButton.prototype.el;
}
//# sourceMappingURL=button.js.map