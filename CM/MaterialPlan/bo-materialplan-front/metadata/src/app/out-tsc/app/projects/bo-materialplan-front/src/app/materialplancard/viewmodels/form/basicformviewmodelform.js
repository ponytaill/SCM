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
            id: 'applicant_Applicant_Name_d4373c28_6dic',
            name: "{{applicant_Applicant_Name_d4373c28_6dic}}",
            binding: 'applicant.applicant_Name',
            updateOn: 'blur',
            defaultI18nValue: '制单人',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "applicant_Applicant_Name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'deliveryDate_7be8a928_jelq',
            name: "{{deliveryDate_7be8a928_jelq}}",
            binding: 'deliveryDate',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '交货日期',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "deliveryDate", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'purchaseDept_PurchaseDept_name_8d6e8922_yvzr',
            name: "{{purchaseDept_PurchaseDept_name_8d6e8922_yvzr}}",
            binding: 'purchaseDept.purchaseDept_name',
            updateOn: 'blur',
            defaultI18nValue: '采购部门',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "purchaseDept_PurchaseDept_name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'planCode_7b926633_5dke',
            name: "{{planCode_7b926633_5dke}}",
            binding: 'planCode',
            updateOn: 'blur',
            defaultI18nValue: '计划编号',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "planCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'planName_fbe5d590_15n2',
            name: "{{planName_fbe5d590_15n2}}",
            binding: 'planName',
            updateOn: 'blur',
            defaultI18nValue: '计划名称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "planName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'isPurchaseOrder_51920336_9xj5',
            name: "{{isPurchaseOrder_51920336_9xj5}}",
            binding: 'isPurchaseOrder',
            updateOn: 'change',
            defaultI18nValue: '是否已生成采购订单',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "isPurchaseOrder", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'totalPrice_1c1f8bdb_p30m',
            name: "{{totalPrice_1c1f8bdb_p30m}}",
            binding: 'totalPrice',
            updateOn: 'blur',
            defaultI18nValue: '物料总价',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "totalPrice", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'purchaser_Purchaser_Name_55f1e399_hz5j',
            name: "{{purchaser_Purchaser_Name_55f1e399_hz5j}}",
            binding: 'purchaser.purchaser_Name',
            updateOn: 'blur',
            defaultI18nValue: '采购员',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "purchaser_Purchaser_Name", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '物料需求计划',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
