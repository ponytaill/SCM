import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var GspUserA50fEntity = /** @class */ (function (_super) {
    tslib_1.__extends(GspUserA50fEntity, _super);
    function GspUserA50fEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Applicant',
            dataField: 'applicant',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Applicant.Applicant',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUserA50fEntity.prototype, "applicant", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ID',
            dataField: 'applicant_ID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Applicant.Applicant_ID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUserA50fEntity.prototype, "applicant_ID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Name',
            dataField: 'applicant_Name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Applicant.Applicant_Name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUserA50fEntity.prototype, "applicant_Name", void 0);
    GspUserA50fEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Applicant",
            nodeCode: "applicant"
        })
    ], GspUserA50fEntity);
    return GspUserA50fEntity;
}(Entity));
export { GspUserA50fEntity };
