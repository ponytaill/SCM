
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '供应商对应物料',
    enableValidate: true
})

@Injectable()
export class SuppliermaterialComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'materialId.materialId_MaterialCode',
        name: "{{materialId_MaterialId_MaterialCode_06287e26_x36n}}",
        binding: 'materialId.materialId_MaterialCode',
        updateOn: 'blur',
        defaultI18nValue: '物料编号',
        validRules: [
            {
                type: 'matches',
                constraints: [''],
            }
        ]
    })
    materialId_MaterialId_MaterialCode: FormControl;

    @NgFormControl({
        id: 'materialId.materialId_MaterialName',
        name: "{{materialId_MaterialId_MaterialName_655b8865_v7zg}}",
        binding: 'materialId.materialId_MaterialName',
        updateOn: 'blur',
        defaultI18nValue: '物料名称',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    materialId_MaterialId_MaterialName: FormControl;

    @NgFormControl({
        id: 'materialId.materialId_EvePrice',
        name: "{{materialId_MaterialId_EvePrice_1f7da955_komu}}",
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
        id: 'materialId.materialId_Repertory',
        name: "{{materialId_MaterialId_Repertory_3befcd45_5gw0}}",
        binding: 'materialId.materialId_Repertory',
        updateOn: 'blur',
        defaultI18nValue: '库存数量',
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
    materialId_MaterialId_Repertory: FormControl;

    @NgFormControl({
        id: 'materialId.materialId_MaterialCat_CatName',
        name: "{{materialId_MaterialId_MaterialCat_CatName_9856022b_2dzp}}",
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