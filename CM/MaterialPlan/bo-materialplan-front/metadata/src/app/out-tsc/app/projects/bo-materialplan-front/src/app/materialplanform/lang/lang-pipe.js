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
    return new TranslateHttpLoader(http, '/apps/scm/cm/web/bo-materialplan-front/materialplanform/i18n/', '.json' + versionSuffix);
}
export var lang = { "zh-CHS": { "GridField/isPurchaseOrder_75108363_6uu3/formatter/trueText": "是", "GridField/isPurchaseOrder_75108363_6uu3/formatter/falseText": "否", "root-component": "", "root-layout": "", "query-scheme-section": "", "Section/query-scheme-section/mainTitle": "主标题", "Section/query-scheme-section/subTitle": "", "query-scheme-1": "默认筛选方案", "QueryScheme/query-scheme-1/f73f5927-a02c-491c-9b5c-cd74be14d2fa": "主键", "QueryScheme/query-scheme-1/f73f5927-a02c-491c-9b5c-cd74be14d2fa/placeHolder": "", "QueryScheme/query-scheme-1/040f40dd-c841-498f-86c5-d8d58afb91d7": "版本", "QueryScheme/query-scheme-1/040f40dd-c841-498f-86c5-d8d58afb91d7/placeHolder": "", "QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0": "状态", "QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/placeHolder": "", "QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing": "制单", "QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval": "提交审批", "QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved": "审批通过", "QueryScheme/query-scheme-1/6a6f7e09-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed": "审批不通过", "QueryScheme/query-scheme-1/502cfc60-ad8f-4da3-a430-c8a7f2162135": "流程实例", "QueryScheme/query-scheme-1/502cfc60-ad8f-4da3-a430-c8a7f2162135/placeHolder": "", "QueryScheme/query-scheme-1/a50f04eb-fc31-457c-8c85-0c5ab0cae592": "制单人", "QueryScheme/query-scheme-1/a50f04eb-fc31-457c-8c85-0c5ab0cae592/placeHolder": "", "QueryScheme/query-scheme-1/493e5d57-896f-46dd-a9a7-af9a5a54d0a1": "ID", "QueryScheme/query-scheme-1/493e5d57-896f-46dd-a9a7-af9a5a54d0a1/placeHolder": "", "QueryScheme/query-scheme-1/36e050c8-bb2f-4649-8974-9b4af77eeb21": "名称", "QueryScheme/query-scheme-1/36e050c8-bb2f-4649-8974-9b4af77eeb21/placeHolder": "", "QueryScheme/query-scheme-1/19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a": "交货日期", "QueryScheme/query-scheme-1/19bd9bfb-8d65-4f70-b5e9-c1dee32cec5a/placeHolder": "", "QueryScheme/query-scheme-1/f9f7f6fd-68a4-430c-856a-adda5d47fd52": "采购部门", "QueryScheme/query-scheme-1/f9f7f6fd-68a4-430c-856a-adda5d47fd52/placeHolder": "", "QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7": "采购部门", "QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7/placeHolder": "", "QueryScheme/query-scheme-1/97d95d4b-8497-4df5-bec8-8838acc68ee7/control/help/dialogTitle": "", "QueryScheme/query-scheme-1/53265c41-b6d3-4977-9dde-450cb0505c91": "名称", "QueryScheme/query-scheme-1/53265c41-b6d3-4977-9dde-450cb0505c91/placeHolder": "", "QueryScheme/query-scheme-1/210f7065-4c19-4009-81e3-3cafec40792a": "计划编号", "QueryScheme/query-scheme-1/210f7065-4c19-4009-81e3-3cafec40792a/placeHolder": "", "QueryScheme/query-scheme-1/4f24ebc0-acb5-4039-8ee5-9e1fd296f133": "计划名称", "QueryScheme/query-scheme-1/4f24ebc0-acb5-4039-8ee5-9e1fd296f133/placeHolder": "", "QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04": "是否已生成采购订单", "QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04/placeHolder": "", "QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04/control/enumValues/true": "true", "QueryScheme/query-scheme-1/75108363-b463-4d9a-8ee1-899a42e20e04/control/enumValues/false": "false", "QueryScheme/query-scheme-1/da36cd69-7e29-4add-85f0-ea43a2691188": "物料总价", "QueryScheme/query-scheme-1/da36cd69-7e29-4add-85f0-ea43a2691188/placeHolder": "", "QueryScheme/query-scheme-1/f039a9da-8150-4935-8af3-836b7aca3bef": "采购员", "QueryScheme/query-scheme-1/f039a9da-8150-4935-8af3-836b7aca3bef/placeHolder": "", "QueryScheme/query-scheme-1/8a441b44-720b-4e36-aa28-a20d4008658e": "ID", "QueryScheme/query-scheme-1/8a441b44-720b-4e36-aa28-a20d4008658e/placeHolder": "", "QueryScheme/query-scheme-1/e646ee4c-4ae8-4df5-a9b4-0c39402adff8": "名称", "QueryScheme/query-scheme-1/e646ee4c-4ae8-4df5-a9b4-0c39402adff8/placeHolder": "", "page-header": "", "header-nav": "", "header-title-container": "", "page-header-title": "", "title": "物料需求计划表单", "page-header-toolbar": "", "toolBarItem-epjr": "同步", "button-add": "新增", "button-edit": "编辑", "button-view": "查看", "button-delete": "删除", "button-approve": "提交审批", "button-cancel-approve": "取消提交审批", "page-main": "", "data-grid-component-ref": "", "data-grid-component": "", "data-grid-section": "", "Section/data-grid-section/mainTitle": "", "Section/data-grid-section/subTitle": "", "dataGrid": "", "DataGrid/dataGrid/lineNumberTitle": "序", "DataGrid/dataGrid/OperateEditButton": "编辑", "DataGrid/dataGrid/OperateDeleteButton": "删除", "DataGrid/dataGrid/OperateColumn": "操作", "billStatus_BillState_6a6f7e09_pbh3": "审批状态", "GridField/billStatus_BillState_6a6f7e09_pbh3/enumData/Billing": "制单", "GridField/billStatus_BillState_6a6f7e09_pbh3/enumData/SubmitApproval": "提交审批", "GridField/billStatus_BillState_6a6f7e09_pbh3/enumData/Approved": "审批通过", "GridField/billStatus_BillState_6a6f7e09_pbh3/enumData/ApprovalNotPassed": "审批不通过", "planCode_210f7065_7a35": "计划编号", "applicant_Applicant_Name_36e050c8_radi": "制单人", "purchaseDept_PurchaseDept_name_53265c41_3q8s": "采购部门", "purchaser_Purchaser_Name_e646ee4c_5c6k": "采购员", "deliveryDate_19bd9bfb_nnlo": "交货日期", "planName_4f24ebc0_a9kt": "计划名称", "totalPrice_da36cd69_48ad": "物料总价", "isPurchaseOrder_75108363_6uu3": "是否已生成采购订单" } };
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
                    var versionKey_1 = "materialplanform/" + langCode + ".json";
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
