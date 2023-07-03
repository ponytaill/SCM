import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { Material35b1Entity } from './material35b1entity';
import { SupplierMa2368Entity } from './supplierma2368entity';
var PlanDetailsEntity = /** @class */ (function (_super) {
    tslib_1.__extends(PlanDetailsEntity, _super);
    function PlanDetailsEntity() {
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
    ], PlanDetailsEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], PlanDetailsEntity.prototype, "parentID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MaterialAmount',
            dataField: 'materialAmount',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'MaterialAmount',
        }),
        tslib_1.__metadata("design:type", Object)
    ], PlanDetailsEntity.prototype, "materialAmount", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'materialId',
            originalDataField: 'MaterialId',
            type: Material35b1Entity
        }),
        tslib_1.__metadata("design:type", Material35b1Entity)
    ], PlanDetailsEntity.prototype, "materialId", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'supplier',
            originalDataField: 'Supplier',
            type: SupplierMa2368Entity
        }),
        tslib_1.__metadata("design:type", SupplierMa2368Entity)
    ], PlanDetailsEntity.prototype, "supplier", void 0);
    PlanDetailsEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "PlanDetails",
            nodeCode: "planDetailss"
        })
    ], PlanDetailsEntity);
    return PlanDetailsEntity;
}(Entity));
export { PlanDetailsEntity };
