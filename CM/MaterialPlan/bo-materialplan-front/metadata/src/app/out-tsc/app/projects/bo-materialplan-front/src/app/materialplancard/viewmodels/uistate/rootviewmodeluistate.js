import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UIState, NgParam } from '@farris/devkit';
var RootViewmodelUIState = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodelUIState, _super);
    function RootViewmodelUIState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgParam({ originalDataType: "DateTime", category: "locale" }),
        tslib_1.__metadata("design:type", Object)
    ], RootViewmodelUIState.prototype, "mindate", void 0);
    RootViewmodelUIState = tslib_1.__decorate([
        Injectable()
    ], RootViewmodelUIState);
    return RootViewmodelUIState;
}(UIState));
export { RootViewmodelUIState };
