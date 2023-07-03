import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel } from '@farris/devkit';
var SuppliermaOholComponentViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(SuppliermaOholComponentViewmodel, _super);
    function SuppliermaOholComponentViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        return _this;
    }
    SuppliermaOholComponentViewmodel = tslib_1.__decorate([
        Injectable()
    ], SuppliermaOholComponentViewmodel);
    return SuppliermaOholComponentViewmodel;
}(ViewModel));
export { SuppliermaOholComponentViewmodel };
