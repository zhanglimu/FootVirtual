/**
 *  initial file from Element
 *  see: github.com/ElemeFE/element/blob/dev/packages/input/src/calcTextareaHeight.js
 *
 */
let /** @type {?} */ hiddenTextarea;
const /** @type {?} */ HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
const /** @type {?} */ CONTEXT_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
];
const /** @type {?} */ calculateNodeStyling = (targetElement) => {
    const /** @type {?} */ style = window.getComputedStyle(targetElement);
    const /** @type {?} */ boxSizing = style.getPropertyValue('box-sizing');
    const /** @type {?} */ paddingSize = (parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top')));
    const /** @type {?} */ borderSize = (parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width')));
    const /** @type {?} */ contextStyle = CONTEXT_STYLE
        .map(name => `${name}:${style.getPropertyValue(name)}`)
        .join(';');
    return { contextStyle, paddingSize, borderSize, boxSizing };
};
const /** @type {?} */ getTextareaHeight = (targetElement, minRows = null, maxRows = null) => {
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }
    const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
    hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';
    let /** @type {?} */ height = hiddenTextarea.scrollHeight;
    if (boxSizing === 'border-box') {
        height += borderSize;
    }
    else if (boxSizing === 'content-box') {
        height -= paddingSize;
    }
    hiddenTextarea.value = '';
    const /** @type {?} */ singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
        let /** @type {?} */ minHeight = singleRowHeight * minRows;
        if (boxSizing === 'border-box') {
            minHeight += paddingSize + borderSize;
        }
        height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
        let /** @type {?} */ maxHeight = singleRowHeight * maxRows;
        if (boxSizing === 'border-box') {
            maxHeight += paddingSize + borderSize;
        }
        height = Math.min(maxHeight, height);
    }
    return height + 'px';
};
export { getTextareaHeight, };
//# sourceMappingURL=help.js.map