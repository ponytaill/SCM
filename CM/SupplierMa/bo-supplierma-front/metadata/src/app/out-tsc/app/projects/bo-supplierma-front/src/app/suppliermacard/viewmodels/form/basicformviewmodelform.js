import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
import { DateConverter } from '@farris/kendo-binding';
var BasicFormViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(BasicFormViewmodelForm, _super);
    function BasicFormViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'supplierName_2df5f154_jtkg',
            name: "{{supplierName_2df5f154_jtkg}}",
            binding: 'supplierName',
            updateOn: 'blur',
            defaultI18nValue: '供应商名称',
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
    ], BasicFormViewmodelForm.prototype, "supplierName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'supplierCode_a55cbab4_vw3m',
            name: "{{supplierCode_a55cbab4_vw3m}}",
            binding: 'supplierCode',
            updateOn: 'blur',
            defaultI18nValue: '供应商编号',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "supplierCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'signTime_36e6b73d_4lns',
            name: "{{signTime_36e6b73d_4lns}}",
            binding: 'signTime',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '注册时间',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "signTime", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '供应商管理',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
