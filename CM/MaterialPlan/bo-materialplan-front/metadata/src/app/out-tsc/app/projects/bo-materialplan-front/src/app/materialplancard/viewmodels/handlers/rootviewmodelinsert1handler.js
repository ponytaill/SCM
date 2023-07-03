import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { SubListDataService as SubListDataService1 } from '@farris/command-services';
var rootviewmodelInsert1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(rootviewmodelInsert1Handler, _super);
    function rootviewmodelInsert1Handler(_SubListDataService1) {
        var _this = _super.call(this) || this;
        _this._SubListDataService1 = _SubListDataService1;
        return _this;
    }
    rootviewmodelInsert1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('insert', function (context) {
            var args = [
                '{COMMAND~/params/position}'
            ];
            return _this.invoke(_this._SubListDataService1, 'insert', args, context);
        });
    };
    rootviewmodelInsert1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'rootviewmodelInsert1'
        }),
        tslib_1.__metadata("design:paramtypes", [SubListDataService1])
    ], rootviewmodelInsert1Handler);
    return rootviewmodelInsert1Handler;
}(CommandHandler));
export { rootviewmodelInsert1Handler };
