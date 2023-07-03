
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '联系方式',
    enableValidate: true
})

@Injectable()
export class SuppliermaOholComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'contactsEmail_90701715_rtno',
        name: "{{contactsEmail_90701715_rtno}}",
        binding: 'contactsEmail',
        updateOn: 'blur',
        defaultI18nValue: '联系人邮箱',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    contactsEmail: FormControl;

    @NgFormControl({
        id: 'contactsAddress_f119b011_sfjn',
        name: "{{contactsAddress_f119b011_sfjn}}",
        binding: 'contactsAddress',
        updateOn: 'blur',
        defaultI18nValue: '办公地址',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    contactsAddress: FormControl;

    @NgFormControl({
        id: 'remark_81bf894a_30fs',
        name: "{{remark_81bf894a_30fs}}",
        binding: 'remark',
        updateOn: 'blur',
        defaultI18nValue: '备注',
    })
    remark: FormControl;

    @NgFormControl({
        id: 'contacts_Contacts_Name_95a3cc07_th3j',
        name: "{{contacts_Contacts_Name_95a3cc07_th3j}}",
        binding: 'contacts.contacts_Name',
        updateOn: 'blur',
        defaultI18nValue: '联系人',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    contacts_Contacts_Name: FormControl;

}