import { Component, ElementRef, HostListener, Renderer2, ViewChild, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ElDropdownProps } from './dropdown.props';
import { dropAnimation } from './animation';
import { DocumentWrapper } from '../shared/services/index';
export class ElDropdown extends ElDropdownProps {
    /**
     * @param {?} renderer
     * @param {?} sanitizer
     * @param {?} document
     * @param {?} el
     */
    constructor(renderer, sanitizer, document, el) {
        super();
        this.renderer = renderer;
        this.sanitizer = sanitizer;
        this.document = document;
        this.el = el;
        this.showMenu = false;
        this.slideToBottom = true;
        this.mouseleave = () => {
            if (this.trigger !== 'hover')
                return;
            this.timer = setTimeout(() => {
                this.closeMenu();
                clearTimeout(this.timer);
            }, 400);
        };
        this.mouseenter = () => {
            if (this.trigger !== 'hover')
                return;
            this.timer && clearTimeout(this.timer);
            !this.showMenu && this.visibleChange.emit();
            this.showMenu = true;
        };
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    openMenu(event) {
        event && event.stopPropagation();
        this.showMenu = !this.showMenu;
        this.visibleChange.emit();
        this.globalListenFunc = this.renderer.listen('document', 'click', () => {
            this.closeMenu();
        });
    }
    /**
     * @return {?}
     */
    closeMenu() {
        this.showMenu = false;
        this.visibleChange.emit();
        this.globalListenFunc && this.globalListenFunc();
    }
    /**
     * @param {?} model
     * @return {?}
     */
    selectHandle(model) {
        console.log(model);
        this.selected.emit(model);
        // select and hide menu (props)
        this.hideOnClick && this.closeMenu();
    }
    /**
     * @return {?}
     */
    makeListStyles() {
        const /** @type {?} */ styles = `top: ${this.slideToBottom ? '100%' : (0 - this.listHeight) + 'px'};` +
            `${this.menuAlign === 'end' ? 'right' : 'left'}: 0; position: absolute; min-width: 100px;`;
        return this.sanitizer.bypassSecurityTrustStyle(styles);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.listHeight = this.list.nativeElement.offsetHeight + 12;
        this.globalScrollFunc = this.renderer.listen('window', 'scroll', () => {
            const /** @type {?} */ top = this.el.nativeElement.getBoundingClientRect().top;
            const /** @type {?} */ nextValue = this.document.documentElement.clientHeight - top > this.listHeight;
            if (nextValue !== this.slideToBottom) {
                this.slideToBottom = nextValue;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.globalListenFunc && this.globalListenFunc();
        this.globalScrollFunc && this.globalScrollFunc();
    }
}
ElDropdown.decorators = [
    { type: Component, args: [{
                selector: 'el-dropdown',
                template: `
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
    <div class="el-dropdown">
      <ng-container *ngIf="splitButton">
        <el-button [type]="type" [size]="size" (click)="openMenu($event)">
          <span>
            <ng-template [ngTemplateOutlet]="content"></ng-template>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
        </el-button>
      </ng-container>
      <ng-container *ngIf="!splitButton">
        <span class="el-dropdown-link" (click)="openMenu($event)" style="cursor: pointer;">
          <ng-template [ngTemplateOutlet]="content"></ng-template>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
      </ng-container>
      <div [style]="makeListStyles()">
        <ul class="el-dropdown-menu" #list [@dropAnimation]="showMenu">
          <el-dropdown-item *ngFor="let item of model" [model]="item" (selected)="selectHandle(item)">
          </el-dropdown-item>
        </ul>
      </div>
    </div>
  `,
                animations: [dropAnimation],
                styles: ['.el-dropdown-menu { overflow: hidden; }'],
            },] },
];
/**
 * @nocollapse
 */
ElDropdown.ctorParameters = () => [
    { type: Renderer2, },
    { type: DomSanitizer, },
    { type: DocumentWrapper, },
    { type: ElementRef, },
];
ElDropdown.propDecorators = {
    'list': [{ type: ViewChild, args: ['list',] },],
    'mouseleave': [{ type: HostListener, args: ['mouseleave',] },],
    'mouseenter': [{ type: HostListener, args: ['mouseenter',] },],
};
function ElDropdown_tsickle_Closure_declarations() {
    /** @type {?} */
    ElDropdown.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElDropdown.ctorParameters;
    /** @type {?} */
    ElDropdown.propDecorators;
    /** @type {?} */
    ElDropdown.prototype.list;
    /** @type {?} */
    ElDropdown.prototype.showMenu;
    /** @type {?} */
    ElDropdown.prototype.timer;
    /** @type {?} */
    ElDropdown.prototype.slideToBottom;
    /** @type {?} */
    ElDropdown.prototype.listHeight;
    /** @type {?} */
    ElDropdown.prototype.globalListenFunc;
    /** @type {?} */
    ElDropdown.prototype.globalScrollFunc;
    /** @type {?} */
    ElDropdown.prototype.mouseleave;
    /** @type {?} */
    ElDropdown.prototype.mouseenter;
    /** @type {?} */
    ElDropdown.prototype.renderer;
    /** @type {?} */
    ElDropdown.prototype.sanitizer;
    /** @type {?} */
    ElDropdown.prototype.document;
    /** @type {?} */
    ElDropdown.prototype.el;
}
//# sourceMappingURL=dropdown.js.map