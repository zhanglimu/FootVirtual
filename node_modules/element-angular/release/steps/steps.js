import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
export class ElSteps {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.direction = 'horizontal'; // enum: vertical/horizontal
        this.active = 0;
        this.simple = false;
        this.processStatus = 'process';
        this.finishStatus = 'finish'; // enum: wait/process/finish/error/success
        this.alignCenter = false;
        this.offset = 0;
        this.stepsLength = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ children = this.el.nativeElement.querySelectorAll('el-step');
        if (!children || !children.length) {
            return console.warn('steps components required children');
        }
        children.forEach((el, index) => {
            this.renderer.setAttribute(el, 'el-index', String(index));
        });
        this.stepsLength = children.length;
        // this.offset = children[this.stepsLength - 1].getBoundingClientRect().width / (this.stepsLength - 1)
    }
}
ElSteps.decorators = [
    { type: Component, args: [{
                selector: 'el-steps',
                template: `
    <div [class]="'el-steps ' + (!simple ? 'el-steps--' + direction : '')"
      [class.el-steps--simple]="simple">
      <ng-content></ng-content>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElSteps.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
ElSteps.propDecorators = {
    'space': [{ type: Input },],
    'direction': [{ type: Input },],
    'active': [{ type: Input },],
    'simple': [{ type: Input },],
    'processStatus': [{ type: Input, args: ['process-status',] },],
    'finishStatus': [{ type: Input, args: ['finish-status',] },],
    'alignCenter': [{ type: Input, args: ['align-center',] },],
};
function ElSteps_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSteps.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSteps.ctorParameters;
    /** @type {?} */
    ElSteps.propDecorators;
    /** @type {?} */
    ElSteps.prototype.space;
    /** @type {?} */
    ElSteps.prototype.direction;
    /** @type {?} */
    ElSteps.prototype.active;
    /** @type {?} */
    ElSteps.prototype.simple;
    /** @type {?} */
    ElSteps.prototype.processStatus;
    /** @type {?} */
    ElSteps.prototype.finishStatus;
    /** @type {?} */
    ElSteps.prototype.alignCenter;
    /** @type {?} */
    ElSteps.prototype.offset;
    /** @type {?} */
    ElSteps.prototype.stepsLength;
    /** @type {?} */
    ElSteps.prototype.el;
    /** @type {?} */
    ElSteps.prototype.renderer;
}
//# sourceMappingURL=steps.js.map