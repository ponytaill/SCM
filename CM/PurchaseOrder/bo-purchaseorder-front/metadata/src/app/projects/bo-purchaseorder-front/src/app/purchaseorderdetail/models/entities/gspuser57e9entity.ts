
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Purchaser",
    nodeCode: "purchaser"
})
export class GspUser57e9Entity extends Entity {

    @NgField({
        originalDataField: 'Purchaser',
        dataField: 'purchaser',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Purchaser.Purchaser',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    purchaser: string;

    @NgField({
        originalDataField: 'ID',
        dataField: 'purchaser_ID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Purchaser.Purchaser_ID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    purchaser_ID: string;

    @NgField({
        originalDataField: 'Name',
        dataField: 'purchaser_Name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Purchaser.Purchaser_Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    purchaser_Name: string;

}