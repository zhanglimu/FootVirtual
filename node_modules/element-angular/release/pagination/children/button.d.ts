import { ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare class ElPaginationButton implements OnInit {
    private el;
    dir: string;
    disabled: boolean;
    next: EventEmitter<number>;
    constructor(el: ElementRef);
    clickHandle(step: number): void;
    ngOnInit(): void;
}
