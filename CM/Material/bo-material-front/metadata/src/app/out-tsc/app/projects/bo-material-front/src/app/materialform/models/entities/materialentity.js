import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, EntityList, NgList, NgEntity } from '@farris/devkit';
import { MaterialFileEntity } from './materialfileentity';
import { MaterialCatAdd4Entity } from './materialcatadd4entity';
var MaterialEntity = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialEntity, _super);
    function MaterialEntity() {
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
    ], MaterialEntity.prototype, "id", void 0);
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
    ], MaterialEntity.prototype, "version", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MaterialCode',
            dataField: 'materialCode',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialCode',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialEntity.prototype, "materialCode", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'MaterialName',
            dataField: 'materialName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'MaterialName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], MaterialEntity.prototype, "materialName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'EvePrice',
            dataField: 'evePrice',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'EvePrice',
        }),
        tslib_1.__metadata("design:type", Object)
    ], MaterialEntity.prototype, "evePrice", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Repertory',
            dataField: 'repertory',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'Repertory',
        }),
        tslib_1.__metadata("design:type", Object)
    ], MaterialEntity.prototype, "repertory", void 0);
    tslib_1.__decorate([
        NgList({
            dataField: 'materialFiles',
            originalDataField: '',
            type: MaterialFileEntity
        }),
        tslib_1.__metadata("design:type", EntityList)
    ], MaterialEntity.prototype, "materialFiles", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'materialCat',
            originalDataField: 'MaterialCat',
            type: MaterialCatAdd4Entity
        }),
        tslib_1.__metadata("design:type", MaterialCatAdd4Entity)
    ], MaterialEntity.prototype, "materialCat", void 0);
    MaterialEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Material",
            nodeCode: "materials"
        })
    ], MaterialEntity);
    return MaterialEntity;
}(Entity));
export { MaterialEntity };
