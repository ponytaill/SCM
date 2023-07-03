import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var ProcessInstance502cEntity = /** @class */ (function (_super) {
    tslib_1.__extends(ProcessInstance502cEntity, _super);
    function ProcessInstance502cEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ProcessInstance',
            dataField: 'processInstance',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'ProcessInstance.ProcessInstance',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], ProcessInstance502cEntity.prototype, "processInstance", void 0);
    ProcessInstance502cEntity = tslib_1.__decorate([
        NgEntity({
            originalCode: "ProcessInstance",
            nodeCode: "processInstance"
        })
    ], ProcessInstance502cEntity);
    return ProcessInstance502cEntity;
}(Entity));
export { ProcessInstance502cEntity };
