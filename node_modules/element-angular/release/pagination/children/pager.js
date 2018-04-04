import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { removeNgTag } from '../../shared/utils/index';
export class ElPaginationPager {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.current = 1;
        this.next = new EventEmitter();
        this.showPrevMore = false;
        this.showNextMore = false;
        this.quicknextIconClass = 'el-icon-more';
        this.quickprevIconClass = 'el-icon-more';
    }
    /**
     * @param {?} minValue
     * @return {?}
     */
    static pagerGenerator(minValue) {
        const /** @type {?} */ target = new Array(5).fill('').map((v, i) => i + minValue);
        return target;
    }
    /**
     * Always show 5 numbers, excluding head and foot
     * like: 1 ... < 5, 6, 7, 8, 9 > ... 100
     *
     * jump page button is [showPrevMore] and [showNextMore]
     *
     * @param {?} current
     * @param {?} count
     * @return {?} number[], like: [2, 3, 4, 5, 6]
     *
     */
    makePagers(current, count) {
        const /** @type {?} */ pagerCount = 7;
        if (count < pagerCount) {
            this.setMoreBtn(false, false);
            const /** @type {?} */ target = ElPaginationPager.pagerGenerator(2);
            target.length = count - 2 >= 0 ? count - 2 : 0;
            return target;
        }
        const /** @type {?} */ max = current + 2;
        const /** @type {?} */ min = current - 2;
        if (max >= count) {
            this.setMoreBtn(true, false);
            return ElPaginationPager.pagerGenerator(count - 5);
        }
        if (min <= 2) {
            this.setMoreBtn(false, true);
            return ElPaginationPager.pagerGenerator(2);
        }
        this.setMoreBtn(true, true);
        return ElPaginationPager.pagerGenerator(min);
    }
    /**
     * @param {?} prev
     * @param {?} next
     * @return {?}
     */
    setMoreBtn(prev, next) {
        this.showPrevMore = prev;
        this.showNextMore = next;
    }
    /**
     * @param {?} to
     * @return {?}
     */
    clickHandle(to) {
        const /** @type {?} */ step = to - this.current;
        this.next.emit(step);
    }
    /**
     * @param {?} step
     * @return {?}
     */
    jumpHandle(step) {
        this.next.emit(step);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.pagers = this.makePagers(this.current, this.count);
        removeNgTag(this.el.nativeElement);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!changes)
            return;
        this.pagers = this.makePagers(this.current, this.count);
    }
}
ElPaginationPager.decorators = [
    { type: Component, args: [{
                selector: 'el-pagination-pager',
                template: `
    <ul class="el-pager">
      <li class="number" [class.active]="current === 1"
        (click)="clickHandle(1)"
        *ngIf="count > 0">1</li>
      <li *ngIf="showPrevMore"
        [class]="'el-icon more btn-quickprev ' + quickprevIconClass"
        (click)="jumpHandle(-5)"
        (mouseenter)="quickprevIconClass = 'el-icon-d-arrow-left'"
        (mouseleave)="quickprevIconClass = 'el-icon-more'"></li>
      <li class="number"
        *ngFor="let pager of pagers"
        (click)="clickHandle(pager)"
        [class.active]="current === pager">{{ pager }}</li>
      <li [class]="'el-icon more btn-quicknext ' + quicknextIconClass"
        *ngIf="showNextMore"
        (click)="jumpHandle(5)"
        (mouseenter)="quicknextIconClass = 'el-icon-d-arrow-right'"
        (mouseleave)="quicknextIconClass = 'el-icon-more'"></li>
      <li class="number"
        [class.active]="current === count"
        (click)="clickHandle(count)"
        *ngIf="count > 1">{{ count }}</li>
    </ul>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElPaginationPager.ctorParameters = () => [
    { type: ElementRef, },
];
ElPaginationPager.propDecorators = {
    'current': [{ type: Input },],
    'count': [{ type: Input },],
    'next': [{ type: Output },],
};
function ElPaginationPager_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPaginationPager.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElPaginationPager.ctorParameters;
    /** @type {?} */
    ElPaginationPager.propDecorators;
    /** @type {?} */
    ElPaginationPager.prototype.current;
    /** @type {?} */
    ElPaginationPager.prototype.count;
    /** @type {?} */
    ElPaginationPager.prototype.next;
    /** @type {?} */
    ElPaginationPager.prototype.pagers;
    /** @type {?} */
    ElPaginationPager.prototype.showPrevMore;
    /** @type {?} */
    ElPaginationPager.prototype.showNextMore;
    /** @type {?} */
    ElPaginationPager.prototype.quicknextIconClass;
    /** @type {?} */
    ElPaginationPager.prototype.quickprevIconClass;
    /** @type {?} */
    ElPaginationPager.prototype.el;
}
//# sourceMappingURL=pager.js.map