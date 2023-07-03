import * as tslib_1 from "tslib";
import { Entity, NgField, NgEntity } from '@farris/devkit';
var GspUser1a95Entity = /** @class */ (function (_super) {
    tslib_1.__extends(GspUser1a95Entity, _super);
    function GspUser1a95Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Contacts',
            dataField: 'contacts',
            primary: true,
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Contacts.Contacts',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUser1a95Entity.prototype, "contacts", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'ID',
            dataField: 'contacts_ID',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Contacts.Contacts_ID',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUser1a95Entity.prototype, "contacts_ID", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Name',
            dataField: 'contacts_Name',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Contacts.Contacts_Name',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUser1a95Entity.prototype, "contacts_Name", void 0);
    tslib_1.__decorate([
        NgField({
            originalDataField: 'Code',
            dataField: 'contacts_Code',
            originalDataFieldType: 'String',
            initValue: '',
            path: 'Contacts.Contacts_Code',
            validRules: [
                {
                    type: 'maxLength',
                    constraints: [36],
                    message: '最大长度为36',
                }
            ]
        }),
        tslib_1.__metadata("design:type", String)
    ], GspUser1a95Entity.prototype, "contacts_Code", void 0);
    GspUser1a95Entity = tslib_1.__decorate([
        NgEntity({
            originalCode: "Contacts",
            nodeCode: "contacts"
        })
    ], GspUser1a95Entity);
    return GspUser1a95Entity;
}(Entity));
export { GspUser1a95Entity };
