import { EventEmitter } from '@angular/core';
export declare class ElDropdownProps {
    model: string[];
    splitButton: boolean;
    size: string;
    type: string;
    menuAlign: string;
    trigger: string;
    hideOnClick: boolean;
    visibleChange: EventEmitter<any>;
    selected: EventEmitter<any>;
}
