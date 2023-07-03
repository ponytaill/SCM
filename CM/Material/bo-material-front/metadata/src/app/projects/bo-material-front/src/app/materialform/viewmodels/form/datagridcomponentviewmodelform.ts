
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '物料管理',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'materialCode',
        name: "{{materialCode_8e70b36b_vkei}}",
        binding: 'materialCode',
        updateOn: 'blur',
        defaultI18nValue: '物料编号',
    })
    materialCode: FormControl;

    @NgFormControl({
        id: 'materialName',
        name: "{{materialName_56e54326_wg3t}}",
        binding: 'materialName',
        updateOn: 'blur',
        defaultI18nValue: '物料名称',
    })
    materialName: FormControl;

    @NgFormControl({
        id: 'repertory',
        name: "{{repertory_f8eb1982_xmhs}}",
        binding: 'repertory',
        updateOn: 'blur',
        defaultI18nValue: '库存数量',
    })
    repertory: FormControl;

}