import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService, Uri } from '@farris/bef';
var MaterialProxy = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialProxy, _super);
    function MaterialProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/scm/cm/v1.0/materialform_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    MaterialProxy.prototype.UpdateAttachment = function (updateAttachInfo) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/updateattachment', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                updateAttachInfo: updateAttachInfo,
            }
        };
        return this.invoke(url, method, options);
    };
    MaterialProxy.prototype.BatchUploadAttachment = function (batchUploadInfo) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/batchuploadattachment', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                batchUploadInfo: batchUploadInfo,
            }
        };
        return this.invoke(url, method, options);
    };
    MaterialProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], MaterialProxy);
    return MaterialProxy;
}(BefProxy));
export { MaterialProxy };
