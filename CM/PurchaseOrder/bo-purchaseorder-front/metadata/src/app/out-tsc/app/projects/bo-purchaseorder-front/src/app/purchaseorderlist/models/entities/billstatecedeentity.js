import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var BillStateCedeEntity = /** @class */ (function (_super) {
    tslib_1.__extends(BillStateCedeEntity, _super);
    function BillStateCedeEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'BillState',
            dataField: 'billState',
            originalDataFieldType: 'Enum',
            defaultValue: '',
            initValue: 'Billing',
            path: 'BillStatus.BillState',
        }),
        tslib_1.__metadata("design:type", Object)
    ], BillStateCedeEntity.prototype, "billState", void 0);
    BillStateCedeEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "BillStatus",
            nodeCode: "billStatus"
        })
    ], BillStateCedeEntity);
    return BillStateCedeEntity;
}(Entity));
export { BillStateCedeEntity };
