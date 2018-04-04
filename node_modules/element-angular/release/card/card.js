import { Component, Input, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class ElCard {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.bodyStyle = '';
    }
    /**
     * @return {?}
     */
    makeSafebodyStyle() {
        return this.sanitizer.bypassSecurityTrustStyle(this.bodyStyle);
    }
}
ElCard.decorators = [
    { type: Component, args: [{
                selector: 'el-card',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div class="el-card">
      <div class="el-card__header" *ngIf="header || headerStr">
        <ng-container *ngIf="header">
          <ng-template [ngTemplateOutlet]="header">
          </ng-template>
        </ng-container>
        <ng-container *ngIf="!header">
          {{headerStr}}
        </ng-container>
      </div>
      <div class="el-card__body" [style]="makeSafebodyStyle()">
        <ng-content></ng-content>
      </div>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElCard.ctorParameters = () => [
    { type: DomSanitizer, },
];
ElCard.propDecorators = {
    'header': [{ type: ContentChild, args: ['header',] },],
    'headerStr': [{ type: Input, args: ['header',] },],
    'bodyStyle': [{ type: Input, args: ['body-style',] },],
};
function ElCard_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCard.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCard.ctorParameters;
    /** @type {?} */
    ElCard.propDecorators;
    /** @type {?} */
    ElCard.prototype.header;
    /** @type {?} */
    ElCard.prototype.headerStr;
    /** @type {?} */
    ElCard.prototype.bodyStyle;
    /** @type {?} */
    ElCard.prototype.sanitizer;
}
//# sourceMappingURL=card.js.map