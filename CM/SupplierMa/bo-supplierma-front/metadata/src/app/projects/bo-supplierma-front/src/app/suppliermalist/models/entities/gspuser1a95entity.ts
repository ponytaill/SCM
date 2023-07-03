
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Contacts",
    nodeCode: "contacts"
})
export class GspUser1a95Entity extends Entity {

    @NgField({
        originalDataField: 'Contacts',
        dataField: 'contacts',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Contacts.Contacts',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    contacts: string;

    @NgField({
        originalDataField: 'ID',
        dataField: 'contacts_ID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Contacts.Contacts_ID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    contacts_ID: string;

    @NgField({
        originalDataField: 'Name',
        dataField: 'contacts_Name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Contacts.Contacts_Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    contacts_Name: string;

    @NgField({
        originalDataField: 'Code',
        dataField: 'contacts_Code',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Contacts.Contacts_Code',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    contacts_Code: string;

}