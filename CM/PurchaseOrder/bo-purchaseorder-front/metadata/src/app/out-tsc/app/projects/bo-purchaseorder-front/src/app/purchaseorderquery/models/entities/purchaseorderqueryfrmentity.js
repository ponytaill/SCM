import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var PurchaseOrderQueryFrmEntity = /** @class */ (function (_super) {
    tslib_1.__extends(PurchaseOrderQueryFrmEntity, _super);
    function PurchaseOrderQueryFrmEntity() {
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
    ], PurchaseOrderQueryFrmEntity.prototype, "id", void 0);
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
    ], PurchaseOrderQueryFrmEntity.prototype, "orderName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'OrderDate',
            dataField: 'orderDate',
            originalDataFieldType: 'Date',
            initValue: '0001-01-01T00:00:00',
            path: 'OrderDate',
        }),
        tslib_1.__metadata("design:type", String)
    ], PurchaseOrderQueryFrmEntity.prototype, "orderDate", void 0);
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
    ], PurchaseOrderQueryFrmEntity.prototype, "orderCode", void 0);
    PurchaseOrderQueryFrmEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "PurchaseOrderQuery_frm",
            nodeCode: "purchaseOrderQuery_frms"
        })
    ], PurchaseOrderQueryFrmEntity);
    return PurchaseOrderQueryFrmEntity;
}(Entity));
export { PurchaseOrderQueryFrmEntity };
