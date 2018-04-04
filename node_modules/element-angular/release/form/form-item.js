import { Component, Input, Optional } from '@angular/core';
import { ElForm } from './form';
import { DomSanitizer } from '@angular/platform-browser';
export class ElFormItem {
    /**
     * @param {?} root
     * @param {?} sanitizer
     */
    constructor(root, sanitizer) {
        this.root = root;
        this.sanitizer = sanitizer;
        this.required = false;
        this.showMessage = true;
        this.statusSubscriber = [];
    }
    /**
     * @return {?}
     */
    showMessageEl() {
        if (this.status !== 'error')
            return false;
        return this.error && this.showMessage && this.root.showMessage;
    }
    /**
     * @return {?}
     */
    isInlineMessage() {
        const /** @type {?} */ notDefault = typeof this.inlineMessage === 'boolean';
        return notDefault ? this.inlineMessage : this.root.inlineMessage;
    }
    /**
     * @return {?}
     */
    makeSize() {
        const /** @type {?} */ appointed = this.size || this.root.size || '';
        return appointed ? ` el-form-item--${appointed} ` : '';
    }
    /**
     * @return {?}
     */
    makeLabelStyle() {
        const /** @type {?} */ width = this.labelWidth || this.root.labelWidth || null;
        const /** @type {?} */ styles = width && this.root.labelPosition !== 'top' ? `width: ${width};` : '';
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /**
     * @return {?}
     */
    makeContentStyle() {
        const /** @type {?} */ skipStyle = (this.root.labelPosition === 'top' || this.root.inline)
            || (!this.label && !this.root.labelWidth);
        if (skipStyle)
            return this.sanitizer.bypassSecurityTrustStyle('');
        const /** @type {?} */ width = this.labelWidth || this.root.labelWidth;
        const /** @type {?} */ styles = `margin-left: ${width};`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.root.showIcon)
            return;
        if (!changes || !changes.status)
            return;
        this.statusSubscriber.forEach(sub => {
            sub(changes.status.currentValue);
        });
    }
}
ElFormItem.decorators = [
    { type: Component, args: [{
                selector: 'el-form-item',
                template: `
  <div [class]="'el-form-item ' + makeSize()"
    [class.el-form-item--feedback]="root.showIcon"
    [class.is-error]="status === 'error'"
    [class.is-success]="status === 'success'"
    [class.is-validating]="status === 'validating'"
    [class.is-required]="required">
    <label class="el-form-item__label" [style]="makeLabelStyle()" *ngIf="label">
      {{label}}
    </label>
    <div class="el-form-item__content" [style]="makeContentStyle()">
      <ng-content></ng-content>
      <div *ngIf="showMessageEl" class="el-form-item__error"
        [class.el-form-item__error--inline]="isInlineMessage()">
          {{error}}
        </div>
    </div>
  </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElFormItem.ctorParameters = () => [
    { type: ElForm, decorators: [{ type: Optional },] },
    { type: DomSanitizer, },
];
ElFormItem.propDecorators = {
    'status': [{ type: Input },],
    'error': [{ type: Input },],
    'label': [{ type: Input },],
    'size': [{ type: Input },],
    'required': [{ type: Input },],
    'labelWidth': [{ type: Input, args: ['label-width',] },],
    'showMessage': [{ type: Input, args: ['show-message',] },],
    'inlineMessage': [{ type: Input, args: ['inline-message',] },],
};
function ElFormItem_tsickle_Closure_declarations() {
    /** @type {?} */
    ElFormItem.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElFormItem.ctorParameters;
    /** @type {?} */
    ElFormItem.propDecorators;
    /** @type {?} */
    ElFormItem.prototype.status;
    /** @type {?} */
    ElFormItem.prototype.error;
    /** @type {?} */
    ElFormItem.prototype.label;
    /** @type {?} */
    ElFormItem.prototype.size;
    /** @type {?} */
    ElFormItem.prototype.required;
    /** @type {?} */
    ElFormItem.prototype.labelWidth;
    /** @type {?} */
    ElFormItem.prototype.showMessage;
    /** @type {?} */
    ElFormItem.prototype.inlineMessage;
    /** @type {?} */
    ElFormItem.prototype.statusSubscriber;
    /** @type {?} */
    ElFormItem.prototype.root;
    /** @type {?} */
    ElFormItem.prototype.sanitizer;
}
//# sourceMappingURL=form-item.js.map