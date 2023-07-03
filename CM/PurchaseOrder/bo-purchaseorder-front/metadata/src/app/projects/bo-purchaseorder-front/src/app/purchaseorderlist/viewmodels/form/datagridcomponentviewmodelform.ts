
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '采购订单',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'orderCode',
        name: "{{orderCode_57e3230a_bnu4}}",
        binding: 'orderCode',
        updateOn: 'blur',
        defaultI18nValue: '订单编号',
    })
    orderCode: FormControl;

    @NgFormControl({
        id: 'orderName',
        name: "{{orderName_547b5e91_ui0i}}",
        binding: 'orderName',
        updateOn: 'blur',
        defaultI18nValue: '订单名称',
    })
    orderName: FormControl;

    @NgFormControl({
        id: 'purchaseDept.purchaseDept_name',
        name: "{{purchaseDept_PurchaseDept_name_2c6c71c1_a32l}}",
        binding: 'purchaseDept.purchaseDept_name',
        updateOn: 'blur',
        defaultI18nValue: '名称',
    })
    purchaseDept_PurchaseDept_name: FormControl;

    @NgFormControl({
        id: 'purchaser.purchaser_Name',
        name: "{{purchaser_Purchaser_Name_c5bf6949_w6ao}}",
        binding: 'purchaser.purchaser_Name',
        updateOn: 'blur',
        defaultI18nValue: '名称',
    })
    purchaser_Purchaser_Name: FormControl;

    @NgFormControl({
        id: 'orderDate',
        name: "{{orderDate_a51eb05d_5ohq}}",
        binding: 'orderDate',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '下单日期',
    })
    orderDate: FormControl;

    @NgFormControl({
        id: 'totalPrice',
        name: "{{totalPrice_a5be115d_7il8}}",
        binding: 'totalPrice',
        updateOn: 'blur',
        defaultI18nValue: '物料总价',
    })
    totalPrice: FormControl;

    @NgFormControl({
        id: 'isFinished',
        name: "{{isFinished_91d7235a_1sa3}}",
        binding: 'isFinished',
        updateOn: 'change',
        defaultI18nValue: '入库状态',
    })
    isFinished: FormControl;

}