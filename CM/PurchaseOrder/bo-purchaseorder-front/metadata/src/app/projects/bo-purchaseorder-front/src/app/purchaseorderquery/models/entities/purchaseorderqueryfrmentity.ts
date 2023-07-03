
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "PurchaseOrderQuery_frm",
    nodeCode: "purchaseOrderQuery_frms"
})
export class PurchaseOrderQueryFrmEntity extends Entity {

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
        originalDataField: 'OrderName',
        dataField: 'orderName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'OrderName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    orderName: string;

    @NgField({
        originalDataField: 'OrderDate',
        dataField: 'orderDate',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'OrderDate',
    })
    orderDate: string;

    @NgField({
        originalDataField: 'OrderCode',
        dataField: 'orderCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'OrderCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    orderCode: string;

}