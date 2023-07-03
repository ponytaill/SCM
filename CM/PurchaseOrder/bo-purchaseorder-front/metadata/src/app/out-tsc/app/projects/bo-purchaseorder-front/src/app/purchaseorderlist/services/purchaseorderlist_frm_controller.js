import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FrameContext } from '@farris/devkit';
import { BeActionService, FormMessageService } from '@farris/command-services';
import { tap } from 'rxjs/operators';
var PurchaseOrderListFrmControllerService = /** @class */ (function () {
    function PurchaseOrderListFrmControllerService(frameContext, beActionService, messageService) {
        this.frameContext = frameContext;
        this.beActionService = beActionService;
        this.messageService = messageService;
    }
    /**
     * 方法1
     * @remarks
     * @returns
     */
    PurchaseOrderListFrmControllerService.prototype.sendGoods = function (id, IsFinished) {
        var _this = this;
        var repository = this.frameContext.repository;
        var requestInfo = repository.restService.buildRequestInfo();
        var actionUri = 'instorage1';
        //此处actionUri为报销单列表Eapi中发货操作URI尾部字段
        var body = {
            id: id,
            IsFinished: IsFinished,
            requestInfo: requestInfo
        };
        var action$ = this.beActionService.invokeAction(actionUri, 'PUT', null, null, body);
        return action$.pipe(tap(function (responseInfo) {
            _this.messageService.info("入库成功!");
        }));
    };
    PurchaseOrderListFrmControllerService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [FrameContext,
            BeActionService,
            FormMessageService])
    ], PurchaseOrderListFrmControllerService);
    return PurchaseOrderListFrmControllerService;
}());
export { PurchaseOrderListFrmControllerService };
