
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { MaterialFileEntity } from './materialfileentity';
import { MaterialCatAdd4Entity } from './materialcatadd4entity';

@NgEntity({
    originalCode: "Material",
    nodeCode: "materials"
})
export class MaterialEntity extends Entity {

    @NgField({
        originalDataField: 'ID',
        dataField: 'id',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ID',

        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    id: string;

    @NgField({
        originalDataField: 'Version',
        dataField: 'version',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'Version',
        enableTimeZone: true,
    })
    version: string;

    @NgField({
        originalDataField: 'MaterialCode',
        dataField: 'materialCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialCode: string;

    @NgField({
        originalDataField: 'MaterialName',
        dataField: 'materialName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'MaterialName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    materialName: string;

    @NgField({
        originalDataField: 'EvePrice',
        dataField: 'evePrice',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'EvePrice',
    })
    evePrice: any;

    @NgField({
        originalDataField: 'Repertory',
        dataField: 'repertory',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'Repertory',
    })
    repertory: any;

    @NgList({
        dataField: 'materialFiles',
        originalDataField: '',
        type: MaterialFileEntity

    })

    materialFiles: EntityList<MaterialFileEntity>;
    @NgObject({
        dataField: 'materialCat',
        originalDataField: 'MaterialCat',
        type: MaterialCatAdd4Entity
    })
    materialCat: MaterialCatAdd4Entity;
}