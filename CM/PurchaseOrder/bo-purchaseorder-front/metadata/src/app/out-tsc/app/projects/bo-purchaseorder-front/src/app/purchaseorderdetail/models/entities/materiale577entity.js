import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var MaterialE577Entity = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialE577Entity, _super);
    function MaterialE577Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MaterialId',
            dataField: 'materialId',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialId.MaterialId',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialE577Entity.prototype, "materialId", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ID',
            dataField: 'materialId_ID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialId.MaterialId_ID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialE577Entity.prototype, "materialId_ID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MaterialCode',
            dataField: 'materialId_MaterialCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialId.MaterialId_MaterialCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialE577Entity.prototype, "materialId_MaterialCode", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MaterialName',
            dataField: 'materialId_MaterialName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialId.MaterialId_MaterialName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialE577Entity.prototype, "materialId_MaterialName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'EvePrice',
            dataField: 'materialId_EvePrice',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'MaterialId.MaterialId_EvePrice',
        }),
        tslib_1.__metadata("design:type", Object)
    ], MaterialE577Entity.prototype, "materialId_EvePrice", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'CatName(MaterialCat)',
            dataField: 'materialId_MaterialCat_CatName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialId.MaterialId_MaterialCat_CatName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialE577Entity.prototype, "materialId_MaterialCat_CatName", void 0);
    MaterialE577Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "MaterialId",
            nodeCode: "materialId"
        })
    ], MaterialE577Entity);
    return MaterialE577Entity;
}(Entity));
export { MaterialE577Entity };
