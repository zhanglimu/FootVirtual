import { Injectable } from '@angular/core';
export class DateFormat {
    constructor() {
    }
    /**
     * @param {?} date
     * @return {?}
     */
    static checkedDate(date) {
        return typeof date === 'number' ? new Date(date) : date;
    }
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    static getDayCountOfMonth(year, month) {
        const /** @type {?} */ isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        return [
            month === 1 && !isLeapYear,
            month === 1 && isLeapYear,
            !!([3, 5, 8, 10].find(num => num === month)),
            true,
        ].reduce((pre, next, index) => pre ? pre : (next ? 28 + index : 0), 0);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    static getFirstDayOfMonth(date) {
        const /** @type {?} */ checkedDate = DateFormat.checkedDate(date);
        checkedDate.setDate(1);
        return checkedDate.getDay();
    }
    /**
     * @param {?} targetDate
     * @return {?}
     */
    static getCurrentMonthOffset(targetDate) {
        const /** @type {?} */ checkedDate = DateFormat.checkedDate(targetDate);
        const /** @type {?} */ currentDate = new Date();
        if (currentDate.getFullYear() !== checkedDate.getFullYear()) {
            return null;
        }
        const /** @type {?} */ offset = currentDate.getMonth() - checkedDate.getMonth();
        return (offset > 1 || offset < -1) ? null : offset;
    }
    /**
     * @param {?} input
     * @param {?} format
     * @return {?}
     */
    static moment(input, format) {
        const /** @type {?} */ d = new Date(input);
        if (String(d) === 'Invalid Date')
            return '';
        const /** @type {?} */ makeReg = (value) => new RegExp(`(${value})`);
        const /** @type {?} */ keys = ['M+', 'd+', 'h+', 'm+', 's+', 'q+', 'S'];
        const /** @type {?} */ values = [
            d.getMonth() + 1,
            d.getDate(),
            d.getHours(),
            d.getMinutes(),
            d.getSeconds(),
            Math.floor((d.getMonth() + 3) / 3),
            d.getMilliseconds(),
        ];
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        let /** @type {?} */ len = 0, /** @type {?} */ key, /** @type {?} */ val;
        while (len < keys.length) {
            key = keys[len];
            val = values[len];
            if (makeReg(key).test(format)) {
                format = ((format)).replace(RegExp.$1, (RegExp.$1.length === 1) ? val : ('00' + val).substr(('' + val).length));
            }
            len++;
        }
        return format;
    }
    /**
     * @param {?=} input
     * @return {?}
     */
    getTime(input) {
        const /** @type {?} */ date = new Date(input);
        if (String(date) === 'Invalid Date') {
            return 0;
        }
        return date.getTime();
    }
}
DateFormat.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
DateFormat.ctorParameters = () => [];
function DateFormat_tsickle_Closure_declarations() {
    /** @type {?} */
    DateFormat.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    DateFormat.ctorParameters;
}
//# sourceMappingURL=format.js.map