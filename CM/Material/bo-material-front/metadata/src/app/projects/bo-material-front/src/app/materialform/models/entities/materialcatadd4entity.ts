
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "MaterialCat",
    nodeCode: "materialCat"
})
export class MaterialCatAdd4Entity extends Entity {

    @NgField({
        originalDataField: 'MaterialCat',
        dataField: 'materialCat',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialCat.MaterialCat',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialCat: string;

    @NgField({
        originalDataField: 'ID',
        dataField: 'materialCat_ID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialCat.MaterialCat_ID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialCat_ID: string;

    @NgField({
        originalDataField: 'CatName',
        dataField: 'materialCat_CatName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialCat.MaterialCat_CatName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialCat_CatName: string;

    @NgField({
        originalDataField: 'CatCode',
        dataField: 'materialCat_CatCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialCat.MaterialCat_CatCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialCat_CatCode: string;

}