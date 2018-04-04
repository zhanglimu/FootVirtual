import { Injectable, Optional } from '@angular/core';
import { ElMessageContainer } from './message';
import { ExDynamicService } from '../shared/services/index';
export class ElMessageService {
    /**
     * @param {?} root
     * @param {?} dynamic
     */
    constructor(root, dynamic) {
        this.root = root;
        this.dynamic = dynamic;
        this.components = [];
        this.createComponent();
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    show(msg) {
        if (this.components.length === 0 || this.components[this.components.length - 1].init) {
            this.createComponent();
        }
        // mark the component
        const /** @type {?} */ current = this.components[this.components.length - 1];
        current.init = true;
        current.instance.onDestroy = () => {
            // component detach and destroy
            this.dynamic.destroy(current.copy);
            // remove empty item
            const /** @type {?} */ index = this.components.findIndex(com => com.id === current.id);
            this.components.splice(index, 1);
        };
        const /** @type {?} */ timer = setTimeout(() => {
            current.instance.show(msg);
            clearTimeout(timer);
        }, 0);
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    success(msg) {
        this.setOptions({ type: 'success' });
        this.show(msg);
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    warning(msg) {
        this.setOptions({ type: 'warning' });
        this.show(msg);
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    info(msg) {
        this.setOptions({ type: 'info' });
        this.show(msg);
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    error(msg) {
        this.setOptions({ type: 'error' });
        this.show(msg);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        if (this.components.length === 0 || this.components[this.components.length - 1].init) {
            this.createComponent();
        }
        const /** @type {?} */ last = this.components[this.components.length - 1];
        last.instance = Object.assign(last.instance, options);
    }
    /**
     * @return {?}
     */
    createComponent() {
        const /** @type {?} */ com = this.dynamic.generator(ElMessageContainer);
        this.components.push({
            instance: com.instance,
            id: com.instance.id,
            copy: com,
            init: false
        });
    }
}
ElMessageService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ElMessageService.ctorParameters = () => [
    { type: ElMessageContainer, decorators: [{ type: Optional },] },
    { type: ExDynamicService, },
];
function ElMessageService_tsickle_Closure_declarations() {
    /** @type {?} */
    ElMessageService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElMessageService.ctorParameters;
    /** @type {?} */
    ElMessageService.prototype.components;
    /** @type {?} */
    ElMessageService.prototype.root;
    /** @type {?} */
    ElMessageService.prototype.dynamic;
}
//# sourceMappingURL=message.service.js.map