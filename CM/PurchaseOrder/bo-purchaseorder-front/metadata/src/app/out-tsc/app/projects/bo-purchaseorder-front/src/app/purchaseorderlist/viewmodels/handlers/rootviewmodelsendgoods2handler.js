import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { PurchaseOrderListFrmControllerService as PurchaseOrderListFrmControllerService1 } from '../../services/purchaseorderlist_frm_controller';
var rootviewmodelsendGoods2Handler = /** @class */ (function (_super) {
    tslib_1.__extends(rootviewmodelsendGoods2Handler, _super);
    function rootviewmodelsendGoods2Handler(_ListDataService1, _PurchaseOrderListFrmControllerService1) {
        var _this = _super.call(this) || this;
        _this._ListDataService1 = _ListDataService1;
        _this._PurchaseOrderListFrmControllerService1 = _PurchaseOrderListFrmControllerService1;
        return _this;
    }
    rootviewmodelsendGoods2Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('sendGoods', function (context) {
            var args = [
                '{COMMAND~/params/id}',
                '{COMMAND~/params/IsFinished}'
            ];
            return _this.invoke(_this._PurchaseOrderListFrmControllerService1, 'sendGoods', args, context);
        });
        this.addTask('refresh', function (context) {
            var args = [
                '{COMMAND~/params/loadCmdName}',
                '{COMMAND~/params/loadCmdFrameId}'
            ];
            return _this.invoke(_this._ListDataService1, 'refresh', args, context);
        });
        this.addLink('sendGoods', 'refresh', "1==1");
    };
    rootviewmodelsendGoods2Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'rootviewmodelsendGoods2'
        }),
        tslib_1.__metadata("design:paramtypes", [ListDataService1,
            PurchaseOrderListFrmControllerService1])
    ], rootviewmodelsendGoods2Handler);
    return rootviewmodelsendGoods2Handler;
}(CommandHandler));
export { rootviewmodelsendGoods2Handler };
