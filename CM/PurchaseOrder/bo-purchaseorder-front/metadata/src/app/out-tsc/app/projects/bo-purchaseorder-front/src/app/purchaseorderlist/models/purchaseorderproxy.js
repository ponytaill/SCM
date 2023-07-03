import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService, Uri } from '@farris/bef';
var PurchaseOrderProxy = /** @class */ (function (_super) {
    tslib_1.__extends(PurchaseOrderProxy, _super);
    function PurchaseOrderProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/scm/cm/v1.0/purchaseorderlist_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    PurchaseOrderProxy.prototype.Instorage1 = function (id, IsFinished) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/instorage1', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                id: id,
                IsFinished: IsFinished,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderProxy.prototype.Instorage2 = function (template) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/instorage2', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                template: template,
            }
        };
        return this.invoke(url, method, options);
    };
    PurchaseOrderProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], PurchaseOrderProxy);
    return PurchaseOrderProxy;
}(BefProxy));
export { PurchaseOrderProxy };
