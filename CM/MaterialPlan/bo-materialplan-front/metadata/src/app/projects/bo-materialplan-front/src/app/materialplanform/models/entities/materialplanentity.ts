
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { PlanDetailsEntity } from './plandetailsentity';
import { BillState6a6fEntity } from './billstate6a6fentity';
import { ProcessInstance502cEntity } from './processinstance502centity';
import { GspUserA50fEntity } from './gspusera50fentity';
import { SysOrgF9F7Entity } from './sysorgf9f7entity';
import { GspUserF039Entity } from './gspuserf039entity';

@NgEntity({
    originalCode: "MaterialPlan",
    nodeCode: "materialPlans"
})
export class MaterialPlanEntity extends Entity {

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
        originalDataField: 'DeliveryDate',
        dataField: 'deliveryDate',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'DeliveryDate',
        enableTimeZone: true,
    })
    deliveryDate: string;

    @NgField({
        originalDataField: 'PlanCode',
        dataField: 'planCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'PlanCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    planCode: string;

    @NgField({
        originalDataField: 'PlanName',
        dataField: 'planName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'PlanName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    planName: string;

    @NgField({
        originalDataField: 'IsPurchaseOrder',
        dataField: 'isPurchaseOrder',
        originalDataFieldType: 'Boolean',
        initValue: false,
        path: 'IsPurchaseOrder',
    })
    isPurchaseOrder: any;

    @NgField({
        originalDataField: 'TotalPrice',
        dataField: 'totalPrice',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'TotalPrice',
    })
    totalPrice: any;

    @NgList({
        dataField: 'planDetailss',
        originalDataField: '',
        type: PlanDetailsEntity

    })

    planDetailss: EntityList<PlanDetailsEntity>;
    @NgObject({
        dataField: 'billStatus',
        originalDataField: 'BillStatus',
        type: BillState6a6fEntity
    })
    billStatus: BillState6a6fEntity;
    @NgObject({
        dataField: 'processInstance',
        originalDataField: 'ProcessInstance',
        type: ProcessInstance502cEntity
    })
    processInstance: ProcessInstance502cEntity;
    @NgObject({
        dataField: 'applicant',
        originalDataField: 'Applicant',
        type: GspUserA50fEntity
    })
    applicant: GspUserA50fEntity;
    @NgObject({
        dataField: 'purchaseDept',
        originalDataField: 'PurchaseDept',
        type: SysOrgF9F7Entity
    })
    purchaseDept: SysOrgF9F7Entity;
    @NgObject({
        dataField: 'purchaser',
        originalDataField: 'Purchaser',
        type: GspUserF039Entity
    })
    purchaser: GspUserF039Entity;
}