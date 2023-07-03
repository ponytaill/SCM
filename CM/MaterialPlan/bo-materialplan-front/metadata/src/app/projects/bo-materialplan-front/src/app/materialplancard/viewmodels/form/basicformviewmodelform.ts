
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '物料需求计划',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'applicant_Applicant_Name_d4373c28_6dic',
        name: "{{applicant_Applicant_Name_d4373c28_6dic}}",
        binding: 'applicant.applicant_Name',
        updateOn: 'blur',
        defaultI18nValue: '制单人',
    })
    applicant_Applicant_Name: FormControl;

    @NgFormControl({
        id: 'deliveryDate_7be8a928_jelq',
        name: "{{deliveryDate_7be8a928_jelq}}",
        binding: 'deliveryDate',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '交货日期',
    })
    deliveryDate: FormControl;

    @NgFormControl({
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
    })
    purchaseDept_PurchaseDept_name: FormControl;

    @NgFormControl({
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
    })
    planCode: FormControl;

    @NgFormControl({
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
    })
    planName: FormControl;

    @NgFormControl({
        id: 'isPurchaseOrder_51920336_9xj5',
        name: "{{isPurchaseOrder_51920336_9xj5}}",
        binding: 'isPurchaseOrder',
        updateOn: 'change',
        defaultI18nValue: '是否已生成采购订单',
    })
    isPurchaseOrder: FormControl;

    @NgFormControl({
        id: 'totalPrice_1c1f8bdb_p30m',
        name: "{{totalPrice_1c1f8bdb_p30m}}",
        binding: 'totalPrice',
        updateOn: 'blur',
        defaultI18nValue: '物料总价',
    })
    totalPrice: FormControl;

    @NgFormControl({
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
    })
    purchaser_Purchaser_Name: FormControl;

}