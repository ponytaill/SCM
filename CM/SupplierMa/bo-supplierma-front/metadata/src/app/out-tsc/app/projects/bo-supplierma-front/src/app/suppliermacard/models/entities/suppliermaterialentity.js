import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { Material88e7Entity } from './material88e7entity';
var SupplierMaterialEntity = /** @class */ (function (_super) {
    tslib_1.__extends(SupplierMaterialEntity, _super);
    function SupplierMaterialEntity() {
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
    ], SupplierMaterialEntity.prototype, "id", void 0);
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
    ], SupplierMaterialEntity.prototype, "parentID", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'materialId',
            originalDataField: 'MaterialId',
            type: Material88e7Entity
        }),
        tslib_1.__metadata("design:type", Material88e7Entity)
    ], SupplierMaterialEntity.prototype, "materialId", void 0);
    SupplierMaterialEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "SupplierMaterial",
            nodeCode: "supplierMaterials"
        })
    ], SupplierMaterialEntity);
    return SupplierMaterialEntity;
}(Entity));
export { SupplierMaterialEntity };
