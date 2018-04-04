import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, ContentChild, } from '@angular/core';
import { fadeAnimation } from './animation';
export const /** @type {?} */ ICON_CLASS_MAP = {
    'success': 'el-icon-success',
    'warning': 'el-icon-warning',
    'error': 'el-icon-error',
    'info': 'el-icon-info',
};
export class ElAlert {
    constructor() {
        this.type = 'info';
        this.center = false;
        this.closable = true;
        this.closeText = '';
        this.showIcon = false;
        this.close = new EventEmitter();
        this.visible = true;
    }
    /**
     * @return {?}
     */
    makeIconClass() {
        const /** @type {?} */ base = ICON_CLASS_MAP[this.type] || 'el-icon-info';
        const /** @type {?} */ isBig = this.description || this.descriptionTmp ? ' is-big' : '';
        return base + isBig;
    }
    /**
     * @return {?}
     */
    makeTitleClass() {
        return this.description || this.descriptionTmp ? ' is-bold' : '';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickHandle(event) {
        this.visible = false;
        this.close.emit(event);
    }
}
ElAlert.decorators = [
    { type: Component, args: [{
                selector: 'el-alert',
                animations: [fadeAnimation],
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div [class]="'el-alert el-alert--' + type" [@fadeAnimation]="!visible"
      [class.is-center]="center" role="alert">
      <i [class]="'el-alert__icon ' + makeIconClass()" *ngIf="showIcon"></i>
      <div class="el-alert__content">
        <span [class]="'el-alert__title ' + makeTitleClass()">
          <ng-content></ng-content>
        </span>
        <p class="el-alert__description" *ngIf="description && !descriptionTmp">{{description}}</p>
        <p class="el-alert__description" *ngIf="descriptionTmp"><ng-template [ngTemplateOutlet]="descriptionTmp"></ng-template></p>
        <i class="el-alert__closebtn"
          *ngIf="closable"
          [class.is-customed]="closeText !== ''"
          [class.el-icon-close]="closeText === ''"
          (click)="clickHandle($event)">
          {{closeText}}
        </i>
      </div>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElAlert.ctorParameters = () => [];
ElAlert.propDecorators = {
    'descriptionTmp': [{ type: ContentChild, args: ['description',] },],
    'type': [{ type: Input },],
    'center': [{ type: Input },],
    'description': [{ type: Input },],
    'closable': [{ type: Input },],
    'closeText': [{ type: Input, args: ['close-text',] },],
    'showIcon': [{ type: Input, args: ['show-icon',] },],
    'close': [{ type: Output },],
};
function ElAlert_tsickle_Closure_declarations() {
    /** @type {?} */
    ElAlert.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElAlert.ctorParameters;
    /** @type {?} */
    ElAlert.propDecorators;
    /** @type {?} */
    ElAlert.prototype.descriptionTmp;
    /** @type {?} */
    ElAlert.prototype.type;
    /** @type {?} */
    ElAlert.prototype.center;
    /** @type {?} */
    ElAlert.prototype.description;
    /** @type {?} */
    ElAlert.prototype.closable;
    /** @type {?} */
    ElAlert.prototype.closeText;
    /** @type {?} */
    ElAlert.prototype.showIcon;
    /** @type {?} */
    ElAlert.prototype.close;
    /** @type {?} */
    ElAlert.prototype.visible;
}
//# sourceMappingURL=alert.js.map