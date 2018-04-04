import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
export class ElClassDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.classNames = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, this.classNames);
    }
}
ElClassDirective.decorators = [
    { type: Directive, args: [{
                selector: '[el-class]',
            },] },
];
/**
 * @nocollapse
 */
ElClassDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
ElClassDirective.propDecorators = {
    'classNames': [{ type: Input, args: ['el-class',] },],
};
function ElClassDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElClassDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElClassDirective.ctorParameters;
    /** @type {?} */
    ElClassDirective.propDecorators;
    /** @type {?} */
    ElClassDirective.prototype.classNames;
    /** @type {?} */
    ElClassDirective.prototype.el;
    /** @type {?} */
    ElClassDirective.prototype.renderer;
}
//# sourceMappingURL=class.directive.js.map