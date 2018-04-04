import { Input, Directive, ElementRef, Renderer2, } from '@angular/core';
import { DocumentWrapper, WindowWrapper } from '../shared/services/index';
export class ElLoadingDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} document
     * @param {?} window
     */
    constructor(el, renderer, document, window) {
        this.el = el;
        this.renderer = renderer;
        this.document = document;
        this.window = window;
        this.lock = false; // ban scroll on loading active
        this.fullScreen = false;
        this.showLoading = false;
    }
    /**
     * @param {?=} status
     * @return {?}
     */
    toggleLock(status = false) {
        if (!this.lock)
            return;
        const /** @type {?} */ nextValue = status ? 'hidden' : this.cacheOverflow;
        this.renderer.setStyle(this.document.body, 'overflow', nextValue);
    }
    /**
     * @return {?}
     */
    makeHtml() {
        this.lock && this.toggleLock(this.showLoading);
        return `
      <div class="el-loading-mask ${this.customClass} ${this.fullScreen ? ' is-fullscreen' : ''}"
        style="display: ${this.showLoading ? 'block' : 'none'}">
        <div class="el-loading-spinner">
          <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none"/>
          </svg>
          <p class="el-loading-text" style="display: ${this.text ? 'block' : 'none'}">
            ${this.text}
          </p>
        </div>
      </div>
    `;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // save old overflow
        if (this.lock) {
            this.cacheOverflow = this.window.getComputedStyle(this.document.body).overflow;
        }
        this.cacheElement = this.renderer.createElement('div');
        this.cacheElement.innerHTML = this.makeHtml();
        const /** @type {?} */ parentElement = this.fullScreen ? this.document.body : this.el.nativeElement;
        if (!this.fullScreen) {
            this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
        }
        this.renderer.appendChild(parentElement, this.cacheElement);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.showLoading && this.cacheElement) {
            this.cacheElement.innerHTML = this.makeHtml();
        }
    }
}
ElLoadingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[el-loading]',
            },] },
];
/**
 * @nocollapse
 */
ElLoadingDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: DocumentWrapper, },
    { type: WindowWrapper, },
];
ElLoadingDirective.propDecorators = {
    'text': [{ type: Input },],
    'lock': [{ type: Input },],
    'customClass': [{ type: Input, args: ['custom-class',] },],
    'fullScreen': [{ type: Input, args: ['full-screen',] },],
    'showLoading': [{ type: Input, args: ['el-loading',] },],
};
function ElLoadingDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    ElLoadingDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElLoadingDirective.ctorParameters;
    /** @type {?} */
    ElLoadingDirective.propDecorators;
    /** @type {?} */
    ElLoadingDirective.prototype.text;
    /** @type {?} */
    ElLoadingDirective.prototype.lock;
    /** @type {?} */
    ElLoadingDirective.prototype.customClass;
    /** @type {?} */
    ElLoadingDirective.prototype.fullScreen;
    /** @type {?} */
    ElLoadingDirective.prototype.showLoading;
    /** @type {?} */
    ElLoadingDirective.prototype.cacheElement;
    /** @type {?} */
    ElLoadingDirective.prototype.cacheOverflow;
    /** @type {?} */
    ElLoadingDirective.prototype.el;
    /** @type {?} */
    ElLoadingDirective.prototype.renderer;
    /** @type {?} */
    ElLoadingDirective.prototype.document;
    /** @type {?} */
    ElLoadingDirective.prototype.window;
}
//# sourceMappingURL=loading.directive.js.map