import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService, Uri } from '@farris/bef';
var SupplierMaProxy = /** @class */ (function (_super) {
    tslib_1.__extends(SupplierMaProxy, _super);
    function SupplierMaProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/scm/cm/v1.0/suppliermacard_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    SupplierMaProxy.prototype.DataImportVMAction = function (dataImportContext) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/dataimportvmaction', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                dataImportContext: dataImportContext,
            }
        };
        return this.invoke(url, method, options);
    };
    SupplierMaProxy.prototype.DataExportVMAction = function (exportContext) {
        var uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/dataexportvmaction', {});
        var url = uri.toString();
        var method = 'PUT';
        var options = {
            params: {},
            headers: {},
            body: {
                requestInfo: null,
                exportContext: exportContext,
            }
        };
        return this.invoke(url, method, options);
    };
    SupplierMaProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], SupplierMaProxy);
    return SupplierMaProxy;
}(BefProxy));
export { SupplierMaProxy };
