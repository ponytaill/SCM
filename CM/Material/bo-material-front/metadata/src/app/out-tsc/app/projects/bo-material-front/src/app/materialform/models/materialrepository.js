import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { MaterialEntity } from './entities/materialentity';
import { MaterialProxy } from './materialproxy';
var MaterialRepository = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialRepository, _super);
    function MaterialRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'MaterialRepository';
        _this.paginationInfo = {
            MaterialEntity: {
                pageSize: 20,
            }
        };
        _this.proxy = injector.get(MaterialProxy, null);
        return _this;
    }
    MaterialRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/scm/cm/v1.0/materialform_frm',
            entityType: MaterialEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], MaterialRepository);
    return MaterialRepository;
}(BefRepository));
export { MaterialRepository };
