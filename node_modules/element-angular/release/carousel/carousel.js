import { Component, ContentChildren, forwardRef, } from '@angular/core';
import { ElCarouselItem } from './carousel-item';
import { ElCarouselProps } from './carousel-props';
import { carouselBtnLeftAnimation, carouselBtnRightAnimation } from './animations';
export class ElCarousel extends ElCarouselProps {
    constructor() {
        super();
        this.subscriber = [];
        this.items = [];
        this.hasLabel = false;
    }
    /**
     * @param {?} nextValue
     * @param {?} eventType
     * @return {?}
     */
    btnActionHandle(nextValue, eventType) {
        if (this.trigger !== eventType)
            return;
        this.autoplay && this.resetInterval();
        this.setActiveItem(nextValue);
    }
    /**
     * @param {?} nextValue
     * @param {?} eventType
     * @return {?}
     */
    indicatorActionHandle(nextValue, eventType) {
        if (this.indicatorTrigger !== eventType)
            return;
        this.autoplay && this.resetInterval();
        this.setActiveItem(nextValue);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveItem(index) {
        const /** @type {?} */ len = this.children.length;
        const /** @type {?} */ nextValue = index >= len ? 0 : index < 0 ? len - 1 : index;
        this.model = nextValue;
        this.subscriber.forEach(func => func());
        this.modelChange.emit(this.model);
    }
    /**
     * @return {?}
     */
    resetInterval() {
        this.timer && clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.setActiveItem(this.model + 1);
        }, this.interval);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ timer = setTimeout(() => {
            this.children.forEach((item, index) => {
                item.index = index;
                item.updateActive();
                item.updateStyles();
            });
            // all labels are validated
            this.hasLabel = !this.items.some(item => !item);
            // auto play
            this.autoplay && this.resetInterval();
            clearTimeout(timer);
        }, 0);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        this.setActiveItem(changes.model.currentValue);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.timer && clearInterval(this.timer);
    }
}
ElCarousel.decorators = [
    { type: Component, args: [{
                selector: 'el-carousel',
                animations: [carouselBtnLeftAnimation, carouselBtnRightAnimation],
                template: `
    <div class="el-carousel"
      #carousel
      [class.el-carousel--card]="type === 'card'"
      (mouseenter)="carousel.hover = true"
      (mouseleave)="carousel.hover = false">
      <div class="el-carousel__container" [ngStyle]="{height: height}">
        <button class="el-carousel__arrow el-carousel__arrow--left"
          #leftBtn
          *ngIf="arrow !== 'never'"
          [@carouselBtnLeftAnimation]="arrow === 'always' || carousel.hover"
          (mouseenter)="btnActionHandle(model - 1,'hover')"
          (click)="btnActionHandle(model - 1, 'click')">
          <i class="el-icon-arrow-left"></i>
        </button>
        <button class="el-carousel__arrow el-carousel__arrow--right"
          #rightBtn
          *ngIf="arrow !== 'never'"
          [@carouselBtnRightAnimation]="arrow === 'always' || carousel.hover"
          (mouseenter)="btnActionHandle(model + 1, 'hover')"
          (click)="btnActionHandle(model + 1, 'click')">
          <i class="el-icon-arrow-right"></i>
        </button>
        <ng-content></ng-content>
      </div>
      <ul class="el-carousel__indicators" *ngIf="indicatorPosition !== 'none'"
        [class.el-carousel__indicators--labels]="hasLabel"
        [class.el-carousel__indicators--outside]="indicatorPosition === 'outside' || type === 'card'">
        <li *ngFor="let item of items; let i = index"
          class="el-carousel__indicator"
          [class.is-active]="i === model"
          (mouseenter)="indicatorActionHandle(i, 'hover')"
          (click)="indicatorActionHandle(i, 'click')">
          <button class="el-carousel__button">
            <span *ngIf="hasLabel">{{item}}</span>
          </button>
        </li>
      </ul>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElCarousel.ctorParameters = () => [];
ElCarousel.propDecorators = {
    'children': [{ type: ContentChildren, args: [forwardRef(() => ElCarouselItem),] },],
};
function ElCarousel_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCarousel.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCarousel.ctorParameters;
    /** @type {?} */
    ElCarousel.propDecorators;
    /** @type {?} */
    ElCarousel.prototype.children;
    /** @type {?} */
    ElCarousel.prototype.subscriber;
    /** @type {?} */
    ElCarousel.prototype.items;
    /** @type {?} */
    ElCarousel.prototype.hasLabel;
    /** @type {?} */
    ElCarousel.prototype.timer;
}
//# sourceMappingURL=carousel.js.map