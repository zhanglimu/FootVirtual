import { OnInit, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { DocumentWrapper, WindowWrapper } from '../shared/services';
export declare class ElLoadingDirective implements OnInit, OnChanges {
    private el;
    private renderer;
    private document;
    private window;
    text: string;
    lock: boolean;
    customClass: string;
    fullScreen: boolean;
    showLoading: boolean;
    cacheElement: HTMLElement;
    cacheOverflow: string;
    constructor(el: ElementRef, renderer: Renderer2, document: DocumentWrapper, window: WindowWrapper);
    toggleLock(status?: boolean): void;
    makeHtml(): string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
