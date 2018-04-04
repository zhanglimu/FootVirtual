import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateFormat } from '../utils/format';
export class ElDateTable {
    constructor() {
        this.modelChange = new EventEmitter();
        this.weeks = ['日', '一', '二', '三', '四', '五', '六'];
        this.tableRows = [[], [], [], [], [], []];
        this.targetMonthOffset = 0; // default: current month, offset = 0
    }
    /**
     * @param {?} first
     * @param {?} lastCount
     * @return {?}
     */
    static BuildMonthStartRow(first, lastCount) {
        let /** @type {?} */ lastday = 7 - first;
        // first loop
        lastCount++;
        lastday++;
        return [0, 1, 2, 3, 4, 5, 6].map(() => {
            lastday--;
            if (lastday > 0)
                return { day: lastday, monthOffset: 0 };
            lastCount--;
            return { day: lastCount, monthOffset: -1 };
        }).reverse();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isToday(item) {
        if (this.currentMonthOffset === null)
            return false;
        return item.monthOffset === this.currentMonthOffset && this.today === item.day;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isTargetDay(item) {
        return item.monthOffset === this.targetMonthOffset && item.day === this.targetDay;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    clickHandle(item) {
        const /** @type {?} */ date = this.date;
        const /** @type {?} */ currentMonth = date.getMonth();
        const /** @type {?} */ targetMonth = currentMonth + item.monthOffset;
        // update target and update view
        this.targetDay = item.day;
        this.targetMonthOffset = item.monthOffset;
        // get time and emit a number
        date.setMonth(targetMonth);
        date.setDate(item.day);
        this.modelChange.emit(date.getTime());
    }
    /**
     * @return {?}
     */
    getRows() {
        const /** @type {?} */ date = this.date;
        this.targetDay = date.getDate();
        this.today = new Date().getDate();
        this.currentMonthOffset = DateFormat.getCurrentMonthOffset(date);
        const /** @type {?} */ lastMonth = date.getMonth() - 1;
        const /** @type {?} */ lastYear = lastMonth < 0 ? date.getFullYear() - 1 : date.getFullYear();
        const /** @type {?} */ currentMonthdayCount = DateFormat.getDayCountOfMonth(date.getFullYear(), date.getMonth());
        const /** @type {?} */ lastMonthDayCount = DateFormat.getDayCountOfMonth(lastYear, lastMonth < 0 ? 12 : lastMonth);
        const /** @type {?} */ firstDay = DateFormat.getFirstDayOfMonth(date);
        let /** @type {?} */ nextMonthDay = 0;
        this.tableRows = this.tableRows.map((row, index) => {
            if (index === 0) {
                return ElDateTable.BuildMonthStartRow(firstDay, lastMonthDayCount);
            }
            const /** @type {?} */ thisWeekFirstDay = 7 - firstDay + 7 * (index - 1);
            return new Array(7).fill(0).map((v, i) => {
                const /** @type {?} */ start = thisWeekFirstDay + i + 1;
                if (start <= currentMonthdayCount)
                    return { day: start, monthOffset: 0 };
                nextMonthDay++;
                return { day: nextMonthDay, monthOffset: 1 };
            });
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.date = new Date(this.model);
        this.getRows();
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
        this.getRows();
    }
}
ElDateTable.decorators = [
    { type: Component, args: [{
                selector: 'el-date-table',
                providers: [DateFormat],
                template: `
    <table class="el-date-table" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
        <th *ngFor="let week of weeks">{{week}}</th>
      </tr>
      <tr class="el-date-table__row"
          *ngFor="let row of tableRows">
        <td *ngFor="let item of row"
          [class.available]="item.monthOffset === 0"
          [class.next-month]="item.monthOffset === 1"
          [class.prev-month]="item.monthOffset === -1"
          [class.normal]="item.monthOffset === 0"
          [class.today]="isToday(item)"
          [class.current]="isTargetDay(item)"
          (click)="clickHandle(item)">
          <div>
            <span>{{item.day}}</span>
          </div>
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
ElDateTable.ctorParameters = () => [];
ElDateTable.propDecorators = {
    'model': [{ type: Input },],
    'disabledDate': [{ type: Input, args: ['disabled-date',] },],
    'modelChange': [{ type: Output },],
};
function ElDateTable_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDateTable.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDateTable.ctorParameters;
    /** @type {?} */
    ElDateTable.propDecorators;
    /** @type {?} */
    ElDateTable.prototype.model;
    /** @type {?} */
    ElDateTable.prototype.disabledDate;
    /** @type {?} */
    ElDateTable.prototype.modelChange;
    /** @type {?} */
    ElDateTable.prototype.weeks;
    /** @type {?} */
    ElDateTable.prototype.tableRows;
    /** @type {?} */
    ElDateTable.prototype.targetDay;
    /** @type {?} */
    ElDateTable.prototype.targetMonthOffset;
    /** @type {?} */
    ElDateTable.prototype.date;
    /** @type {?} */
    ElDateTable.prototype.today;
    /** @type {?} */
    ElDateTable.prototype.currentMonthOffset;
}
//# sourceMappingURL=date-table.js.map