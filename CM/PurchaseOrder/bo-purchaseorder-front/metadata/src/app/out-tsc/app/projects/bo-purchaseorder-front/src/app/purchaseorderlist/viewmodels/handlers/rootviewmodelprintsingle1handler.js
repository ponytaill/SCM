import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { PrintService as PrintService1 } from '@farris/command-services';
var rootviewmodelprintSingle1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(rootviewmodelprintSingle1Handler, _super);
    function rootviewmodelprintSingle1Handler(_PrintService1) {
        var _this = _super.call(this) || this;
        _this._PrintService1 = _PrintService1;
        return _this;
    }
    rootviewmodelprintSingle1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('printSingle', function (context) {
            var args = [
                '{COMMAND~/params/beMetaId}',
                '{COMMAND~/params/bizBillId}'
            ];
            return _this.invoke(_this._PrintService1, 'printSingle', args, context);
        });
    };
    rootviewmodelprintSingle1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'rootviewmodelprintSingle1'
        }),
        tslib_1.__metadata("design:paramtypes", [PrintService1])
    ], rootviewmodelprintSingle1Handler);
    return rootviewmodelprintSingle1Handler;
}(CommandHandler));
export { rootviewmodelprintSingle1Handler };
