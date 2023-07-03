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
    return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-purchaseorder-front/purchaseorderlist/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "root-component": "", "root-layout": "", "query-scheme-section": "", "Section/query-scheme-section/mainTitle": "主标题", "Section/query-scheme-section/subTitle": "", "query-scheme-1": "默认筛选方案", "QueryScheme/query-scheme-1/dadae0fb-54bb-4ed6-a545-a515d1b28040": "主键", "QueryScheme/query-scheme-1/dadae0fb-54bb-4ed6-a545-a515d1b28040/placeHolder": "", "QueryScheme/query-scheme-1/cb1fe066-486c-44e1-ac69-398598d5265f": "版本", "QueryScheme/query-scheme-1/cb1fe066-486c-44e1-ac69-398598d5265f/placeHolder": "", "QueryScheme/query-scheme-1/57e3230a-9a80-48c2-97b0-785bb6c77fe2": "订单编号", "QueryScheme/query-scheme-1/57e3230a-9a80-48c2-97b0-785bb6c77fe2/placeHolder": "", "QueryScheme/query-scheme-1/547b5e91-bb43-463e-8898-bf5f87ca15f1": "订单名称", "QueryScheme/query-scheme-1/547b5e91-bb43-463e-8898-bf5f87ca15f1/placeHolder": "", "QueryScheme/query-scheme-1/77e5638b-b411-490b-88b5-dce038429686": "采购部门", "QueryScheme/query-scheme-1/77e5638b-b411-490b-88b5-dce038429686/placeHolder": "", "QueryScheme/query-scheme-1/ad7604d9-6461-4cb6-a7d9-631d4764910b": "采购部门", "QueryScheme/query-scheme-1/ad7604d9-6461-4cb6-a7d9-631d4764910b/placeHolder": "", "QueryScheme/query-scheme-1/ad7604d9-6461-4cb6-a7d9-631d4764910b/control/help/dialogTitle": "", "QueryScheme/query-scheme-1/2c6c71c1-fb98-47cb-a806-7e89b050d591": "名称", "QueryScheme/query-scheme-1/2c6c71c1-fb98-47cb-a806-7e89b050d591/placeHolder": "", "QueryScheme/query-scheme-1/57e9e09f-9b5c-4d6a-a497-4d5d7db904b4": "采购员", "QueryScheme/query-scheme-1/57e9e09f-9b5c-4d6a-a497-4d5d7db904b4/placeHolder": "", "QueryScheme/query-scheme-1/981a9463-30e2-41c9-884c-d234ce80bec8": "采购人", "QueryScheme/query-scheme-1/981a9463-30e2-41c9-884c-d234ce80bec8/placeHolder": "", "QueryScheme/query-scheme-1/981a9463-30e2-41c9-884c-d234ce80bec8/control/help/dialogTitle": "", "QueryScheme/query-scheme-1/c5bf6949-627b-4cd8-9b65-42db21acf995": "名称", "QueryScheme/query-scheme-1/c5bf6949-627b-4cd8-9b65-42db21acf995/placeHolder": "", "QueryScheme/query-scheme-1/a51eb05d-b4c3-4c45-8a30-95eae4357279": "下单日期", "QueryScheme/query-scheme-1/a51eb05d-b4c3-4c45-8a30-95eae4357279/placeHolder": "", "QueryScheme/query-scheme-1/a5be115d-f47f-4b2b-aa4a-0920ff22d51a": "物料总价", "QueryScheme/query-scheme-1/a5be115d-f47f-4b2b-aa4a-0920ff22d51a/placeHolder": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "采购订单列表", "page-header-toolbar": "", "button-add": "新增", "button-edit": "编辑", "button-view": "查看", "button-delete": "删除", "toolBarItem-9y89": "查看变更日志", "toolBarItem-lo8j": "打印", "toolBarItem-kw71": "提交订单", "page-main": "", "data-grid-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "序", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "orderCode_57e3230a_bnu4": "订单编号", "orderName_547b5e91_ui0i": "订单名称", "purchaseDept_PurchaseDept_name_2c6c71c1_a32l": "名称", "purchaser_Purchaser_Name_c5bf6949_w6ao": "名称", "orderDate_a51eb05d_5ohq": "下单日期", "totalPrice_a5be115d_7il8": "物料总价", "isFinished_91d7235a_1sa3": "入库状态", "GridField/isFinished_91d7235a_1sa3/enumData/yes": "已入库", "GridField/isFinished_91d7235a_1sa3/enumData/no": "未入库" } };
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
                    var versionKey_1 = "purchaseorderlist/" + langCode + ".json";
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
