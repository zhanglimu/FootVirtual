import { Component, ElementRef, Input } from '@angular/core';
import { ElContainer } from '../container';
import { removeNgTag } from '../../shared/utils/host';
export class ElHeader {
    /**
     * @param {?} root
     * @param {?} el
     */
    constructor(root, el) {
        this.root = root;
        this.el = el;
        this.height = '60px';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.root.setVertical(true);
        removeNgTag(this.el.nativeElement);
    }
}
ElHeader.decorators = [
    { type: Component, args: [{
                selector: 'el-header',
                template: `
    <header [class]="'el-header ' + class" [ngStyle]="{height: height}">
      <ng-content></ng-content>
    </header>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElHeader.ctorParameters = () => [
    { type: ElContainer, },
    { type: ElementRef, },
];
ElHeader.propDecorators = {
    'height': [{ type: Input },],
    'class': [{ type: Input },],
};
function ElHeader_tsickle_Closure_declarations() {
    /** @type {?} */
    ElHeader.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElHeader.ctorParameters;
    /** @type {?} */
    ElHeader.propDecorators;
    /** @type {?} */
    ElHeader.prototype.height;
    /** @type {?} */
    ElHeader.prototype.class;
    /** @type {?} */
    ElHeader.prototype.root;
    /** @type {?} */
    ElHeader.prototype.el;
}
//# sourceMappingURL=header.js.map