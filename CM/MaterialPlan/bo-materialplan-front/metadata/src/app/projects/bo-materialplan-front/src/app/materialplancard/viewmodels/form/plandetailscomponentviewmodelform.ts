
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '物料需求计划明细',
    enableValidate: true
})

@Injectable()
export class PlandetailsComponentViewmodelForm extends Form {
    @NgFormControl({
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
    })
    materialId_MaterialId_MaterialName: FormControl;

    @NgFormControl({
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
    })
    materialId_MaterialId_MaterialCode: FormControl;

    @NgFormControl({
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
    })
    materialId_MaterialId_EvePrice: FormControl;

    @NgFormControl({
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
    })
    materialId_MaterialId_MaterialCat_CatName: FormControl;

    @NgFormControl({
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
    })
    materialAmount: FormControl;

    @NgFormControl({
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
    })
    supplier_Supplier_SupplierName: FormControl;

    @NgFormControl({
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
    })
    supplier_Supplier_SupplierCode: FormControl;

    @NgFormControl({
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
    })
    supplier_Supplier_ContactsEmail: FormControl;

    @NgFormControl({
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
    })
    supplier_Supplier_ContactsAddress: FormControl;

}