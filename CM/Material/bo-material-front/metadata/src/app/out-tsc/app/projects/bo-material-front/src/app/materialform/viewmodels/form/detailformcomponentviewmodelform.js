import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var DetailFormComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DetailFormComponentViewmodelForm, _super);
    function DetailFormComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialCode_8e70b36b_qryg',
            name: "{{materialCode_8e70b36b_qryg}}",
            binding: 'materialCode',
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
    ], DetailFormComponentViewmodelForm.prototype, "materialCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialName_56e54326_c6uc',
            name: "{{materialName_56e54326_c6uc}}",
            binding: 'materialName',
            updateOn: 'blur',
            defaultI18nValue: '物料名称',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                },
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "materialName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialCat_MaterialCat_CatName_f51993e2_lucw',
            name: "{{materialCat_MaterialCat_CatName_f51993e2_lucw}}",
            binding: 'materialCat.materialCat_CatName',
            updateOn: 'blur',
            defaultI18nValue: '类别名称',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "materialCat_MaterialCat_CatName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'evePrice_90e943c4_iw5k',
            name: "{{evePrice_90e943c4_iw5k}}",
            binding: 'evePrice',
            updateOn: 'blur',
            defaultI18nValue: '市场价格',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "evePrice", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'repertory_f8eb1982_51a0',
            name: "{{repertory_f8eb1982_51a0}}",
            binding: 'repertory',
            updateOn: 'blur',
            defaultI18nValue: '库存数量',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DetailFormComponentViewmodelForm.prototype, "repertory", void 0);
    DetailFormComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '物料管理',
            enableValidate: true
        }),
        Injectable()
    ], DetailFormComponentViewmodelForm);
    return DetailFormComponentViewmodelForm;
}(Form));
export { DetailFormComponentViewmodelForm };
