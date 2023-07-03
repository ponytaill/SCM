import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var SuppliermaterialComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(SuppliermaterialComponentViewmodelForm, _super);
    function SuppliermaterialComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialId.materialId_MaterialCode',
            name: "{{materialId_MaterialId_MaterialCode_06287e26_x36n}}",
            binding: 'materialId.materialId_MaterialCode',
            updateOn: 'blur',
            defaultI18nValue: '物料编号',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], SuppliermaterialComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialId.materialId_MaterialName',
            name: "{{materialId_MaterialId_MaterialName_655b8865_v7zg}}",
            binding: 'materialId.materialId_MaterialName',
            updateOn: 'blur',
            defaultI18nValue: '物料名称',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], SuppliermaterialComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialId.materialId_EvePrice',
            name: "{{materialId_MaterialId_EvePrice_1f7da955_komu}}",
            binding: 'materialId.materialId_EvePrice',
            updateOn: 'blur',
            defaultI18nValue: '市场价格',
            validRules: [
                {
                    type: 'maxValue',
                    constraints: [1.7976931348623157e+308],
                },
                {
                    type: 'minValue',
                    constraints: [-1.7976931348623157e+308],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], SuppliermaterialComponentViewmodelForm.prototype, "materialId_MaterialId_EvePrice", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialId.materialId_Repertory',
            name: "{{materialId_MaterialId_Repertory_3befcd45_5gw0}}",
            binding: 'materialId.materialId_Repertory',
            updateOn: 'blur',
            defaultI18nValue: '库存数量',
            validRules: [
                {
                    type: 'maxValue',
                    constraints: [1.7976931348623157e+308],
                },
                {
                    type: 'minValue',
                    constraints: [-1.7976931348623157e+308],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], SuppliermaterialComponentViewmodelForm.prototype, "materialId_MaterialId_Repertory", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialId.materialId_MaterialCat_CatName',
            name: "{{materialId_MaterialId_MaterialCat_CatName_9856022b_2dzp}}",
            binding: 'materialId.materialId_MaterialCat_CatName',
            updateOn: 'blur',
            defaultI18nValue: '类别名称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], SuppliermaterialComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialCat_CatName", void 0);
    SuppliermaterialComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '供应商对应物料',
            enableValidate: true
        }),
        Injectable()
    ], SuppliermaterialComponentViewmodelForm);
    return SuppliermaterialComponentViewmodelForm;
}(Form));
export { SuppliermaterialComponentViewmodelForm };
