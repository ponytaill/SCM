import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var GspUser57e9Entity = /** @class */ (function (_super) {
    tslib_1.__extends(GspUser57e9Entity, _super);
    function GspUser57e9Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Purchaser',
            dataField: 'purchaser',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Purchaser.Purchaser',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUser57e9Entity.prototype, "purchaser", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ID',
            dataField: 'purchaser_ID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Purchaser.Purchaser_ID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUser57e9Entity.prototype, "purchaser_ID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Name',
            dataField: 'purchaser_Name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Purchaser.Purchaser_Name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUser57e9Entity.prototype, "purchaser_Name", void 0);
    GspUser57e9Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Purchaser",
            nodeCode: "purchaser"
        })
    ], GspUser57e9Entity);
    return GspUser57e9Entity;
}(Entity));
export { GspUser57e9Entity };
