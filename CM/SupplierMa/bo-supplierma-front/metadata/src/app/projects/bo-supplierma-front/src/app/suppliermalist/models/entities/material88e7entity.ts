
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "MaterialId",
    nodeCode: "materialId"
})
export class Material88e7Entity extends Entity {

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
        originalDataField: 'MaterialCat',
        dataField: 'materialId_MaterialCat',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialId.MaterialId_MaterialCat',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialId_MaterialCat: string;

    @NgField({
        originalDataField: 'EvePrice',
        dataField: 'materialId_EvePrice',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'MaterialId.MaterialId_EvePrice',
    })
    materialId_EvePrice: any;

    @NgField({
        originalDataField: 'Repertory',
        dataField: 'materialId_Repertory',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'MaterialId.MaterialId_Repertory',
    })
    materialId_Repertory: any;

    @NgField({
        originalDataField: 'ID(MaterialCat)',
        dataField: 'materialId_MaterialCat_ID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialId.MaterialId_MaterialCat_ID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialId_MaterialCat_ID: string;

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

    @NgField({
        originalDataField: 'CatCode(MaterialCat)',
        dataField: 'materialId_MaterialCat_CatCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialId.MaterialId_MaterialCat_CatCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialId_MaterialCat_CatCode: string;

}