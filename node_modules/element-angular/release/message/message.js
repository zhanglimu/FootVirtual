import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as Icons from './images';
import { slideAnimation } from '../shared/animation/index';
export class ElMessageContainer {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.showClose = false;
        this.type = 'info';
        this.center = false;
        this.duration = 3000;
        // user setting
        this.iconClass = '';
        this.customClass = '';
        this.zIndex = 1000;
        this.message = '';
        this.showBox = false;
        this.onClose = () => { };
        this.onDestroy = () => { };
    }
    /**
     * @return {?}
     */
    makeTypeClass() {
        return this.type && !this.iconClass ? `el-message__icon el-icon-${this.type}` : '';
    }
    /**
     * @return {?}
     */
    makeLink() {
        return this.sanitizer.bypassSecurityTrustUrl(Icons[this.type]);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    show(message) {
        this.message = message;
        this.showBox = true;
        this.timer = setTimeout(() => {
            this.close();
        }, this.duration);
    }
    /**
     * @return {?}
     */
    close() {
        this.timer && clearTimeout(this.timer);
        this.showBox = false;
        this.onClose();
        this.onDestroy();
    }
    /**
     * @return {?}
     */
    startTimer() {
        if (!this.showBox)
            return;
        this.timer = setTimeout(() => {
            this.close();
        }, this.duration);
    }
    /**
     * @return {?}
     */
    clearTimer() {
        this.timer && clearTimeout(this.timer);
    }
}
ElMessageContainer.decorators = [
    { type: Component, args: [{
                selector: 'el-message-container',
                template: `
    <div [class]="'el-message ' + customClass + (type && !iconClass ? ' el-message--' + type : '')"
      [class.is-center]="center"
      style="visibility: hidden;" role="alertdialog"
      [ngStyle]="{ 'z-index': zIndex }"
      (mouseenter)="clearTimer()" (mouseleave)="startTimer()"
      [@slideAnimation]="showBox">
      <i [class]="iconClass" *ngIf="iconClass"></i>
      <i [class]="makeTypeClass()" *ngIf="!iconClass"></i>
      
      <p class="el-message__content" tabindex="0">{{ message }}</p>
      <div *ngIf="showClose" class="el-message__closeBtn el-icon-close" (click)="close()" role="button"></div>
    </div>
  `,
                animations: [slideAnimation]
            },] },
];
/**
 * @nocollapse
 */
ElMessageContainer.ctorParameters = () => [
    { type: DomSanitizer, },
];
function ElMessageContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMessageContainer.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMessageContainer.ctorParameters;
    /** @type {?} */
    ElMessageContainer.prototype.id;
    /** @type {?} */
    ElMessageContainer.prototype.showClose;
    /** @type {?} */
    ElMessageContainer.prototype.type;
    /** @type {?} */
    ElMessageContainer.prototype.center;
    /** @type {?} */
    ElMessageContainer.prototype.duration;
    /** @type {?} */
    ElMessageContainer.prototype.iconClass;
    /** @type {?} */
    ElMessageContainer.prototype.customClass;
    /** @type {?} */
    ElMessageContainer.prototype.zIndex;
    /** @type {?} */
    ElMessageContainer.prototype.message;
    /** @type {?} */
    ElMessageContainer.prototype.showBox;
    /** @type {?} */
    ElMessageContainer.prototype.timer;
    /** @type {?} */
    ElMessageContainer.prototype.onClose;
    /** @type {?} */
    ElMessageContainer.prototype.onDestroy;
    /** @type {?} */
    ElMessageContainer.prototype.sanitizer;
}
//# sourceMappingURL=message.js.map