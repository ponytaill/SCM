import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var AttachmentInfoB892Entity = /** @class */ (function (_super) {
    tslib_1.__extends(AttachmentInfoB892Entity, _super);
    function AttachmentInfoB892Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'AttachmentId',
            dataField: 'attachmentId',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'FileInfo.AttachmentId',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], AttachmentInfoB892Entity.prototype, "attachmentId", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'FileName',
            dataField: 'fileName',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'FileInfo.FileName',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [128],
                    message: '最大长度为128',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], AttachmentInfoB892Entity.prototype, "fileName", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'FileSize',
            dataField: 'fileSize',
            originalDataFieldType: 'Number',
            initValue: 0,
            path: 'FileInfo.FileSize',
        }),
        tslib_1.__metadata("design:type", Object)
    ], AttachmentInfoB892Entity.prototype, "fileSize", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'FileCreateTime',
            dataField: 'fileCreateTime',
            originalDataFieldType: 'DateTime',
            initValue: '0001-01-01T00:00:00',
            path: 'FileInfo.FileCreateTime',
            enableTimeZone: true,
        }),
        tslib_1.__metadata("design:type", String)
    ], AttachmentInfoB892Entity.prototype, "fileCreateTime", void 0);
    AttachmentInfoB892Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "FileInfo",
            nodeCode: "fileInfo"
        })
    ], AttachmentInfoB892Entity);
    return AttachmentInfoB892Entity;
}(Entity));
export { AttachmentInfoB892Entity };
