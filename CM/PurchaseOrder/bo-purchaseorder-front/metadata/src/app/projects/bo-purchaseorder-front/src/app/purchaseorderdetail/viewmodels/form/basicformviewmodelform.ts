
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '采购订单',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
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
    })
    orderCode: FormControl;

    @NgFormControl({
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
    })
    orderName: FormControl;

    @NgFormControl({
        id: 'purchaseDept_PurchaseDept_name_a6a5688e_ss3h',
        name: "{{purchaseDept_PurchaseDept_name_a6a5688e_ss3h}}",
        binding: 'purchaseDept.purchaseDept_name',
        updateOn: 'blur',
        defaultI18nValue: '采购部门',
    })
    purchaseDept_PurchaseDept_name: FormControl;

    @NgFormControl({
        id: 'purchaser_Purchaser_Name_8e36074b_1h8e',
        name: "{{purchaser_Purchaser_Name_8e36074b_1h8e}}",
        binding: 'purchaser.purchaser_Name',
        updateOn: 'blur',
        defaultI18nValue: '采购人',
    })
    purchaser_Purchaser_Name: FormControl;

    @NgFormControl({
        id: 'orderDate_56f7fcde_n04v',
        name: "{{orderDate_56f7fcde_n04v}}",
        binding: 'orderDate',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '下单日期',
    })
    orderDate: FormControl;

    @NgFormControl({
        id: 'totalPrice_b3c131a8_xth5',
        name: "{{totalPrice_b3c131a8_xth5}}",
        binding: 'totalPrice',
        updateOn: 'blur',
        defaultI18nValue: '物料总价',
    })
    totalPrice: FormControl;

}