import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ChgdrListUiService } from '@gsp-cmp/chgdr';
import { AppContext } from '@farris/devkit';
var PurchaseOrderFormFrmChangeLogService = /** @class */ (function () {
    function PurchaseOrderFormFrmChangeLogService(chgdrListUiService, appContext) {
        this.chgdrListUiService = chgdrListUiService;
        this.appContext = appContext;
    }
    PurchaseOrderFormFrmChangeLogService.prototype.changeLog = function () {
        // 此处entityId为业务实体ID
        var entityId = "385d8182-1b4a-4c7d-9d7f-2fe1ca5283ab";
        var dataId = this.appContext.getFrameContext('data-grid-component').bindingData.list.currentItem.getValue("id");
        this.chgdrListUiService.showDialog(entityId, dataId);
    };
    PurchaseOrderFormFrmChangeLogService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ChgdrListUiService,
            AppContext])
    ], PurchaseOrderFormFrmChangeLogService);
    return PurchaseOrderFormFrmChangeLogService;
}());
export { PurchaseOrderFormFrmChangeLogService };
