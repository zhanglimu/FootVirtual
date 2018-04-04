import { Injectable } from '@angular/core';
export class ElTableFormat {
    /**
     * @param {?} val
     * @return {?}
     */
    static getCSSValue(val) {
        if (val === 'auto')
            return null;
        if (!Number.isNaN(+val))
            return +val;
        if (String(val).endsWith('px')) {
            return +String(val).split('px')[0];
        }
    }
    /**
     * @param {?} tableRows
     * @return {?}
     */
    formatRowData(tableRows) {
        const /** @type {?} */ elTableKeys = ['value', 'width', 'index'];
        const /** @type {?} */ tableRowsMap = tableRows.map((row, index) => {
            const /** @type {?} */ currentRow = {};
            row.forEach((item) => Object.keys(item).forEach((r) => {
                if (elTableKeys.indexOf(r) < 0) {
                    currentRow[r] = item[r];
                }
            }));
            currentRow['index'] = index;
            return currentRow;
        });
        return tableRowsMap;
    }
}
ElTableFormat.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ElTableFormat.ctorParameters = () => [];
function ElTableFormat_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTableFormat.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTableFormat.ctorParameters;
}
//# sourceMappingURL=format.js.map