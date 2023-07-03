
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { OrderDetailsEntity } from './orderdetailsentity';
import { SysOrg77e5Entity } from './sysorg77e5entity';
import { GspUser57e9Entity } from './gspuser57e9entity';
import { BillStateCedeEntity } from './billstatecedeentity';

@NgEntity({
    originalCode: "PurchaseOrder",
    nodeCode: "purchaseOrders"
})
export class PurchaseOrderEntity extends Entity {

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
        originalDataField: 'TotalPrice',
        dataField: 'totalPrice',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'TotalPrice',
    })
    totalPrice: any;

    @NgField({
        originalDataField: 'IsFinished',
        dataField: 'isFinished',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'yes',
        path: 'IsFinished',
    })
    isFinished: any;

    @NgList({
        dataField: 'orderDetailss',
        originalDataField: '',
        type: OrderDetailsEntity

    })

    orderDetailss: EntityList<OrderDetailsEntity>;
    @NgObject({
        dataField: 'purchaseDept',
        originalDataField: 'PurchaseDept',
        type: SysOrg77e5Entity
    })
    purchaseDept: SysOrg77e5Entity;
    @NgObject({
        dataField: 'purchaser',
        originalDataField: 'Purchaser',
        type: GspUser57e9Entity
    })
    purchaser: GspUser57e9Entity;
    @NgObject({
        dataField: 'billStatus',
        originalDataField: 'BillStatus',
        type: BillStateCedeEntity
    })
    billStatus: BillStateCedeEntity;
}