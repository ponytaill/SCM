
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { Material35b1Entity } from './material35b1entity';
import { SupplierMa2368Entity } from './supplierma2368entity';

@NgEntity({
    originalCode: "PlanDetails",
    nodeCode: "planDetailss"
})
export class PlanDetailsEntity extends Entity {

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
        originalDataField: 'MaterialAmount',
        dataField: 'materialAmount',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'MaterialAmount',
    })
    materialAmount: any;

    @NgObject({
        dataField: 'materialId',
        originalDataField: 'MaterialId',
        type: Material35b1Entity
    })
    materialId: Material35b1Entity;
    @NgObject({
        dataField: 'supplier',
        originalDataField: 'Supplier',
        type: SupplierMa2368Entity
    })
    supplier: SupplierMa2368Entity;
}