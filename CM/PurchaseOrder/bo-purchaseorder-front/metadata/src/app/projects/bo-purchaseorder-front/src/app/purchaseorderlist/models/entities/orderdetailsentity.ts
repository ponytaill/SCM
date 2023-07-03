
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { MaterialE577Entity } from './materiale577entity';
import { SupplierMa64aeEntity } from './supplierma64aeentity';

@NgEntity({
    originalCode: "OrderDetails",
    nodeCode: "orderDetailss"
})
export class OrderDetailsEntity extends Entity {

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
        originalDataField: 'ParentID',
        dataField: 'parentID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ParentID',

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
    parentID: string;

    @NgField({
        originalDataField: 'Amount',
        dataField: 'amount',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'Amount',
    })
    amount: any;

    @NgObject({
        dataField: 'materialId',
        originalDataField: 'MaterialId',
        type: MaterialE577Entity
    })
    materialId: MaterialE577Entity;
    @NgObject({
        dataField: 'supplier',
        originalDataField: 'Supplier',
        type: SupplierMa64aeEntity
    })
    supplier: SupplierMa64aeEntity;
}