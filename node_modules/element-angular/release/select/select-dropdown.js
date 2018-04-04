import { Component, Input, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ElSelect } from './select';
export class ElSelectDropdown {
    /**
     * @param {?} rootSelect
     * @param {?} sanitizer
     */
    constructor(rootSelect, sanitizer) {
        this.rootSelect = rootSelect;
        this.sanitizer = sanitizer;
        this.isActived = false;
        this.multiple = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        let /** @type {?} */ firstStyle = 'display: none; opacity: 0; height: 0;';
        this.dropdownStyles = this.sanitizer.bypassSecurityTrustStyle(firstStyle);
        setTimeout(() => {
            const /** @type {?} */ styles = `min-width: ${this.rootSelect.selfWidth}px; ${firstStyle || ''}`;
            this.dropdownStyles = this.sanitizer.bypassSecurityTrustStyle(styles);
            this.popperClass = this.rootSelect.popperClass;
            firstStyle = '';
        }, 0);
    }
}
ElSelectDropdown.decorators = [
    { type: Component, args: [{
                selector: 'el-select-dropdown',
                template: `
    <div [class]="'el-select-dropdown ' + popperClass"
      [style]="dropdownStyles"
      [@state]="isActived">
      <ng-content></ng-content>
    </div>
  `,
                animations: [
                    trigger('state', [
                        state('true', style({
                            opacity: 1,
                            height: '*',
                            display: 'block',
                        })),
                        state('false', style({
                            opacity: 0,
                            height: 0,
                            display: 'none',
                        })),
                        transition('* => *', animate(`250ms ease-in-out`)),
                    ])
                ],
            },] },
];
/**
 * @nocollapse
 */
ElSelectDropdown.ctorParameters = () => [
    { type: ElSelect, decorators: [{ type: Optional },] },
    { type: DomSanitizer, },
];
ElSelectDropdown.propDecorators = {
    'isActived': [{ type: Input },],
};
function ElSelectDropdown_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSelectDropdown.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSelectDropdown.ctorParameters;
    /** @type {?} */
    ElSelectDropdown.propDecorators;
    /** @type {?} */
    ElSelectDropdown.prototype.isActived;
    /** @type {?} */
    ElSelectDropdown.prototype.multiple;
    /** @type {?} */
    ElSelectDropdown.prototype.popperClass;
    /** @type {?} */
    ElSelectDropdown.prototype.dropdownStyles;
    /** @type {?} */
    ElSelectDropdown.prototype.rootSelect;
    /** @type {?} */
    ElSelectDropdown.prototype.sanitizer;
}
//# sourceMappingURL=select-dropdown.js.map