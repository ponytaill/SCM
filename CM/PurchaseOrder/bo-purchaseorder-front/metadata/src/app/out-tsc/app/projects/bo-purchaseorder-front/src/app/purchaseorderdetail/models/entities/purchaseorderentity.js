import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, EntityList, NgList, NgEntity } from '@farris/devkit';
import { OrderDetailsEntity } from './orderdetailsentity';
import { SysOrg77e5Entity } from './sysorg77e5entity';
import { GspUser57e9Entity } from './gspuser57e9entity';
var PurchaseOrderEntity = /** @class */ (function (_super) {
    tslib_1.__extends(PurchaseOrderEntity, _super);
    function PurchaseOrderEntity() {
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
    ], PurchaseOrderEntity.prototype, "id", void 0);
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
    ], PurchaseOrderEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], PurchaseOrderEntity.prototype, "orderCode", void 0);
    tslib_1.__decorate([
        NgField({
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
        }),
        tslib_1.__metadata("design:type", String)
    ], PurchaseOrderEntity.prototype, "orderName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'OrderDate',
            dataField: 'orderDate',
            originalDataFieldType: 'Date',
            initValue: '0001-01-01T00:00:00',
            path: 'OrderDate',
        }),
        tslib_1.__metadata("design:type", String)
    ], PurchaseOrderEntity.prototype, "orderDate", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'TotalPrice',
            dataField: 'totalPrice',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'TotalPrice',
        }),
        tslib_1.__metadata("design:type", Object)
    ], PurchaseOrderEntity.prototype, "totalPrice", void 0);
    tslib_1.__decorate([
        NgList({
            dataField: 'orderDetailss',
            originalDataField: '',
            type: OrderDetailsEntity
        }),
        tslib_1.__metadata("design:type", EntityList)
    ], PurchaseOrderEntity.prototype, "orderDetailss", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'purchaseDept',
            originalDataField: 'PurchaseDept',
            type: SysOrg77e5Entity
        }),
        tslib_1.__metadata("design:type", SysOrg77e5Entity)
    ], PurchaseOrderEntity.prototype, "purchaseDept", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'purchaser',
            originalDataField: 'Purchaser',
            type: GspUser57e9Entity
        }),
        tslib_1.__metadata("design:type", GspUser57e9Entity)
    ], PurchaseOrderEntity.prototype, "purchaser", void 0);
    PurchaseOrderEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "PurchaseOrder",
            nodeCode: "purchaseOrders"
        })
    ], PurchaseOrderEntity);
    return PurchaseOrderEntity;
}(Entity));
export { PurchaseOrderEntity };
