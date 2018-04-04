import { Component, ContentChild, Host, Input } from '@angular/core';
import { dropAnimation } from '../shared/animation/index';
import { ElMenu } from './menu';
export class ElSubmenu {
    /**
     * @param {?} rootMenu
     */
    constructor(rootMenu) {
        this.rootMenu = rootMenu;
        this.opened = false;
        this.active = false;
        this.subActive = false;
        this.dontUserHover = false;
    }
    /**
     * @return {?}
     */
    mouseenterHandle() {
        this.active = true;
        if (this.dontUserHover)
            return;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.rootMenu.openMenu(this.index);
            this.updateOpened();
            clearTimeout(this.timer);
        }, 300);
    }
    /**
     * @return {?}
     */
    mouseleaveHandle() {
        this.active = false;
        if (this.dontUserHover)
            return;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.rootMenu.closeMenu(this.index);
            this.updateOpened();
            clearTimeout(this.timer);
        }, 300);
    }
    /**
     * @param {?} path
     * @return {?}
     */
    selectHandle(path) {
        this.rootMenu.selectHandle(this.index, path);
        // selected and close list
        if (this.rootMenu.mode !== 'vertical') {
            this.rootMenu.closeMenu(this.index);
        }
        this.updateOpened();
    }
    /**
     * @return {?}
     */
    updateOpened() {
        this.opened = this.rootMenu.openedMenus.indexOf(this.index) > -1;
    }
    /**
     * @return {?}
     */
    clickHandle() {
        if (!this.dontUserHover)
            return;
        if (this.opened) {
            this.rootMenu.closeMenu(this.index);
        }
        else {
            this.rootMenu.openMenu(this.index);
        }
        this.updateOpened();
    }
    /**
     * @return {?}
     */
    borderColor() {
        return this.rootMenu.showBorderIndex === this.index ?
            (this.rootMenu.activeTextColor ? this.rootMenu.activeTextColor : '#409eff')
            : 'transparent';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateOpened();
        this.active = this.index === this.rootMenu.model;
        this.dontUserHover = this.rootMenu.mode === 'vertical' || this.rootMenu.menuTrigger !== 'hover';
    }
}
ElSubmenu.decorators = [
    { type: Component, args: [{
                selector: 'el-submenu',
                animations: [dropAnimation],
                template: `
    <li [class.el-submenu]="true"
      [class.is-active]="active"
      [class.is-opened]="opened"
      (mouseenter)="mouseenterHandle()"
      (mouseleave)="mouseleaveHandle()">
      <div class="el-submenu__title" (click)="clickHandle()"
        [ngStyle]="{ paddingLeft: '20px;', color: rootMenu.textColor || '', borderBottomColor: borderColor() }"
        #subTitle
        (mouseenter)="subTitle.style.backgroundColor = rootMenu.hoverBackgroundColor()"
        (mouseleave)="subTitle.style.backgroundColor = ''">
        <ng-container *ngIf="!titleTmp">
          {{title}}
        </ng-container>
        <ng-container *ngIf="titleTmp">
          <ng-template [ngTemplateOutlet]="titleTmp"></ng-template>
        </ng-container>
        <i class="el-submenu__icon-arrow"
          [class.el-icon-caret-bottom]="rootMenu.mode === 'horizontal'"
          [class.el-icon-arrow-down]="rootMenu.mode === 'vertical'"></i>
      </div>
      <ul class="el-menu" [@dropAnimation]="opened"
        [ngStyle]="{ backgroundColor: rootMenu.backgroundColor || '' }">
        <ng-content></ng-content>
      </ul>
    </li>
  `,
            },] },
];
/**
 * @nocollapse
 */
ElSubmenu.ctorParameters = () => [
    { type: ElMenu, decorators: [{ type: Host },] },
];
ElSubmenu.propDecorators = {
    'titleTmp': [{ type: ContentChild, args: ['title',] },],
    'index': [{ type: Input },],
    'title': [{ type: Input },],
};
function ElSubmenu_tsickle_Closure_declarations() {
    /** @type {?} */
    ElSubmenu.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElSubmenu.ctorParameters;
    /** @type {?} */
    ElSubmenu.propDecorators;
    /** @type {?} */
    ElSubmenu.prototype.titleTmp;
    /** @type {?} */
    ElSubmenu.prototype.index;
    /** @type {?} */
    ElSubmenu.prototype.title;
    /** @type {?} */
    ElSubmenu.prototype.timer;
    /** @type {?} */
    ElSubmenu.prototype.opened;
    /** @type {?} */
    ElSubmenu.prototype.active;
    /** @type {?} */
    ElSubmenu.prototype.subActive;
    /** @type {?} */
    ElSubmenu.prototype.dontUserHover;
    /** @type {?} */
    ElSubmenu.prototype.rootMenu;
}
//# sourceMappingURL=submenu.js.map