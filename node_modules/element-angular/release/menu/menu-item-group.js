import { Component, ContentChild, Host, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ElMenu } from './menu';
export class ElMenuItemGroup {
    /**
     * @param {?} rootMenu
     * @param {?} sanitizer
     */
    constructor(rootMenu, sanitizer) {
        this.rootMenu = rootMenu;
        this.sanitizer = sanitizer;
        this.title = '';
    }
    /**
     * @return {?}
     */
    paddingStyle() {
        return this.sanitizer.bypassSecurityTrustStyle('padding-left: 20px');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.title) {
            console.warn('el-menu-item-group required props: [title: string]');
        }
    }
}
ElMenuItemGroup.decorators = [
    { type: Component, args: [{
                selector: 'el-menu-item-group',
                template: `
    <li class="el-menu-item-group">
      <div class="el-menu-item-group__title" [style]="paddingStyle()" #groupTitle
        (mouseenter)="groupTitle.style.backgroundColor = rootMenu.hoverBackgroundColor() "
        (mouseleave)="groupTitle.style.backgroundColor = ''">
        <ng-container *ngIf="!titleTmp">
          {{title}}
        </ng-container>
        <ng-container *ngIf="titleTmp">
          <ng-template [ngTemplateOutlet]="titleTmp"></ng-template>
        </ng-container>
      </div>
      <ul><ng-content></ng-content></ul>
    </li>
  `
            },] },
];
/**
 * @nocollapse
 */
ElMenuItemGroup.ctorParameters = () => [
    { type: ElMenu, decorators: [{ type: Host },] },
    { type: DomSanitizer, },
];
ElMenuItemGroup.propDecorators = {
    'titleTmp': [{ type: ContentChild, args: ['title',] },],
    'title': [{ type: Input },],
};
function ElMenuItemGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMenuItemGroup.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMenuItemGroup.ctorParameters;
    /** @type {?} */
    ElMenuItemGroup.propDecorators;
    /** @type {?} */
    ElMenuItemGroup.prototype.titleTmp;
    /** @type {?} */
    ElMenuItemGroup.prototype.title;
    /** @type {?} */
    ElMenuItemGroup.prototype.rootMenu;
    /** @type {?} */
    ElMenuItemGroup.prototype.sanitizer;
}
//# sourceMappingURL=menu-item-group.js.map