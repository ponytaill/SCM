import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var MaterialCatAdd4Entity = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialCatAdd4Entity, _super);
    function MaterialCatAdd4Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MaterialCat',
            dataField: 'materialCat',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialCat.MaterialCat',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialCatAdd4Entity.prototype, "materialCat", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ID',
            dataField: 'materialCat_ID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialCat.MaterialCat_ID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialCatAdd4Entity.prototype, "materialCat_ID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'CatName',
            dataField: 'materialCat_CatName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialCat.MaterialCat_CatName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialCatAdd4Entity.prototype, "materialCat_CatName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'CatCode',
            dataField: 'materialCat_CatCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialCat.MaterialCat_CatCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialCatAdd4Entity.prototype, "materialCat_CatCode", void 0);
    MaterialCatAdd4Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "MaterialCat",
            nodeCode: "materialCat"
        })
    ], MaterialCatAdd4Entity);
    return MaterialCatAdd4Entity;
}(Entity));
export { MaterialCatAdd4Entity };
