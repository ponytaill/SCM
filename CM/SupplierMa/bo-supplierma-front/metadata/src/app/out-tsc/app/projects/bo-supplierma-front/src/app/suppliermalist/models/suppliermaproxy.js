import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService } from '@farris/bef';
var SupplierMaProxy = /** @class */ (function (_super) {
    tslib_1.__extends(SupplierMaProxy, _super);
    function SupplierMaProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/scm/cm/v1.0/suppliermalist_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    SupplierMaProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], SupplierMaProxy);
    return SupplierMaProxy;
}(BefProxy));
export { SupplierMaProxy };
