import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var SupplierMa64aeEntity = /** @class */ (function (_super) {
    tslib_1.__extends(SupplierMa64aeEntity, _super);
    function SupplierMa64aeEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Supplier',
            dataField: 'supplier',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Supplier.Supplier',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SupplierMa64aeEntity.prototype, "supplier", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ID',
            dataField: 'supplier_ID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Supplier.Supplier_ID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SupplierMa64aeEntity.prototype, "supplier_ID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'SupplierName',
            dataField: 'supplier_SupplierName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Supplier.Supplier_SupplierName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SupplierMa64aeEntity.prototype, "supplier_SupplierName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'SupplierCode',
            dataField: 'supplier_SupplierCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Supplier.Supplier_SupplierCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SupplierMa64aeEntity.prototype, "supplier_SupplierCode", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ContactsEmail',
            dataField: 'supplier_ContactsEmail',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Supplier.Supplier_ContactsEmail',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [100],
                    message: '最大长度为100',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SupplierMa64aeEntity.prototype, "supplier_ContactsEmail", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ContactsAddress',
            dataField: 'supplier_ContactsAddress',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Supplier.Supplier_ContactsAddress',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [100],
                    message: '最大长度为100',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SupplierMa64aeEntity.prototype, "supplier_ContactsAddress", void 0);
    SupplierMa64aeEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Supplier",
            nodeCode: "supplier"
        })
    ], SupplierMa64aeEntity);
    return SupplierMa64aeEntity;
}(Entity));
export { SupplierMa64aeEntity };
