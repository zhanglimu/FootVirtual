import { Component, Input, Optional, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { removeNgTag } from '../shared/utils/index';
import { ElSteps } from './steps';
export class ElStep {
    /**
     * @param {?} root
     * @param {?} el
     * @param {?} sanitizer
     */
    constructor(root, el, sanitizer) {
        this.root = root;
        this.el = el;
        this.sanitizer = sanitizer;
        this.index = 1;
        this.mainOffset = '0px';
    }
    /**
     * @return {?}
     */
    currentStatus() {
        if (this.root.active > this.index) {
            return this.root.finishStatus;
        }
        if (this.root.active === this.index) {
            return this.root.processStatus;
        }
        return 'wait';
    }
    /**
     * @return {?}
     */
    makeStepStyles() {
        const /** @type {?} */ space = this.root.space;
        const /** @type {?} */ width = typeof space === 'number' ? `${space}px` : space
            ? String(space) : `${100 / (this.root.stepsLength - 1)}%`;
        const /** @type {?} */ lastStyles = this.isLast()
            ? `max-width: ${100 / this.root.stepsLength}%;`
            : `margin-right: ${this.root.offset}px;`;
        const /** @type {?} */ styles = `flex-basis: ${width}; ${lastStyles}`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /**
     * @return {?}
     */
    makeLineStyles() {
        const /** @type {?} */ step = this.index === this.root.active - 1
            ? (this.currentStatus() !== 'error' ? 50 : 0)
            : this.currentStatus() === 'wait' ? 0 : 100;
        const /** @type {?} */ delay = (this.root.processStatus === 'wait' ? -1 : 1) * 150 * this.index + 'ms';
        const /** @type {?} */ key = this.root.direction === 'vertical' ? 'height' : 'width';
        const /** @type {?} */ styles = `border-width: ${step ? '1px' : 0}; ${key}: ${step}%; transition-delay: ${delay};`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /**
     * @return {?}
     */
    isLast() {
        return this.root.stepsLength - 1 === this.index;
    }
    /**
     * @return {?}
     */
    isVertical() {
        return this.root.direction === 'vertical';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.index = +this.el.nativeElement.getAttribute('el-index');
        if (this.root.direction === 'horizontal' && this.root.alignCenter) {
            const /** @type {?} */ width = this.titleRef.nativeElement.getBoundingClientRect().width;
            this.mainOffset = width / 2 + 16 + 'px';
        }
        removeNgTag(this.el.nativeElement);
    }
}
ElStep.decorators = [
    { type: Component, args: [{
                selector: 'el-step',
                template: `
    <div [class]="'el-step ' + (!root.simple ? 'is-' + root.direction : '')"
      [class.is-simple]="root.simple"
      [class.is-center]="root.alignCenter && !root.simple && !isVertical()"
      [class.is-flex]="isLast() && !root.alignCenter && !root.simple"
      [style]="makeStepStyles()">
      <div [class]="'el-step__head is-' + currentStatus()">
        <div class="el-step__line" [ngStyle]="{
          'margin-right': isLast() ? '' : root.offset + 'px',
          'display': isLast() ? 'none' : 'block'}">
          <i class="el-step__line-inner" [style]="makeLineStyles()"></i>
        </div>

        <span [class]="'el-step__icon ' + (icon ? 'is-icon' : 'is-text')">
          <ng-container *ngIf="currentStatus() !== 'success' && currentStatus() !== 'error'">
            <i *ngIf="icon" [class]="'el-step__icon-inner el-icon-' + icon"></i>
            <div *ngIf="!icon && !root.simple" class="el-step__icon-inner" >{{ index + 1 }}</div>
          </ng-container>
          <i *ngIf="currentStatus() === 'success' || currentStatus() === 'error'"
            [class]="'el-icon-' + (currentStatus() === 'success' ? 'check' : 'close') + ' el-step__icon-inner is-status'">
          </i>
        </span>
      </div>
      <div class="el-step__main">
        <div [class]="'el-step__title ' + 'is-' + currentStatus()" #titleRef>
          <ng-container>{{ title }}</ng-container>
        </div>
        <div *ngIf="root.simple" class="el-step__arrow"></div>
        <div [class]="'el-step__description ' + 'is-' + currentStatus()">
          <ng-container>{{ description }}</ng-container>
        </div>
      </div>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElStep.ctorParameters = () => [
    { type: ElSteps, decorators: [{ type: Optional },] },
    { type: ElementRef, },
    { type: DomSanitizer, },
];
ElStep.propDecorators = {
    'titleRef': [{ type: ViewChild, args: ['titleRef',] },],
    'title': [{ type: Input },],
    'description': [{ type: Input },],
    'icon': [{ type: Input },],
    'status': [{ type: Input },],
};
function ElStep_tsickle_Closure_declarations() {
    /** @type {?} */
    ElStep.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElStep.ctorParameters;
    /** @type {?} */
    ElStep.propDecorators;
    /** @type {?} */
    ElStep.prototype.titleRef;
    /** @type {?} */
    ElStep.prototype.title;
    /** @type {?} */
    ElStep.prototype.description;
    /** @type {?} */
    ElStep.prototype.icon;
    /** @type {?} */
    ElStep.prototype.status;
    /** @type {?} */
    ElStep.prototype.index;
    /** @type {?} */
    ElStep.prototype.mainOffset;
    /** @type {?} */
    ElStep.prototype.root;
    /** @type {?} */
    ElStep.prototype.el;
    /** @type {?} */
    ElStep.prototype.sanitizer;
}
//# sourceMappingURL=step.js.map