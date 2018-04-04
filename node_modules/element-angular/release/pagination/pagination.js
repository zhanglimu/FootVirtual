import { Component } from '@angular/core';
import { ElPaginationProps } from './pagination.props';
export class ElPagination extends ElPaginationProps {
    constructor() {
        super();
        this.showPager = true;
        this.showPrev = true;
        this.showNext = true;
        this.showTotal = true;
        this.showSize = true;
        this.showJumper = true;
    }
    /**
     * @param {?} ElName
     * @param {?} layout
     * @return {?}
     */
    static showLayout(ElName, layout) {
        const /** @type {?} */ member = layout.find(name => name === ElName);
        return !!member;
    }
    /**
     * @param {?} step
     * @return {?}
     */
    nextHandle(step) {
        const /** @type {?} */ nextPage = this.model + step;
        this.model = nextPage < 1 ? 1 : nextPage > this.total ? this.total : nextPage;
        this.modelChange.emit(this.model);
    }
    /**
     * @param {?} nextPageSize
     * @return {?}
     */
    updatePageSize(nextPageSize) {
        this.pageCount = Math.ceil(this.total / nextPageSize);
        this.model = 1;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.pageCount && !this.total) {
            return console.warn('el-pagination required [total]');
        }
        if (!this.pageCount) {
            this.pageCount = Math.ceil(this.total / this.pageSize);
        }
        if (!this.total) {
            this.total = Math.round(this.pageCount * this.pageSize);
        }
        this.showPager = ElPagination.showLayout('pager', this.layout);
        this.showPrev = ElPagination.showLayout('prev', this.layout);
        this.showNext = ElPagination.showLayout('next', this.layout);
        this.showTotal = ElPagination.showLayout('total', this.layout);
        this.showSize = ElPagination.showLayout('size', this.layout);
        this.showJumper = ElPagination.showLayout('jumper', this.layout);
    }
}
ElPagination.decorators = [
    { type: Component, args: [{
                selector: 'el-pagination',
                template: `
    <div class="el-pagination"
      [class.el-pagination--small]="small"
      style="display: inline-table;">
      <span class="el-pagination__total" *ngIf="showTotal">共 {{total}} 条</span>
      <el-pagination-size *ngIf="showSize"
        [model]="pageSize" [sizes]="pageSizes"
        (modelChange)="updatePageSize($event)">
      </el-pagination-size>
      
      <el-pagination-btn dir="left" (next)="nextHandle($event)"
        *ngIf="showPrev"
        [disabled]="model <= 1">
      </el-pagination-btn>
      <el-pagination-pager [current]="model" [count]="pageCount"
        *ngIf="showPager"
        (next)="nextHandle($event)">
      </el-pagination-pager>
      <el-pagination-btn dir="right" (next)="nextHandle($event)"
        *ngIf="showNext"
        [disabled]="model === pageCount">
      </el-pagination-btn>

      <el-pagination-jump *ngIf="showJumper"
        [model]="model" [max]="pageCount"
        (next)="nextHandle($event)">
      </el-pagination-jump>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElPagination.ctorParameters = () => [];
function ElPagination_tsickle_Closure_declarations() {
    /** @type {?} */
    ElPagination.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElPagination.ctorParameters;
    /** @type {?} */
    ElPagination.prototype.showPager;
    /** @type {?} */
    ElPagination.prototype.showPrev;
    /** @type {?} */
    ElPagination.prototype.showNext;
    /** @type {?} */
    ElPagination.prototype.showTotal;
    /** @type {?} */
    ElPagination.prototype.showSize;
    /** @type {?} */
    ElPagination.prototype.showJumper;
}
//# sourceMappingURL=pagination.js.map