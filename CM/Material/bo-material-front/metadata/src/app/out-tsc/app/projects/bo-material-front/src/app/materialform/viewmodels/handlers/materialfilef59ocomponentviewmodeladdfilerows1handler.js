import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { FileService as FileService1 } from '@farris/command-services';
var materialfilef59ocomponentviewmodeladdFileRows1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(materialfilef59ocomponentviewmodeladdFileRows1Handler, _super);
    function materialfilef59ocomponentviewmodeladdFileRows1Handler(_FileService1) {
        var _this = _super.call(this) || this;
        _this._FileService1 = _FileService1;
        return _this;
    }
    materialfilef59ocomponentviewmodeladdFileRows1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('addFileRows', function (context) {
            var args = [
                '{COMMAND~/params/fileInfoFieldPath}'
            ];
            return _this.invoke(_this._FileService1, 'addFileRows', args, context);
        });
    };
    materialfilef59ocomponentviewmodeladdFileRows1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'materialfilef59ocomponentviewmodeladdFileRows1'
        }),
        tslib_1.__metadata("design:paramtypes", [FileService1])
    ], materialfilef59ocomponentviewmodeladdFileRows1Handler);
    return materialfilef59ocomponentviewmodeladdFileRows1Handler;
}(CommandHandler));
export { materialfilef59ocomponentviewmodeladdFileRows1Handler };
