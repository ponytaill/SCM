import * as tslib_1 from "tslib";
import { Pipe, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
export function createTranslateLoader(http, version) {
    var versionSuffix = "";
    if (version) {
        versionSuffix = "?v=" + version;
    }
    return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-materialplan-front/materialplancard/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "button-data-export": "导出", "button-data-import": "导入", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "物料需求计划详情", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "main-container": "", "like-card-container": "", "basic-form-component-ref": "", "detail-container": "", "detail-section": "", "Section/detail-section/mainTitle": "", "Section/detail-section/subTitle": "", "detail-tab": "", "plandetails-tab-page": "物料需求计划明细", "plandetails-component-ref": "", "plandetails-tab-toolbar": "", "plandetailsAddButton": "新增", "plandetailsRemoveButton": "删除", "tabToolbarItem-fy36": "导入", "tabToolbarItem-56w5": "勾选导出", "tabToolbarItem-caan": "全部导出", "basic-form-component": "", "basic-form-section": "", "Section/basic-form-section/mainTitle": "基本信息", "Section/basic-form-section/subTitle": "", "basic-form-layout": "", "applicant_Applicant_Name_d4373c28_6dic": "制单人", "LookupEdit/applicant_Applicant_Name_d4373c28_6dic/placeHolder": "", "LookupEdit/applicant_Applicant_Name_d4373c28_6dic/dialogTitle": "", "deliveryDate_7be8a928_jelq": "交货日期", "DateBox/deliveryDate_7be8a928_jelq/placeHolder": "", "purchaseDept_PurchaseDept_name_8d6e8922_yvzr": "采购部门", "LookupEdit/purchaseDept_PurchaseDept_name_8d6e8922_yvzr/placeHolder": "", "LookupEdit/purchaseDept_PurchaseDept_name_8d6e8922_yvzr/dialogTitle": "", "planCode_7b926633_5dke": "计划编号", "TextBox/planCode_7b926633_5dke/placeHolder": "", "planName_fbe5d590_15n2": "计划名称", "TextBox/planName_fbe5d590_15n2/placeHolder": "", "isPurchaseOrder_51920336_9xj5": "是否已生成采购订单", "totalPrice_1c1f8bdb_p30m": "物料总价", "NumberSpinner/totalPrice_1c1f8bdb_p30m/placeHolder": "", "purchaser_Purchaser_Name_55f1e399_hz5j": "采购员", "LookupEdit/purchaser_Purchaser_Name_55f1e399_hz5j/placeHolder": "", "LookupEdit/purchaser_Purchaser_Name_55f1e399_hz5j/dialogTitle": "", "plandetails-component": "", "plandetails-component-layout": "", "dataGrid_plandetails": "", "DataGrid/dataGrid_plandetails/lineNumberTitle": "", "DataGrid/dataGrid_plandetails/OperateEditButton": "编辑", "DataGrid/dataGrid_plandetails/OperateDeleteButton": "删除", "DataGrid/dataGrid_plandetails/OperateColumn": "操作", "materialId_MaterialId_MaterialCode_08ca00c7_ao7g": "物料编号", "GridField/materialId_MaterialId_MaterialCode_08ca00c7_ao7g/editor/materialId_MaterialId_MaterialCode_08ca00c7_bba6": "文本", "GridField/materialId_MaterialId_MaterialCode_08ca00c7_ao7g/editor/LookupEdit/materialId_MaterialId_MaterialCode_08ca00c7_bba6/placeHolder": "", "GridField/materialId_MaterialId_MaterialCode_08ca00c7_ao7g/editor/LookupEdit/materialId_MaterialId_MaterialCode_08ca00c7_bba6/dialogTitle": "", "materialId_MaterialId_MaterialName_0d109a4f_7r0m": "物料名称", "GridField/materialId_MaterialId_MaterialName_0d109a4f_7r0m/editor/materialId_MaterialId_MaterialName_0d109a4f_c6sl": "文本", "GridField/materialId_MaterialId_MaterialName_0d109a4f_7r0m/editor/TextBox/materialId_MaterialId_MaterialName_0d109a4f_c6sl/placeHolder": "", "materialId_MaterialId_EvePrice_998dde09_udfc": "市场价格", "GridField/materialId_MaterialId_EvePrice_998dde09_udfc/editor/materialId_MaterialId_EvePrice_998dde09_znlr": "数值框", "GridField/materialId_MaterialId_EvePrice_998dde09_udfc/editor/NumberSpinner/materialId_MaterialId_EvePrice_998dde09_znlr/placeHolder": "", "materialId_MaterialId_MaterialCat_CatName_e6f48613_344b": "物料类别", "GridField/materialId_MaterialId_MaterialCat_CatName_e6f48613_344b/editor/materialId_MaterialId_MaterialCat_CatName_e6f48613_vwbv": "文本", "GridField/materialId_MaterialId_MaterialCat_CatName_e6f48613_344b/editor/TextBox/materialId_MaterialId_MaterialCat_CatName_e6f48613_vwbv/placeHolder": "", "materiaAmount_143b71b6_wiiv": "物料数量", "GridField/materiaAmount_143b71b6_wiiv/editor/materiaAmount_143b71b6_5utc": "数值框", "GridField/materiaAmount_143b71b6_wiiv/editor/NumberSpinner/materiaAmount_143b71b6_5utc/placeHolder": "", "supplier_Supplier_SupplierCode_1d93ad3d_alr2": "供应商编号", "GridField/supplier_Supplier_SupplierCode_1d93ad3d_alr2/editor/supplier_Supplier_SupplierCode_1d93ad3d_6lav": "文本", "GridField/supplier_Supplier_SupplierCode_1d93ad3d_alr2/editor/LookupEdit/supplier_Supplier_SupplierCode_1d93ad3d_6lav/placeHolder": "", "GridField/supplier_Supplier_SupplierCode_1d93ad3d_alr2/editor/LookupEdit/supplier_Supplier_SupplierCode_1d93ad3d_6lav/dialogTitle": "", "supplier_Supplier_SupplierName_a4a0e5d0_ju44": "供应商名称", "GridField/supplier_Supplier_SupplierName_a4a0e5d0_ju44/editor/supplier_Supplier_SupplierName_a4a0e5d0_2by7": "文本", "GridField/supplier_Supplier_SupplierName_a4a0e5d0_ju44/editor/TextBox/supplier_Supplier_SupplierName_a4a0e5d0_2by7/placeHolder": "", "supplier_Supplier_ContactsEmail_9f031afb_8tfe": "联系人邮箱", "GridField/supplier_Supplier_ContactsEmail_9f031afb_8tfe/editor/supplier_Supplier_ContactsEmail_9f031afb_4z9p": "文本", "GridField/supplier_Supplier_ContactsEmail_9f031afb_8tfe/editor/TextBox/supplier_Supplier_ContactsEmail_9f031afb_4z9p/placeHolder": "", "supplier_Supplier_ContactsAddress_27ddf90a_w9yq": "办公地址", "GridField/supplier_Supplier_ContactsAddress_27ddf90a_w9yq/editor/supplier_Supplier_ContactsAddress_27ddf90a_zycw": "文本", "GridField/supplier_Supplier_ContactsAddress_27ddf90a_w9yq/editor/TextBox/supplier_Supplier_ContactsAddress_27ddf90a_zycw/placeHolder": "" } };
