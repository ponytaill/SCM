import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var BillState6a6fEntity = /** @class */ (function (_super) {
    tslib_1.__extends(BillState6a6fEntity, _super);
    function BillState6a6fEntity() {
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
    ], BillState6a6fEntity.prototype, "billState", void 0);
    BillState6a6fEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "BillStatus",
            nodeCode: "billStatus"
        })
    ], BillState6a6fEntity);
    return BillState6a6fEntity;
}(Entity));
export { BillState6a6fEntity };
