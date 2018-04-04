import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, } from '@angular/core';
export class DocumentWrapper extends Document {
}
DocumentWrapper.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
DocumentWrapper.ctorParameters = () => [];
function DocumentWrapper_tsickle_Closure_declarations() {
    /** @type {?} */
    DocumentWrapper.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    DocumentWrapper.ctorParameters;
}
export class WindowWrapper extends Window {
}
WindowWrapper.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
WindowWrapper.ctorParameters = () => [];
function WindowWrapper_tsickle_Closure_declarations() {
    /** @type {?} */
    WindowWrapper.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    WindowWrapper.ctorParameters;
}
export class ExDynamicService {
    /**
     * @param {?} document
     * @param {?} factory
     * @param {?} injector
     * @param {?} appRef
     */
    constructor(document, factory, injector, appRef) {
        this.document = document;
        this.factory = factory;
        this.injector = injector;
        this.appRef = appRef;
    }
    /**
     * @param {?} Container
     * @return {?}
     */
    generator(Container) {
        const /** @type {?} */ id = this.makeID();
        const /** @type {?} */ component = this.factory
            .resolveComponentFactory(Container)
            .create(this.injector);
        this.appRef.attachView(component.hostView);
        const /** @type {?} */ hostElement = this.document.createElement('div');
        hostElement.setAttribute('id', id);
        component.instance.id = id;
        hostElement.appendChild(((component.hostView)).rootNodes[0]);
        this.document.body.appendChild(hostElement);
        return component;
    }
    /**
     * @param {?} com
     * @return {?}
     */
    destroy(com) {
        const /** @type {?} */ timer = setTimeout(() => {
            this.destroyWait(com);
            clearTimeout(timer);
        }, 500);
    }
    /**
     * @param {?} com
     * @return {?}
     */
    destroyWait(com) {
        const /** @type {?} */ id = com.instance.id;
        this.appRef.detachView(com.hostView);
        com.destroy();
        try {
            const /** @type {?} */ hostElement = this.document.getElementById(id);
            hostElement && hostElement.parentElement.removeChild(hostElement);
        }
        catch (err) { }
    }
    /**
     * @return {?}
     */
    makeID() {
        return Math.random().toString(16).substr(2, 8);
    }
}
ExDynamicService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ExDynamicService.ctorParameters = () => [
    { type: DocumentWrapper, },
    { type: ComponentFactoryResolver, },
    { type: Injector, },
    { type: ApplicationRef, },
];
function ExDynamicService_tsickle_Closure_declarations() {
    /** @type {?} */
    ExDynamicService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ExDynamicService.ctorParameters;
    /** @type {?} */
    ExDynamicService.prototype.document;
    /** @type {?} */
    ExDynamicService.prototype.factory;
    /** @type {?} */
    ExDynamicService.prototype.injector;
    /** @type {?} */
    ExDynamicService.prototype.appRef;
}
//# sourceMappingURL=dynamic.service.js.map