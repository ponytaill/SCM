import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var GspUserF039Entity = /** @class */ (function (_super) {
    tslib_1.__extends(GspUserF039Entity, _super);
    function GspUserF039Entity() {
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
    ], GspUserF039Entity.prototype, "purchaser", void 0);
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
    ], GspUserF039Entity.prototype, "purchaser_ID", void 0);
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
    ], GspUserF039Entity.prototype, "purchaser_Name", void 0);
    GspUserF039Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Purchaser",
            nodeCode: "purchaser"
        })
    ], GspUserF039Entity);
    return GspUserF039Entity;
}(Entity));
export { GspUserF039Entity };
