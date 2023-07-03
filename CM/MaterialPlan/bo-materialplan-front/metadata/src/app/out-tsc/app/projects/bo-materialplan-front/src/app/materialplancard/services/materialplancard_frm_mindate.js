import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FrameContext, BindingData } from '@farris/devkit';
import { FormMessageService } from '@farris/command-services';
var MaterialDetailFrmMinDateService = /** @class */ (function () {
    function MaterialDetailFrmMinDateService(msgService, frameContext, bindingData) {
        this.msgService = msgService;
        this.frameContext = frameContext;
        this.bindingData = bindingData;
    }
    MaterialDetailFrmMinDateService.prototype.getMinDate = function () {
        var date = new Date();
        this.frameContext.appContext.frameContextManager.getFrameContextById("root-component").viewModel.uiState['mindate'] = date;
    };
    MaterialDetailFrmMinDateService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [FormMessageService,
            FrameContext,
            BindingData])
    ], MaterialDetailFrmMinDateService);
    return MaterialDetailFrmMinDateService;
}());
export { MaterialDetailFrmMinDateService };
