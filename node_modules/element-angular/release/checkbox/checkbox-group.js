import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class ElCheckboxGroup {
    constructor() {
        this.model = [];
        this.fill = '#20a0ff';
        this.textColor = '#ffffff';
        this.min = 0;
        this.max = 1000;
        this.modelChange = new EventEmitter();
        // children update handle
        this.subscriber = [];
        this.controlChange = () => { };
        this.controlTouch = () => { };
    }
    /**
     * @param {?} nextValue
     * @return {?}
     */
    changeModel(nextValue) {
        setTimeout(() => {
            this.model = nextValue;
            this.modelChange.emit(nextValue);
            this.controlChange(nextValue);
            this.subscriber.forEach(sub => sub());
        }, 0);
    }
    /**
     * @param {?} t
     * @param {?} label
     * @return {?}
     */
    updateModelFromChildren(t, label) {
        // add label value
        if (t && this.model.indexOf(label) === -1) {
            if (this.model.length >= this.max)
                return;
            this.model.push(label);
        }
        // remove label value
        if (!t && this.model.indexOf(label) > -1) {
            if (this.model.length < this.min)
                return;
            this.model = this.model.map(v => v === label ? null : v)
                .filter(v => v);
        }
        // synchronize host
        this.changeModel(this.model);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!changes || !changes.model)
            return;
        if (changes.model.isFirstChange())
            return;
        this.changeModel(changes.model.currentValue);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.model = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.controlChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.controlTouch = fn;
    }
}
ElCheckboxGroup.decorators = [
    { type: Component, args: [{
                selector: 'el-checkbox-group',
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => ElCheckboxGroup),
                        multi: true
                    }],
                template: `
    <div class="el-checkbox-group" role="group" aria-label="checkbox-group">
      <ng-content></ng-content>
    </div>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElCheckboxGroup.ctorParameters = () => [];
ElCheckboxGroup.propDecorators = {
    'model': [{ type: Input },],
    'size': [{ type: Input },],
    'fill': [{ type: Input },],
    'textColor': [{ type: Input, args: ['text-color',] },],
    'min': [{ type: Input },],
    'max': [{ type: Input },],
    'modelChange': [{ type: Output },],
};
function ElCheckboxGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCheckboxGroup.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCheckboxGroup.ctorParameters;
    /** @type {?} */
    ElCheckboxGroup.propDecorators;
    /** @type {?} */
    ElCheckboxGroup.prototype.model;
    /** @type {?} */
    ElCheckboxGroup.prototype.size;
    /** @type {?} */
    ElCheckboxGroup.prototype.fill;
    /** @type {?} */
    ElCheckboxGroup.prototype.textColor;
    /** @type {?} */
    ElCheckboxGroup.prototype.min;
    /** @type {?} */
    ElCheckboxGroup.prototype.max;
    /** @type {?} */
    ElCheckboxGroup.prototype.modelChange;
    /** @type {?} */
    ElCheckboxGroup.prototype.subscriber;
    /** @type {?} */
    ElCheckboxGroup.prototype.controlChange;
    /** @type {?} */
    ElCheckboxGroup.prototype.controlTouch;
}
//# sourceMappingURL=checkbox-group.js.map