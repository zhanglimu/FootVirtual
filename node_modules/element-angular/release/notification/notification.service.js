import { Injectable, Optional } from '@angular/core';
import { ElNotificationContainer } from './notification';
import { ExDynamicService } from '../shared/services/index';
export class ElNotificationService {
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
     * @param {?=} title
     * @return {?}
     */
    show(msg, title) {
        const /** @type {?} */ len = this.components.length;
        if (len === 0 || this.components[len - 1].init) {
            this.createComponent();
        }
        // mark the component
        const /** @type {?} */ currentLen = this.components.length;
        const /** @type {?} */ current = this.components[currentLen - 1];
        current.init = true;
        current.instance.setContent(msg, title);
        // init current component
        if (currentLen > 1) {
            const /** @type {?} */ lastInstance = this.components[currentLen - 2].instance;
            current.instance.offset = lastInstance.height + lastInstance.offset + 15;
        }
        current.instance.onDestroy = () => {
            const /** @type {?} */ index = this.components.findIndex(com => com.id === current.id);
            // reflow top style
            this.components.forEach((com, i) => {
                if (i <= index)
                    return;
                com.instance.offset = com.instance.offset - current.instance.height - 15;
            });
            // component detach and remove element
            this.dynamic.destroy(current.copy);
            // remove empty item
            this.components.splice(index, 1);
        };
        const /** @type {?} */ timer = setTimeout(() => {
            current.instance.show();
            clearTimeout(timer);
        }, 0);
    }
    /**
     * @param {?} msg
     * @param {?=} title
     * @return {?}
     */
    success(msg, title) {
        this.setOptions({ type: 'success' });
        this.show(msg, title);
    }
    /**
     * @param {?} msg
     * @param {?=} title
     * @return {?}
     */
    warning(msg, title) {
        this.setOptions({ type: 'warning' });
        this.show(msg, title);
    }
    /**
     * @param {?} msg
     * @param {?=} title
     * @return {?}
     */
    info(msg, title) {
        this.setOptions({ type: 'info' });
        this.show(msg, title);
    }
    /**
     * @param {?} msg
     * @param {?=} title
     * @return {?}
     */
    error(msg, title) {
        this.setOptions({ type: 'error' });
        this.show(msg, title);
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
        const /** @type {?} */ com = this.dynamic.generator(ElNotificationContainer);
        this.components.push({
            instance: com.instance,
            id: com.instance.id,
            copy: com,
            init: false
        });
    }
}
ElNotificationService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ElNotificationService.ctorParameters = () => [
    { type: ElNotificationContainer, decorators: [{ type: Optional },] },
    { type: ExDynamicService, },
];
function ElNotificationService_tsickle_Closure_declarations() {
    /** @type {?} */
    ElNotificationService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElNotificationService.ctorParameters;
    /** @type {?} */
    ElNotificationService.prototype.components;
    /** @type {?} */
    ElNotificationService.prototype.root;
    /** @type {?} */
    ElNotificationService.prototype.dynamic;
}
//# sourceMappingURL=notification.service.js.map