import { Component, ElementRef, Input } from '@angular/core';
import { ElContainer } from '../container';
import { removeNgTag } from '../../shared/utils/host';
export class ElFooter {
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
ElFooter.decorators = [
    { type: Component, args: [{
                selector: 'el-footer',
                template: `
    <footer [class]="'el-footer ' + class" [ngStyle]="{height: height}">
      <ng-content></ng-content>
    </footer>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElFooter.ctorParameters = () => [
    { type: ElContainer, },
    { type: ElementRef, },
];
ElFooter.propDecorators = {
    'height': [{ type: Input },],
    'class': [{ type: Input },],
};
function ElFooter_tsickle_Closure_declarations() {
    /** @type {?} */
    ElFooter.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElFooter.ctorParameters;
    /** @type {?} */
    ElFooter.propDecorators;
    /** @type {?} */
    ElFooter.prototype.height;
    /** @type {?} */
    ElFooter.prototype.class;
    /** @type {?} */
    ElFooter.prototype.root;
    /** @type {?} */
    ElFooter.prototype.el;
}
//# sourceMappingURL=footer.js.map