import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class ElUploadRequest {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} path
     * @param {?} file
     * @return {?}
     */
    upload(path, file) {
        const /** @type {?} */ req = new HttpRequest('POST', path, file, {
            headers: this.headers,
            reportProgress: true,
            withCredentials: this.withCredentials,
        });
        return this.http.request(req);
    }
    /**
     * @param {?=} headers
     * @return {?}
     */
    setHeader(headers = {}) {
        this.headers = new HttpHeaders(headers);
        return this;
    }
    /**
     * @param {?} withCredentials
     * @return {?}
     */
    setCredentials(withCredentials) {
        this.withCredentials = withCredentials;
        return this;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    setFileName(name) {
        this.fileName = name;
        return this;
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    addExtraData(data = {}) {
        this.defaultBody = data;
        return this;
    }
}
ElUploadRequest.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ElUploadRequest.ctorParameters = () => [
    { type: HttpClient, },
];
function ElUploadRequest_tsickle_Closure_declarations() {
    /** @type {?} */
    ElUploadRequest.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ElUploadRequest.ctorParameters;
    /** @type {?} */
    ElUploadRequest.prototype.headers;
    /** @type {?} */
    ElUploadRequest.prototype.withCredentials;
    /** @type {?} */
    ElUploadRequest.prototype.fileName;
    /** @type {?} */
    ElUploadRequest.prototype.defaultBody;
    /** @type {?} */
    ElUploadRequest.prototype.http;
}
//# sourceMappingURL=upload.request.js.map