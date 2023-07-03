import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var Material88e7Entity = /** @class */ (function (_super) {
    tslib_1.__extends(Material88e7Entity, _super);
    function Material88e7Entity() {
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
    ], Material88e7Entity.prototype, "materialId", void 0);
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
    ], Material88e7Entity.prototype, "materialId_ID", void 0);
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
    ], Material88e7Entity.prototype, "materialId_MaterialCode", void 0);
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
    ], Material88e7Entity.prototype, "materialId_MaterialName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MaterialCat',
            dataField: 'materialId_MaterialCat',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialId.MaterialId_MaterialCat',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Material88e7Entity.prototype, "materialId_MaterialCat", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'EvePrice',
            dataField: 'materialId_EvePrice',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'MaterialId.MaterialId_EvePrice',
        }),
        tslib_1.__metadata("design:type", Object)
    ], Material88e7Entity.prototype, "materialId_EvePrice", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Repertory',
            dataField: 'materialId_Repertory',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'MaterialId.MaterialId_Repertory',
        }),
        tslib_1.__metadata("design:type", Object)
    ], Material88e7Entity.prototype, "materialId_Repertory", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ID(MaterialCat)',
            dataField: 'materialId_MaterialCat_ID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialId.MaterialId_MaterialCat_ID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Material88e7Entity.prototype, "materialId_MaterialCat_ID", void 0);
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
    ], Material88e7Entity.prototype, "materialId_MaterialCat_CatName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'CatCode(MaterialCat)',
            dataField: 'materialId_MaterialCat_CatCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialId.MaterialId_MaterialCat_CatCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], Material88e7Entity.prototype, "materialId_MaterialCat_CatCode", void 0);
    Material88e7Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "MaterialId",
            nodeCode: "materialId"
        })
    ], Material88e7Entity);
    return Material88e7Entity;
}(Entity));
export { Material88e7Entity };
