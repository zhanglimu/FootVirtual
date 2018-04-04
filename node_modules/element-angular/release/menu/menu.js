import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
export class ElMenu {
    constructor() {
        this.mode = 'vertical';
        this.theme = 'light';
        this.uniqueOpened = false;
        this.menuTrigger = 'hover';
        this.modelChange = new EventEmitter();
        this.openedMenus = this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    openMenu(index) {
        const /** @type {?} */ openedMenus = this.openedMenus;
        if (openedMenus.indexOf(index) !== -1)
            return;
        this.openedMenus.push(index);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    closeMenu(index) {
        this.openedMenus.splice(this.openedMenus.indexOf(index), 1);
    }
    /**
     * @param {?} index
     * @param {?=} path
     * @return {?}
     */
    selectHandle(index, path) {
        const /** @type {?} */ main = path || index;
        this.model = main;
        this.modelChange.emit(main);
    }
    /**
     * @return {?}
     */
    hoverBackgroundColor() {
        return this.backgroundColor ? this.hexToRGB() : '';
    }
    /**
     * @return {?}
     */
    hexToRGB() {
        const /** @type {?} */ hex = +this.backgroundColor.replace('#', '0x');
        const /** @type {?} */ rgb = [(hex & 0xff0000) >> 16, (hex & 0x00ff00) >> 8, hex & 0x0000ff];
        return `rgb(${rgb.map(v => ~~(0.8 * v)).join(',')})`;
    }
}
ElMenu.decorators = [
    { type: Component, args: [{
                selector: 'el-menu',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ul [class]="'el-menu ' + nativeClass"
      [class.el-menu--horizontal]="mode === 'horizontal'"
      [ngStyle]="{ backgroundColor: backgroundColor || '' }">
      <ng-content></ng-content>
    </ul>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElMenu.ctorParameters = () => [];
ElMenu.propDecorators = {
    'mode': [{ type: Input },],
    'theme': [{ type: Input },],
    'model': [{ type: Input },],
    'nativeClass': [{ type: Input, args: ['class',] },],
    'defaultOpeneds': [{ type: Input, args: ['default-openeds',] },],
    'uniqueOpened': [{ type: Input, args: ['unique-opened',] },],
    'menuTrigger': [{ type: Input, args: ['menu-trigger',] },],
    'backgroundColor': [{ type: Input, args: ['background-color',] },],
    'textColor': [{ type: Input, args: ['text-color',] },],
    'activeTextColor': [{ type: Input, args: ['active-text-color',] },],
    'modelChange': [{ type: Output },],
};
function ElMenu_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMenu.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMenu.ctorParameters;
    /** @type {?} */
    ElMenu.propDecorators;
    /** @type {?} */
    ElMenu.prototype.mode;
    /** @type {?} */
    ElMenu.prototype.theme;
    /** @type {?} */
    ElMenu.prototype.model;
    /** @type {?} */
    ElMenu.prototype.nativeClass;
    /** @type {?} */
    ElMenu.prototype.defaultOpeneds;
    /** @type {?} */
    ElMenu.prototype.uniqueOpened;
    /** @type {?} */
    ElMenu.prototype.menuTrigger;
    /** @type {?} */
    ElMenu.prototype.backgroundColor;
    /** @type {?} */
    ElMenu.prototype.textColor;
    /** @type {?} */
    ElMenu.prototype.activeTextColor;
    /** @type {?} */
    ElMenu.prototype.modelChange;
    /** @type {?} */
    ElMenu.prototype.openedMenus;
    /** @type {?} */
    ElMenu.prototype.showBorderIndex;
}
//# sourceMappingURL=menu.js.map