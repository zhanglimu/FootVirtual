import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElTooltipModule } from '../tooltip/module';
import { ElMenuItemGroup } from './menu-item-group';
import { ElMenuItem } from './menu-item';
import { ElSubmenu } from './submenu';
import { ElMenu } from './menu';
export class ElMenusModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElMenusModule, providers: [] };
    }
}
ElMenusModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElMenu, ElSubmenu, ElMenuItem, ElMenuItemGroup],
                exports: [ElMenu, ElSubmenu, ElMenuItem, ElMenuItemGroup],
                imports: [CommonModule, ElTooltipModule.forRoot()],
                entryComponents: [ElMenu, ElSubmenu, ElMenuItem, ElMenuItemGroup],
            },] },
];
/**
 * @nocollapse
 */
ElMenusModule.ctorParameters = () => [];
function ElMenusModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMenusModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMenusModule.ctorParameters;
}
//# sourceMappingURL=module.js.map