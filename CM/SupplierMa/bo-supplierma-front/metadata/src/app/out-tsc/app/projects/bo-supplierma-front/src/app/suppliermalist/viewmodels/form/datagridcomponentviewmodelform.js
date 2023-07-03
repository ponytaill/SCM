import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgValidateForm } from '@farris/devkit';
import { DateConverter } from '@farris/kendo-binding';
var DataGridComponentViewmodelForm = /** @class */ (function (_super) {
    tslib_1.__extends(DataGridComponentViewmodelForm, _super);
    function DataGridComponentViewmodelForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        NgFormControl({
            id: 'supplierName',
            name: "{{supplierName_8347d63a_bhow}}",
            binding: 'supplierName',
            updateOn: 'blur',
            defaultI18nValue: '供应商名称',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "supplierName", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'supplierCode',
            name: "{{supplierCode_cff3b19d_scg5}}",
            binding: 'supplierCode',
            updateOn: 'blur',
            defaultI18nValue: '供应商编号',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "supplierCode", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'contactsEmail',
            name: "{{contactsEmail_d64a584e_qs3a}}",
            binding: 'contactsEmail',
            updateOn: 'blur',
            defaultI18nValue: '联系人邮箱',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "contactsEmail", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'contactsAddress',
            name: "{{contactsAddress_0413715c_u5sw}}",
            binding: 'contactsAddress',
            updateOn: 'blur',
            defaultI18nValue: '办公地址',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "contactsAddress", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'signTime',
            name: "{{signTime_9a10dffd_sb3z}}",
            binding: 'signTime',
            updateOn: 'blur',
            valueConverter: new DateConverter('yyyy-MM-dd'),
            defaultI18nValue: '注册时间',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "signTime", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'remark',
            name: "{{remark_8a27efaa_zbgx}}",
            binding: 'remark',
            updateOn: 'blur',
            defaultI18nValue: '备注',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "remark", void 0);
    tslib_1.__decorate([
        NgFormControl({
            id: 'contacts.contacts_Name',
            name: "{{contacts_Contacts_Name_b340437c_f4rv}}",
            binding: 'contacts.contacts_Name',
            updateOn: 'blur',
            defaultI18nValue: '联系人',
        }),
        tslib_1.__metadata("design:type", FormControl)
    ], DataGridComponentViewmodelForm.prototype, "contacts_Contacts_Name", void 0);
    DataGridComponentViewmodelForm = tslib_1.__decorate([
        Injectable(),
        NgValidateForm({
            formGroupName: '供应商管理',
            enableValidate: false
        }),
        Injectable()
    ], DataGridComponentViewmodelForm);
    return DataGridComponentViewmodelForm;
}(Form));
export { DataGridComponentViewmodelForm };
