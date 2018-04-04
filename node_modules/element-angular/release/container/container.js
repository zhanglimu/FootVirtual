import { Component, ElementRef, Input } from '@angular/core';
import { removeNgTag } from '../shared/utils/host';
export class ElContainer {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.direction = '';
        this.isVertical = false;
    }
    /**
     * @param {?=} isVertical
     * @return {?}
     */
    setVertical(isVertical) {
        if (isVertical && this.direction !== 'horizontal') {
            this.isVertical = true;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isVertical = this.direction === 'vertical';
        removeNgTag(this.el.nativeElement);
    }
}
ElContainer.decorators = [
    { type: Component, args: [{
                selector: 'el-container',
                template: `
    <section [class]="'el-container ' + class" [class.is-vertical]="isVertical">
      <ng-content></ng-content>
    </section>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElContainer.ctorParameters = () => [
    { type: ElementRef, },
];
ElContainer.propDecorators = {
    'direction': [{ type: Input },],
    'class': [{ type: Input },],
};
function ElContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    ElContainer.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElContainer.ctorParameters;
    /** @type {?} */
    ElContainer.propDecorators;
    /** @type {?} */
    ElContainer.prototype.direction;
    /** @type {?} */
    ElContainer.prototype.class;
    /** @type {?} */
    ElContainer.prototype.isVertical;
    /** @type {?} */
    ElContainer.prototype.el;
}
//# sourceMappingURL=container.js.map