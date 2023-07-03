
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '采购订单明细',
    enableValidate: true
})

@Injectable()
export class OrderdetailsComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'materialId.materialId_MaterialCode',
        name: "{{materialId_MaterialId_MaterialCode_4b4e149b_20en}}",
        binding: 'materialId.materialId_MaterialCode',
        updateOn: 'blur',
        defaultI18nValue: '物料编号',
    })
    materialId_MaterialId_MaterialCode: FormControl;

    @NgFormControl({
        id: 'materialId.materialId_MaterialName',
        name: "{{materialId_MaterialId_MaterialName_a5c03a88_809u}}",
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
        id: 'materialId.materialId_EvePrice',
        name: "{{materialId_MaterialId_EvePrice_e3cd5498_b9ip}}",
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
        id: 'amount',
        name: "{{amount_58fd9353_fn66}}",
        binding: 'amount',
        updateOn: 'blur',
        defaultI18nValue: '物料数量',
        validRules: [
            {
                type: 'maxValue',
                constraints: [1.7976931348623157e+308],
            }
        ]
    })
    amount: FormControl;

    @NgFormControl({
        id: 'supplier.supplier_SupplierName',
        name: "{{supplier_Supplier_SupplierName_63c38913_j2pw}}",
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
        name: "{{supplier_Supplier_SupplierCode_ae2bec36_wkv2}}",
        binding: 'supplier.supplier_SupplierCode',
        updateOn: 'blur',
        defaultI18nValue: '供应商编号',
    })
    supplier_Supplier_SupplierCode: FormControl;

    @NgFormControl({
        id: 'supplier.supplier_ContactsEmail',
        name: "{{supplier_Supplier_ContactsEmail_bbc84198_n9pv}}",
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
        name: "{{supplier_Supplier_ContactsAddress_65f7e3ff_389o}}",
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

    @NgFormControl({
        id: 'materialId.materialId_MaterialCat_CatName',
        name: "{{materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r}}",
        binding: 'materialId.materialId_MaterialCat_CatName',
        updateOn: 'blur',
        defaultI18nValue: '类别名称',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    materialId_MaterialId_MaterialCat_CatName: FormControl;

}