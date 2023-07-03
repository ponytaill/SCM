import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Form, NgValidateForm } from '@farris/devkit';
var MaterialfileF59oComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialfileF59oComponentViewmodelForm, _super);
    function MaterialfileF59oComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialfileF59oComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '相关附件',
            enableValidate: true
        }),
        Injectable()
    ], MaterialfileF59oComponentViewmodelForm);
    return MaterialfileF59oComponentViewmodelForm;
}(Form));
export { MaterialfileF59oComponentViewmodelForm };
