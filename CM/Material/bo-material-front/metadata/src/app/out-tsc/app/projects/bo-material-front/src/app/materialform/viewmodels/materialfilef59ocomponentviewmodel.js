import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var MaterialfileF59oComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialfileF59oComponentViewmodel, _super);
    function MaterialfileF59oComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/materialFiles';
        _this.dom = {};
        return _this;
    }
    MaterialfileF59oComponentViewmodel.prototype.materialfilef59ocomponentviewmodeladdFileRows1 = function (commandParam) { return; };
    MaterialfileF59oComponentViewmodel.prototype.materialfilef59ocomponentviewmodelremoveFileRows1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'materialfilef59ocomponentviewmodeladdFileRows1',
            params: {
                fileInfoFieldPath: '/materialFiles/fileInfo'
            },
            paramDescriptions: {
                fileInfoFieldPath: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], MaterialfileF59oComponentViewmodel.prototype, "materialfilef59ocomponentviewmodeladdFileRows1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'materialfilef59ocomponentviewmodelremoveFileRows1',
            params: {
                fileInfoFieldPath: '/materialFiles/fileInfo'
            },
            paramDescriptions: {
                fileInfoFieldPath: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], MaterialfileF59oComponentViewmodel.prototype, "materialfilef59ocomponentviewmodelremoveFileRows1", null);
    MaterialfileF59oComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], MaterialfileF59oComponentViewmodel);
    return MaterialfileF59oComponentViewmodel;
}(ViewModel));
export { MaterialfileF59oComponentViewmodel };
