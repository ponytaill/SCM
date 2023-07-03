
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { SupplierMaterialEntity } from './suppliermaterialentity';
import { GspUser1a95Entity } from './gspuser1a95entity';

@NgEntity({
    originalCode: "SupplierMa",
    nodeCode: "supplierMas"
})
export class SupplierMaEntity extends Entity {

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
        originalDataField: 'SupplierName',
        dataField: 'supplierName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'SupplierName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    supplierName: string;

    @NgField({
        originalDataField: 'SupplierCode',
        dataField: 'supplierCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'SupplierCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    supplierCode: string;

    @NgField({
        originalDataField: 'ContactsEmail',
        dataField: 'contactsEmail',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ContactsEmail',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    contactsEmail: string;

    @NgField({
        originalDataField: 'ContactsAddress',
        dataField: 'contactsAddress',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ContactsAddress',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    contactsAddress: string;

    @NgField({
        originalDataField: 'SignTime',
        dataField: 'signTime',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'SignTime',
        enableTimeZone: true,
    })
    signTime: string;

    @NgField({
        originalDataField: 'Remark',
        dataField: 'remark',
        originalDataFieldType: 'Text',
        initValue: '',
        path: 'Remark',
    })
    remark: any;

    @NgList({
        dataField: 'supplierMaterials',
        originalDataField: '',
        type: SupplierMaterialEntity

    })

    supplierMaterials: EntityList<SupplierMaterialEntity>;
    @NgObject({
        dataField: 'contacts',
        originalDataField: 'Contacts',
        type: GspUser1a95Entity
    })
    contacts: GspUser1a95Entity;
}