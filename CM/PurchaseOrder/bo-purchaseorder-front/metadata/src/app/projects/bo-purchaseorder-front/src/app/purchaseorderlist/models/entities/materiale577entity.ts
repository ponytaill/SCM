
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "MaterialId",
    nodeCode: "materialId"
})
export class MaterialE577Entity extends Entity {

    @NgField({
        originalDataField: 'MaterialId',
        dataField: 'materialId',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialId.MaterialId',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialId: string;

    @NgField({
        originalDataField: 'ID',
        dataField: 'materialId_ID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialId.MaterialId_ID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialId_ID: string;

    @NgField({
        originalDataField: 'MaterialCode',
        dataField: 'materialId_MaterialCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialId.MaterialId_MaterialCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialId_MaterialCode: string;

    @NgField({
        originalDataField: 'MaterialName',
        dataField: 'materialId_MaterialName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialId.MaterialId_MaterialName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialId_MaterialName: string;

    @NgField({
        originalDataField: 'EvePrice',
        dataField: 'materialId_EvePrice',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'MaterialId.MaterialId_EvePrice',
    })
    materialId_EvePrice: any;

    @NgField({
        originalDataField: 'CatName(MaterialCat)',
        dataField: 'materialId_MaterialCat_CatName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialId.MaterialId_MaterialCat_CatName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialId_MaterialCat_CatName: string;

}