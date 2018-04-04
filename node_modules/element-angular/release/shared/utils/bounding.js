const /** @type {?} */ getRealShape = (el) => {
    const /** @type {?} */ rect = el.getBoundingClientRect();
    const { width, height } = window.getComputedStyle(el);
    const /** @type {?} */ getCSSStyleVal = (val, parentNum) => {
        if (!val)
            return 0;
        const /** @type {?} */ str = String(val);
        const /** @type {?} */ strVal = str.includes('px') ? str.split('px')[0] :
            str.includes('%') ? Number(str.split('%')[0]) * parentNum * 0.01 : str;
        return Number.isNaN(Number(strVal)) ? 0 : Number(strVal);
    };
    return {
        width: getCSSStyleVal(width, rect.width),
        height: getCSSStyleVal(height, rect.height),
    };
};
const /** @type {?} */ getPositionForDir = (hostRect, selfRect, dir, arrowDir) => {
    const /** @type {?} */ diffWidth = hostRect.width - selfRect.width;
    const /** @type {?} */ diffHeight = selfRect.height - hostRect.height;
    const /** @type {?} */ topMap = {
        top: -10 - selfRect.height,
        bottom: hostRect.height,
        left: arrowDir === 'start' ? 0 : arrowDir === 'end' ? 0 - diffHeight : 0 - Math.abs(diffHeight / 2),
        right: arrowDir === 'start' ? 0 : arrowDir === 'end' ? 0 - diffHeight : 0 - Math.abs(diffHeight / 2),
    };
    const /** @type {?} */ leftMap = {
        left: -10 - selfRect.width,
        right: hostRect.width,
        top: arrowDir === 'start' ? 0 : arrowDir === 'end' ? diffWidth : diffWidth / 2,
        bottom: arrowDir === 'start' ? 0 : arrowDir === 'end' ? diffWidth : diffWidth / 2,
    };
    const /** @type {?} */ isHorizontal = dir === 'left' || dir === 'right';
    const /** @type {?} */ arrowLen = isHorizontal
        ? arrowDir === 'center' ? selfRect.height : Math.min(hostRect.height, selfRect.height)
        : arrowDir === 'center' ? selfRect.width : Math.min(hostRect.height, selfRect.height);
    const /** @type {?} */ position = {
        arrowFace: dir,
        arrowDir: isHorizontal ? (arrowDir === 'end' ? 'bottom' : 'top') : (arrowDir === 'start' ? 'left' : 'right'),
        arrowPosition: arrowLen / 2 - 5,
        top: topMap[dir],
        left: leftMap[dir],
    };
    return position;
};
export { getPositionForDir, getRealShape, };
//# sourceMappingURL=bounding.js.map