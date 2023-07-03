import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var BillState6ca5Entity = /** @class */ (function (_super) {
    tslib_1.__extends(BillState6ca5Entity, _super);
    function BillState6ca5Entity() {
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
    ], BillState6ca5Entity.prototype, "billState", void 0);
    BillState6ca5Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "BillStatus",
            nodeCode: "billStatus"
        })
    ], BillState6ca5Entity);
    return BillState6ca5Entity;
}(Entity));
export { BillState6ca5Entity };
