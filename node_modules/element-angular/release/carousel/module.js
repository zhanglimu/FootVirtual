import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElCarousel } from './carousel';
import { ElCarouselItem } from './carousel-item';
export class ElCarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ElCarouselModule, providers: [] };
    }
}
ElCarouselModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ElCarousel, ElCarouselItem],
                exports: [ElCarousel, ElCarouselItem],
                imports: [CommonModule],
                entryComponents: [ElCarousel],
            },] },
];
/**
 * @nocollapse
 */
ElCarouselModule.ctorParameters = () => [];
function ElCarouselModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ElCarouselModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElCarouselModule.ctorParameters;
}
//# sourceMappingURL=module.js.map