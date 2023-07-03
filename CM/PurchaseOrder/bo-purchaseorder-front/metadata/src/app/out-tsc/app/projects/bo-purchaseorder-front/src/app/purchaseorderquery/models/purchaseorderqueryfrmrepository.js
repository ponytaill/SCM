import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { PurchaseOrderQueryFrmEntity } from './entities/purchaseorderqueryfrmentity';
import { PurchaseOrderQueryFrmProxy } from './purchaseorderqueryfrmproxy';
var PurchaseOrderQueryFrmRepository = /** @class */ (function (_super) {
    tslib_1.__extends(PurchaseOrderQueryFrmRepository, _super);
    function PurchaseOrderQueryFrmRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'PurchaseOrderQueryFrmRepository';
        _this.paginationInfo = {};
        _this.proxy = injector.get(PurchaseOrderQueryFrmProxy, null);
        return _this;
    }
    PurchaseOrderQueryFrmRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/scm/cm/v1.0/purchaseorderquery_frm',
            entityType: PurchaseOrderQueryFrmEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], PurchaseOrderQueryFrmRepository);
    return PurchaseOrderQueryFrmRepository;
}(BefRepository));
export { PurchaseOrderQueryFrmRepository };
