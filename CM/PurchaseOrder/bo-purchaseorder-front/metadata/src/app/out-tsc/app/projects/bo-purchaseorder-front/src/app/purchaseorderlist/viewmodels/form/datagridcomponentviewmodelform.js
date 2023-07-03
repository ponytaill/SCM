import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
import { DateConverter } from '@farris/kendo-binding';
var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodelForm, _super);
    function DataGridComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderCode',
            name: "{{orderCode_57e3230a_bnu4}}",
            binding: 'orderCode',
            updateOn: 'blur',
            defaultI18nValue: '订单编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "orderCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderName',
            name: "{{orderName_547b5e91_ui0i}}",
            binding: 'orderName',
            updateOn: 'blur',
            defaultI18nValue: '订单名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "orderName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'purchaseDept.purchaseDept_name',
            name: "{{purchaseDept_PurchaseDept_name_2c6c71c1_a32l}}",
            binding: 'purchaseDept.purchaseDept_name',
            updateOn: 'blur',
            defaultI18nValue: '名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "purchaseDept_PurchaseDept_name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'purchaser.purchaser_Name',
            name: "{{purchaser_Purchaser_Name_c5bf6949_w6ao}}",
            binding: 'purchaser.purchaser_Name',
            updateOn: 'blur',
            defaultI18nValue: '名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "purchaser_Purchaser_Name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'orderDate',
            name: "{{orderDate_a51eb05d_5ohq}}",
            binding: 'orderDate',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '下单日期',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "orderDate", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'totalPrice',
            name: "{{totalPrice_a5be115d_7il8}}",
            binding: 'totalPrice',
            updateOn: 'blur',
            defaultI18nValue: '物料总价',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "totalPrice", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'isFinished',
            name: "{{isFinished_91d7235a_1sa3}}",
            binding: 'isFinished',
            updateOn: 'change',
            defaultI18nValue: '入库状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "isFinished", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '采购订单',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
