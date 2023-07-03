
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '供应商管理',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'supplierName_2df5f154_jtkg',
        name: "{{supplierName_2df5f154_jtkg}}",
        binding: 'supplierName',
        updateOn: 'blur',
        defaultI18nValue: '供应商名称',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    supplierName: FormControl;

    @NgFormControl({
        id: 'supplierCode_a55cbab4_vw3m',
        name: "{{supplierCode_a55cbab4_vw3m}}",
        binding: 'supplierCode',
        updateOn: 'blur',
        defaultI18nValue: '供应商编号',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    supplierCode: FormControl;

    @NgFormControl({
        id: 'signTime_36e6b73d_4lns',
        name: "{{signTime_36e6b73d_4lns}}",
        binding: 'signTime',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '注册时间',
    })
    signTime: FormControl;

}