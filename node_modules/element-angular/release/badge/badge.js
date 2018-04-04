import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class ElBadge {
    constructor() {
        this.hidden = false;
        this.isDot = false;
    }
    /**
     * @return {?}
     */
    makeContent() {
        if (this.isDot)
            return '';
        if (typeof this.model === 'number') {
            return this.max < this.model ? `${this.max}+` : this.model;
        }
        return this.model;
    }
}
ElBadge.decorators = [
    { type: Component, args: [{
                selector: 'el-badge',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="el-badge">
      <ng-content></ng-content>
      <sup *ngIf="!hidden && (!!makeContent() || isDot)"
        class="el-badge__content"
        style="z-index: 1;"
        [class.is-fixed]="true" [class.is-dot]="isDot">
        {{makeContent()}}
      </sup>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElBadge.ctorParameters = () => [];
ElBadge.propDecorators = {
    'model': [{ type: Input },],
    'max': [{ type: Input },],
    'hidden': [{ type: Input },],
    'isDot': [{ type: Input, args: ['is-dot',] },],
};
function ElBadge_tsickle_Closure_declarations() {
    /** @type {?} */
    ElBadge.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElBadge.ctorParameters;
    /** @type {?} */
    ElBadge.propDecorators;
    /** @type {?} */
    ElBadge.prototype.model;
    /** @type {?} */
    ElBadge.prototype.max;
    /** @type {?} */
    ElBadge.prototype.hidden;
    /** @type {?} */
    ElBadge.prototype.isDot;
}
//# sourceMappingURL=badge.js.map