var LangPipe = /** @class */ (function () {
    function LangPipe(translate, http) {
        this.translate = translate;
        this.http = http;
    }
    LangPipe.prototype.transform = function (key, langCode, defaultValue) {
        var translateValue = this.translate.instant(key);
        if (translateValue == "JitI18nDefaultValue") {
            return defaultValue ? defaultValue : "";
        }
        return translateValue;
    };
    LangPipe = tslib_1.__decorate([
        Pipe({ name: 'lang' }),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], LangPipe);
    return LangPipe;
}());
export { LangPipe };
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (url) {
        if (!url) {
            url = "";
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeHtmlPipe = tslib_1.__decorate([
        Pipe({ name: 'safeHtml' }),
        tslib_1.__metadata("design:paramtypes", [DomSanitizer])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
var LangService = /** @class */ (function () {
    function LangService(translate) {
        this.translate = translate;
    }
    LangService.prototype.transform = function (key, langCode, defaultValue) {
        var translateValue = this.translate.instant(key);
        if (translateValue == "JitI18nDefaultValue") {
            return defaultValue ? defaultValue : "";
        }
        return translateValue;
    };
    LangService.prototype.getCurrentLanguage = function () {
        return this.translate.currentLang;
    };
    LangService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService])
    ], LangService);
    return LangService;
}());
export { LangService };
var TranslateResolveService = /** @class */ (function () {
    function TranslateResolveService(translate, http) {
        this.translate = translate;
        this.http = http;
        translate.defaultLang = 'zh-CHS';
        translate.setTranslation('zh-CHS', lang['zh-CHS']);
    }
    TranslateResolveService.prototype.resolve = function (route, state) {
        var _this = this;
        var langCode = localStorage.getItem('languageCode');
        if (!langCode) {
            langCode = "zh-CHS";
        }
        if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http, null))) {
            this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
            return of(this.translate[langCode]);
        }
        else {
            var httpOb = this.http.get("/apps/scm/cm/web/bo-materialplan-front/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                var currentVersion = null;
                if (data instanceof Array) {
                    var versionKey_1 = "materialplancard/" + langCode + ".json";
                    data.forEach(function (item) {
                        if (item.category == "i18n" && item.key == versionKey_1) {
                            currentVersion = item.value;
                        }
                    });
                }
                _this.translate.defaultLang = langCode;
                _this.translate.currentLang = langCode;
                _this.translate.currentLoader = createTranslateLoader(_this.http, currentVersion);
                var tran = _this.translate.getTranslation(langCode).pipe(catchError(function (err) {
                    console.error("read resource file failed,please check!!! " + err);
                    return of(err);
                }));
                return tran;
            }));
            return httpOb;
        }
    };
    TranslateResolveService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [TranslateService, HttpClient])
    ], TranslateResolveService);
    return TranslateResolveService;
}());
export { TranslateResolveService };
