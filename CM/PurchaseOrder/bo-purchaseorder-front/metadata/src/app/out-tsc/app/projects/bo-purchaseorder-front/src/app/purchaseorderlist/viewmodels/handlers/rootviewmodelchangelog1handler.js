import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { PurchaseOrderFormFrmChangeLogService as PurchaseOrderFormFrmChangeLogService1 } from '../../services/purchaseorderlist_frm_changelog';
var rootviewmodelchangeLog1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(rootviewmodelchangeLog1Handler, _super);
    function rootviewmodelchangeLog1Handler(_PurchaseOrderFormFrmChangeLogService1) {
        var _this = _super.call(this) || this;
        _this._PurchaseOrderFormFrmChangeLogService1 = _PurchaseOrderFormFrmChangeLogService1;
        return _this;
    }
    rootviewmodelchangeLog1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('changeLog', function (context) {
            var args = [];
            return _this.invoke(_this._PurchaseOrderFormFrmChangeLogService1, 'changeLog', args, context);
        });
    };
    rootviewmodelchangeLog1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'rootviewmodelchangeLog1'
        }),
        tslib_1.__metadata("design:paramtypes", [PurchaseOrderFormFrmChangeLogService1])
    ], rootviewmodelchangeLog1Handler);
    return rootviewmodelchangeLog1Handler;
}(CommandHandler));
export { rootviewmodelchangeLog1Handler };
