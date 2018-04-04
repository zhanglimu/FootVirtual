const /** @type {?} */ removeNgTag = (nativeElement) => {
    const /** @type {?} */ parentElement = nativeElement.parentElement;
    if (!parentElement || !parentElement.insertBefore)
        return;
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    parentElement.removeChild(nativeElement);
};
const /** @type {?} */ isParentTag = (nativeElement, parentTag) => {
    let /** @type {?} */ parentIsTag = false;
    let /** @type {?} */ parent = nativeElement.parentElement;
    let /** @type {?} */ findLen = 3, /** @type {?} */ lowerName = '';
    while (findLen) {
        lowerName = parent.localName.toLowerCase();
        if (lowerName.indexOf('el') > -1) {
            parentIsTag = lowerName === parentTag;
            findLen = 0;
        }
        else {
            parent = parent.parentElement;
            findLen--;
        }
    }
    return parentIsTag;
};
const /** @type {?} */ isParentAttr = (nativeElement, parentAttr) => {
    let /** @type {?} */ parentIsAttr = false;
    let /** @type {?} */ parent = nativeElement.parentElement;
    let /** @type {?} */ findLen = 5;
    while (findLen) {
        parentIsAttr = parent.hasAttribute(parentAttr);
        if (parentIsAttr) {
            parentIsAttr = parent;
            findLen = 0;
        }
        else {
            parent = parent.parentElement;
            findLen--;
        }
    }
    return parentIsAttr;
};
export { removeNgTag, isParentTag, isParentAttr, };
//# sourceMappingURL=host.js.map