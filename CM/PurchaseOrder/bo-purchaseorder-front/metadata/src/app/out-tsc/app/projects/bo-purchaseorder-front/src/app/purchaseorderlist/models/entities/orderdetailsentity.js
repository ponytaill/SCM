import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { MaterialE577Entity } from './materiale577entity';
import { SupplierMa64aeEntity } from './supplierma64aeentity';
var OrderDetailsEntity = /** @class */ (function (_super) {
    tslib_1.__extends(OrderDetailsEntity, _super);
    function OrderDetailsEntity() {
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
    ], OrderDetailsEntity.prototype, "id", void 0);
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
    ], OrderDetailsEntity.prototype, "parentID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Amount',
            dataField: 'amount',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Amount',
        }),
        tslib_1.__metadata("design:type", Object)
    ], OrderDetailsEntity.prototype, "amount", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'materialId',
            originalDataField: 'MaterialId',
            type: MaterialE577Entity
        }),
        tslib_1.__metadata("design:type", MaterialE577Entity)
    ], OrderDetailsEntity.prototype, "materialId", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'supplier',
            originalDataField: 'Supplier',
            type: SupplierMa64aeEntity
        }),
        tslib_1.__metadata("design:type", SupplierMa64aeEntity)
    ], OrderDetailsEntity.prototype, "supplier", void 0);
    OrderDetailsEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "OrderDetails",
            nodeCode: "orderDetailss"
        })
    ], OrderDetailsEntity);
    return OrderDetailsEntity;
}(Entity));
export { OrderDetailsEntity };
