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
            id: 'orderCode_8f6f5647_uaby',
            name: "{{orderCode_8f6f5647_uaby}}",
            binding: 'orderCode',
            updateOn: 'blur',
            defaultI18nValue: '订单编号',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "orderCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderName_35bceb1e_r0en',
            name: "{{orderName_35bceb1e_r0en}}",
            binding: 'orderName',
            updateOn: 'blur',
            defaultI18nValue: '订单名称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "orderName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'purchaseDept_PurchaseDept_name_a6a5688e_ss3h',
            name: "{{purchaseDept_PurchaseDept_name_a6a5688e_ss3h}}",
            binding: 'purchaseDept.purchaseDept_name',
            updateOn: 'blur',
            defaultI18nValue: '采购部门',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "purchaseDept_PurchaseDept_name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'purchaser_Purchaser_Name_8e36074b_1h8e',
            name: "{{purchaser_Purchaser_Name_8e36074b_1h8e}}",
            binding: 'purchaser.purchaser_Name',
            updateOn: 'blur',
            defaultI18nValue: '采购人',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "purchaser_Purchaser_Name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderDate_56f7fcde_n04v',
            name: "{{orderDate_56f7fcde_n04v}}",
            binding: 'orderDate',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '下单日期',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "orderDate", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'totalPrice_b3c131a8_xth5',
            name: "{{totalPrice_b3c131a8_xth5}}",
            binding: 'totalPrice',
            updateOn: 'blur',
            defaultI18nValue: '物料总价',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], BasicFormViewmodelForm.prototype, "totalPrice", void 0);
    BasicFormViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '采购订单',
            enableValidate: true
        }),
        Injectable()
    ], BasicFormViewmodelForm);
    return BasicFormViewmodelForm;
}(Form));
export { BasicFormViewmodelForm };
