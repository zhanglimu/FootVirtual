import { Component, ContentChild, Input, Renderer2, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentWrapper, WindowWrapper } from '../shared/services/index';
import { ElDialogProps } from './dialog.props';
import { dialogFadeAnimation } from '../shared/animation/index';
export class ElDialog extends ElDialogProps {
    /**
     * @param {?} sanitizer
     * @param {?} renderer
     * @param {?} window
     * @param {?} document
     */
    constructor(sanitizer, renderer, window, document) {
        super();
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this.window = window;
        this.document = document;
    }
    /**
     * @return {?}
     */
    makeDialogStyles() {
        const /** @type {?} */ width = this.width ? `width: ${this.width};` : '';
        const /** @type {?} */ styles = `top: ${this.top};${width}`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /**
     * @return {?}
     */
    closeHandler() {
        this.beforeClose(() => {
            this.visible = false;
            this.visibleChange.emit(this.visible);
            this.updateWithVisibleChange();
        });
    }
    /**
     * @return {?}
     */
    wrapperClickHandle() {
        // close dialog
        if (this.closeOnClickModal) {
            this.closeHandler();
        }
    }
    /**
     * @return {?}
     */
    updateWithVisibleChange() {
        // update modal
        if (this.cacheModalElement) {
            // this.cacheModalElement.innerHTML = this.makeModalTmp(this.visible)
            this.renderer.setStyle(this.cacheModalElement, 'display', this.visible ? 'block' : 'none');
        }
        // lock body scroll
        if (this.lockScroll) {
            const /** @type {?} */ nextValue = this.visible ? 'hidden' : this.cacheOverflow;
            this.renderer.setStyle(this.document.body, 'overflow', nextValue);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // save old overflow
        if (this.lockScroll) {
            this.cacheOverflow = this.window.getComputedStyle(this.document.body).overflow;
        }
        this.cacheModalElement = this.renderer.createElement('div');
        this.renderer.setAttribute(this.cacheModalElement, 'class', 'v-modal');
        this.renderer.setStyle(this.cacheModalElement, 'z-index', this.modalZindex);
        this.renderer.setStyle(this.cacheModalElement, 'display', this.visible ? 'block' : 'none');
        this.document.body.appendChild(this.cacheModalElement);
        // listen esc
        if (this.closeOnPressEscape) {
            this.globalListenFunc = this.renderer.listen('document', 'keydown', (event) => {
                this.visible && event.keyCode === 27 && this.closeHandler();
            });
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // not include model
        if (!changes || !changes.visible)
            return;
        this.visible = changes.visible.currentValue;
        this.updateWithVisibleChange();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.globalListenFunc && this.globalListenFunc();
        this.cacheModalElement.parentElement.removeChild(this.cacheModalElement);
        this.renderer.setStyle(this.document.body, 'overflow', this.cacheOverflow);
    }
}
ElDialog.decorators = [
    { type: Component, args: [{
                selector: 'el-dialog',
                animations: [dialogFadeAnimation],
                template: `
    <div class="el-dialog__wrapper" [@dialogFadeAnimation]="visible"
      [ngStyle]="{ 'z-index': dialogZindex }"
      (click)="wrapperClickHandle()">
      <div [class]="'el-dialog ' + customClass"
        [class.el-dialog--center]="center"
        [style]="makeDialogStyles()"
        (click)="$event.stopPropagation()">
        <div class="el-dialog__header">
          <ng-container *ngIf="titleTmp">
            <ng-template [ngTemplateOutlet]="titleTmp"></ng-template>
          </ng-container>
          <span class="el-dialog__title" *ngIf="!titleTmp">{{title}}</span>
          <button type="button" class="el-dialog__headerbtn"
            aria-label="Close"
            *ngIf="showClose"
            (click)="closeHandler()">
            <i class="el-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="el-dialog__body">
          <ng-content></ng-content>
        </div>
        <div class="el-dialog__footer">
          <ng-container *ngIf="footerTmp">
            <ng-template [ngTemplateOutlet]="footerTmp"></ng-template>
          </ng-container>
        </div>
      </div>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElDialog.ctorParameters = () => [
    { type: DomSanitizer, },
    { type: Renderer2, },
    { type: WindowWrapper, },
    { type: DocumentWrapper, },
];
ElDialog.propDecorators = {
    'titleTmp': [{ type: ContentChild, args: ['title',] },],
    'footerTmp': [{ type: ContentChild, args: ['footer',] },],
    'model': [{ type: Input },],
};
function ElDialog_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDialog.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDialog.ctorParameters;
    /** @type {?} */
    ElDialog.propDecorators;
    /** @type {?} */
    ElDialog.prototype.titleTmp;
    /** @type {?} */
    ElDialog.prototype.footerTmp;
    /** @type {?} */
    ElDialog.prototype.model;
    /** @type {?} */
    ElDialog.prototype.cacheOverflow;
    /** @type {?} */
    ElDialog.prototype.cacheModalElement;
    /** @type {?} */
    ElDialog.prototype.globalListenFunc;
    /** @type {?} */
    ElDialog.prototype.sanitizer;
    /** @type {?} */
    ElDialog.prototype.renderer;
    /** @type {?} */
    ElDialog.prototype.window;
    /** @type {?} */
    ElDialog.prototype.document;
}
//# sourceMappingURL=dialog.js.map