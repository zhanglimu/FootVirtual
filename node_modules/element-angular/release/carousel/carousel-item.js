import { Component, ElementRef, forwardRef, Inject, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ElCarousel } from './carousel';
import { fadeAnimation } from '../shared/animation/index';
import { removeNgTag } from '../shared/utils/index';
export class ElCarouselItem {
    /**
     * @param {?} root
     * @param {?} sanitizer
     * @param {?} el
     */
    constructor(root, sanitizer, el) {
        this.root = root;
        this.sanitizer = sanitizer;
        this.el = el;
        this.label = '';
        this.isActive = false;
    }
    /**
     * @return {?}
     */
    updateActive() {
        const /** @type {?} */ isActive = this.root.model === this.index;
        if (this.isActive !== isActive) {
            this.isActive = isActive;
        }
    }
    /**
     * @return {?}
     */
    updateStyles() {
        const /** @type {?} */ map = {
            '1': 0 - this.width,
            '-1': this.width,
            '2': this.width,
            '-2': 0 - this.width,
            '0': 0,
        };
        const /** @type {?} */ offset = this.root.model - this.index;
        const /** @type {?} */ translate = map[offset];
        const /** @type {?} */ styles = `transform: translateX(${translate}px);`;
        // change direction disable animation
        const /** @type {?} */ changeDirection = (this.preTranslate < 0 && translate > 0)
            || (this.preTranslate > 0 && translate < 0);
        this.isAnimating = !changeDirection;
        this.styles = this.sanitizer.bypassSecurityTrustStyle(styles);
        // save current value
        this.preTranslate = translate;
    }
    /**
     * @return {?}
     */
    update() {
        this.updateStyles();
        this.updateActive();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // collect items
        this.root.items.push(this.label);
        this.width = this.el.nativeElement.children[0].offsetWidth;
        removeNgTag(this.el.nativeElement);
        // manually update
        this.root.subscriber.push(() => this.update());
        this.update();
    }
}
ElCarouselItem.decorators = [
    { type: Component, args: [{
                selector: 'el-carousel-item',
                animations: [fadeAnimation],
                template: `
    <div class="el-carousel__item"
      [class.is-active]="isActive"
      [class.el-carousel__item--card]="root.type === 'card'"
      [class.is-animating]="isAnimating"
      [style]="styles">
      <!--<div class="el-carousel__mask" *ngIf="root.type === 'card'"-->
        <!--[@fadeAnimation]="isActive()">-->
      <!--</div>-->
      <ng-content></ng-content>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElCarouselItem.ctorParameters = () => [
    { type: ElCarousel, decorators: [{ type: Inject, args: [forwardRef(() => ElCarousel),] },] },
    { type: DomSanitizer, },
    { type: ElementRef, },
];
ElCarouselItem.propDecorators = {
    'index': [{ type: Input },],
    'label': [{ type: Input },],
};
function ElCarouselItem_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCarouselItem.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCarouselItem.ctorParameters;
    /** @type {?} */
    ElCarouselItem.propDecorators;
    /** @type {?} */
    ElCarouselItem.prototype.index;
    /** @type {?} */
    ElCarouselItem.prototype.label;
    /** @type {?} */
    ElCarouselItem.prototype.width;
    /** @type {?} */
    ElCarouselItem.prototype.preTranslate;
    /** @type {?} */
    ElCarouselItem.prototype.isAnimating;
    /** @type {?} */
    ElCarouselItem.prototype.isActive;
    /** @type {?} */
    ElCarouselItem.prototype.styles;
    /** @type {?} */
    ElCarouselItem.prototype.root;
    /** @type {?} */
    ElCarouselItem.prototype.sanitizer;
    /** @type {?} */
    ElCarouselItem.prototype.el;
}
//# sourceMappingURL=carousel-item.js.map