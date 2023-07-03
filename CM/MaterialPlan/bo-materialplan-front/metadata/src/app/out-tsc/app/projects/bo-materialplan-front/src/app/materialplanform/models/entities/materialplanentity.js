import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, EntityList, NgList, NgEntity } from '@farris/devkit';
import { PlanDetailsEntity } from './plandetailsentity';
import { BillState6a6fEntity } from './billstate6a6fentity';
import { ProcessInstance502cEntity } from './processinstance502centity';
import { GspUserA50fEntity } from './gspusera50fentity';
import { SysOrgF9F7Entity } from './sysorgf9f7entity';
import { GspUserF039Entity } from './gspuserf039entity';
var MaterialPlanEntity = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialPlanEntity, _super);
    function MaterialPlanEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialPlanEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Version',
            dataField: 'version',
            originalDataFieldType: 'DateTime',
            initValue: '0001-01-01T00:00:00',
            path: 'Version',
            enableTimeZone: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialPlanEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'DeliveryDate',
            dataField: 'deliveryDate',
            originalDataFieldType: 'DateTime',
            initValue: '0001-01-01T00:00:00',
            path: 'DeliveryDate',
            enableTimeZone: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialPlanEntity.prototype, "deliveryDate", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialPlanEntity.prototype, "planCode", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialPlanEntity.prototype, "planName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'IsPurchaseOrder',
            dataField: 'isPurchaseOrder',
            originalDataFieldType: 'Boolean',
            initValue: false,
            path: 'IsPurchaseOrder',
        }),
        tslib_1.__metadata("design:type", Object)
    ], MaterialPlanEntity.prototype, "isPurchaseOrder", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'TotalPrice',
            dataField: 'totalPrice',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'TotalPrice',
        }),
        tslib_1.__metadata("design:type", Object)
    ], MaterialPlanEntity.prototype, "totalPrice", void 0);
    tslib_1.__decorate([
        NgList({
            dataField: 'planDetailss',
            originalDataField: '',
            type: PlanDetailsEntity
        }),
        tslib_1.__metadata("design:type", EntityList)
    ], MaterialPlanEntity.prototype, "planDetailss", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'billStatus',
            originalDataField: 'BillStatus',
            type: BillState6a6fEntity
        }),
        tslib_1.__metadata("design:type", BillState6a6fEntity)
    ], MaterialPlanEntity.prototype, "billStatus", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'processInstance',
            originalDataField: 'ProcessInstance',
            type: ProcessInstance502cEntity
        }),
        tslib_1.__metadata("design:type", ProcessInstance502cEntity)
    ], MaterialPlanEntity.prototype, "processInstance", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'applicant',
            originalDataField: 'Applicant',
            type: GspUserA50fEntity
        }),
        tslib_1.__metadata("design:type", GspUserA50fEntity)
    ], MaterialPlanEntity.prototype, "applicant", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'purchaseDept',
            originalDataField: 'PurchaseDept',
            type: SysOrgF9F7Entity
        }),
        tslib_1.__metadata("design:type", SysOrgF9F7Entity)
    ], MaterialPlanEntity.prototype, "purchaseDept", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'purchaser',
            originalDataField: 'Purchaser',
            type: GspUserF039Entity
        }),
        tslib_1.__metadata("design:type", GspUserF039Entity)
    ], MaterialPlanEntity.prototype, "purchaser", void 0);
    MaterialPlanEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "MaterialPlan",
            nodeCode: "materialPlans"
        })
    ], MaterialPlanEntity);
    return MaterialPlanEntity;
}(Entity));
export { MaterialPlanEntity };
