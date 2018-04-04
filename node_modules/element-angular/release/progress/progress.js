import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class Elprogress {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.percentage = 0;
        this.type = 'line';
        this.strokeWidth = 6;
        this.textInside = false;
        this.showText = true;
        // only in type=circle
        this.width = 126;
    }
    /**
     * @return {?}
     */
    progressTextSize() {
        return this.type === 'line' ? 12 + this.strokeWidth * 0.4
            : this.width * 0.111111 + 2;
    }
    /**
     * @return {?}
     */
    makeIconClass() {
        if (this.type === 'line') {
            return this.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-cross';
        }
        return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
    }
    /**
     * @return {?}
     */
    makeStroke() {
        if (this.status === 'success')
            return '#13ce66';
        if (this.status === 'exception')
            return '#ff4949';
        return '#20a0ff';
    }
    /**
     * @return {?}
     */
    makeTrackPath() {
        const /** @type {?} */ radius = ~~(50 - Number.parseFloat(this.relativeStrokeWidth) / 2);
        return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
    }
    /**
     * @return {?}
     */
    svgStyles() {
        const /** @type {?} */ perimeter = (50 - parseFloat(this.relativeStrokeWidth) / 2) * 2 * Math.PI;
        let /** @type {?} */ styles = `stroke-dasharray: ${perimeter}px, ${perimeter}px;`;
        styles += `stroke-dashoffset: ${(1 - this.percentage / 100) * perimeter}px;`;
        styles += 'transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease';
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /**
     * @return {?}
     */
    colorStryles() {
        const /** @type {?} */ styles = `width: ${this.percentage}%;` +
            (this.activeColor ? `background-color: ${this.activeColor};` : '');
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.percentage > 100 && (this.percentage = 100);
        this.relativeStrokeWidth = (this.strokeWidth / this.width * 100).toFixed(1);
    }
}
Elprogress.decorators = [
    { type: Component, args: [{
                selector: 'el-progress',
                template: `
    <div [class]="'el-progress el-progress--' + type + (status ? ' is-' + status : '')"
      [class.el-progress--without-text]="!showText"
      [class.el-progress--text-inside]="textInside">
      <div class="el-progress-bar" *ngIf="type === 'line'">
        <div class="el-progress-bar__outer" [ngStyle]="{height: strokeWidth + 'px'}">
          <div class="el-progress-bar__inner" [style]="colorStryles()">
            <div class="el-progress-bar__innerText" *ngIf="showText && textInside">{{percentage}}%</div>
          </div>
        </div>
      </div>
      <div class="el-progress-circle" *ngIf="type === 'circle'" [ngStyle]="{height: width + 'px', width: width + 'px'}">
        <svg viewBox="0 0 100 100">
          <path class="el-progress-circle__track" [attr.d]="makeTrackPath()" stroke="#e5e9f2"
            [attr.stroke-width]="relativeStrokeWidth" fill="none"></path>
          <path class="el-progress-circle__path" [attr.d]="makeTrackPath()" stroke-linecap="round" [attr.stroke]="makeStroke()"
            [attr.stroke-width]="relativeStrokeWidth" fill="none" [style]="svgStyles()"></path>
        </svg>
      </div>
      <div class="el-progress__text" *ngIf="showText && !textInside"
           [ngStyle]="{fontSize: progressTextSize + 'px'}">
        <ng-container *ngIf="!status">{{percentage}}%</ng-container>
        <i *ngIf="status" [class]="makeIconClass()"></i>
      </div>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
Elprogress.ctorParameters = () => [
    { type: DomSanitizer, },
];
Elprogress.propDecorators = {
    'percentage': [{ type: Input },],
    'type': [{ type: Input },],
    'status': [{ type: Input },],
    'strokeWidth': [{ type: Input, args: ['stroke-width',] },],
    'textInside': [{ type: Input, args: ['text-inside',] },],
    'showText': [{ type: Input, args: ['show-text',] },],
    'width': [{ type: Input },],
    'activeColor': [{ type: Input, args: ['active-color',] },],
};
function Elprogress_tsickle_Closure_declarations() {
    /** @type {?} */
    Elprogress.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    Elprogress.ctorParameters;
    /** @type {?} */
    Elprogress.propDecorators;
    /** @type {?} */
    Elprogress.prototype.percentage;
    /** @type {?} */
    Elprogress.prototype.type;
    /** @type {?} */
    Elprogress.prototype.status;
    /** @type {?} */
    Elprogress.prototype.strokeWidth;
    /** @type {?} */
    Elprogress.prototype.textInside;
    /** @type {?} */
    Elprogress.prototype.showText;
    /** @type {?} */
    Elprogress.prototype.width;
    /** @type {?} */
    Elprogress.prototype.activeColor;
    /** @type {?} */
    Elprogress.prototype.relativeStrokeWidth;
    /** @type {?} */
    Elprogress.prototype.sanitizer;
}
//# sourceMappingURL=progress.js.map