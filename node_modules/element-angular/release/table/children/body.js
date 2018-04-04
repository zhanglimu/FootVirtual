import { Component, Input, EventEmitter, Output, } from '@angular/core';
import { ElTableFormat } from '../utils/format';
export class ElTableBody {
    /**
     * @param {?} tableFormat
     */
    constructor(tableFormat) {
        this.tableFormat = tableFormat;
        this.stripe = false;
        this.center = false;
        this.cellClick = new EventEmitter();
        this.cellDblClick = new EventEmitter();
        this.cellMouseEnter = new EventEmitter();
        this.cellMouseLeave = new EventEmitter();
        this.formatModel = [];
    }
    /**
     * @param {?} domHandle
     * @param {?} next
     * @return {?}
     */
    merge(domHandle, next) {
        return Object.assign(domHandle, next);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    isTemplateRef(content) {
        return content && typeof content === 'object';
    }
    /**
     * @return {?}
     */
    getBodyWidth() {
        const /** @type {?} */ width = ElTableFormat.getCSSValue(this.layout.bodyWidth);
        if (!width)
            return this.layout.bodyWidth;
        return width - this.layout.scrollBarWidth;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getFormatModel(index) {
        return this.formatModel[index];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    destroyRowFunc(index) {
        return () => {
            this.model.splice(index, 1);
            this.formatModel = this.tableFormat.formatRowData(this.model);
        };
    }
    /**
     * @param {?} index
     * @return {?}
     */
    makeRowClass(index) {
        const /** @type {?} */ userRows = this.formatModel[index];
        const /** @type {?} */ userClass = this.rowClassName ? this.rowClassName(userRows, index) : '';
        return 'el-table__row ' + userClass;
    }
    /**
     * @param {?} event
     * @param {?} Ref
     * @return {?}
     */
    doubleClickHandle(event, Ref) {
        Ref.event = event;
        this.cellDblClick.emit(Ref);
    }
    /**
     * @param {?} event
     * @param {?} Ref
     * @return {?}
     */
    clickHandle(event, Ref) {
        Ref.event = event;
        this.cellClick.emit(Ref);
    }
    /**
     * @param {?} event
     * @param {?} isEnter
     * @return {?}
     */
    cellMouseActionHandle(event, isEnter) {
        if (isEnter)
            return this.cellMouseEnter.emit(event);
        this.cellMouseLeave.emit(event);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        this.formatModel = this.tableFormat.formatRowData(this.model);
    }
}
ElTableBody.decorators = [
    { type: Component, args: [{
                selector: 'el-table-body',
                template: `
    <table class="el-table__body" [ngStyle]="{ width: getBodyWidth() | cssValue }"
      cellspacing="0" cellpadding="0" border="0">
      <tr *ngFor="let tr of model; let k = index" #tableRow
        [hidden]="tr.hidden"
        [class]="makeRowClass(k)"
        [class.hover-row]="tableRow.hover"
        [class.el-table__row--striped]="stripe && k % 2 === 1"
        (mouseenter)="tableRow.hover = true" (mouseleave)="tableRow.hover = false">
        <td *ngFor="let td of tr; let i = index;"
          [ngStyle]="{ width: td.width | cssValue }" #tdRef
          [class]="'el-table_1_column_' + (i + 1)"
          (mouseenter)="cellMouseActionHandle($event, true);tdRef.destroy = destroyRowFunc(k);"
          (mouseleave)="cellMouseActionHandle($event, false)"
          (click)="clickHandle($event, tdRef)"
          (dblclick)="doubleClickHandle($event, tdRef)">
          <div class="cell" [ngStyle]="{ 'text-align': center ? 'center' : 'unset' }">
            <ng-container *ngIf="!isTemplateRef(td.value)">{{td.value}}</ng-container>
            <ng-container *ngIf="isTemplateRef(td.value)">
              <ng-template [ngTemplateOutlet]="td.value" [ngTemplateOutletContext]="{
                scope: merge(tdRef, {rowData: getFormatModel(k), index: k})
              }"></ng-template>
            </ng-container>
          </div>
        </td>
      </tr>
    </table>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElTableBody.ctorParameters = () => [
    { type: ElTableFormat, },
];
ElTableBody.propDecorators = {
    'model': [{ type: Input, args: ['model',] },],
    'stripe': [{ type: Input },],
    'center': [{ type: Input },],
    'layout': [{ type: Input },],
    'rowClassName': [{ type: Input, args: ['row-class-name',] },],
    'cellClick': [{ type: Output, args: ['cell-click',] },],
    'cellDblClick': [{ type: Output, args: ['cell-dblclick',] },],
    'cellMouseEnter': [{ type: Output, args: ['cell-mouse-enter',] },],
    'cellMouseLeave': [{ type: Output, args: ['cell-mouse-leave',] },],
};
function ElTableBody_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTableBody.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTableBody.ctorParameters;
    /** @type {?} */
    ElTableBody.propDecorators;
    /** @type {?} */
    ElTableBody.prototype.model;
    /** @type {?} */
    ElTableBody.prototype.stripe;
    /** @type {?} */
    ElTableBody.prototype.center;
    /** @type {?} */
    ElTableBody.prototype.layout;
    /** @type {?} */
    ElTableBody.prototype.rowClassName;
    /** @type {?} */
    ElTableBody.prototype.cellClick;
    /** @type {?} */
    ElTableBody.prototype.cellDblClick;
    /** @type {?} */
    ElTableBody.prototype.cellMouseEnter;
    /** @type {?} */
    ElTableBody.prototype.cellMouseLeave;
    /** @type {?} */
    ElTableBody.prototype.formatModel;
    /** @type {?} */
    ElTableBody.prototype.tableFormat;
}
//# sourceMappingURL=body.js.map