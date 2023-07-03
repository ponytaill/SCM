import * as tslib_1 from "tslib";
import { Entity, NgField, NgObject, NgEntity } from '@farris/devkit';
import { AttachmentInfoB892Entity } from './attachmentinfob892entity';
var MaterialFileEntity = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialFileEntity, _super);
    function MaterialFileEntity() {
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
    ], MaterialFileEntity.prototype, "id", void 0);
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
    ], MaterialFileEntity.prototype, "parentID", void 0);
    tslib_1.__decorate([
        NgObject({
            dataField: 'fileInfo',
            originalDataField: 'FileInfo',
            type: AttachmentInfoB892Entity
        }),
        tslib_1.__metadata("design:type", AttachmentInfoB892Entity)
    ], MaterialFileEntity.prototype, "fileInfo", void 0);
    MaterialFileEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "MaterialFile",
            nodeCode: "materialFiles"
        })
    ], MaterialFileEntity);
    return MaterialFileEntity;
}(Entity));
export { MaterialFileEntity };
