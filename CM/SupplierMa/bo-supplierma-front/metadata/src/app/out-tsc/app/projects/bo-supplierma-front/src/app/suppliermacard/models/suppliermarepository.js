import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { SupplierMaEntity } from './entities/suppliermaentity';
import { SupplierMaProxy } from './suppliermaproxy';
var SupplierMaRepository = /** @class */ (function (_super) {
    tslib_1.__extends(SupplierMaRepository, _super);
    function SupplierMaRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'SupplierMaRepository';
        _this.paginationInfo = {};
        _this.proxy = injector.get(SupplierMaProxy, null);
        return _this;
    }
    SupplierMaRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/scm/cm/v1.0/suppliermacard_frm',
            entityType: SupplierMaEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], SupplierMaRepository);
    return SupplierMaRepository;
}(BefRepository));
export { SupplierMaRepository };
