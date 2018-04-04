import { Component, Input } from '@angular/core';
export class ElTableHeader {
    constructor() {
        this.model = [];
        this.border = false;
        this.columnsWidth = [];
    }
    /**
     * @param {?} th
     * @return {?}
     */
    makeClasses(th) {
        const /** @type {?} */ isLeaf = this.getColspan(th) > 1 ? '' : 'is-leaf';
        return this.height === 'auto' ? `${isLeaf} ` : ' gutter';
    }
    /**
     * @param {?} td
     * @return {?}
     */
    getRowspan(td) {
        if (td.deep === 0 && td.level !== 0) {
            return td.level + 1;
        }
        return 1;
    }
    /**
     * @param {?} th
     * @return {?}
     */
    getColspan(th) {
        return th.childCount > 0 ? th.childCount : 1;
    }
}
ElTableHeader.decorators = [
    { type: Component, args: [{
                selector: 'el-table-header',
                template: `
    <ng-template #widthTmp>
      <col *ngFor="let item of columnsWidth" [width]="item.width">
    </ng-template>
    <table class="el-table__header" cellspacing="0" cellpadding="0" border="0"
      [ngStyle]="{ width: '100%' }">
      <ng-template [ngTemplateOutlet]="widthTmp">
      </ng-template>

      <tr *ngFor="let tr of model">
        <th *ngFor="let th of tr" [class]="makeClasses(th)"
            [ngStyle]="{ width: th.width | cssValue }"
            [attr.colspan]="getColspan(th)" [attr.rowspan]="getRowspan(th)">
          <div class="cell" [ngStyle]="{
            width: th.width | cssValue,
            'text-align': center ? 'center' : 'unset' }">{{th.label}}</div>
        </th>
      </tr>
    </table>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElTableHeader.ctorParameters = () => [];
ElTableHeader.propDecorators = {
    'model': [{ type: Input },],
    'layout': [{ type: Input },],
    'border': [{ type: Input },],
    'height': [{ type: Input },],
    'center': [{ type: Input },],
    'columnsWidth': [{ type: Input, args: ['columns-width',] },],
};
function ElTableHeader_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTableHeader.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTableHeader.ctorParameters;
    /** @type {?} */
    ElTableHeader.propDecorators;
    /** @type {?} */
    ElTableHeader.prototype.model;
    /** @type {?} */
    ElTableHeader.prototype.layout;
    /** @type {?} */
    ElTableHeader.prototype.border;
    /** @type {?} */
    ElTableHeader.prototype.height;
    /** @type {?} */
    ElTableHeader.prototype.center;
    /** @type {?} */
    ElTableHeader.prototype.columnsWidth;
}
//# sourceMappingURL=header.js.map