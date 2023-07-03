
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "PurchaseDept",
    nodeCode: "purchaseDept"
})
export class SysOrgF9F7Entity extends Entity {

    @NgField({
        originalDataField: 'PurchaseDept',
        dataField: 'purchaseDept',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'PurchaseDept.PurchaseDept',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    purchaseDept: string;

    @NgField({
        originalDataField: 'ID',
        dataField: 'purchaseDept_ID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'PurchaseDept.PurchaseDept_ID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    purchaseDept_ID: string;

    @NgField({
        originalDataField: 'name',
        dataField: 'purchaseDept_name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'PurchaseDept.PurchaseDept_name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    purchaseDept_name: string;

}