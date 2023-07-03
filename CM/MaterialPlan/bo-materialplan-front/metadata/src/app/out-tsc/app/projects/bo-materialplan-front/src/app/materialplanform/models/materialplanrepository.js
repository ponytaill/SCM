import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { MaterialPlanEntity } from './entities/materialplanentity';
import { MaterialPlanProxy } from './materialplanproxy';
var MaterialPlanRepository = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialPlanRepository, _super);
    function MaterialPlanRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'MaterialPlanRepository';
        _this.paginationInfo = {
            MaterialPlanEntity: {
                pageSize: 20,
            }
        };
        _this.proxy = injector.get(MaterialPlanProxy, null);
        return _this;
    }
    MaterialPlanRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/scm/cm/v1.0/materialplanform_frm',
            entityType: MaterialPlanEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], MaterialPlanRepository);
    return MaterialPlanRepository;
}(BefRepository));
export { MaterialPlanRepository };
