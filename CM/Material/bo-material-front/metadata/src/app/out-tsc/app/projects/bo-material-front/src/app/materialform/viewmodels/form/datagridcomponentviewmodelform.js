import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodelForm, _super);
    function DataGridComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialCode',
            name: "{{materialCode_8e70b36b_vkei}}",
            binding: 'materialCode',
            updateOn: 'blur',
            defaultI18nValue: '物料编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "materialCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialName',
            name: "{{materialName_56e54326_wg3t}}",
            binding: 'materialName',
            updateOn: 'blur',
            defaultI18nValue: '物料名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "materialName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'repertory',
            name: "{{repertory_f8eb1982_xmhs}}",
            binding: 'repertory',
            updateOn: 'blur',
            defaultI18nValue: '库存数量',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "repertory", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '物料管理',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
