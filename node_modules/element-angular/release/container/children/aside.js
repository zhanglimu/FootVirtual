import { Component, ElementRef, Input } from '@angular/core';
import { removeNgTag } from '../../shared/utils/index';
export class ElAside {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.width = '300px';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        removeNgTag(this.el.nativeElement);
    }
}
ElAside.decorators = [
    { type: Component, args: [{
                selector: 'el-aside',
                template: `
    <aside [class]="'el-aside ' + class" [ngStyle]="{width: width}">
      <ng-content></ng-content>
    </aside>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElAside.ctorParameters = () => [
    { type: ElementRef, },
];
ElAside.propDecorators = {
    'width': [{ type: Input },],
    'class': [{ type: Input },],
};
function ElAside_tsickle_Closure_declarations() {
    /** @type {?} */
    ElAside.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElAside.ctorParameters;
    /** @type {?} */
    ElAside.propDecorators;
    /** @type {?} */
    ElAside.prototype.width;
    /** @type {?} */
    ElAside.prototype.class;
    /** @type {?} */
    ElAside.prototype.el;
}
//# sourceMappingURL=aside.js.map