import { Component, EventEmitter, Input, Optional, Output } from '@angular/core';
import { ElDataPicker } from './picker';
import { dropAnimation } from '../shared/animation/index';
export class ElDatePickerPanel {
    /**
     * @param {?} root
     */
    constructor(root) {
        this.root = root;
        this.show = false;
        this.hiddenDay = false;
        this.panelAbsolute = true;
        this.panelIndex = 200;
        this.modelChange = new EventEmitter();
        this.shortcuts = false;
        this.showTime = false;
        this.currentView = 'date';
    }
    /**
     * @param {?} pickPath
     * @return {?}
     */
    showPicker(pickPath) {
        this.currentView = pickPath;
    }
    /**
     * @return {?}
     */
    updateDate() {
        const /** @type {?} */ date = new Date(this.model);
        const /** @type {?} */ startYear = ~~(date.getFullYear() / 10) * 10;
        this.dateShowModels = {
            month: date.getMonth(),
            year: date.getFullYear(),
            yearRange: [startYear, startYear + 10],
        };
    }
    /**
     * @param {?} time
     * @return {?}
     */
    datePickChangeHandle(time) {
        this.model = time;
        this.modelChange.emit(time);
        this.updateDate();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    monthPickChangeHandle(time) {
        this.model = time;
        // hidden day, only show month
        if (this.hiddenDay) {
            this.modelChange.emit(time);
        }
        else {
            this.currentView = 'date';
        }
        this.updateDate();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    yearPickChangeHandle(time) {
        this.model = time;
        this.currentView = 'month';
        this.updateDate();
    }
    /**
     * @param {?} step
     * @return {?}
     */
    nextYear(step) {
        // year table component opened, edit year range
        if (this.currentView === 'year') {
            step = step * 10;
        }
        const /** @type {?} */ date = new Date(this.model);
        date.setFullYear(this.dateShowModels.year + step);
        this.model = date.getTime();
        this.updateDate();
    }
    /**
     * @param {?} step
     * @return {?}
     */
    nextMonth(step) {
        const /** @type {?} */ date = new Date(this.model);
        date.setMonth(this.dateShowModels.month + step);
        this.model = date.getTime();
        this.updateDate();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // hidden day
        this.currentView = this.hiddenDay ? 'month' : 'date';
        this.model = this.model || Date.now();
        this.updateDate();
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
        this.model = this.model || Date.now();
        this.updateDate();
    }
}
ElDatePickerPanel.decorators = [
    { type: Component, args: [{
                selector: 'el-data-picker-panel',
                animations: [dropAnimation],
                styles: [' .el-picker-panel-absolute { position: absolute; } '],
                template: `
    <div [@dropAnimation]="show"
      [ngStyle]="{ width: width ? width + 'px' : 'auto', 'z-index': panelIndex}"
      [class]="'el-picker-panel el-date-picker '"
      [class.has-time]="showTime"
      [class.el-picker-panel-absolute]="panelAbsolute">
      <div class="el-picker-panel__body-wrapper">
        <!--<div class="el-picker-panel__sidebar" *ngIf="shortcuts">-->
          <!--<button type="button" class="el-picker-panel__shortcut"-->
            <!--*ngFor="shortcut in shortcuts"-->
            <!--(click)="handleShortcutClick(shortcut)">-->
            <!--{{ shortcut.text }}-->
          <!--</button>-->
        <!--</div>-->
        <div class="el-picker-panel__body">
          <div class="el-date-picker__header">
            <button class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left"
              type="button" (click)="nextYear(-1)">
            </button>
            <button class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left"
              type="button" (click)="nextMonth(-1)"
              *ngIf="currentView === 'date'">
            </button>
            
            <!--year label-->
            <span class="el-date-picker__header-label" *ngIf="currentView !== 'year'"
              (click)="showPicker('year')">{{dateShowModels.year}} 年</span>
            <!--year range label-->
            <span class="el-date-picker__header-label" *ngIf="currentView === 'year'">
              {{dateShowModels.yearRange[0]}} 年 - {{dateShowModels.yearRange[1]}} 年
            </span>
            
            <span class="el-date-picker__header-label"
              [class.active]="currentView === 'month'"
              (click)="showPicker('month')"
              *ngIf="currentView === 'date'">{{dateShowModels.month + 1}} 月</span>
            <button class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right"
              type="button" (click)="nextYear(1)">
            </button>
            <button class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right"
              type="button" (click)="nextMonth(1)"
              *ngIf="currentView === 'date'">
            </button>
          </div>

          <div class="el-picker-panel__content">
            <el-date-table *ngIf="currentView === 'date' && !hiddenDay"
              (modelChange)="datePickChangeHandle($event)"
              [model]="model">
            </el-date-table>
            <el-year-table *ngIf="currentView === 'year'"
              [model]="model"
              (modelChange)="yearPickChangeHandle($event)"
              [disabled-date]="disabledDate">
            </el-year-table>
            <el-month-table *ngIf="currentView === 'month'"
              [model]="model"
              (modelChange)="monthPickChangeHandle($event)"
              [disabled-date]="disabledDate">
            </el-month-table>
          </div>
        </div>
      </div>

      <!--<div class="el-picker-panel__footer" *ngIf="footerVisible && currentView === 'date'">-->
        <!--<a href="JavaScript:" class="el-picker-panel__link-btn" (click)="changeToNow()">556</a>-->
        <!--<button class="el-picker-panel__btn" type="button"-->
          <!--(click)="confirm()">667</button>-->
      <!--</div>-->
    </div>
  `
            },] },
];
/**
 * @nocollapse
 */
ElDatePickerPanel.ctorParameters = () => [
    { type: ElDataPicker, decorators: [{ type: Optional },] },
];
ElDatePickerPanel.propDecorators = {
    'show': [{ type: Input },],
    'width': [{ type: Input },],
    'model': [{ type: Input },],
    'hiddenDay': [{ type: Input, args: ['hidden-day',] },],
    'panelAbsolute': [{ type: Input, args: ['panel-absolute',] },],
    'panelIndex': [{ type: Input, args: ['panel-index',] },],
    'modelChange': [{ type: Output },],
};
function ElDatePickerPanel_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDatePickerPanel.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDatePickerPanel.ctorParameters;
    /** @type {?} */
    ElDatePickerPanel.propDecorators;
    /** @type {?} */
    ElDatePickerPanel.prototype.show;
    /** @type {?} */
    ElDatePickerPanel.prototype.width;
    /** @type {?} */
    ElDatePickerPanel.prototype.model;
    /** @type {?} */
    ElDatePickerPanel.prototype.hiddenDay;
    /** @type {?} */
    ElDatePickerPanel.prototype.panelAbsolute;
    /** @type {?} */
    ElDatePickerPanel.prototype.panelIndex;
    /** @type {?} */
    ElDatePickerPanel.prototype.modelChange;
    /** @type {?} */
    ElDatePickerPanel.prototype.shortcuts;
    /** @type {?} */
    ElDatePickerPanel.prototype.showTime;
    /** @type {?} */
    ElDatePickerPanel.prototype.currentView;
    /** @type {?} */
    ElDatePickerPanel.prototype.dateShowModels;
    /** @type {?} */
    ElDatePickerPanel.prototype.root;
}
//# sourceMappingURL=picker-panel.js.map