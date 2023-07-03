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
    return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-purchaseorder-front/purchaseorderdetail/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "materialId_MaterialId_MaterialCat_d133ecf7_ql7e": "物料类别", "GridField/materialId_MaterialId_MaterialCat_d133ecf7_ql7e/editor/materialId_MaterialId_MaterialCat_d133ecf7_moh6": "文本", "GridField/materialId_MaterialId_MaterialCat_d133ecf7_ql7e/editor/TextBox/materialId_MaterialId_MaterialCat_d133ecf7_moh6/placeHolder": "", "root-component": "", "root-layout": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "采购订单详情", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-save": "保存", "button-cancel": "取消", "main-container": "", "like-card-container": "", "basic-form-component-ref": "", "detail-container": "", "detail-section": "", "Section/detail-section/mainTitle": "", "Section/detail-section/subTitle": "", "detail-tab": "", "orderdetails-tab-page": "采购订单明细", "orderdetails-component-ref": "", "orderdetails-tab-toolbar": "", "orderdetailsAddButton": "新增", "orderdetailsRemoveButton": "删除", "basic-form-component": "", "basic-form-section": "", "Section/basic-form-section/mainTitle": "基本信息", "Section/basic-form-section/subTitle": "", "basic-form-layout": "", "orderCode_8f6f5647_uaby": "订单编号", "TextBox/orderCode_8f6f5647_uaby/placeHolder": "", "orderName_35bceb1e_r0en": "订单名称", "TextBox/orderName_35bceb1e_r0en/placeHolder": "", "purchaseDept_PurchaseDept_name_a6a5688e_ss3h": "采购部门", "LookupEdit/purchaseDept_PurchaseDept_name_a6a5688e_ss3h/placeHolder": "", "LookupEdit/purchaseDept_PurchaseDept_name_a6a5688e_ss3h/dialogTitle": "", "purchaser_Purchaser_Name_8e36074b_1h8e": "采购人", "LookupEdit/purchaser_Purchaser_Name_8e36074b_1h8e/placeHolder": "", "LookupEdit/purchaser_Purchaser_Name_8e36074b_1h8e/dialogTitle": "", "orderDate_56f7fcde_n04v": "下单日期", "DateBox/orderDate_56f7fcde_n04v/placeHolder": "", "totalPrice_b3c131a8_xth5": "物料总价", "NumberSpinner/totalPrice_b3c131a8_xth5/placeHolder": "", "orderdetails-component": "", "orderdetails-component-layout": "", "dataGrid_orderdetails": "", "DataGrid/dataGrid_orderdetails/lineNumberTitle": "", "DataGrid/dataGrid_orderdetails/OperateEditButton": "编辑", "DataGrid/dataGrid_orderdetails/OperateDeleteButton": "删除", "DataGrid/dataGrid_orderdetails/OperateColumn": "操作", "materialId_MaterialId_MaterialCode_4b4e149b_20en": "物料编号", "GridField/materialId_MaterialId_MaterialCode_4b4e149b_20en/editor/materialId_MaterialId_MaterialCode_4b4e149b_2ctd": "文本", "GridField/materialId_MaterialId_MaterialCode_4b4e149b_20en/editor/LookupEdit/materialId_MaterialId_MaterialCode_4b4e149b_2ctd/placeHolder": "", "GridField/materialId_MaterialId_MaterialCode_4b4e149b_20en/editor/LookupEdit/materialId_MaterialId_MaterialCode_4b4e149b_2ctd/dialogTitle": "", "materialId_MaterialId_MaterialName_a5c03a88_809u": "物料名称", "GridField/materialId_MaterialId_MaterialName_a5c03a88_809u/editor/materialId_MaterialId_MaterialName_a5c03a88_02gq": "文本", "GridField/materialId_MaterialId_MaterialName_a5c03a88_809u/editor/TextBox/materialId_MaterialId_MaterialName_a5c03a88_02gq/placeHolder": "", "materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r": "类别名称", "GridField/materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r/editor/materialId_MaterialId_MaterialCat_CatName_d031c736_0alv": "类别名称", "GridField/materialId_MaterialId_MaterialCat_CatName_d031c736_pe2r/editor/TextBox/materialId_MaterialId_MaterialCat_CatName_d031c736_0alv/placeHolder": "", "materialId_MaterialId_EvePrice_e3cd5498_b9ip": "市场价格", "GridField/materialId_MaterialId_EvePrice_e3cd5498_b9ip/editor/materialId_MaterialId_EvePrice_e3cd5498_49kl": "数值框", "GridField/materialId_MaterialId_EvePrice_e3cd5498_b9ip/editor/NumberSpinner/materialId_MaterialId_EvePrice_e3cd5498_49kl/placeHolder": "", "amount_58fd9353_fn66": "物料数量", "GridField/amount_58fd9353_fn66/editor/amount_58fd9353_0crg": "数值框", "GridField/amount_58fd9353_fn66/editor/NumberSpinner/amount_58fd9353_0crg/placeHolder": "", "supplier_Supplier_SupplierCode_ae2bec36_wkv2": "供应商编号", "GridField/supplier_Supplier_SupplierCode_ae2bec36_wkv2/editor/supplier_Supplier_SupplierCode_ae2bec36_6df1": "文本", "GridField/supplier_Supplier_SupplierCode_ae2bec36_wkv2/editor/LookupEdit/supplier_Supplier_SupplierCode_ae2bec36_6df1/placeHolder": "", "GridField/supplier_Supplier_SupplierCode_ae2bec36_wkv2/editor/LookupEdit/supplier_Supplier_SupplierCode_ae2bec36_6df1/dialogTitle": "", "supplier_Supplier_SupplierName_63c38913_j2pw": "供应商名称", "GridField/supplier_Supplier_SupplierName_63c38913_j2pw/editor/supplier_Supplier_SupplierName_63c38913_ac4f": "文本", "GridField/supplier_Supplier_SupplierName_63c38913_j2pw/editor/TextBox/supplier_Supplier_SupplierName_63c38913_ac4f/placeHolder": "", "supplier_Supplier_ContactsEmail_bbc84198_n9pv": "联系人邮箱", "GridField/supplier_Supplier_ContactsEmail_bbc84198_n9pv/editor/supplier_Supplier_ContactsEmail_bbc84198_dkci": "文本", "GridField/supplier_Supplier_ContactsEmail_bbc84198_n9pv/editor/TextBox/supplier_Supplier_ContactsEmail_bbc84198_dkci/placeHolder": "", "supplier_Supplier_ContactsAddress_65f7e3ff_389o": "办公地址", "GridField/supplier_Supplier_ContactsAddress_65f7e3ff_389o/editor/supplier_Supplier_ContactsAddress_65f7e3ff_ggel": "文本", "GridField/supplier_Supplier_ContactsAddress_65f7e3ff_389o/editor/TextBox/supplier_Supplier_ContactsAddress_65f7e3ff_ggel/placeHolder": "" } };
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
            var httpOb = this.http.get("/apps/scm/cm/web/bo-purchaseorder-front/version.json?v=" + new Date().getTime()).pipe(switchMap(function (data) {
                var currentVersion = null;
                if (data instanceof Array) {
                    var versionKey_1 = "purchaseorderdetail/" + langCode + ".json";
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
