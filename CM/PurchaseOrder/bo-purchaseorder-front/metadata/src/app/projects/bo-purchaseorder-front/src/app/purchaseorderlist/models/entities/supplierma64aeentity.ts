
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Supplier",
    nodeCode: "supplier"
})
export class SupplierMa64aeEntity extends Entity {

    @NgField({
        originalDataField: 'Supplier',
        dataField: 'supplier',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Supplier.Supplier',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    supplier: string;

    @NgField({
        originalDataField: 'ID',
        dataField: 'supplier_ID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Supplier.Supplier_ID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    supplier_ID: string;

    @NgField({
        originalDataField: 'SupplierName',
        dataField: 'supplier_SupplierName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Supplier.Supplier_SupplierName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    supplier_SupplierName: string;

    @NgField({
        originalDataField: 'SupplierCode',
        dataField: 'supplier_SupplierCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Supplier.Supplier_SupplierCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    supplier_SupplierCode: string;

    @NgField({
        originalDataField: 'ContactsEmail',
        dataField: 'supplier_ContactsEmail',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Supplier.Supplier_ContactsEmail',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    supplier_ContactsEmail: string;

    @NgField({
        originalDataField: 'ContactsAddress',
        dataField: 'supplier_ContactsAddress',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Supplier.Supplier_ContactsAddress',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    supplier_ContactsAddress: string;

}