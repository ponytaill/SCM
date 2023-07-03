import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { MaterialDetailFrmMinDateService as MaterialDetailFrmMinDateService1 } from '../../services/materialplancard_frm_mindate';
var rootviewmodelgetMinDate1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(rootviewmodelgetMinDate1Handler, _super);
    function rootviewmodelgetMinDate1Handler(_MaterialDetailFrmMinDateService1) {
        var _this = _super.call(this) || this;
        _this._MaterialDetailFrmMinDateService1 = _MaterialDetailFrmMinDateService1;
        return _this;
    }
    rootviewmodelgetMinDate1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('getMinDate', function (context) {
            var args = [];
            return _this.invoke(_this._MaterialDetailFrmMinDateService1, 'getMinDate', args, context);
        });
    };
    rootviewmodelgetMinDate1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'rootviewmodelgetMinDate1'
        }),
        tslib_1.__metadata("design:paramtypes", [MaterialDetailFrmMinDateService1])
    ], rootviewmodelgetMinDate1Handler);
    return rootviewmodelgetMinDate1Handler;
}(CommandHandler));
export { rootviewmodelgetMinDate1Handler };
