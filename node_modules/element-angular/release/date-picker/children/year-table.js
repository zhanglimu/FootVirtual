import { Component, EventEmitter, Input, Output } from '@angular/core';
export class ElYearTable {
    constructor() {
        this.showWeekNumber = false;
        this.modelChange = new EventEmitter();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    clickHandle(year) {
        this.currentYear = year;
        this.date.setFullYear(year);
        this.modelChange.emit(this.date.getTime());
    }
    /**
     * @param {?} currentYear
     * @return {?}
     */
    updateYearRow(currentYear) {
        const /** @type {?} */ startYear = ~~(currentYear / 10) * 10;
        return [[], [], []].map((v, index) => [0, 1, 2, 3].map(num => startYear + (index * 4) + num));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.date = new Date(this.model);
        this.currentYear = this.date.getFullYear();
        this.yearRows = this.updateYearRow(this.currentYear);
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
        this.date = new Date(this.model);
        this.currentYear = this.date.getFullYear();
        this.yearRows = this.updateYearRow(this.currentYear);
    }
}
ElYearTable.decorators = [
    { type: Component, args: [{
                selector: 'el-year-table',
                template: `
    <table class="el-year-table">
      <tbody>
      <tr *ngFor="let years of yearRows">
        <td class="available" *ngFor="let year of years"
          [class.current]="year === currentYear"
          (click)="clickHandle(year)">
          <a class="cell">{{year}}</a>
        </td>
      </tr>
      </tbody>
    </table>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElYearTable.ctorParameters = () => [];
ElYearTable.propDecorators = {
    'showWeekNumber': [{ type: Input },],
    'model': [{ type: Input },],
    'disabledDate': [{ type: Input, args: ['disabled-date',] },],
    'modelChange': [{ type: Output },],
};
function ElYearTable_tsickle_Closure_declarations() {
    /** @type {?} */
    ElYearTable.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElYearTable.ctorParameters;
    /** @type {?} */
    ElYearTable.propDecorators;
    /** @type {?} */
    ElYearTable.prototype.showWeekNumber;
    /** @type {?} */
    ElYearTable.prototype.model;
    /** @type {?} */
    ElYearTable.prototype.disabledDate;
    /** @type {?} */
    ElYearTable.prototype.modelChange;
    /** @type {?} */
    ElYearTable.prototype.date;
    /** @type {?} */
    ElYearTable.prototype.yearRows;
    /** @type {?} */
    ElYearTable.prototype.currentYear;
}
//# sourceMappingURL=year-table.js.map