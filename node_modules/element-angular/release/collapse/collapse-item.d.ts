import { ElementRef, OnInit, TemplateRef } from '@angular/core';
import { ElCollapse, ModelValue } from './collapse';
export declare class ElCollapseItem implements OnInit {
    private root;
    private el;
    labelTmp: TemplateRef<any>;
    label: string;
    value: ModelValue | null;
    constructor(root: ElCollapse, el: ElementRef);
    isActive(): boolean;
    clickHandle(): void;
    ngOnInit(): void;
}
