import { Input, Directive, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { isParentAttr } from '../shared/utils/index';
export class ElColDirective {
    /**
     * @param {?} sanitizer
     * @param {?} el
     */
    constructor(sanitizer, el) {
        this.sanitizer = sanitizer;
        this.el = el;
        this.span = 24;
        this.offset = 0;
        this.push = 0;
        this.pull = 0;
        this.parentIsRow = null;
        this.gutterFromParent = 0;
        this.nativeClass = ' ';
        this.nativeClass += this.el.nativeElement.classList.value;
    }
    /**
     * @return {?}
     */
    classList() {
        const /** @type {?} */ makeClass = (key) => key !== 'span'
            ? ` el-col-${key}-${this[key]}`
            : ` el-col-${this[key]}`;
        const /** @type {?} */ classStr = ['span', 'offset', 'pull', 'push'].reduce((pre, next) => !this[next]
            ? pre
            : pre + makeClass(next), 'el-col');
        return classStr + this.nativeClass;
    }
    /**
     * @return {?}
     */
    sizeClassList() {
        const /** @type {?} */ makeClass = (key) => {
            const /** @type {?} */ props = this[key] || {};
            return Object.keys(props).map(prop => prop !== 'span'
                ? `el-col-${key}-${prop}-${props[prop]}`
                : `el-col-${key}-${props[prop]}`).join(' ');
        };
        const /** @type {?} */ classStr = ['xs', 'sm', 'md', 'lg'].reduce((pre, next) => !this[next] ?
            pre : typeof this[next] === 'object'
            ? makeClass(next)
            : ` el-col-${next}-${this[next]}`, '');
        return classStr;
    }
    /**
     * @return {?}
     */
    gutterStyle() {
        let /** @type {?} */ styleStr = '';
        if (this.gutterFromParent) {
            styleStr += `padding-left: ${this.gutterFromParent / 2}px;`;
            styleStr += `padding-right: ${this.gutterFromParent / 2}px;`;
        }
        return this.sanitizer.bypassSecurityTrustStyle(styleStr);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ nativeElement = this.el.nativeElement;
        this.parentIsRow = isParentAttr(nativeElement, 'el-row');
        if (this.parentIsRow) {
            this.gutterFromParent = this.parentIsRow.getAttribute('gutter') || 0;
        }
    }
}
ElColDirective.decorators = [
    { type: Directive, args: [{
                selector: '[el-col]',
                host: {
                    '[style]': 'gutterStyle()',
                    '[class]': 'classList() + sizeClassList()',
                },
            },] },
];
/**
 * @nocollapse
 */
ElColDirective.ctorParameters = () => [
    { type: DomSanitizer, },
    { type: ElementRef, },
];
ElColDirective.propDecorators = {
    'span': [{ type: Input },],
    'offset': [{ type: Input },],
    'push': [{ type: Input },],
    'pull': [{ type: Input },],
    'xs': [{ type: Input },],
    'sm': [{ type: Input },],
    'md': [{ type: Input },],
    'lg': [{ type: Input },],
};
function ElColDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElColDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElColDirective.ctorParameters;
    /** @type {?} */
    ElColDirective.propDecorators;
    /** @type {?} */
    ElColDirective.prototype.span;
    /** @type {?} */
    ElColDirective.prototype.offset;
    /** @type {?} */
    ElColDirective.prototype.push;
    /** @type {?} */
    ElColDirective.prototype.pull;
    /** @type {?} */
    ElColDirective.prototype.xs;
    /** @type {?} */
    ElColDirective.prototype.sm;
    /** @type {?} */
    ElColDirective.prototype.md;
    /** @type {?} */
    ElColDirective.prototype.lg;
    /** @type {?} */
    ElColDirective.prototype.parentIsRow;
    /** @type {?} */
    ElColDirective.prototype.gutterFromParent;
    /** @type {?} */
    ElColDirective.prototype.nativeClass;
    /** @type {?} */
    ElColDirective.prototype.sanitizer;
    /** @type {?} */
    ElColDirective.prototype.el;
}
//# sourceMappingURL=col.directive.js.map