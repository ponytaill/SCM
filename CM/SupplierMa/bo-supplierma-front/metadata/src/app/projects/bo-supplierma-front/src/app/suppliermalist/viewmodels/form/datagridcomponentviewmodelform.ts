
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '供应商管理',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'supplierName',
        name: "{{supplierName_8347d63a_bhow}}",
        binding: 'supplierName',
        updateOn: 'blur',
        defaultI18nValue: '供应商名称',
    })
    supplierName: FormControl;

    @NgFormControl({
        id: 'supplierCode',
        name: "{{supplierCode_cff3b19d_scg5}}",
        binding: 'supplierCode',
        updateOn: 'blur',
        defaultI18nValue: '供应商编号',
    })
    supplierCode: FormControl;

    @NgFormControl({
        id: 'contactsEmail',
        name: "{{contactsEmail_d64a584e_qs3a}}",
        binding: 'contactsEmail',
        updateOn: 'blur',
        defaultI18nValue: '联系人邮箱',
    })
    contactsEmail: FormControl;

    @NgFormControl({
        id: 'contactsAddress',
        name: "{{contactsAddress_0413715c_u5sw}}",
        binding: 'contactsAddress',
        updateOn: 'blur',
        defaultI18nValue: '办公地址',
    })
    contactsAddress: FormControl;

    @NgFormControl({
        id: 'signTime',
        name: "{{signTime_9a10dffd_sb3z}}",
        binding: 'signTime',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '注册时间',
    })
    signTime: FormControl;

    @NgFormControl({
        id: 'remark',
        name: "{{remark_8a27efaa_zbgx}}",
        binding: 'remark',
        updateOn: 'blur',
        defaultI18nValue: '备注',
    })
    remark: FormControl;

    @NgFormControl({
        id: 'contacts.contacts_Name',
        name: "{{contacts_Contacts_Name_b340437c_f4rv}}",
        binding: 'contacts.contacts_Name',
        updateOn: 'blur',
        defaultI18nValue: '联系人',
    })
    contacts_Contacts_Name: FormControl;

}