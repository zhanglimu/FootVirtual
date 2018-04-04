import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class ElTag {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.closable = false;
        this.hit = false;
        this.closeTransition = false;
        this.closeEmitter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ styles = `backgroundColor: ${this.color}`;
        this.tagStyles = this.sanitizer.bypassSecurityTrustStyle(styles);
    }
}
ElTag.decorators = [
    { type: Component, args: [{
                selector: 'el-tag',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <span [class]="'el-tag' + (type ? ' el-tag--' + type : '')"
      [class.is-hit]="hit">
      <ng-content></ng-content>
      <i class="el-tag__close el-icon-close" *ngIf="closable" (click)="closeEmitter.emit()"></i>
    </span>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElTag.ctorParameters = () => [
    { type: DomSanitizer, },
];
ElTag.propDecorators = {
    'type': [{ type: Input },],
    'closable': [{ type: Input },],
    'hit': [{ type: Input },],
    'color': [{ type: Input },],
    'closeTransition': [{ type: Input, args: ['close-transition',] },],
    'closeEmitter': [{ type: Output, args: ['close',] },],
};
function ElTag_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTag.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTag.ctorParameters;
    /** @type {?} */
    ElTag.propDecorators;
    /** @type {?} */
    ElTag.prototype.type;
    /** @type {?} */
    ElTag.prototype.closable;
    /** @type {?} */
    ElTag.prototype.hit;
    /** @type {?} */
    ElTag.prototype.color;
    /** @type {?} */
    ElTag.prototype.closeTransition;
    /** @type {?} */
    ElTag.prototype.closeEmitter;
    /** @type {?} */
    ElTag.prototype.tagStyles;
    /** @type {?} */
    ElTag.prototype.sanitizer;
}
//# sourceMappingURL=tag.js.map