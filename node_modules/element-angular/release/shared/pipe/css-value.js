import { Pipe } from '@angular/core';
export class ElCSSValuePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (typeof value === 'number')
            return `${value}px`;
        if (Number.isNaN(+value))
            return String(value);
        return `${value}px`;
    }
}
ElCSSValuePipe.decorators = [
    { type: Pipe, args: [{ name: 'cssValue' },] },
];
/**
 * @nocollapse
 */
ElCSSValuePipe.ctorParameters = () => [];
function ElCSSValuePipe_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCSSValuePipe.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCSSValuePipe.ctorParameters;
}
//# sourceMappingURL=css-value.js.map