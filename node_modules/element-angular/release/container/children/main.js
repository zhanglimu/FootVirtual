import { Component, ElementRef, Input } from '@angular/core';
import { removeNgTag } from '../../shared/utils/host';
export class ElMain {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        removeNgTag(this.el.nativeElement);
    }
}
ElMain.decorators = [
    { type: Component, args: [{
                selector: 'el-main',
                template: `
    <main [class]="'el-main ' + class">
      <ng-content></ng-content>
    </main>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElMain.ctorParameters = () => [
    { type: ElementRef, },
];
ElMain.propDecorators = {
    'class': [{ type: Input },],
};
function ElMain_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMain.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMain.ctorParameters;
    /** @type {?} */
    ElMain.propDecorators;
    /** @type {?} */
    ElMain.prototype.class;
    /** @type {?} */
    ElMain.prototype.el;
}
//# sourceMappingURL=main.js.map