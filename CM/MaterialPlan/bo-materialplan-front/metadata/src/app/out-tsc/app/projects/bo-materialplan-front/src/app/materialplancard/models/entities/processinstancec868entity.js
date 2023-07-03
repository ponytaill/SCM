import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var ProcessInstanceC868Entity = /** @class */ (function (_super) {
    tslib_1.__extends(ProcessInstanceC868Entity, _super);
    function ProcessInstanceC868Entity() {
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
    ], ProcessInstanceC868Entity.prototype, "processInstance", void 0);
    ProcessInstanceC868Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "ProcessInstance",
            nodeCode: "processInstance"
        })
    ], ProcessInstanceC868Entity);
    return ProcessInstanceC868Entity;
}(Entity));
export { ProcessInstanceC868Entity };
