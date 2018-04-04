import { Component, ElementRef } from '@angular/core';
import { notifyAnimation } from '../shared/animation/index';
export const /** @type {?} */ typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
};
export class ElNotificationContainer {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.height = 0;
        // user setting
        this.offset = 15;
        this.type = '';
        this.duration = 3000;
        this.iconClass = '';
        this.customClass = '';
        this.zIndex = 1000;
        this.position = 'top-right';
        this.title = '';
        this.message = '';
        this.showBox = false;
        this.horizontalDirection = 'right';
        this.onClose = () => { };
        this.onDestroy = () => { };
    }
    /**
     * @return {?}
     */
    makeClass() {
        return typeMap[this.type] ? `el-icon-${typeMap[this.type]}` : '';
    }
    /**
     * @param {?} message
     * @param {?=} title
     * @return {?}
     */
    setContent(message, title = '') {
        this.message = message;
        this.title = title;
        setTimeout(() => {
            this.height = this.el.nativeElement.children[0].offsetHeight;
        }, 0);
    }
    /**
     * @return {?}
     */
    show() {
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.horizontalDirection = this.position.includes('right') ? 'right' : 'left';
    }
}
ElNotificationContainer.decorators = [
    { type: Component, args: [{
                selector: 'el-notification-container',
                template: `
    <div [class]="'el-notification ' + horizontalDirection + ' ' + customClass"
      [@notifyAnimation]="showBox"
      [ngStyle]="{top: (offset ? offset + 'px' : 'auto'), 'z-index': zIndex}"
      style="visibility: hidden;"
      (mouseenter)="clearTimer()" (mouseleave)="startTimer()">
      <i [class]="'el-notification__icon ' + makeClass() + ' ' + iconClass"
        *ngIf="type || iconClass"></i>
      <div class="el-notification__group" [class.is-with-icon]="makeClass() || iconClass">
        <h2 class="el-notification__title" *ngIf="title">{{title}}</h2>
        <div class="el-notification__content"><p>{{message}}</p></div>
        <div class="el-notification__closeBtn el-icon-close" (click)="close()"></div>
      </div>
    </div>
  `,
                animations: [notifyAnimation]
            },] },
];
/**
 * @nocollapse
 */
ElNotificationContainer.ctorParameters = () => [
    { type: ElementRef, },
];
function ElNotificationContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    ElNotificationContainer.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElNotificationContainer.ctorParameters;
    /** @type {?} */
    ElNotificationContainer.prototype.id;
    /** @type {?} */
    ElNotificationContainer.prototype.height;
    /** @type {?} */
    ElNotificationContainer.prototype.offset;
    /** @type {?} */
    ElNotificationContainer.prototype.type;
    /** @type {?} */
    ElNotificationContainer.prototype.duration;
    /** @type {?} */
    ElNotificationContainer.prototype.iconClass;
    /** @type {?} */
    ElNotificationContainer.prototype.customClass;
    /** @type {?} */
    ElNotificationContainer.prototype.zIndex;
    /** @type {?} */
    ElNotificationContainer.prototype.position;
    /** @type {?} */
    ElNotificationContainer.prototype.title;
    /** @type {?} */
    ElNotificationContainer.prototype.message;
    /** @type {?} */
    ElNotificationContainer.prototype.showBox;
    /** @type {?} */
    ElNotificationContainer.prototype.timer;
    /** @type {?} */
    ElNotificationContainer.prototype.horizontalDirection;
    /** @type {?} */
    ElNotificationContainer.prototype.onClose;
    /** @type {?} */
    ElNotificationContainer.prototype.onDestroy;
    /** @type {?} */
    ElNotificationContainer.prototype.el;
}
//# sourceMappingURL=notification.js.map