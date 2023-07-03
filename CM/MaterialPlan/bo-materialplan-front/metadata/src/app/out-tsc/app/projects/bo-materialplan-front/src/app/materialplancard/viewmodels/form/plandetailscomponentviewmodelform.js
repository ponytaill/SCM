import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var PlandetailsComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(PlandetailsComponentViewmodelForm, _super);
    function PlandetailsComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialId.materialId_MaterialName',
            name: "{{materialId_MaterialId_MaterialName_0d109a4f_7r0m}}",
            binding: 'materialId.materialId_MaterialName',
            updateOn: 'blur',
            defaultI18nValue: '物料名称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], PlandetailsComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialId.materialId_MaterialCode',
            name: "{{materialId_MaterialId_MaterialCode_08ca00c7_ao7g}}",
            binding: 'materialId.materialId_MaterialCode',
            updateOn: 'blur',
            defaultI18nValue: '物料编号',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], PlandetailsComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialId.materialId_EvePrice',
            name: "{{materialId_MaterialId_EvePrice_998dde09_udfc}}",
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
    ], PlandetailsComponentViewmodelForm.prototype, "materialId_MaterialId_EvePrice", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialId.materialId_MaterialCat_CatName',
            name: "{{materialId_MaterialId_MaterialCat_CatName_e6f48613_344b}}",
            binding: 'materialId.materialId_MaterialCat_CatName',
            updateOn: 'blur',
            defaultI18nValue: '物料类别',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], PlandetailsComponentViewmodelForm.prototype, "materialId_MaterialId_MaterialCat_CatName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'materialAmount',
            name: "{{materiaAmount_143b71b6_wiiv}}",
            binding: 'materialAmount',
            updateOn: 'blur',
            defaultI18nValue: '物料数量',
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
    ], PlandetailsComponentViewmodelForm.prototype, "materialAmount", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'supplier.supplier_SupplierName',
            name: "{{supplier_Supplier_SupplierName_a4a0e5d0_ju44}}",
            binding: 'supplier.supplier_SupplierName',
            updateOn: 'blur',
            defaultI18nValue: '供应商名称',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], PlandetailsComponentViewmodelForm.prototype, "supplier_Supplier_SupplierName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'supplier.supplier_SupplierCode',
            name: "{{supplier_Supplier_SupplierCode_1d93ad3d_alr2}}",
            binding: 'supplier.supplier_SupplierCode',
            updateOn: 'blur',
            defaultI18nValue: '供应商编号',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], PlandetailsComponentViewmodelForm.prototype, "supplier_Supplier_SupplierCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'supplier.supplier_ContactsEmail',
            name: "{{supplier_Supplier_ContactsEmail_9f031afb_8tfe}}",
            binding: 'supplier.supplier_ContactsEmail',
            updateOn: 'blur',
            defaultI18nValue: '联系人邮箱',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], PlandetailsComponentViewmodelForm.prototype, "supplier_Supplier_ContactsEmail", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'supplier.supplier_ContactsAddress',
            name: "{{supplier_Supplier_ContactsAddress_27ddf90a_w9yq}}",
            binding: 'supplier.supplier_ContactsAddress',
            updateOn: 'blur',
            defaultI18nValue: '办公地址',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], PlandetailsComponentViewmodelForm.prototype, "supplier_Supplier_ContactsAddress", void 0);
    PlandetailsComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '物料需求计划明细',
            enableValidate: true
        }),
        Injectable()
    ], PlandetailsComponentViewmodelForm);
    return PlandetailsComponentViewmodelForm;
}(Form));
export { PlandetailsComponentViewmodelForm };
