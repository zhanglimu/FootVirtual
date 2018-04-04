import { Component, ElementRef, KeyValueDiffers, Renderer2, ViewChild, } from '@angular/core';
import { DocumentWrapper, WindowWrapper } from '../shared/services/index';
import { ElTableProps } from './table.props';
import { ElTableFormat } from './utils/format';
export class ElTable extends ElTableProps {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} document
     * @param {?} window
     * @param {?} differs
     */
    constructor(el, renderer, document, window, differs) {
        super();
        this.el = el;
        this.renderer = renderer;
        this.document = document;
        this.window = window;
        this.differs = differs;
        this.columnsWithLevel = [];
        this.layout = {
            headerHeight: 40,
            bodyHeight: 'auto',
            bodyWidth: 'auto',
            scrollBarWidth: 0,
        };
        this.columnsWidth = [];
        this.columns = [];
        this.widthCount = 0;
        this.differ = this.differs.find([]).create();
    }
    /**
     * @return {?}
     */
    static GEN_TEMPLATE_KEY() {
        return Math.random().toString(16).substr(2, 8);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    bodyScroll(event) {
        if (!this.scrollX)
            return;
        const /** @type {?} */ el = ((event.target));
        if (el.scrollLeft === undefined)
            return;
        this.headerRef.nativeElement.scrollLeft = el.scrollLeft;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    updateColumns(column) {
        const /** @type {?} */ next = Object.assign(column, { index: this.columns.length });
        this.columns.push(next);
    }
    /**
     * @return {?}
     */
    updateBodyHeight() {
        const /** @type {?} */ height = ElTableFormat.getCSSValue(this.height);
        const /** @type {?} */ header = this.headerRef.nativeElement;
        if (!header || !height)
            return;
        const /** @type {?} */ timer = setTimeout(() => {
            const /** @type {?} */ headerHeight = header.offsetHeight;
            if (headerHeight) {
                this.layout.headerHeight = headerHeight;
                this.layout.bodyHeight = height - this.layout.headerHeight;
                this.layout.scrollBarWidth = this.window.innerWidth - this.document.body.clientWidth;
            }
            clearTimeout(timer);
        }, 0);
    }
    /**
     * @return {?}
     */
    updateLayout() {
        const /** @type {?} */ elTable = this.el.nativeElement.children[0];
        this.layout.bodyWidth = this.widthCount || elTable.clientWidth;
        if (this.widthCount) {
            this.renderer.setStyle(elTable, 'width', `${this.widthCount}px`);
        }
    }
    /**
     * @param {?} widthItem
     * @return {?}
     */
    updateColumnsWidth(widthItem) {
        this.columnsWidth.push(widthItem);
    }
    /**
     * @param {?} columnsWidth
     * @return {?}
     */
    computeColumnsWidth(columnsWidth) {
        let /** @type {?} */ auto = 0, /** @type {?} */ count = 0;
        columnsWidth.forEach((item) => {
            if (item.auto)
                return auto++;
            if (Number.isNaN(item.width)) {
                item.auto = true;
                return auto++;
            }
            count += item.width;
        });
        // if user has set the width, use fixed width
        // update layout
        if (!auto) {
            this.widthCount = count;
            this.updateLayout();
        }
        const /** @type {?} */ average = (this.layout.bodyWidth - count) / auto;
        return columnsWidth.map((item) => item.auto ? Object.assign(item, { width: average }) : item);
    }
    /**
     * @return {?}
     */
    transformColumnsData() {
        // order by deep
        this.columns = this.columns.map((column) => {
            if (!Array.isArray(this.columnsWithLevel[column.level])) {
                this.columnsWithLevel[column.level] = [];
            }
            this.columnsWithLevel[column.level].push(column);
            if (column.deep === 0)
                return column;
            return null;
        }).filter(r => r);
        this.columnsWithLevel.reverse();
        this.columnsWidth = this.computeColumnsWidth(this.columnsWidth);
        // distribution template
        this.columns = this.columns.map((column) => {
            if (!column.slot)
                return column;
            const /** @type {?} */ TEMPLATE_KEY = ElTable.GEN_TEMPLATE_KEY();
            this.modelStorge = this.model.map((v) => Object.assign(v, { [TEMPLATE_KEY]: column.slot }));
            return Object.assign(column, { modelKey: TEMPLATE_KEY });
        });
        this.orderMap = this.columns.reduce((pre, next) => Object.assign(pre, { [next.modelKey]: next }), {});
        this.transformModelData();
    }
    /**
     * @return {?}
     */
    transformModelData() {
        const /** @type {?} */ orderMap = this.orderMap;
        // add index, width, value
        if (!this.modelStorge) {
            this.modelStorge = this.model;
        }
        const /** @type {?} */ modelWithIndex = this.modelStorge.map((row) => Object.keys(row || {})
            .map((v) => {
            if (!orderMap[v])
                return null; // only template column
            return {
                value: row[v], [v]: row[v],
                index: orderMap[v].index,
                width: orderMap[v].width,
            };
        })
            .filter((r) => !!r));
        // column sort
        this.columnsData = modelWithIndex.map((row) => row.sort((pre, next) => pre.index - next.index));
        this.updateBodyHeight();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateLayout();
        this.updateBodyHeight();
        this.globalListenFunc = this.renderer.listen('window', 'resize', () => {
            this.updateLayout();
            this.columnsWidth = this.computeColumnsWidth(this.columnsWidth);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // not include model
        if (!changes || !changes.model)
            return;
        // first change
        if (changes.model.isFirstChange())
            return;
        this.model = changes.model.currentValue;
        this.transformModelData();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        const /** @type {?} */ change = this.differ.diff(this.model);
        if (!change || !this.orderMap)
            return;
        // distribution template
        const /** @type {?} */ nextColumns = this.columns.map((column) => {
            if (!column.slot)
                return column;
            const /** @type {?} */ TEMPLATE_KEY = ElTable.GEN_TEMPLATE_KEY();
            this.modelStorge = this.model.map((v) => Object.assign(v, { [TEMPLATE_KEY]: column.slot }));
            return Object.assign(column, { modelKey: TEMPLATE_KEY });
        });
        this.orderMap = nextColumns.reduce((pre, next) => Object.assign(pre, { [next.modelKey]: next }), {});
        this.transformModelData();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.globalListenFunc && this.globalListenFunc();
    }
}
ElTable.decorators = [
    { type: Component, args: [{
                selector: 'el-table',
                styles: [`
  .el-table__header-scroll::-webkit-scrollbar { visibility: hidden; }
  `],
                template: `
    <div class="el-table"
      [ngStyle]="{ height: height | cssValue }"
      [class.el-table--enable-row-transition]="true"
      [class.el-table--striped]="stripe"
      [class.el-table--border]="border"
      [class.el-table--hidden]="false">
      <div class="hidden-columns"><ng-content></ng-content></div>
      <div class="el-table__header-wrapper el-table__header-scroll" [hidden]="!showHeader"
        [ngStyle]="{'overflow-x': (scrollX ? 'auto' : 'hidden')}" #headerRef>
        <el-table-header [model]="columnsWithLevel" [layout]="layout" [columns-width]="columnsWidth"
          [border]="border" [height]="height" [center]="center === 'header' || center === 'all'">
        </el-table-header>
      </div>
      <div class="el-table__body-wrapper" [ngStyle]="{ height: layout.bodyHeight | cssValue }"
        (scroll)="bodyScroll($event)">
        <el-table-body [model]="columnsData" [stripe]="stripe"
          [layout]="layout" [row-class-name]="rowClassName"
          [center]="center === 'all'"
          [ngStyle]="{ width: layout.bodyWidth + 'px' }">
        </el-table-body>
        <div [ngStyle]="{width: layout.bodyWidth + 'px'}" class="el-table__empty-block" *ngIf="!model || model.length === 0">
          <span class="el-table__empty-text">{{placeholder}}</span>
        </div>
      </div>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElTable.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: DocumentWrapper, },
    { type: WindowWrapper, },
    { type: KeyValueDiffers, },
];
ElTable.propDecorators = {
    'headerRef': [{ type: ViewChild, args: ['headerRef',] },],
};
function ElTable_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTable.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTable.ctorParameters;
    /** @type {?} */
    ElTable.propDecorators;
    /** @type {?} */
    ElTable.prototype.headerRef;
    /** @type {?} */
    ElTable.prototype.columnsData;
    /** @type {?} */
    ElTable.prototype.columnsWithLevel;
    /** @type {?} */
    ElTable.prototype.layout;
    /** @type {?} */
    ElTable.prototype.columnsWidth;
    /** @type {?} */
    ElTable.prototype.columns;
    /** @type {?} */
    ElTable.prototype.globalListenFunc;
    /** @type {?} */
    ElTable.prototype.orderMap;
    /** @type {?} */
    ElTable.prototype.modelStorge;
    /** @type {?} */
    ElTable.prototype.differ;
    /** @type {?} */
    ElTable.prototype.widthCount;
    /** @type {?} */
    ElTable.prototype.el;
    /** @type {?} */
    ElTable.prototype.renderer;
    /** @type {?} */
    ElTable.prototype.document;
    /** @type {?} */
    ElTable.prototype.window;
    /** @type {?} */
    ElTable.prototype.differs;
}
//# sourceMappingURL=table.js.map