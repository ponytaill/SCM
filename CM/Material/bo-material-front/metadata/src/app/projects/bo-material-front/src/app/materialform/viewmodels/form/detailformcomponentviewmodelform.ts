
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '物料管理',
    enableValidate: true
})

@Injectable()
export class DetailFormComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'materialCode_8e70b36b_qryg',
        name: "{{materialCode_8e70b36b_qryg}}",
        binding: 'materialCode',
        updateOn: 'blur',
        defaultI18nValue: '物料编号',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    materialCode: FormControl;

    @NgFormControl({
        id: 'materialName_56e54326_c6uc',
        name: "{{materialName_56e54326_c6uc}}",
        binding: 'materialName',
        updateOn: 'blur',
        defaultI18nValue: '物料名称',
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
    materialName: FormControl;

    @NgFormControl({
        id: 'materialCat_MaterialCat_CatName_f51993e2_lucw',
        name: "{{materialCat_MaterialCat_CatName_f51993e2_lucw}}",
        binding: 'materialCat.materialCat_CatName',
        updateOn: 'blur',
        defaultI18nValue: '类别名称',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    materialCat_MaterialCat_CatName: FormControl;

    @NgFormControl({
        id: 'evePrice_90e943c4_iw5k',
        name: "{{evePrice_90e943c4_iw5k}}",
        binding: 'evePrice',
        updateOn: 'blur',
        defaultI18nValue: '市场价格',
    })
    evePrice: FormControl;

    @NgFormControl({
        id: 'repertory_f8eb1982_51a0',
        name: "{{repertory_f8eb1982_51a0}}",
        binding: 'repertory',
        updateOn: 'blur',
        defaultI18nValue: '库存数量',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    repertory: FormControl;

}