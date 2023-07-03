import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var SysOrgF9F7Entity = /** @class */ (function (_super) {
    tslib_1.__extends(SysOrgF9F7Entity, _super);
    function SysOrgF9F7Entity() {
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
    ], SysOrgF9F7Entity.prototype, "purchaseDept", void 0);
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
    ], SysOrgF9F7Entity.prototype, "purchaseDept_ID", void 0);
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
    ], SysOrgF9F7Entity.prototype, "purchaseDept_name", void 0);
    SysOrgF9F7Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "PurchaseDept",
            nodeCode: "purchaseDept"
        })
    ], SysOrgF9F7Entity);
    return SysOrgF9F7Entity;
}(Entity));
export { SysOrgF9F7Entity };
