import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { SubListDataService as SubListDataService1 } from '@farris/command-services';
var plandetailsAddItem1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(plandetailsAddItem1Handler, _super);
    function plandetailsAddItem1Handler(_SubListDataService1) {
        var _this = _super.call(this) || this;
        _this._SubListDataService1 = _SubListDataService1;
        return _this;
    }
    plandetailsAddItem1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('add', function (context) {
            var args = [];
            return _this.invoke(_this._SubListDataService1, 'add', args, context);
        });
    };
    plandetailsAddItem1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'plandetailsAddItem1'
        }),
        tslib_1.__metadata("design:paramtypes", [SubListDataService1])
    ], plandetailsAddItem1Handler);
    return plandetailsAddItem1Handler;
}(CommandHandler));
export { plandetailsAddItem1Handler };
