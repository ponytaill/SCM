
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '物料需求计划',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'billStatus.billState',
        name: "{{billStatus_BillState_6a6f7e09_pbh3}}",
        binding: 'billStatus.billState',
        updateOn: 'change',
        defaultI18nValue: '审批状态',
    })
    billStatus_BillState: FormControl;

    @NgFormControl({
        id: 'applicant.applicant_Name',
        name: "{{applicant_Applicant_Name_36e050c8_radi}}",
        binding: 'applicant.applicant_Name',
        updateOn: 'blur',
        defaultI18nValue: '制单人',
    })
    applicant_Applicant_Name: FormControl;

    @NgFormControl({
        id: 'deliveryDate',
        name: "{{deliveryDate_19bd9bfb_nnlo}}",
        binding: 'deliveryDate',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '交货日期',
    })
    deliveryDate: FormControl;

    @NgFormControl({
        id: 'purchaseDept.purchaseDept_name',
        name: "{{purchaseDept_PurchaseDept_name_53265c41_3q8s}}",
        binding: 'purchaseDept.purchaseDept_name',
        updateOn: 'blur',
        defaultI18nValue: '采购部门',
    })
    purchaseDept_PurchaseDept_name: FormControl;

    @NgFormControl({
        id: 'planCode',
        name: "{{planCode_210f7065_7a35}}",
        binding: 'planCode',
        updateOn: 'blur',
        defaultI18nValue: '计划编号',
    })
    planCode: FormControl;

    @NgFormControl({
        id: 'planName',
        name: "{{planName_4f24ebc0_a9kt}}",
        binding: 'planName',
        updateOn: 'blur',
        defaultI18nValue: '计划名称',
    })
    planName: FormControl;

    @NgFormControl({
        id: 'isPurchaseOrder',
        name: "{{isPurchaseOrder_75108363_6uu3}}",
        binding: 'isPurchaseOrder',
        updateOn: 'change',
        defaultI18nValue: '是否已生成采购订单',
    })
    isPurchaseOrder: FormControl;

    @NgFormControl({
        id: 'totalPrice',
        name: "{{totalPrice_da36cd69_48ad}}",
        binding: 'totalPrice',
        updateOn: 'blur',
        defaultI18nValue: '物料总价',
    })
    totalPrice: FormControl;

    @NgFormControl({
        id: 'purchaser.purchaser_Name',
        name: "{{purchaser_Purchaser_Name_e646ee4c_5c6k}}",
        binding: 'purchaser.purchaser_Name',
        updateOn: 'blur',
        defaultI18nValue: '采购员',
    })
    purchaser_Purchaser_Name: FormControl;

}