import { Input, Directive, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class ElRowDirective {
    /**
     * @param {?} sanitizer
     * @param {?} el
     */
    constructor(sanitizer, el) {
        this.sanitizer = sanitizer;
        this.el = el;
        this.gutter = 0;
        this.justify = 'start';
        this.align = 'top';
        this.nativeClass = ' ';
        this.nativeClass += this.el.nativeElement.classList.value;
    }
    /**
     * @return {?}
     */
    justifyClass() {
        return this.justify !== 'start' ? ` is-justify-${this.justify}` : '';
    }
    /**
     * @return {?}
     */
    alignClass() {
        return this.align !== 'top' ? ` is-align-${this.align}` : '';
    }
    /**
     * @return {?}
     */
    gutterStyle() {
        let /** @type {?} */ styleStr = '';
        if (this.gutter) {
            styleStr += `margin-left: -${this.gutter / 2}px;`;
            styleStr += `margin-right: -${this.gutter / 2}px;`;
        }
        return this.sanitizer.bypassSecurityTrustStyle(styleStr);
    }
}
ElRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[el-row]',
                host: {
                    '[class]': '"el-row" + justifyClass() + alignClass() + nativeClass',
                    '[class.el-row--flex]': 'type === "flex"',
                    '[style]': 'gutterStyle()',
                },
            },] },
];
/**
 * @nocollapse
 */
ElRowDirective.ctorParameters = () => [
    { type: DomSanitizer, },
    { type: ElementRef, },
];
ElRowDirective.propDecorators = {
    'type': [{ type: Input },],
    'gutter': [{ type: Input },],
    'justify': [{ type: Input },],
    'align': [{ type: Input },],
};
function ElRowDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElRowDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElRowDirective.ctorParameters;
    /** @type {?} */
    ElRowDirective.propDecorators;
    /** @type {?} */
    ElRowDirective.prototype.type;
    /** @type {?} */
    ElRowDirective.prototype.gutter;
    /** @type {?} */
    ElRowDirective.prototype.justify;
    /** @type {?} */
    ElRowDirective.prototype.align;
    /** @type {?} */
    ElRowDirective.prototype.nativeClass;
    /** @type {?} */
    ElRowDirective.prototype.sanitizer;
    /** @type {?} */
    ElRowDirective.prototype.el;
}
//# sourceMappingURL=row.directive.js.map