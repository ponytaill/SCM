import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, EntityList, NgList, NgEntity } from '@farris/devkit';
import { SupplierMaterialEntity } from './suppliermaterialentity';
import { GspUser1a95Entity } from './gspuser1a95entity';
var SupplierMaEntity = /** @class */ (function (_super) {
    tslib_1.__extends(SupplierMaEntity, _super);
    function SupplierMaEntity() {
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
    ], SupplierMaEntity.prototype, "id", void 0);
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
    ], SupplierMaEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'SupplierName',
            dataField: 'supplierName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'SupplierName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SupplierMaEntity.prototype, "supplierName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'SupplierCode',
            dataField: 'supplierCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'SupplierCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SupplierMaEntity.prototype, "supplierCode", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ContactsEmail',
            dataField: 'contactsEmail',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ContactsEmail',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [100],
                    message: '最大长度为100',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SupplierMaEntity.prototype, "contactsEmail", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ContactsAddress',
            dataField: 'contactsAddress',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ContactsAddress',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [100],
                    message: '最大长度为100',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], SupplierMaEntity.prototype, "contactsAddress", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'SignTime',
            dataField: 'signTime',
            originalDataFieldType: 'DateTime',
            initValue: '0001-01-01T00:00:00',
            path: 'SignTime',
            enableTimeZone: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], SupplierMaEntity.prototype, "signTime", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Remark',
            dataField: 'remark',
            originalDataFieldType: 'Text',
            initValue: '',
            path: 'Remark',
        }),
        tslib_1.__metadata("design:type", Object)
    ], SupplierMaEntity.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgList({
            dataField: 'supplierMaterials',
            originalDataField: '',
            type: SupplierMaterialEntity
        }),
        tslib_1.__metadata("design:type", EntityList)
    ], SupplierMaEntity.prototype, "supplierMaterials", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'contacts',
            originalDataField: 'Contacts',
            type: GspUser1a95Entity
        }),
        tslib_1.__metadata("design:type", GspUser1a95Entity)
    ], SupplierMaEntity.prototype, "contacts", void 0);
    SupplierMaEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "SupplierMa",
            nodeCode: "supplierMas"
        })
    ], SupplierMaEntity);
    return SupplierMaEntity;
}(Entity));
export { SupplierMaEntity };
