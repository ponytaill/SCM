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
            id: 'billStatus.billState',
            name: "{{billStatus_BillState_6a6f7e09_pbh3}}",
            binding: 'billStatus.billState',
            updateOn: 'change',
            defaultI18nValue: '审批状态',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "billStatus_BillState", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'applicant.applicant_Name',
            name: "{{applicant_Applicant_Name_36e050c8_radi}}",
            binding: 'applicant.applicant_Name',
            updateOn: 'blur',
            defaultI18nValue: '制单人',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "applicant_Applicant_Name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'deliveryDate',
            name: "{{deliveryDate_19bd9bfb_nnlo}}",
            binding: 'deliveryDate',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '交货日期',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "deliveryDate", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'purchaseDept.purchaseDept_name',
            name: "{{purchaseDept_PurchaseDept_name_53265c41_3q8s}}",
            binding: 'purchaseDept.purchaseDept_name',
            updateOn: 'blur',
            defaultI18nValue: '采购部门',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "purchaseDept_PurchaseDept_name", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'planCode',
            name: "{{planCode_210f7065_7a35}}",
            binding: 'planCode',
            updateOn: 'blur',
            defaultI18nValue: '计划编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "planCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'planName',
            name: "{{planName_4f24ebc0_a9kt}}",
            binding: 'planName',
            updateOn: 'blur',
            defaultI18nValue: '计划名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "planName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'isPurchaseOrder',
            name: "{{isPurchaseOrder_75108363_6uu3}}",
            binding: 'isPurchaseOrder',
            updateOn: 'change',
            defaultI18nValue: '是否已生成采购订单',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "isPurchaseOrder", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'totalPrice',
            name: "{{totalPrice_da36cd69_48ad}}",
            binding: 'totalPrice',
            updateOn: 'blur',
            defaultI18nValue: '物料总价',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "totalPrice", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'purchaser.purchaser_Name',
            name: "{{purchaser_Purchaser_Name_e646ee4c_5c6k}}",
            binding: 'purchaser.purchaser_Name',
            updateOn: 'blur',
            defaultI18nValue: '采购员',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "purchaser_Purchaser_Name", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '物料需求计划',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
