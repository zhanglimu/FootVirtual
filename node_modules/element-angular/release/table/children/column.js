import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { ElTable } from '../table';
export class ElTableColumn {
    /**
     * @param {?} root
     * @param {?} el
     */
    constructor(root, el) {
        this.root = root;
        this.el = el;
        this.width = 'auto';
        this.maxDeep = 10;
    }
    /**
     * @param {?} self
     * @return {?}
     */
    findChild(self) {
        const /** @type {?} */ children = self.children;
        if (!children || !children.length)
            return 0;
        return Array.from(children)
            .map((child) => child.tagName.toUpperCase() === 'EL-TABLE-COLUMN')
            .filter(r => r)
            .length;
    }
    /**
     * @param {?} self
     * @return {?}
     */
    findLevel(self) {
        const /** @type {?} */ brothers = self.parentElement.children;
        const /** @type {?} */ brothersDeeps = Array.from(brothers).map((el) => this.findDeep(el));
        const /** @type {?} */ maxDeep = brothersDeeps.sort((pre, next) => next - pre)[0];
        return maxDeep;
    }
    /**
     * @param {?} self
     * @return {?}
     */
    findDeep(self) {
        let /** @type {?} */ deep = 0;
        Array.from(new Array(this.maxDeep)).every(() => {
            const /** @type {?} */ children = self.children;
            if (!children || !children.length)
                return false;
            if (children[0].tagName.toUpperCase() !== 'EL-TABLE-COLUMN') {
                return false;
            }
            self = children[0];
            deep++;
        });
        return deep;
    }
    /**
     * @param {?} deep
     * @param {?} self
     * @return {?}
     */
    isLastElement(deep, self) {
        if (deep !== 0)
            return false;
        let /** @type {?} */ isLast = true;
        Array.from(new Array(this.maxDeep)).every(() => {
            const /** @type {?} */ parent = self.parentElement;
            if (!parent)
                return false;
            if (self !== parent.children[parent.children.length - 1]) {
                isLast = false;
                return false;
            }
            if (parent.tagName.toUpperCase() !== 'EL-TABLE-COLUMN') {
                return false;
            }
            self = parent;
            return true;
        });
        return isLast;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ self = this.el.nativeElement;
        const /** @type {?} */ brothers = self.parentElement.children;
        const /** @type {?} */ deep = this.findDeep(self);
        const /** @type {?} */ level = deep === 0 && brothers.length > 1 ? this.findLevel(self) : deep;
        const /** @type {?} */ childCount = this.findChild(self);
        const /** @type {?} */ tableColumn = {
            modelKey: this.modelKey,
            label: this.label ? this.label : this.modelKey,
            width: this.width,
            slot: this.slot,
            deep, level, childCount,
        };
        this.root.updateColumns(tableColumn);
        if (deep === 0) {
            this.root.updateColumnsWidth({ auto: false, width: +this.width });
        }
        // last element
        if (this.isLastElement(deep, self)) {
            this.root.transformColumnsData();
        }
    }
}
ElTableColumn.decorators = [
    { type: Component, args: [{
                selector: 'el-table-column',
                template: `
    <ng-content></ng-content>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElTableColumn.ctorParameters = () => [
    { type: ElTable, },
    { type: ElementRef, },
];
ElTableColumn.propDecorators = {
    'slot': [{ type: ContentChild, args: ['slot',] },],
    'modelKey': [{ type: Input, args: ['model-key',] },],
    'label': [{ type: Input },],
    'width': [{ type: Input },],
};
function ElTableColumn_tsickle_Closure_declarations() {
    /** @type {?} */
    ElTableColumn.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElTableColumn.ctorParameters;
    /** @type {?} */
    ElTableColumn.propDecorators;
    /** @type {?} */
    ElTableColumn.prototype.slot;
    /** @type {?} */
    ElTableColumn.prototype.modelKey;
    /** @type {?} */
    ElTableColumn.prototype.label;
    /** @type {?} */
    ElTableColumn.prototype.width;
    /** @type {?} */
    ElTableColumn.prototype.maxDeep;
    /** @type {?} */
    ElTableColumn.prototype.root;
    /** @type {?} */
    ElTableColumn.prototype.el;
}
//# sourceMappingURL=column.js.map