import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var SysOrg77e5Entity = /** @class */ (function (_super) {
    tslib_1.__extends(SysOrg77e5Entity, _super);
    function SysOrg77e5Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'PurchaseDept',
            dataField: 'purchaseDept',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'PurchaseDept.PurchaseDept',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SysOrg77e5Entity.prototype, "purchaseDept", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ID',
            dataField: 'purchaseDept_ID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'PurchaseDept.PurchaseDept_ID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SysOrg77e5Entity.prototype, "purchaseDept_ID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'name',
            dataField: 'purchaseDept_name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'PurchaseDept.PurchaseDept_name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [100],
                    message: '最大长度为100',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SysOrg77e5Entity.prototype, "purchaseDept_name", void 0);
    SysOrg77e5Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "PurchaseDept",
            nodeCode: "purchaseDept"
        })
    ], SysOrg77e5Entity);
    return SysOrg77e5Entity;
}(Entity));
export { SysOrg77e5Entity };
