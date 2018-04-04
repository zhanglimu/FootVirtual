import { OnInit } from '@angular/core';
import { ElPaginationProps } from './pagination.props';
export declare class ElPagination extends ElPaginationProps implements OnInit {
    showPager: boolean;
    showPrev: boolean;
    showNext: boolean;
    showTotal: boolean;
    showSize: boolean;
    showJumper: boolean;
    static showLayout(ElName: string, layout: string[]): boolean;
    constructor();
    nextHandle(step: number): void;
    updatePageSize(nextPageSize: number): void;
    ngOnInit(): void;
}
