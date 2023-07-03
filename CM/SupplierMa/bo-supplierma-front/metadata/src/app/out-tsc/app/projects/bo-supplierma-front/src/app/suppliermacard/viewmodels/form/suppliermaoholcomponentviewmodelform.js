import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
var SuppliermaOholComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(SuppliermaOholComponentViewmodelForm, _super);
    function SuppliermaOholComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'contactsEmail_90701715_rtno',
            name: "{{contactsEmail_90701715_rtno}}",
            binding: 'contactsEmail',
            updateOn: 'blur',
            defaultI18nValue: '联系人邮箱',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], SuppliermaOholComponentViewmodelForm.prototype, "contactsEmail", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'contactsAddress_f119b011_sfjn',
            name: "{{contactsAddress_f119b011_sfjn}}",
            binding: 'contactsAddress',
            updateOn: 'blur',
            defaultI18nValue: '办公地址',
            validRules: [
                {
                    type: 'matches',
                    constraints: [''],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], SuppliermaOholComponentViewmodelForm.prototype, "contactsAddress", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark_81bf894a_30fs',
            name: "{{remark_81bf894a_30fs}}",
            binding: 'remark',
            updateOn: 'blur',
            defaultI18nValue: '备注',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], SuppliermaOholComponentViewmodelForm.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'contacts_Contacts_Name_95a3cc07_th3j',
            name: "{{contacts_Contacts_Name_95a3cc07_th3j}}",
            binding: 'contacts.contacts_Name',
            updateOn: 'blur',
            defaultI18nValue: '联系人',
            validRules: [
                {
                    type: 'required',
                    constraints: [true],
                }
            ]
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], SuppliermaOholComponentViewmodelForm.prototype, "contacts_Contacts_Name", void 0);
    SuppliermaOholComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '联系方式',
            enableValidate: true
        }),
        Injectable()
    ], SuppliermaOholComponentViewmodelForm);
    return SuppliermaOholComponentViewmodelForm;
}(Form));
export { SuppliermaOholComponentViewmodelForm };
